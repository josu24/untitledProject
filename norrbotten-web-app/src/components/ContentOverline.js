import React from "react";
import styled, { keyframes } from "react-emotion";

const Line_wrapper = styled("div")`
  display: flex;
  position: relative;
  min-height: 3px;
  margin-left: 5%;
  width: 95%;
  top: 0;
  label: ContentOverline;
`;

const lineUp = keyframes`
  0% {
    width: 0%;
  }
  100%{
    width: 100%
  }
`;

const InfoLine = styled("span")`
  position: absolute;
  width: 100%;
  animation: ${lineUp};
  animation-duration: 1.5s;
  animation-delay: 0.8s;
  animation-fill-mode: both;
  &::after {
    content: "";
    left: 0;
    display: block;
    height: 3px;
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
    width: 100%;
  }
`;

export default class ContentOverline extends React.Component {
  render() {
    return (
      <Line_wrapper>
        {" "}
        <InfoLine />{" "}
      </Line_wrapper>
    );
  }
}
