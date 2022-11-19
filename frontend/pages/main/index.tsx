import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "asset/image/logo.png";
import { useRouter } from "next/router";
import * as S from "./style";
const Main: NextPage = () => {
  const router = useRouter();
  const [pageIdx, setPageIdx] = useState(0);
  return <S.Container></S.Container>;
};

export default Main;
