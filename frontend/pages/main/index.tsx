import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import useGeoLocation from "hooks/useGeolocation";
import Modal from "components/common/modal";
import { useRouter } from "next/router";
import * as S from "styles/main/style";
import Map from "components/common/map";
// import { stringify } from "querystring";
const Main: NextPage = () => {
  const router = useRouter();
  const location = useGeoLocation();
  const [openModal, setOpenModal] = useState(false);
  const title = "지금 주변 친구들";
  const getSetOpenModal = (data) => {
    setOpenModal(data);
  };
  return (
    <S.Container
    // onClick={() => {
    //   setOpenModal(!openModal);
    // }}
    >
      <Map></Map>
      {/* <S.Main>테스트 {test}</S.Main> */}
      {location.loaded
        ? JSON.stringify(location.coordinates)
        : "Location data not available yet."}
      {/* {openModal && <S.BlackBG></S.BlackBG>} */}
      {openModal && (
        <Modal getSetOpenModal={getSetOpenModal} title={title}></Modal>
      )}
    </S.Container>
  );
};

export default Main;
