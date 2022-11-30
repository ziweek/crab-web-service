import styled, { keyframes, css } from "styled-components";
import { colors } from "styles/theme";
import * as M from "../animation";
export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* overflow: hidden; */
  position: relative;
  background: linear-gradient(167.98deg, #ffad78 0%, #ff8678 100%);
`;
export const SignUpContainer = styled.div`
  animation: ${M.FadeIn} 1s forwards;
  width: 90%;
  height: 90vh;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 4rem;
  backdrop-filter: blur(10px);
  box-shadow: 4px 3px 4px 2px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  /* background: linear-gradient(167.98deg, #ffad78 0%, #ff8678 100%); */
`;
export const SignUpInputWrapper = styled.div`
  width: 90%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 1000px;
  border-style: none;
  font-size: 1.8rem;
  /* padding: 1.8rem; */
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  color: #222;
  margin-top: 2rem;
`;
export const SignUpInput = styled.input`
  width: 90%;
  background-color: transparent;
  border: none;
  padding: 1.8rem;
`;

export const Text = styled.div`
  font-size: 1.6rem;
`;
export const Title = styled.div`
  font-size: 3.2rem;
  margin: 2rem;
  text-align: center;
  line-height: 120%;
  /* color: white; */
  font-weight: 700;
`;
export const Logo = styled.img`
  /* width: 24%; */
  width: 0%;
  margin-bottom: 1rem;
  animation: ${M.Logo} 0.4s 0.2s forwards;
`;
export const SocialContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
`;
export const SocialWrapper = styled.div`
  width: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 90%;
  font-size: 2rem;
  position: relative;
  color: #222;
  cursor: pointer;
  margin: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  & i {
    position: absolute;
    color: black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;
export const Btn = styled.div`
  width: 90%;
  display: flex;
  /* margin: 0 auto; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 1000px;
  padding: 1.8rem;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 2rem;
  color: white;
  background: #222;
  cursor: pointer;
  &:hover {
    /* margin-top: calc(2rem - 2px); */
    margin-left: 2px;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
`;
export const Error = styled.div`
  font-size: 1.6rem;
  color: red;
  font-weight: 500;
  margin-top: 1rem;
`;
