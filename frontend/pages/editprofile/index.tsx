import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "styles/editprofile/style";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userToken, userInfo } from "components/states";
import Loading from "components/common/loading";
const EditProfile: NextPage = () => {
  const router = useRouter();

  // ---------------------------유저인증--------------------
  const [token, setToken] = useRecoilState(userToken);
  const [user, setUser] = useRecoilState<any>(userInfo);
  const [data, setData] = useState(user);
  // console.log(user, "data");
  if (typeof window !== "undefined") {
    const item: any = localStorage.getItem("token");
    setToken(item);
  }
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
    setData(user);
  }, [user]);
  const onChangeData = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const SendEditData = async () => {
    await axios
      .patch(`${process.env.BASE_URL}` + "/users/" + `${user.id}`, data)
      .then((response) => {
        console.log("sendEditData", response);
        setUser(response.data);
        router.push("profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // -------------------------------------------
  return (
    <S.Container>
      {data ? (
        <>
          <S.HeaderContainer>
            <div>프로필 수정</div>
            <div
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("recoil-persist");
                router.push("/signin");
              }}
            >
              로그아웃
            </div>
          </S.HeaderContainer>
          <S.PicContainer>
            <S.PicBox>
              <img src={data.profileImg} />
            </S.PicBox>
          </S.PicContainer>
          <S.SmallTitle>이름</S.SmallTitle>
          <S.EditInput
            type="text"
            name="name"
            value={data.name}
            onChange={onChangeData}
          />
          {/* <S.EditInput
            type="text"
            name="nickname"
            value={data.nickname}
            onChange={onChangeData}
          /> */}
          <S.SmallTitle>소개</S.SmallTitle>
          <S.EditInput name="text" value={data.text} onChange={onChangeData} />
          <S.SignOutBtn onClick={SendEditData}>적용하기</S.SignOutBtn>
        </>
      ) : (
        <Loading></Loading>
      )}

      {/* <Navbar tab={"profile"}></Navbar> */}
    </S.Container>
  );
};

export default EditProfile;
