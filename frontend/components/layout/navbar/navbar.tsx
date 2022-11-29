import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "asset/image/logo.png";
import { useRouter } from "next/router";
import * as S from "styles/components/common/navbar";
import { Sign } from "crypto";
const Navbar: NextPage = () => {
  const router = useRouter();

  return <S.NavbarContainer></S.NavbarContainer>;
};

export default Navbar;
