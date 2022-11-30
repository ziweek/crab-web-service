import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "asset/image/logo.png";
import { useRouter } from "next/router";
import * as S from "styles/signup/style";
import axios from "axios";
import { setCookies } from "components/cookie";
const SignUp: NextPage = () => {
  const router = useRouter();
  const [account, setAccount] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const postUser = async () => {
    await axios
      .post(`${process.env.BASE_URL}` + "/auth/register", account)
      .then(function (response) {
        console.log(response);
        setCookies("token", response.data.accessToken, {
          path: "/",
          secure: true,
          sameSite: "none",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onChangeAccount = (e: any) => {
    // console.log("이거", account);
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <S.Container>
      <S.SignUpContainer>
        <S.Logo src={Logo.src} />
        <S.Title>Sign Up</S.Title>
        <S.SignUpInputWrapper>
          <i className="bi bi-person"></i>
          <S.SignUpInput
            placeholder="Name"
            type="text"
            name="name"
            onChange={onChangeAccount}
          ></S.SignUpInput>
        </S.SignUpInputWrapper>
        <S.SignUpInputWrapper>
          <i className="bi bi-telephone"></i>
          <S.SignUpInput
            placeholder="Phone"
            type="tel"
            name="phone"
            onChange={onChangeAccount}
          ></S.SignUpInput>
        </S.SignUpInputWrapper>
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
        {/* <S.SocialContainer>
          <S.SocialWrapper>
            <i className="bi bi-google"></i>
          </S.SocialWrapper>
          <S.SocialWrapper>
            <i className="bi bi-facebook"></i>
          </S.SocialWrapper>
          <S.SocialWrapper>
            <i className="bi bi-apple"></i>
          </S.SocialWrapper>
        </S.SocialContainer> */}
        <S.Btn onClick={postUser}>Sign Up</S.Btn>
      </S.SignUpContainer>
    </S.Container>
  );
};

export default SignUp;
