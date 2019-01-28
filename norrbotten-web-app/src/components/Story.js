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
  padding: 3% 1% 3% 1%;
  font-family: eurostile-condensed, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.4em;
  text-align: center;
  cursor: default;
  color: rgba(245, 174, 173, 0.9);
  animation: ${fadeIn};
  animation-duration: 1s;
  transition: background-color 1.5s ease;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.9) 40%,
    rgba(0, 0, 0, 0.6) 85%,
    rgba(0, 0, 0, 0) 100%
  );
  label: StoryContainer1;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const Text11 = styled("p")`
  font-size: 1.4em;
  padding: 2% 1% 0 1%;
  font-family: eurostile-condensed, sans-serif;

  font-weight: 400;

  font-style: normal;
  text-align: center;
  cursor: default;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  animation: ${fadeIn};
  animation-duration: 1s;
  transition: background-color 1.5s ease;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.9) 40%,
    rgba(0, 0, 0, 0.7) 85%,
    rgba(0, 0, 0, 0) 100%
  );
  label: StoryContainer1;
  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }
`;
const Text12 = styled("p")`
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
`;

const Text2 = styled("p")`
  padding: 2% 2%;
  font-size: 1.3em;
  font-family: eurostile-condensed, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  cursor: default;
  color: rgba(255, 255, 255, 0.7);
`;

const Text3 = styled("p")`
  padding: 2% 2%;
  font-size: 1em;
  font-family: eurostile-condensed, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  cursor: default;
  color: rgba(255, 255, 255, 0.7);
`;
const StoryContainer0 = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  width: 620px;
  height: 100%;
`;

const StoryContainer1 = styled("div")`
  display: flex;
  flex-direction: column;
  width: 620px;
  min-width: 620px;
  height: fit-content;
`;

const StoryContainer2 = styled("div")`
  display: flex;
  flex-direction: column;
  width: 620px;
  min-width: 620px;
  height: 120px;
  animation: ${fadeIn};
  animation-duration: 4s;
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
  width: 620px;
  min-width: 620px;
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
            <Text11>
              I'M CURRENTLY LOCATED IN GOTHENBURG LOOKING FOR A CREATIVE AND
              CHALLENGING WORKPLACE. GOT A LEAD? CONTACT ME @
              <Text12 onClick={this.handleClick}>
                {" "}
                joelsundqvist@protonmail.com
              </Text12>
            </Text11>
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
