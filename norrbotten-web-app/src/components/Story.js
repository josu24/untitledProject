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
  font-size: 1.3em;
  text-align: justify;
  cursor: default;
  color: #ff3773;
  font-weight: 400;
`;
const Text1_1 = styled("b")`
  font-weight: 600;
`;

const Text2 = styled("p")`
  padding: 2% 2%;
  font-size: 1.8em;
  text-align: center;
  cursor: default;
  color: #016e5b;
  font-weight: 500;
`;

const Text3 = styled("p")`
  padding: 2% 2%;
  font-size: 1.3em;
  text-align: center;
  cursor: default;
  color: #016e5b;
  font-weight: 400;
`;
const StoryContainer0 = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 620px;
  height: 88%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const StoryContainer1 = styled("div")`
  display: flex;
  width: 620px;
  min-width: 620px;
  height: 200px;
  max-height: 200px;
  animation: ${fadeIn};
  animation-duration: 1s;
  transition: background-color 1.5s ease;
  background-color: rgba(0, 0, 0, 0);
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
  height: 100px;
  animation: ${fadeIn};
  animation-duration: 4s;
  transition: background-color 1.5s ease;
  background-color: rgba(0, 0, 0, 0);
  label: StoryContainer2;
  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }
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
              "After rising sealevels and failed crops due to global warming,
              people face <u>three</u> choices -{" "}
              <Text1_1>revolt, migrate or die.</Text1_1>
              <br />
              <br />A series of mass migrations takes place all over the world
              and new metropolitan areas arise around the{" "}
              <Text1_1>new waterfronts.</Text1_1>
              <br />
              <br />
              These vast, previously uninhabited areas around the north- and
              southpole afflicted by isostatic rebound, are now the most densly
              populated metros in the world"
            </Text1>
          </StoryContainer1>

          <StoryContainer2>
            <Text2>
              -->> CAPSULE WARDROBE FOR <u>URBAN MOUNTAINEERS</u>
              <br />
            </Text2>
            <Text3>
              <b>13</b> non-seasonal pieces made to be{" "}
              <Text1_1>interchanged</Text1_1> and <Text1_1>combined</Text1_1> in
              multiple ways
            </Text3>
          </StoryContainer2>
          <StoryLine />
        </StoryContainer0>
      </ContentContainer>
    );
  }
}
