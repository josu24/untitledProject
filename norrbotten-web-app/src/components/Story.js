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
  padding: 5% 2% 2% 2%;
  font-size: 2.5em;
  text-align: center;
  cursor: default;
  color: #016e5b;
  font-weight: 500;
`;
const Text1_1 = styled("b")`
  font-weight: 600;
`;

const Text2 = styled("p")`
  padding: 2% 2%;
  font-size: 1.3em;
  text-align: center;
  cursor: default;
  color: #016e5b;
  font-weight: 400;
`;
const Text22 = styled("p")`
  padding: 2% 2%;
  font-size: 1.6em;
  text-align: center;
  cursor: default;
  color: #016e5b;
  font-weight: 400;
`;

const Text3 = styled("p")`
  padding: 2% 2%;
  font-size: 1.2em;
  text-align: center;
  cursor: default;
  color: #016e5b;
  font-weight: 400;
`;
const StoryContainer0 = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  width: 620px;
  height: 80%;
  background-color: rgba(0, 0, 0, 0);
`;

const StoryContainer1 = styled("div")`
  display: flex;
  flex-direction: column;
  width: 620px;
  min-width: 620px;
  min-height: 200px;
  max-height: 200px;
  animation: ${fadeIn};
  animation-duration: 1s;
  transition: background-color 1.5s ease;
  background-color: rgba(0, 0, 0, 0.8);
  label: StoryContainer1;
  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }
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
  background-color: rgba(0, 0, 0, 0.8);
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
`;

export default class Story extends React.Component {
  render() {
    return (
      <ContentContainer
        handleClose={this.props.handleClose}
        rerender={this.props.rerender}
      >
        <StoryContainer0>
          <StoryContainer1>
            <Text1>
              <Text1_1> Designer</Text1_1> & <Text1_1> Developer</Text1_1>
              <br />
            </Text1>
            <Text3>from northern sweden</Text3>
            <Text22>
              currently based in gothenburg looking for my{" "}
              <Text1_1>next challenge</Text1_1>
            </Text22>
          </StoryContainer1>
          <SecondAndLineContainer>
            <StoryContainer2>
              <Text2>
                Latest project: CAPSULE Collection
                <br />
              </Text2>
              <Text3>
                <b>13</b> non-seasonal pieces made to be{" "}
                <Text1_1>interchanged</Text1_1> and <Text1_1>combined</Text1_1>{" "}
                in multiple ways
                <br />
                <br />
                developed in collaboration with Victor isaksson pirtti
              </Text3>
            </StoryContainer2>
            <StoryLine />
          </SecondAndLineContainer>
        </StoryContainer0>
      </ContentContainer>
    );
  }
}
