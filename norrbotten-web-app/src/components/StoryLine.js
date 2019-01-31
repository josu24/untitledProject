import React from "react";
import styled, { keyframes } from "react-emotion";

const Line_wrapper = styled("div")`
  display: flex;
  align-self: flex-end;
  position: relative;
  min-height: 3px;
  width: 100%;
  bottom: 0;
  label: StoryLine;
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
    background: linear-gradient(
      90deg,
      rgba(255, 55, 115, 0.9) 0%,
      rgba(255, 55, 115, 0.9) 30%,
      rgba(255, 55, 115, 0.8) 45%,
      rgba(255, 55, 115, 0.4) 75%,
      rgba(255, 55, 115, 0.4) 90%,
      rgba(255, 55, 115, 0) 100%
    );
    width: 100%;
  }
`;

export default class StoryLine extends React.Component {
  render() {
    return (
      <Line_wrapper>
        {" "}
        <InfoLine />{" "}
      </Line_wrapper>
    );
  }
}
