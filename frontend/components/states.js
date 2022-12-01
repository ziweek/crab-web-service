import { atom } from "recoil";
import { getCookies } from "components/cookie";
const mainPostState = atom({
  key: "mainPost",
  default: "",
});

const userToken = atom({
  key: "userToken",
  default: localStorage.getItem("token"),
});
const userInfo = atom({
  key: "userInfo",
  default: "",
});
const currentRegion = atom({
  key: "currentRegion",
  default: "",
});

export { mainPostState, userToken, userInfo, currentRegion };
