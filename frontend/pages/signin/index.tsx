import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "asset/image/logo.png";
import { useRouter } from "next/router";
import * as S from "styles/signup/style";
const SignIn: NextPage = () => {
  const router = useRouter();
  return (
    <S.Container>
      <S.SignUpContainer>
        <S.Logo src={Logo.src} />
        <S.Title>Sign In</S.Title>
        <S.SignUpInputWrapper>
          <i className="bi bi-envelope"></i>
          <S.SignUpInput placeholder="Email"></S.SignUpInput>
        </S.SignUpInputWrapper>
        <S.SignUpInputWrapper>
          <i className="bi bi-lock"></i>
          <S.SignUpInput placeholder="Password"></S.SignUpInput>
        </S.SignUpInputWrapper>
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
        <S.Btn> Sign In</S.Btn>
      </S.SignUpContainer>
    </S.Container>
  );
};

export default SignIn;
