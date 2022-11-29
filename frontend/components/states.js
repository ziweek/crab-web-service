import { atom } from "recoil";

const mainPostState = atom({
  key: "mainPost",
  default: "",
});

export { mainPostState };
