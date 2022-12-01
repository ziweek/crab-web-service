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
  const [err, setErr] = useState(false);
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
        localStorage.setItem("token", response.data.accessToken);
        router.push("main");
      })
      .catch(function (error) {
        console.log(error);
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
        {err && (
          <S.Error>
            이미 존재하는 계정이거나 정보가 형식에 맞지 않습니다
          </S.Error>
        )}

        <S.SocialContainer>
          {/* <S.SocialWrapper>
            <i className="bi bi-google"></i>
          </S.SocialWrapper>
          <S.SocialWrapper>
            <i className="bi bi-facebook"></i>
          </S.SocialWrapper>
          <S.SocialWrapper>
            <i className="bi bi-apple"></i>
          </S.SocialWrapper> */}
        </S.SocialContainer>
        <S.Text
          onClick={() => {
            router.push("signin");
          }}
        >
          이미 계정이 있으신가요?
        </S.Text>
        <S.Btn onClick={postUser}>Sign Up</S.Btn>
      </S.SignUpContainer>
    </S.Container>
  );
};

export default SignUp;
