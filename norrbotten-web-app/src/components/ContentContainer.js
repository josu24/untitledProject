import React from "react";
import styled from "react-emotion";

const Container = styled("div")`
  display: flex;
  justify-content: flex-start;
  width: 95%;
  height: 500px;
  z-index: 10;
  min-height: 500px;
  label: ContentContainer;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export default class ContentContainer extends React.Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}
