import React, { useState, useEffect } from "react";
import { userInfo } from "components/states";
import axios from "axios";
import useIsLogin from "hooks/useIsLogin";
import useGeoLocation from "hooks/useGeolocation";
import { useRecoilState } from "recoil";
const useUpdateRegion = () => {
  // const userData = useIsLogin();
  const [data, setData] = useState<any>(userInfo);
  const [user, setUser] = useRecoilState(userInfo);
  const region = useGeoLocation();

  const updateRegion = async () => {
    await axios
      .patch(`${process.env.BASE_URL}` + "/users/" + `${user.id}`, data)
      .then((response) => {
        console.log("sendRegion", response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // useEffect(() => {
  //   updateRegion();
  // }, []);
  useEffect(() => {
    console.log("update region", region.coordinates);
    console.log("update userdata", user);
    setData({ ...data, ["region"]: region.coordinates });
    updateRegion();
  }, [region]);

  return user;
};

export default useUpdateRegion;
