import { atom } from "recoil";
import { getCookies } from "components/cookie";
const mainPostState = atom({
  key: "mainPost",
  default: "",
});

const userToken = atom({
  key: "userToken",
  default: getCookies("token"),
});
const userInfo = atom({
  key: "userInfo",
  default: "",
});

export { mainPostState, userToken, userInfo };
