import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "asset/image/logo.png";
import { useRouter } from "next/router";
import * as S from "styles/profile/style";
import Navbar from "components/layout/navbar/navbar";
import { useIsLogin } from "hooks/useIsLogin";
import axios from "axios";
import { getCookies } from "components/cookie";
import { useRecoilState } from "recoil";
import { userToken, userInfo } from "components/states";
import Loading from "components/common/loading";
const Profile: NextPage = () => {
  const router = useRouter();

  // ---------------------------유저인증--------------------
  const [token, setToken] = useRecoilState(userToken);
  const [user, setUser] = useRecoilState(userInfo);
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
          <S.PicContainer>
            <S.PicBox></S.PicBox>
            <S.Name>김지성</S.Name>
            <S.ID>@jiseong173</S.ID>
            <S.Intro>테스트 설명입니다</S.Intro>
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

      <Navbar tab={"profile"}></Navbar>
    </S.Container>
  );
};

export default Profile;
