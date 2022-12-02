import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import useGeoLocation from "hooks/useGeolocation";
import useIsLogin from "hooks/useIsLogin";
import Modal from "components/common/modal";
import { useRouter } from "next/router";
import * as S from "styles/main/style";
import Map from "components/common/map";
import { useRecoilState } from "recoil";
import { currentRegion } from "components/states";
import Navbar from "components/layout/navbar/navbar";
import axios from "axios";
import Loading from "components/common/loading";
import useUpdateRegion from "hooks/useUpdateRegion";
const Search: NextPage = () => {
  const router = useRouter();
  const isLogin = useIsLogin();

  // console.log(updateRegion);
  // const location: any = useGeoLocation();
  const [openModal, setOpenModal] = useState(false);
  const [region, setRegion] = useRecoilState<any>(currentRegion);
  const updateRegion = useUpdateRegion();
  const [nearByUser, setNearByUser] = useState([]);
  const getSetOpenModal = (data: any) => {
    setOpenModal(data);
  };

  // const getUsers = async () => {
  //   // console.log("getPosts start");
  //   await axios
  //     .get(`${process.env.BASE_URL}` + "/scanning/getNearUsers", region)
  //     .then((response) => {
  //       console.log("getUsers", response);
  //       setPosts(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   if (region) {
  //     getUsers();
  //   }
  //   console.log("set");
  // }, [region]);

  return (
    <S.Container>
      {isLogin ? (
        <>
          <Map
            location={region}
            getSetOpenModal={getSetOpenModal}
            region={nearByUser}
          ></Map>
          {openModal && <Modal getSetOpenModal={getSetOpenModal}></Modal>}
        </>
      ) : (
        <Loading></Loading>
      )}
      <Navbar
      // tab={"search"}
      ></Navbar>
    </S.Container>
  );
};

export default Search;
