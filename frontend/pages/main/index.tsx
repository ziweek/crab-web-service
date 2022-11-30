import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import useGeoLocation from "hooks/useGeolocation";
import Modal from "components/common/modal";
import { useRouter } from "next/router";
import * as S from "styles/main/style";
import Map from "components/common/map";
import { useRecoilState } from "recoil";
import { mainPostState, userToken, userInfo } from "components/states";
import Navbar from "components/layout/navbar/navbar";
import axios from "axios";
import { getCookies } from "components/cookie";
import Loading from "components/common/loading";
const Main: NextPage = () => {
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
  const getSetOpenModal = (data: any) => {
    setOpenModal(data);
  };
  // ---------------------------유저인증--------------------
  const [token, setToken] = useRecoilState(userToken);
  const [user, setUser] = useRecoilState(userInfo);
  const getUser = async () => {
    console.log("getuser start", token);
    await axios
      .get(`${process.env.BASE_URL}` + "/auth/authenticate", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        console.log("getUser", response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getUser();
    console.log("유저", user);
    // if (!user) {
    //   router.push("/signin");
    // }
  }, []);
  useEffect(() => {
    console.log("recoil mainPost", mainPost);
  }, [mainPost]);

  return (
    <S.Container>
      {/* {!user && <div>Loading...</div>} */}
      {user ? (
        <>
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
        </>
      ) : (
        <Loading></Loading>
      )}
      <Navbar tab={"main"}></Navbar>
    </S.Container>
  );
};

export default Main;
