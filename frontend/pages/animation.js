import styled, { keyframes, css } from "styled-components";

export const Logo = keyframes`
0%{
    width: 0%;
    transform: rotate(0);
}
60%{
    transform: rotate(-15deg)
}

80%{
    width:30%;
    transform: rotate(15deg)
    
}
100%{
    width:24%;
    transform:rotate(0)
}
`;
