import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "asset/image/logo.png";
import { useRouter } from "next/router";
import * as S from "styles/profile/style";
import Navbar from "components/layout/navbar/navbar";
const Profile: NextPage = () => {
  const router = useRouter();
  return (
    <S.Container>
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
      <Navbar tab={"profile"}></Navbar>
    </S.Container>
  );
};

export default Profile;
