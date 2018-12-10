import React from "react";
import styled, { css, keyframes } from "react-emotion";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown);

const navContainer = css`
  padding: 0;
  text-align: left;
`;

const dynamicStyle = props =>
  css`
    color: ${props.color};
    opacity: ${props.opacity};
  `;

const Container = styled("li")`
  ${dynamicStyle};
`;

const strike = keyframes`
	0% {
        transform: scaleX(0);
        background: #F5AEAD;
    }

    45%{
        background: #F5AEAD;
    }
    
    60% {
        transform: scaleX(0.85);
    }

	100% {
        transform: scaleX(1);
        background: #F39C9F;
}
`;

const Line = styled("span")`
  display: inline-block;
  position: relative;
  width: 100%;

  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    background: #f5aead;
    height: 2px;
    margin-top: -0.6em;
    transform-origin: center center;
    animation: ${strike} 0.5s 0s linear 1;
  }
`;
export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      opacityGarn: "0",
      opacityStory: "0",
      opacityContact: "0"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    if (this.node.contains(e.target)) {
    }
  };

  handleClickedItem(content) {
    if (content === "Garments") {
      this.setState({
        opacityGarments: "1"
      });
    }
    if (content === "Story") {
      this.setState({
        opacityStory: "1"
      });
    }
    if (content === "Contact") {
      this.setState({
        opacityContact: "1"
      });
    }
  }

  render() {
    const { opacityGarments, opacityStory, opacityContact } = this.state;

    return (
      <div>
        <nav
          className={navContainer}
          ref={node => (this.node = node)}
          onClick={this.handleClick}
        >
          <ul>
            <li>
              <a>
                <FontAwesomeIcon icon="angle-down" />
              </a>
              <a id="logo">- Title -</a>
              <ul>
                <Container
                  opacity={opacityGarments}
                  onClick={() => {
                    this.handleClickedItem("Garments");
                    this.props.handleClick("Garments");
                  }}
                >
                  <a>
                    <Line>GARMENTS</Line>
                  </a>
                </Container>
                <Container
                  opacity={opacityStory}
                  onClick={() => {
                    this.handleClickedItem("Story");
                    this.props.handleClick("Story");
                  }}
                >
                  <a>
                    <Line>STORY</Line>
                  </a>
                </Container>
                <Container
                  opacity={opacityContact}
                  onClick={() => {
                    this.handleClickedItem("Contact");
                    this.props.handleClick("Contact");
                  }}
                >
                  <a>
                    <Line>CONTACT</Line>
                  </a>
                </Container>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

{
  /* <Container onClick={() => {this.handleClick(); this.props.handleClick("Garments")}}><a><Line>GARMENTS</Line></a></Container>

<li className={this.state.storyOp} onClick={() => {this.handleClick("story"); this.props.handleClick("Story")}}><a><Line>STORY</Line></a></li>
<li className={this.state.contactOp} onClick={() => {this.handleClick("contact"); this.props.handleClick("Contact")}}><a><Line>CONTACT</Line></a></li> */
}
