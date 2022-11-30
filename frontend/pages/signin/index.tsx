import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "asset/image/logo.png";
import { useRouter } from "next/router";
import * as S from "styles/signup/style";
import axios from "axios";
import { setCookies } from "components/cookie";

const SignIn: NextPage = () => {
  const router = useRouter();
  const [err, setErr] = useState(false);
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const postUser = async () => {
    await axios
      .post(`${process.env.BASE_URL}` + "/auth/login", account)
      .then(function (response) {
        console.log(response);
        setCookies("token", response.data.accessToken, {
          path: "/",
          secure: true,
          sameSite: "none",
        });
        setErr(false);
        router.push("/main");
      })
      .catch(function (error) {
        console.log(error);
        setErr(true);
      });
  };
  const onChangeAccount = (e: any) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <S.Container>
      <S.SignUpContainer>
        <S.Logo src={Logo.src} />
        <S.Title>Sign In</S.Title>
        <S.SignUpInputWrapper>
          <i className="bi bi-envelope"></i>
          <S.SignUpInput
            placeholder="Email"
            type="email"
            name="email"
            onChange={onChangeAccount}
          ></S.SignUpInput>
        </S.SignUpInputWrapper>
        <S.SignUpInputWrapper>
          <i className="bi bi-lock"></i>
          <S.SignUpInput
            placeholder="Password"
            type="password"
            name="password"
            onChange={onChangeAccount}
          ></S.SignUpInput>
        </S.SignUpInputWrapper>
        {err && <S.Error>이메일 또는 비밀번호가 올바르지 않습니다</S.Error>}
        <S.SocialContainer>
          <S.SocialWrapper>
            <i className="bi bi-google"></i>
          </S.SocialWrapper>
          <S.SocialWrapper>
            <i className="bi bi-facebook"></i>
          </S.SocialWrapper>
          <S.SocialWrapper>
            <i className="bi bi-apple"></i>
          </S.SocialWrapper>
        </S.SocialContainer>
        <S.Btn onClick={postUser}> Sign In</S.Btn>
      </S.SignUpContainer>
    </S.Container>
  );
};

export default SignIn;
