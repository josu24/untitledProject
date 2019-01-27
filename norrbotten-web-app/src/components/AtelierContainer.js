import React from "react";
import ContentContainer from "./ContentContainer";
import styled, { keyframes } from "react-emotion";
import StoryLine from "./StoryLine";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;
const Text1 = styled("p")`
  padding: 2% 2%;
  font-size: 0.9em;
  text-align: center;
  cursor: default;
  color: rgba(245, 174, 173, 0.9);
  font-weight: 300;
`;
const Text2 = styled("p")`
  padding: 2% 2%;
  font-size: 1.6em;
  text-align: center;
  cursor: default;
  color: black;
  opacity: 0.7;
  background: linear-gradient(
    90deg,
    rgb(255, 55, 115) 30%,
    rgb(245, 174, 173) 100%
  );
  font-weight: 400;
  width: 50%;
  align-self: center;
  border: solid;
  cursor: pointer;
  transition: opacity 1.5s ease;
  &:hover {
    opacity: 1;
  }
`;

const StoryContainer0 = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 620px;
  height: 80%;
  background-color: rgba(0, 0, 0, 0);
`;

const StoryContainer1 = styled("div")`
  display: flex;
  flex-direction: column;
  width: 420px;
  min-width: 420px;
  min-height: 100px;
  max-height: 100px;
  animation: ${fadeIn};
  animation-duration: 1s;
  transition: background-color 1.5s ease;
  background-color: rgba(0, 0, 0, 0.6);
  label: StoryContainer1;
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
        <StoryContainer0 onClick={this.props.handleClose}>
          <StoryContainer1
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <Text1>Atelier located in norrbotten</Text1>
            <Text2 onClick={this.handleClick}>Go to Website</Text2>
          </StoryContainer1>

          <StoryLine />
        </StoryContainer0>
      </ContentContainer>
    );
  }
}