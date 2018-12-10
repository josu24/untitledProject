import React from "react";
import styled, { keyframes } from "react-emotion";
import "react-image-lightbox/style.css";
import Backdrop from "./Backdrop";
import GalleryLine from "./GalleryLine";
import GalleryLine2 from "./GalleryLine2";

const fadeIn = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to{
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const fadeExplore = keyframes`
0% {
  opacity: 0;
}
5%{opacity: 0.1;} 10% {opacity: 0.3;} 15% { opacity: 0.5;} 20%{opacity: 0.7;}
25%{opacity: 0.8;}30%{opacity: 1;}
40%{
  opacity: 1;
}
50%{
  opacity: 1;
}
55%{opacity: 0;}57%{opacity: 1;}60% {opacity: 0;}62%{opacity: 1;}65%{opacity: 0;}68%{opacity: 1;}
70%{opacity: 0;}72%{opacity: 1;}90%{opacity: 1;}
100%{
  opacity: 0;
}
`;
const Container = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;

  label: GalleryContainer;
`;
const Text = styled("p")`
  padding: 5% 5%;
  font-size: 2em;
  text-align: justify;
  cursor: default;
  color: #4bbe9f;
  font-weight: 600;
`;
const Explore = styled("div")`
  position: absolute;
  top: 100px;
  margin-left: 20%;
  height: 30px;
  width: 150px;
  animation: ${fadeExplore} 5s cubic-bezier(0.1, 0.1, 1, 1) 1.5s;
  opacity: 0;
`;

const Display1 = styled("div")`
  position: absolute;
  top: 12%;
  margin-left: 27%;
  height: 72%;
  width: 20%;
  animation: ${fadeIn};
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: both;

  @media screen and (max-width: 1024px) {
    margin-left: 280px;
    height: 400px;
    top: 50px;
  }
  @media screen and (max-height: 600px) {
    height: 400px;
    top: 50px;
  }
`;
const Display2 = styled("div")`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  margin-left: 55%;
  height: 60%;
  width: 25%;
  animation: ${fadeIn};
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: both;

  @media screen and (max-width: 1024px) {
    margin-left: 520px;
    top: 200px;
    width: 350px;
  }
  @media screen and (max-height: 600px) {
    top: 60px;
    top: 220px;
    height: 380px;
  }
`;

const Sitting1 = styled("div")`
  cursor: pointer;
  position: absolute;
  top: 12%;
  margin-left: 50%;
  height: 20%;
  width: 4%;

  @media screen and (max-width: 1024px) {
    margin-left: 512px;
    top: 50px;
    height: 150px;
  }
  @media screen and (max-height: 600px) {
    top: 70px;
    height: 150px;
  }
  @media screen and (max-height: 600px) and (max-width: 1024px) {
    margin-left: 512px;
    top: 50px;
    height: 150px;
  }
`;
const Standing1 = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  cursor: pointer;
  position: absolute;
  top: 10%;
  margin-left: 70%;
  height: 30%;
  width: 4%;

  @media screen and (max-width: 1024px) {
    margin-left: 710px;
    top: 40px;
    height: 170px;
  }
  @media screen and (max-height: 600px) {
    top: 50px;
    height: 170px;
  }
  @media screen and (max-height: 600px) and (max-width: 1024px) {
    top: 40px;
  }
`;
const Standing2 = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  position: absolute;
  top: 42%;
  margin-left: 20%;
  height: 35%;
  width: 4%;

  @media screen and (max-width: 1024px) {
    top: 200px;
    margin-left: 200px;
    height: 190px;
  }
  @media screen and (max-height: 600px) {
    top: 250px;
    height: 220px;
  }
  @media screen and (max-width: 1024px) and (max-height: 600px) {
    top: 200px;
    height: 190px;
  }
`;
const Standing3 = styled("div")`
  cursor: pointer;
  position: absolute;
  top: 60%;
  margin-left: 86%;
  height: 35%;
  width: 6%;

  @media screen and (max-width: 1024px) {
    margin-left: 885px;
    top: 290px;
    height: 200px;
  }
  @media screen and (max-height: 600px) {
    top: 350px;
    height: 250px;
  }
  @media screen and (max-height: 600px) and (max-width: 1024px) {
    top: 290px;
    height: 200px;
  }
`;

export default class GalleryContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display1: false,
      display2: false,
      clicked1: false,
      clicked2: false,
      clicked: null
    };
  }

  handleClose(e) {
    this.setState({
      clicked: null,
      display1: false,
      display2: false,
      clicked1: false,
      clicked2: false
    });
    this.props.callbackFromApp(e);
  }
  handleHover(e) {
    if (!(this.state.clicked1 || this.state.clicked2)) {
      this.props.callbackFromApp(e);
    }
  }
  handleClick(e) {
    if (e !== this.state.clicked) {
      this.handleClose(e);
    }
    if (e === "sitting1" || e === "standing2") {
      this.setState(prevState => ({
        display1: !prevState.display1,
        clicked1: !prevState.clicked1,
        clicked: e
      }));
    } else {
      this.setState(prevState => ({
        display2: !prevState.display2,
        clicked2: !prevState.clicked2,
        clicked: e
      }));
    }
  }
  render() {
    const clicked = this.state.clicked;
    return (
      <Container>
        {this.props.showExplore ? (
          <Explore>
            <Text>" EXPLORE "</Text>
          </Explore>
        ) : null}
        <Backdrop onClick={this.handleClose.bind(this, "none")} />
        {this.state.display1 ? <Display1 /> : null}

        {this.state.display2 ? <Display2 /> : null}

        <Sitting1
          onClick={this.handleClick.bind(this, "sitting1")}
          onMouseOver={this.handleHover.bind(this, "sitting1")}
          onMouseOut={this.handleHover.bind(this, "none")}
        />
        <Standing1
          onClick={this.handleClick.bind(this, "standing1")}
          onMouseOver={this.handleHover.bind(this, "standing1")}
          onMouseOut={this.handleHover.bind(this, "none")}
        >
          {clicked === "standing1" && this.state.display2 ? (
            <GalleryLine2 />
          ) : null}
        </Standing1>
        <Standing2
          onClick={this.handleClick.bind(this, "standing2")}
          onMouseOver={this.handleHover.bind(this, "standing2")}
          onMouseOut={this.handleHover.bind(this, "none")}
        >
          {clicked === "standing2" && this.state.display1 ? (
            <GalleryLine />
          ) : null}
        </Standing2>
        <Standing3
          onClick={this.handleClick.bind(this, "standing3")}
          onMouseOver={this.handleHover.bind(this, "standing3")}
          onMouseOut={this.handleHover.bind(this, "none")}
        />
      </Container>
    );
  }
}
