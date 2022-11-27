import styled, { keyframes, css } from "styled-components";
import { colors } from "styles/theme";
export const MapContainer = styled.div`
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
