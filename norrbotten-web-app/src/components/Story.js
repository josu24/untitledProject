import React from "react";
import ContentContainer from "./ContentContainer";
import styled, { keyframes } from "react-emotion";
import StoryLine from "./StoryLine";

const fadeInLatest = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;
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
  width: 620px;
  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 1.2em;
    padding: 3% 0 3% 0;
  }
  padding: 3% 1% 3% 1%;
  font-family: eurostile-condensed, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.4em;
  text-align: center;
  cursor: default;
  color: rgba(245, 174, 173, 0.9);
  opacity: 0;
  animation: ${fadeIn};
  animation-duration: 3s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  transition: background-color 1.5s ease;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.9) 40%,
    rgba(0, 0, 0, 0.6) 85%,
    rgba(0, 0, 0, 0) 100%
  );
  label: Text1;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const TextAbout = styled("p")`
  width: 620px;
  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 1.2em;
    padding: 2% 0 0 0;
  }
  font-size: 1.4em;
  padding: 2% 1% 0 1%;
  font-family: eurostile-condensed, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  cursor: default;
  color: rgba(255, 255, 255, 0.7);
  opacity: 0;
  animation: ${fadeIn};
  animation-duration: 3s;
  animation-delay: 3.5s;
  animation-fill-mode: forwards;
  transition: background-color 1.5s ease;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.9) 40%,
    rgba(0, 0, 0, 0.7) 85%,
    rgba(0, 0, 0, 0) 100%
  );
  label: TextAbout;
  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }
`;
const Text12 = styled("p")`
  width: 620px;
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 2% 0;
  }
  padding: 2% 1%;
  font-size: 0.8em;
  font-family: eurostile, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  cursor: default;
  color: rgba(245, 174, 173, 0.9);
  font-weight: 400;
  cursor: pointer;
  label: text12;
`;

const Text2 = styled("p")`
  width: 620px;
  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 1.2em;
    padding: 2% 0;
  }
  padding: 2% 1%;
  font-size: 1.3em;
  font-family: eurostile-condensed, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  cursor: default;
  color: rgba(255, 255, 255, 0.7);
  label: text2;
`;

const Text3 = styled("p")`
  width: 620px;
  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 0.9em;
    padding: 2% 0;
  }
  padding: 2% 1%;
  font-size: 1em;
  font-family: eurostile-condensed, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  cursor: default;
  color: rgba(255, 255, 255, 0.7);
  label: text3;
`;
const StoryContainer0 = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  width: 100%;
  height: 100%;
  label: storycontainer0;
`;

const StoryContainer1 = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 620px;
  @media screen and (max-width: 600px) {
    min-width: 100%;
  }
  height: fit-content;
  label: storycontainer1;
`;

const StoryContainer2 = styled("div")`
  display: flex;
  flex-direction: column;
  width: 620px;
  min-width: 620px;
  @media screen and (max-width: 600px) {
    width: 100%;
    min-width: 100%;
  }
  height: 120px;
  opacity: 0;
  animation: ${fadeInLatest};
  animation-duration: 8s;
  animation-delay: 7s;
  animation-fill-mode: forwards;
  transition: background-color 1.5s ease;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.9) 40%,
    rgba(0, 0, 0, 0.5) 85%,
    rgba(0, 0, 0, 0) 100%
  );
  label: StoryContainer2;
  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }
`;
const SecondAndLineContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  min-width: 620px;
  @media screen and (max-width: 600px) {
    min-width: 100%;
    height: 300px;
  }
  height: fill-available;
  label: SecondAndLineContainer;
`;

export default class Story extends React.Component {
  handleClick() {
    window.location.href = `mailto:joelsundqvist@protonmail.com`;
  }
  render() {
    return (
      <ContentContainer
        handleClose={this.props.handleClose}
        rerender={this.props.rerender}
      >
        <StoryContainer0>
          <StoryContainer1>
            <Text1>
              MY NAME IS JOEL AND I'M A DESIGNER & DEVELOPER FROM LULEÅ
            </Text1>
            <StoryLine />
            <TextAbout>
              I'M CURRENTLY LOCATED IN GOTHENBURG LOOKING FOR A CREATIVE AND
              CHALLENGING WORKPLACE. GOT A LEAD? CONTACT ME @
              <Text12 onClick={this.handleClick}>
                {" "}
                joelsundqvist@protonmail.com
              </Text12>
            </TextAbout>
          </StoryContainer1>
          <SecondAndLineContainer onClick={this.props.handleClose}>
            <StoryContainer2
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <Text2>
                LATEST PROJECT: CAPSULE COLLECTION
                <br />
              </Text2>
              <Text3>
                <b>13</b> NON-SEASONAL PIECES MADE TO BE <b>INTERCHANGED</b> AND{" "}
                <b>COMBINED</b> IN MULTIPLE WAYS
                <br />
                <br />
                DEVELOPED IN COLLABORATION WITH VICTOR ISAKSSON PIRTTI
              </Text3>
            </StoryContainer2>
            <StoryLine />
          </SecondAndLineContainer>
        </StoryContainer0>
      </ContentContainer>
    );
  }
}
