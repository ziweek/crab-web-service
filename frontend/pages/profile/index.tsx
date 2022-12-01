import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "styles/profile/style";
import Navbar from "components/layout/navbar/navbar";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userToken, userInfo } from "components/states";
import Loading from "components/common/loading";
import useIsLogin from "hooks/useIsLogin";
const Profile: NextPage = () => {
  const router = useRouter();
  const user: any = useIsLogin();
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
            {/* <S.ID>{user.email}</S.ID> */}
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
