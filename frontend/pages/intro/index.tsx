import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
// import Image from "next/image";
import Logo from "asset/image/logo.png";
import { useRouter } from "next/router";
import * as S from "styles/intro/style";
const Intro: NextPage = () => {
  const router = useRouter();
  const move = () => {
    router.push("/main");
  };
  setTimeout(move, 3000);
  return (
    <S.Container>
      <S.Logo src={Logo.src} />
    </S.Container>
  );
};

export default Intro;
