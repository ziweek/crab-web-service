import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "asset/image/logo.png";
import Modal from "components/common/modal";
import { useRouter } from "next/router";
import * as S from "styles/main/style";
import { stringify } from "querystring";
const Main: NextPage = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const title = "지금 주변 친구들";
  return (
    <S.Container
      onClick={() => {
        setOpenModal(!openModal);
      }}
    >
      {/* {openModal && <S.BlackBG></S.BlackBG>} */}
      {openModal && <Modal title={title}></Modal>}
    </S.Container>
  );
};

export default Main;
