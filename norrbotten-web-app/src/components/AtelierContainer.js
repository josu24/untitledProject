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
  display: flex;
  align-self: center;
  padding: 3% 3%;
  font-size: 0.9em;
  text-align: center;
  cursor: default;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
`;
const Text2 = styled("p")`
  display: flex;
  font-size: 1.6em;
  text-align: center;
  color: black;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 255, 255, 1) 80%,
    rgba(255, 255, 255, 0.2) 100%
  );
  font-weight: 400;
  width: 100%;
  opacity: 0.7;
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
  @media screen and (max-width: 600px) {
    justify-content: flex-start;
  }
  label: AtelierContainer;
`;

const AtelierContainerText = styled("div")`
  display: flex;
  label: AtelierContainerText;
  flex-direction: column;
  width: 420px;
  @media screen and (max-width: 600px) {
    width: 100%;
    min-width: 100%;
  }
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

const Text2Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 50%;
  opacity: 0.8;
  height: 38px;
  background: linear-gradient(
    90deg,
    rgba(255, 55, 115, 1) 30%,
    rgba(245, 174, 173, 1) 100%
  );
  align-self: center;
  cursor: pointer;
`;

export default class Story extends React.Component {
  handleClick() {
    window.location.href = "https://atelier-avan.herokuapp.com/";
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
            <Text2Wrapper>
              <Text2 onClick={this.handleClick}>Go to Website</Text2>
            </Text2Wrapper>
          </AtelierContainerText>

          <StoryLine />
        </AtelierContainer>
      </ContentContainer>
    );
  }
}
