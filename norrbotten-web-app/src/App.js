import React, { Component } from "react";
import styled, { css } from "react-emotion";
import "./App.css";
import "./reset.css";

import EmailBtn from "./components/EmailBtn";
import Story from "./components/Story";
import Backdrop from "./components/Backdrop";
import Divider from "./components/Divider";
import ContentOverline from "./components/ContentOverline";
import GalleryContainer from "./components/GalleryContainer";
import ProductInfoLine from "./components/ProductInfoLine";
import ProductContainer from "./components/ProductContainer";

import getBackground from "./backgroundFactory";
import CrossfadeImage from "react-crossfade-image";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./components/MenuItem";

library.add(faSquareFull);

const all = css`
  display: flex;
  flex-direction: column;
  height: 100%
  label: all;
`;
const bg = {
  minHeight: "100%",
  minWidth: "1024px",
  width: "100%",
  maxHeight: "auto",
  position: "fixed",
  top: "0",
  left: "0"
};
const head = css`
  height: 5%;
  min-height: 5%;
  display: flex;
  justify-content: flex-end;
`;
const app = css`
  height: fill-available;
  display: flex;
  label: app;
`;
const navContainer = css`
  z-index: 10;
  width: fit-content;
  margin-left: 3%;
  display: flex;
  justify-content: flex-start;
  label: navContainer;
  @media screen and (max-width: 880px) {
    display: none;
  }
`;
const contentPlaceholder = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 3%;
  display: flex;
  label: contentPlaceholder;
`;
const navContainerMen = css`
  padding: 0;
  text-align: left;
`;
const logo = css`
  background-color: #f5aead;
  border-radius: 0;
  width: 0;
  margin: 0;
  height: 32px;
  min-width: 94px !important;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 400;
`;
const Text = styled("p")`
  padding-top: 6px;
  font-size: 1.2em;
  color: rgba(255, 55, 115, 0.8);
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentShowing: null,
      dividerToggle: true,
      dividerVisible: false,
      bgIndex: 0,
      showInfo: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleMouseOverEmail = this.handleMouseOverEmail.bind(this);
    this.handleMouseOutEmail = this.handleMouseOutEmail.bind(this);
  }

  handleClick(listItemClicked) {
    this.setState(prevState => ({
      dividerToggle: !prevState.dividerToggle,
      contentShowing: listItemClicked
    }));
    let bgIndex;
    switch (listItemClicked) {
      case "Gallery":
        bgIndex = 0;
        break;
      case "Story":
        bgIndex = 3;
        break;
      case "Garments":
        bgIndex = 1;
        break;
    }
    this.setState({
      showInfo: false,
      bgIndex
    });
  }

  handleClose() {
    this.setState({
      contentShowing: null,
      bgIndex: 0,
      dividerVisible: false,
      showInfo: false
    });
  }

  handleMouseOverEmail(e) {
    const { contentShowing } = this.state;
    if (contentShowing && contentShowing === "Garments") {
      this.setState({
        bgIndex: 2
      });
    }
  }

  handleMouseOutEmail(e) {
    const { contentShowing } = this.state;
    if (contentShowing && contentShowing === "Garments") {
      this.setState({
        bgIndex: 1
      });
    }
  }
  callbackToProductContainer = () => {
    this.setState(prevState => ({
      showInfo: !prevState.showInfo
    }));
  };
  callbackToGalleryContainer = data => {
    let bgIndex;
    switch (data) {
      case "standing1":
        bgIndex = 4;
        break;
      case "standing2":
        bgIndex = 7;
        break;
      case "standing3":
        bgIndex = 6;
        break;
      case "sitting1":
        bgIndex = 5;
        break;
      default:
        bgIndex = 0;
        break;
    }
    this.setState({
      bgIndex
    });
  };

  handleEmailClick() {
    window.location.href = `mailto:info@title.com`;
  }

  render() {
    const {
      contentShowing,
      dividerToggle,
      bgIndex,
      dividerVisible,
      showInfo
    } = this.state;
    const img = getBackground().image[bgIndex];
    return (
      <div className={all}>
        <CrossfadeImage src={img} style={bg} duration={1000} delay={500} />
        <div className={head}>{/* <Head /> */}</div>
        <div className={app}>
          {contentShowing ? <Backdrop onClick={this.handleClose} /> : null}
          <div className={navContainer}>
            {/* <--Menu Begin--> */}
            <div>
              <nav className={navContainerMen}>
                <ul>
                  <li>
                    <a>
                      <FontAwesomeIcon
                        icon="square-full"
                        size="2x"
                        color="rgba(255, 55, 115, 0.8)"
                      />
                    </a>

                    <a id="logo" className={logo}>
                      <Text>$ Lab la Bla</Text>
                    </a>
                    <ul>
                      <MenuItem
                        item={"Gallery"}
                        active={contentShowing === "Gallery" ? true : false}
                        click={this.handleClick}
                      />
                      <MenuItem
                        item={"Garments"}
                        active={contentShowing === "Garments" ? true : false}
                        click={this.handleClick}
                      />
                      <MenuItem
                        item={"Story"}
                        active={contentShowing === "Story" ? true : false}
                        click={this.handleClick}
                      />
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* <--Menu End--> */}
          <Divider
            show={contentShowing !== null}
            rerender={dividerToggle}
            handleClose={this.handleClose}
          />
          <div className={contentPlaceholder}>
            {contentShowing && contentShowing !== "Gallery" ? (
              <ContentOverline handleClose={this.handleClose} />
            ) : null}
            <EmailBtn
              onMouseOver={this.handleMouseOverEmail}
              onMouseOut={this.handleMouseOutEmail}
              onClick={this.handleEmailClick}
            />

            {contentShowing === "Garments" ? (
              <ProductContainer
                callbackFromApp={this.callbackToProductContainer.bind(this)}
                product={null}
                handleClose={this.handleClose}
                rerender={dividerVisible}
              />
            ) : contentShowing === "Story" ? (
              <Story handleClose={this.handleClose} rerender={dividerVisible} />
            ) : null}
            {showInfo ? <ProductInfoLine /> : null}
          </div>
        </div>
        {contentShowing === "Gallery" || bgIndex === 0 || bgIndex >= 4 ? (
          <GalleryContainer
            callbackFromApp={this.callbackToGalleryContainer.bind(this)}
            showExplore={contentShowing === "Gallery"}
            handleClose={this.handleClose}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
