import styled, { keyframes, css } from "styled-components";
import { colors } from "styles/theme";
export const modal = keyframes`
0%{
  transform: translateY(100%);
  opacity: 0;
}
100%{
  opacity: 1;
  transform: translateY(0%);
}
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  border: 1px solid #eee;
  align-items: center;
  /* justify-content: center; */
  /* padding: 3rem; */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #222;
  max-width: 430px;
  background-color: white;
  animation: ${modal} 0.5s;
`;
export const ModalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(4px + 4rem);
`;
export const HeaderWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0rem 1.5rem 0rem;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;
export const BarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 50%;
  cursor: pointer;
  transform: translate(-50%, 0);
  max-width: 430px;
  align-items: center;
  z-index: 2;
  background: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: 1px solid #eee;
  /* padding: 1.5rem; */
`;
export const SlideBar = styled.div`
  width: 40%;
  height: 4px;
  margin: 2rem;
  background-color: grey;
  border-radius: 20px;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
`;
export const PicBox = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 90%;
  overflow: hidden;
  object-fit: cover;
  border: 2px solid transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, ${colors.sub1} 0%, ${colors.sub2} 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin-right: 2rem;
  & img {
    width: 100%;
    height: 100%;
  }
  /* &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  } */
`;
export const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
`;
export const UserID = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  color: #d3d3d3;
`;
export const CloseBtn = styled.div`
  color: #222;
  font-size: 2.4rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: rotate(360deg);
  }
`;
export const MainPostImg = styled.div`
  width: 100%;
  height: 50vh;
  background-color: grey;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Content = styled.div`
  margin-top: 1rem;
  width: max-content;
  max-width: 387px;
  font-size: 1.6rem;
  font-weight: 400;
  white-space: pre-line;
  word-break: keep-all;
`;
