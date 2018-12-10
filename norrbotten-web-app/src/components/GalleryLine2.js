import React from "react";
import styled, { keyframes } from "react-emotion";

const Line_wrapper = styled("div")`
  display: flex;
  position: relative;
  height: 100%;
  min-width: 3px;
  bottom: 0;
  cursor: default;
  label: GalleryLine2;
`;

const lineUp = keyframes`
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
  animation: ${lineUp};
  animation-duration: 1.5s;
  animation-delay: 0.1s;
  animation-fill-mode: both;
  &::after {
    content: "";
    right: 0;
    display: block;
    width: 3px;
    background: linear-gradient(
      180deg,
      rgba(255, 55, 115, 0.8) 0%,
      rgba(255, 55, 115, 0.9) 29%,
      rgba(255, 55, 115, 1) 54%,
      rgba(255, 55, 115, 0.8) 65%,
      rgba(255, 55, 115, 0.6) 76%,
      rgba(255, 55, 115, 0.4) 93%,
      rgba(255, 55, 115, 0.4) 100%
    );
    height: 200%;
  }
`;

export default class GalleryLine2 extends React.Component {
  render() {
    return (
      <Line_wrapper>
        {" "}
        <InfoLine />{" "}
      </Line_wrapper>
    );
  }
}
