import styled, { keyframes, css } from "styled-components";
import { colors } from "styles/theme";
import * as M from "../../styles/animation";
export const FadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  /* background: linear-gradient(167.98deg, #ffad78 0%, #ff8678 100%); */
`;
export const Main = styled.div`
  font-size: 3rem;
  font-weight: 700;
  background-color: grey;
`;
// export const BlackBG = styled.div`
//   position: fixed;
//   width: 100%;
//   height: 100vh;
//   background: #222;
// `;
