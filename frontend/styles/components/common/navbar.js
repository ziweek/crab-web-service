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

export const NavbarContainer = styled.div`
  width: 100%;
  min-height: 8rem;
  display: flex;
  position: fixed;
  bottom: 0;
  border: 1px solid #eee;
  align-items: center;
  justify-content: space-between;
  /* padding: 3rem; */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #222;
  max-width: 430px;
  background-color: white;
  animation: ${modal} 0.5s;
  box-shadow: 2px -4px 60px rgba(0, 0, 0, 0.25);
`;
export const IconWrapper = styled.div`
  width: 15%;
`;
