import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "asset/image/logo.png";
import { useRouter } from "next/router";
import * as S from "styles/profile/style";
import Navbar from "components/layout/navbar/navbar";
import axios from "axios";
import { getCookies } from "components/cookie";
import { useRecoilState } from "recoil";
import { userToken, userInfo } from "components/states";
import Loading from "components/common/loading";
const Profile: NextPage = () => {
  const router = useRouter();

  // ---------------------------유저인증--------------------
  const [token, setToken] = useRecoilState(userToken);
  const [user, setUser] = useRecoilState<any>(userInfo);
  if (typeof window !== "undefined") {
    const item: any = localStorage.getItem("token");
    setToken(item);
  }
  const getUser = async () => {
    console.log("getuser start", token);
    await axios
      .get(`${process.env.BASE_URL}` + "/auth/authenticate", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        console.log("getUser", response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getUser();
    console.log("유저", user);
    // if (!user) {
    //   router.push("/signin");
    // }
  }, []);

  // -------------------------------------------
  return (
    <S.Container>
      {user ? (
        <>
          <S.HeaderContainer>
            <div></div>
            <i
              className="bi bi-gear"
              onClick={() => {
                router.push("editprofile");
              }}
            ></i>
          </S.HeaderContainer>
          <S.PicContainer>
            <S.PicBox>
              <img src={user.profileImg} />
            </S.PicBox>
            <S.Name>{user.name}</S.Name>
            <S.ID>@{user.nickname}</S.ID>
            <S.Intro>{user.text}</S.Intro>
          </S.PicContainer>
          <S.InfoContainer>
            <S.InfoWrapper>
              <div>42</div>
              <div>피드</div>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <div>213</div>
              <div>친구</div>
            </S.InfoWrapper>
          </S.InfoContainer>
        </>
      ) : (
        <Loading></Loading>
      )}

      <Navbar
      // tab={"profile"}
      ></Navbar>
    </S.Container>
  );
};

export default Profile;
