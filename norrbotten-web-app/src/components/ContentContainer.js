import React from "react";
import styled, { keyframes } from "react-emotion";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;
const Container = styled("div")`
  display: flex;
  justify-content: flex-start;
  width: 95%;
  margin-left: 5%;
  height: 500px;
  min-height: 500px;
  label: ContentContainer;
  animation: ${fadeIn};
  animation-duration: 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: both;
`;
/*  */

export default class ContentContainer extends React.Component {
  render() {
    const show = this.props.rerender;
    console.log(show);
    /* console.log("render", this.props.children); */
    return (
      <Container>
        {/* animationdelay={show ? `0.2s` : `1.5s`} */}
        {this.props.children}
      </Container>
    );
  }
}
