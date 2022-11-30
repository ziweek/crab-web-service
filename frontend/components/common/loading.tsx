import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import * as S from "styles/components/common/loading";
const Loading: NextPage = (props: any) => {
  const router = useRouter();

  return (
    <S.LoadingContainer>
      <S.SpinnerContainer>
        <div></div>
        <div></div>
      </S.SpinnerContainer>
    </S.LoadingContainer>
  );
};

export default Loading;
