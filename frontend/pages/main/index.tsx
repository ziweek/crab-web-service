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
import {
  mainPostState,
  userToken,
  userInfo,
  currentRegion,
} from "components/states";
import Navbar from "components/layout/navbar/navbar";
import axios from "axios";
import Loading from "components/common/loading";
const Main: NextPage = () => {
  const router = useRouter();
  const isLogin = useIsLogin();
  // const location: any = useGeoLocation();
  const [openModal, setOpenModal] = useState(false);
  const [mainPost, setMainPost] = useRecoilState<any>(mainPostState);
  const [region, setRegion] = useRecoilState<any>(currentRegion);
  const [posts, setPosts] = useState([
    {
      id: 0,
      author: "testAuthor",
      img: "src",
      content:
        "testContenttestContenttestContenttestContenttestContenttestContenttestContenttestContenttestContent",
      region: {
        lng: 127.03,
        lat: 37.6,
      },
      tag: "testTag",
    },
    {
      id: 1,
      author: "testAuthor1",
      img: "src",
      content: "testContent1",
      region: {
        lng: 126.865,
        lat: 37.539,
      },
      tag: "testTag",
    },
  ]);
  const getSetOpenModal = (data: any) => {
    setOpenModal(data);
  };

  const getPosts = async () => {
    console.log("getPosts start");
    await axios
      .get(`${process.env.BASE_URL}` + "/scanning/getNearPosts", region)
      .then((response) => {
        console.log("getPosts", response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
        // alert("인근에 볼 수 있는 피드가 없습니다");
      });
  };
  useEffect(() => {
    if (region) {
      getPosts();
    }
    console.log("set");
  }, [region]);
  useEffect(() => {
    console.log("recoil mainPost", mainPost);
  }, [mainPost]);

  return (
    <S.Container>
      {isLogin ? (
        <>
          <Map
            location={region}
            getSetOpenModal={getSetOpenModal}
            region={posts}
          ></Map>
          {openModal && (
            <Modal
              getSetOpenModal={getSetOpenModal}
              mainPost={mainPost}
              posts={posts}
            ></Modal>
          )}
        </>
      ) : (
        <Loading></Loading>
      )}
      <Navbar
      // tab={"main"}
      ></Navbar>
    </S.Container>
  );
};

export default Main;
