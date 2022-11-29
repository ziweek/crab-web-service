import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import useGeoLocation from "hooks/useGeolocation";
import Modal from "components/common/modal";
import { useRouter } from "next/router";
import * as S from "styles/main/style";
import Map from "components/common/map";
import { useRecoilState } from "recoil";
import { mainPostState } from "components/states";

const Main: NextPage = () => {
  const src =
    "https://cdn.siasat.com/wp-content/uploads/2020/04/Instagram-.jpg";
  const router = useRouter();
  const location = useGeoLocation();
  const [openModal, setOpenModal] = useState(false);
  const [mainPost, setMainPost] = useRecoilState(mainPostState);

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
  const title = "지금 주변 친구들";
  const getSetOpenModal = (data) => {
    setOpenModal(data);
  };
  useEffect(() => {
    console.log("recoil mainPost", mainPost);
  }, [mainPost]);
  return (
    <S.Container>
      <Map getSetOpenModal={getSetOpenModal} region={posts}></Map>
      {/* {location.loaded
        ? JSON.stringify(location.coordinates)
        : "Location data not available yet."} */}
      {openModal && (
        <Modal
          getSetOpenModal={getSetOpenModal}
          mainPost={mainPost}
          posts={posts}
        ></Modal>
      )}
    </S.Container>
  );
};

export default Main;
