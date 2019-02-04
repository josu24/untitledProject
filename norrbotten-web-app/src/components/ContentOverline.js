import React from "react";
import styled, { keyframes } from "react-emotion";

const Line_wrapper = styled("div")`
  display: flex;
  position: relative;
  min-height: 3px;
  width: 95%;
  top: 0;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
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
  animation-delay: 1s;
  animation-fill-mode: both;
  &::after {
    content: "";
    left: 0;
    display: block;
    height: 3px;
    @media screen and (min-width: 600px) {
      background: linear-gradient(
        90deg,
        rgba(255, 55, 115, 0.9) 0%,
        rgba(255, 55, 115, 0.9) 30%,
        rgba(255, 55, 115, 0.8) 45%,
        rgba(255, 55, 115, 0.4) 75%,
        rgba(255, 55, 115, 0.4) 90%,
        rgba(255, 55, 115, 0) 100%
      );
    }
    @media screen and (max-width: 600px) {
      background: linear-gradient(
        90deg,
        rgba(255, 55, 115, 0.9) 0%,
        rgba(255, 55, 115, 0.9) 30%,
        rgba(255, 55, 115, 0.8) 45%,
        rgba(255, 55, 115, 0.8) 75%,
        rgba(255, 55, 115, 0.7) 100%
      );
    }
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
