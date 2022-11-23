import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "asset/image/logo.png";
import { useRouter } from "next/router";
import * as S from "styles/components/common/style";
const Modal: NextPage = (props) => {
  console.log(props);
  const sendSetOpenModal = () => {
    props.getSetOpenModal(false);
  };
  const router = useRouter();
  return (
    <S.ModalContainer>
      <S.ModalWrapper>
        <S.TitleWrapper>
          <S.Title>{props.title}</S.Title>
          <S.CloseBtn onClick={sendSetOpenModal}>
            <i className="bi bi-x-lg"></i>
          </S.CloseBtn>
        </S.TitleWrapper>
      </S.ModalWrapper>
    </S.ModalContainer>
  );
};

export default Modal;
