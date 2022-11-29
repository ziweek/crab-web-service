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
  padding: 2rem;
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
  position: relative;
  cursor: pointer;
  font-size: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    display: block;
    padding-bottom: 60%;
  }
  & i {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const WriteIconWrapper = styled(IconWrapper)`
  border-radius: 200px;
  background: linear-gradient(167.98deg, #ffad78 0%, #ff8678 100%);
  width: 18%;
  color: white;
  font-size: 3rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  &:hover i {
    transition: 0.5s;
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;
