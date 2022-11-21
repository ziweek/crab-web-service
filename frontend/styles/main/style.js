import styled, { keyframes, css } from "styled-components";
import { colors } from "styles/theme";
import * as M from "../../styles/animation";
export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: linear-gradient(167.98deg, #ffad78 0%, #ff8678 100%);
`;
export const Text = styled.div`
  font-size: 1.6rem;
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
