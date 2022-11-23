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
  height: 70vh;
  display: flex;
  position: fixed;
  bottom: 0;
  border: 1px solid #eee;
  justify-content: center;
  padding: 3rem;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #222;
  max-width: 430px;
  background-color: white;
  animation: ${modal} 0.5s;
`;
export const ModalWrapper = styled.div`
  width: 80%;
`;
export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
`;
