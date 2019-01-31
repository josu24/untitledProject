import React from "react";
import ContentContainer from "./ContentContainer";
import styled, { keyframes } from "react-emotion";
import StoryLine from "./StoryLine";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) scaleX(0);
    
  }
  30% {
      transform: translateX(0) scaleX(1);
  }
  100%{
    opacity: 1;

  }
`;
const Text1 = styled("p")`
  padding: 2% 2%;
  font-size: 0.9em;
  text-align: center;
  cursor: default;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
`;
const Text2 = styled("p")`
  padding: 2% 2%;
  font-size: 1.6em;
  text-align: center;
  color: black;
  opacity: 0.7;
  background: linear-gradient(
    90deg,
    rgb(255, 55, 115) 5%,
    rgb(245, 174, 173) 45%
  );
  font-weight: 400;
  width: 50%;
  align-self: center;
  cursor: pointer;
  transition: opacity 1s ease;
  &:hover {
    opacity: 1;
  }
`;

const AtelierContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 80%;
  label: AtelierContainer;
`;

const AtelierContainerText = styled("div")`
  display: flex;
  flex-direction: column;
  width: 420px;
  min-width: 420px;
  min-height: 100px;
  max-height: 100px;
  opacity: 0;
  animation: ${fadeIn};
  animation-duration: 3s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.7) 40%,
    rgba(0, 0, 0, 0.5) 85%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export default class Story extends React.Component {
  handleClick() {
    window.location.href = "http://www.google.com";
  }
  render() {
    return (
      <ContentContainer
        handleClose={this.props.handleClose}
        rerender={this.props.rerender}
      >
        <AtelierContainer onClick={this.props.handleClose}>
          <AtelierContainerText
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <Text1>Atelier located in norrbotten</Text1>
            <Text2 onClick={this.handleClick}>Go to Website</Text2>
          </AtelierContainerText>

          <StoryLine />
        </AtelierContainer>
      </ContentContainer>
    );
  }
}
