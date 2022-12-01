import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
// import Image from "next/image";
import Logo from "asset/image/logo.png";
import { useRouter } from "next/router";
import * as S from "styles/intro/style";
import { useRecoilState } from "recoil";
import { userToken, userInfo } from "components/states";
import axios from "axios";
const Intro: NextPage = () => {
  const [token, setToken] = useRecoilState(userToken);
  const [user, setUser] = useRecoilState(userInfo);
  if (typeof window !== "undefined") {
    const item: any = localStorage.getItem("token");
    setToken(item);
  }
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
  }, []);
  const router = useRouter();
  const move = () => {
    if (!user) {
      router.push("signin");
    } else {
      router.push("/");
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
