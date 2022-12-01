import { userToken, userInfo } from "components/states";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { useRouter } from "next/router";

const useIsLogin = () => {
  const router = useRouter();
  const [token, setToken] = useRecoilState(userToken);
  const [user, setUser] = useRecoilState(userInfo);
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
        router.push("signin");
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  return user;
};
export default useIsLogin;
