import styled, { keyframes, css } from "styled-components";
import { colors } from "styles/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: ${colors.mainpurple};
  position: fixed;
  top: 0;
  left: 0;
`;
