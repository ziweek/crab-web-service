import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
// import Image from "next/image";
import Logo from "asset/image/logo.png";
import { useRouter } from "next/router";
import * as S from "styles/intro/style";
import { useRecoilState } from "recoil";
import { userToken, userInfo } from "components/states";
import axios from "axios";
import useIsLogin from "hooks/useIsLogin";
const Intro: NextPage = () => {
  const user = useIsLogin();
  const router = useRouter();
  const move = () => {
    if (!user) {
      router.push("signin");
    }
    if (user) {
      router.push("main");
    }
  };
  setTimeout(move, 3000);
  return (
    <S.Container>
      <S.Logo src={Logo.src} />
    </S.Container>
  );
};

export default Intro;
