import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Logo from "asset/image/logo.png";
import { useRouter } from "next/router";
import * as S from "styles/components/common/navbar";
const Navbar: NextPage = (props: any) => {
  const router = useRouter();
  const [tab, setTab] = useState(props.tab);
  return (
    <S.NavbarContainer>
      <S.IconWrapper
        id={"main"}
        tab={tab}
        onClick={() => {
          router.push("main");
        }}
      >
        <i className="bi bi-geo-alt"></i>
      </S.IconWrapper>
      <S.IconWrapper
        id={"search"}
        tab={tab}
        onClick={() => {
          router.push("search");
        }}
      >
        <i className="bi bi-search"></i>
      </S.IconWrapper>
      <S.IconWrapper tab={tab}></S.IconWrapper>
      <S.WriteIconWrapper
        // id={"newPost"}
        // tab={tab}
        onClick={() => {
          router.push("newPost");
        }}
      >
        <i className="bi bi-plus-circle"></i>
      </S.WriteIconWrapper>
      <S.IconWrapper
        id={"chatlist"}
        tab={tab}
        onClick={() => {
          router.push("chatlist");
        }}
      >
        <i className="bi bi-chat"></i>
      </S.IconWrapper>
      {/* <Link href="profile"> */}
      <S.IconWrapper
        id={"profile"}
        tab={tab}
        onClick={() => {
          router.push("profile");
        }}
      >
        <i className="bi bi-person-circle"></i>
      </S.IconWrapper>
      {/* </Link> */}
    </S.NavbarContainer>
  );
};

export default Navbar;
