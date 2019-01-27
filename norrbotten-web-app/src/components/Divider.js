import React from "react";
import styled, { keyframes } from "react-emotion";
import { css } from "react-emotion";

const DividerPlaceHolder = styled("div")`
  width: 3px;
  display: flex;
`;

const LineWrapper = styled("div")`
  display: flex;
  position: relative;
  height: 100%;
  width: 3px;
  top: 0;
  left: 0;
  label: div_wrapper;
`;

const dynamicStyle = props =>
  css`
    animation: ${props.animation};
  `;

const lineUp = keyframes`
  0% {
    height: 0%;
  }
  100%{
    height: 100%
  }
`;
const lineUp2 = keyframes`
0% {
  height: 0%;
}
100%{
  height: 100%
}
`;
const InfoLine = styled("span")`
  position: absolute;
  height: 100%;
  ${dynamicStyle};
  animation-duration: 1.5s;
  animation-delay: 0.2s;
  animation-fill-mode: both;
  &::after {
    content: "";
    left: 0;
    display: block;
    width: 3px;
    background: linear-gradient(
      90deg,
      rgba(255, 55, 115, 0.8) 0%,
      rgba(255, 55, 115, 0.9) 29%,
      rgba(255, 55, 115, 1) 54%,
      rgba(255, 55, 115, 0.8) 65%,
      rgba(255, 55, 115, 0.6) 76%,
      rgba(255, 55, 115, 0.4) 93%,
      rgba(255, 55, 115, 0.4) 100%
    );
    height: 100%;
  }
`;

const Divider = ({ rerender, show }) => (
  <DividerPlaceHolder>
    {show ? (
      <LineWrapper>
        <InfoLine animation={rerender ? `${lineUp}` : `${lineUp2}`} />
      </LineWrapper>
    ) : null}
  </DividerPlaceHolder>
);

export default Divider;
