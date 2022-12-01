import styled, { keyframes, css } from "styled-components";
import { colors } from "styles/theme";
import * as M from "../animation";
export const Container = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: white;
`;
export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 2rem;
  & div:last-child {
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
export const PicContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem;
`;
export const PicBox = styled.div`
  width: 8rem;
  height: 8rem;
  background: ${colors.black};
  border-radius: 90%;
  overflow: hidden;
  margin: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  } */
`;
export const Name = styled.input`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  background-color: white;
  border-style: none;
  padding: 1rem;
  border-bottom: 1px solid #222;
`;
export const ID = styled.input`
  font-size: 1.6rem;
  /* font-weight: 700; */
  color: #cccccc;
  background-color: white;
  border-style: none;
  padding: 1rem;
  border-bottom: 1px solid #222;
`;
export const Intro = styled.input`
  font-size: 1.6rem;
  font-weight: 500;
  color: #cccccc;
  margin-top: 1.8rem;
  background-color: white;
  border-style: none;
  padding: 1rem;
  border-bottom: 1px solid #222;
`;
export const InfoContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 500;
  color: #cccccc;
  margin-top: 1.6rem;
  & div:first-child {
    color: #222;
    font-size: 1.8rem;
    font-weight: 700;
  }
`;
export const Info = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: #cccccc;
  margin-top: 1.6rem;
`;

export const Title = styled.div`
  font-size: 3.2rem;
  margin: 2rem;
  text-align: center;
  line-height: 120%;
  color: white;
  font-weight: 700;
`;
export const Logo = styled.img`
  /* width: 24%; */
  width: 0%;
  margin-bottom: 1rem;
  animation: ${M.Logo} 0.4s 0.2s forwards;
`;
export const PickWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  & div {
    transition: all 0.3s;
  }
  &:hover div {
    font-size: 2.3rem;
  }
  /* &:not(:hover) div {
    transition: all 0.3s;
  } */
  ${(props) =>
    props.selectedPick == props.id &&
    css`
      & div {
        font-size: 2.3rem;
        font-weight: 700;
      }
    `}

  & img {
    width: 1.2rem;
    object-fit: contain;
  }
`;
export const PickText = styled.div`
  font-size: 2rem;
  margin: 2rem;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 5vh;
`;
export const PrevBtn = styled.div`
  cursor: pointer;
  line-height: 200%;
  /* transition: 0.3s; */
  &::after {
    display: block;
    content: "";
    border-bottom: solid 1px #000;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  &::after {
    transform-origin: 0% 50%;
  }
`;
export const NextBtn = styled(PrevBtn)`
  &::after {
    transform-origin: 100% 50%;
  }
`;
export const SignOutBtn = styled.div`
  width: 80%;
  height: 4rem;
  background-color: #d3d3d3;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  cursor: pointer;
  border: 1px solid #eee;
  box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #eee;
  }
`;
export const EditInput = styled.input`
  width: 100%;
  background-color: white;
  border-style: none;
  padding: 1rem;
  border-bottom: 1px solid #222;
  font-size: 1.6rem;
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 2rem;
`;
export const SmallTitle = styled.div`
  font-size: 1.4rem;
  width: 100%; ;
`;
