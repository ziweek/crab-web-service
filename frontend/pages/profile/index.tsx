import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "asset/image/logo.png";
import { useRouter } from "next/router";
import * as S from "./style";
const Profile: NextPage = () => {
  const router = useRouter();
  const [pageIdx, setPageIdx] = useState(0);
  return (
    <S.Container>
      <S.PicContainer>
        <S.PicBox></S.PicBox>
        <S.Name>김지성</S.Name>
        <S.ID>@jiseong173</S.ID>
        <S.Info>테스트 설명입니다</S.Info>
      </S.PicContainer>
    </S.Container>
  );
};

export default Profile;
