import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "asset/image/logo.png";
import { useRouter } from "next/router";
import * as S from "styles/components/common/style";
const Modal: NextPage = (title) => {
  console.log(title);
  const router = useRouter();
  return (
    <S.ModalContainer>
      <S.ModalWrapper>
        <S.Title>{title.title}</S.Title>
      </S.ModalWrapper>
    </S.ModalContainer>
  );
};

export default Modal;
