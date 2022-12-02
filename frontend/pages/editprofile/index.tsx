import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "styles/editprofile/style";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userToken, userInfo } from "components/states";
import Loading from "components/common/loading";
import useIsLogin from "hooks/useIsLogin";
const EditProfile: NextPage = () => {
  const router = useRouter();
  const userData = useIsLogin();
  const [data, setData] = useState(userData);

  const onChangeData = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const SendEditData = async () => {
    await axios
      .patch(`${process.env.BASE_URL}` + "/users/" + `${userData.id}`, data)
      .then((response) => {
        console.log("sendEditData", response);
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
