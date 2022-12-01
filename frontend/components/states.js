import { atom, RecoilRoot, useRecoilState } from "recoil";
// import { getCookies } from "components/cookie";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
const mainPostState = atom({
  key: "mainPost",
  default: "",
});

const userToken = atom({
  key: "userToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
const userInfo = atom({
  key: "userInfo",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
const currentRegion = atom({
  key: "currentRegion",
  default: "",
});

export { mainPostState, userToken, userInfo, currentRegion };
