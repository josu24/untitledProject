import React, { Component } from "react";
import styled, { css, keyframes } from "react-emotion";
import RandomTextGenerator from "react-scrolling-text";
import "./App.css";
import "./reset.css";
import Img from "react-image";
import BounceLoader from "react-spinners/BounceLoader";

import About from "./components/Story";
import Backdrop from "./components/Backdrop";
import Divider from "./components/Divider";
import ContentOverline from "./components/ContentOverline";
import AtelierContainer from "./components/AtelierContainer";
import ProductInfoLine from "./components/ProductInfoLine";
import ProductContainer from "./components/ProductContainer";

import MenuItem from "./components/MenuItem";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;
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
  height: 30px;
  min-height: 30px;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-height: 550px) {
    display: none;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const app = css`
  height: fill-available;
  display: flex;
  label: app;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    overflow: scroll;
  }
`;
const navContainer = css`
  z-index: 10;
  width: 25%;
  height: fit-content;
  min-width: 294px;
  margin-left: 20%;
  margin-top: 7%;
  display: flex;
  justify-content: flex-start;
  label: navContainer;
  @media screen and (max-width: 1124px) {
    margin-left: 0;
  }
  @media screen and (max-width: 600px) {
    margin-top: 150px;
    min-width: 100%;
  }
`;
const contentPlaceholder = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 3%;
  display: flex;
  label: contentPlaceholder;
  @media screen and (max-width: 600px) {
    margin-top: 70px;
    margin-right: 0;
  }
`;
const navContainerMen = css`
  padding: 0;
  text-align: center;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const divContainerMen = css`
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const logo = css`
  background: linear-gradient(
    90deg,
    rgba(245, 174, 173, 1) 10%,
    rgba(255, 55, 115, 1) 100%
  );
  margin: 0;
  opacity: 0.8;
  position: absolute;
  top: 0;
  height: 42px;
  cursor: pointer;
  width: 294px !important;
  display: flex;
  text-align: center;
  justify-content: flex-end;
  align-items: center;
  font-weight: 400;
  @media screen and (max-width: 600px) {
    min-width: 100%;
  }
`;
const Text = styled("p")`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 255, 255, 1) 80%,
    rgba(255, 255, 255, 0.2) 100%
  );
  width: 100%;
  padding-top: 2px;
  height: 34px;
  font-size: 1.6em;
  color: black;
  cursor: pointer;
`;

const Foo = styled("div")`
  label: FOO;
  opacity: 0;
  animation: ${fadeIn};
  animation-duration: 2s;
  animation-delay: 1s;
  animation-fill-mode: both;
`;
const loadingBackground = css`
  position: fixed;
  margin-left: 20%;
  padding-left: 310px;
  margin-top: 7%;
  padding-top: 30px;
  @media screen and (max-width: 1124px) {
    margin-left: 0;
  }
  @media screen and (max-height: 550px) and (min-width: 600px) {
    padding-top: 0;
  }
  @media screen and (max-width: 600px) {
    margin-top: 150px;
    margin-left: 10px;
    padding-left: 0;
    padding-top: 0;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentShowing: null,
      dividerToggle: true,
      dividerVisible: false,
      showInfo: false
    };
    this.infoRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(listItemClicked) {
    this.setState(prevState => ({
      dividerToggle: !prevState.dividerToggle,
      contentShowing: listItemClicked
    }));

    this.setState({
      showInfo: false
    });
  }

  handleClose() {
    this.setState({
      contentShowing: null,
      dividerVisible: false,
      showInfo: false
    });
  }

  callbackToProductContainer = () => {
    this.setState(prevState => ({
      showInfo: !prevState.showInfo
    }));
  };

  render() {
    const {
      contentShowing,
      dividerToggle,
      dividerVisible,
      showInfo
    } = this.state;
    return (
      <div className={all}>
        <Img
          style={bg}
          src={require("./backgroundImages/CR1.jpg")}
          loader={
            <div className={loadingBackground}>
              <BounceLoader
                sizeUnit={"px"}
                size={42}
                color={"rgba(255, 55, 115, 1)"}
                loading={this.state.loading}
              />
            </div>
          }
          container={children => {
            return <Foo>{children}</Foo>;
          }}
        />

        {contentShowing && contentShowing !== "About" ? (
          <Img
            src={require("./backgroundImages/CR3.jpg")}
            style={bg}
            container={children => {
              return <Foo>{children}</Foo>;
            }}
          />
        ) : null}

        <div className={head}>{/* <Head /> */}</div>
        <div className={app}>
          {contentShowing ? <Backdrop onClick={this.handleClose} /> : null}
          <div className={navContainer}>
            {/* <--Menu Begin--> */}
            <div className={divContainerMen}>
              <nav className={navContainerMen}>
                <ul>
                  <li>
                    <a />

                    <a id="logo" className={logo}>
                      <Text>
                        <RandomTextGenerator
                          charList={[
                            "@",
                            "/",
                            ":",
                            ".",
                            "=",
                            "(",
                            "&",
                            "}",
                            "]",
                            "!",
                            "%",
                            "`",
                            "*",
                            "-",
                            "_",
                            ";"
                          ]}
                          text={"Joel Sundqvist"}
                          interval={100}
                          timePerChar={100}
                        />
                      </Text>
                    </a>
                    <ul>
                      <MenuItem
                        item={"About"}
                        active={contentShowing === "About" ? true : false}
                        click={this.handleClick}
                      />
                      <MenuItem
                        item={"Capsule Collection"}
                        active={
                          contentShowing === "Capsule Collection" ? true : false
                        }
                        click={this.handleClick}
                      />
                      <MenuItem
                        item={"Atelier"}
                        active={contentShowing === "Atelier" ? true : false}
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
            {contentShowing && contentShowing !== "Atelier" ? (
              <ContentOverline handleClose={this.handleClose} />
            ) : null}

            {contentShowing === "Capsule Collection" ? (
              <ProductContainer
                callbackFromApp={this.callbackToProductContainer.bind(this)}
                product={null}
                handleClose={this.handleClose}
                rerender={dividerVisible}
              />
            ) : contentShowing === "About" ? (
              <About handleClose={this.handleClose} rerender={dividerVisible} />
            ) : null}
            {showInfo ? <ProductInfoLine /> : null}
            {contentShowing === "Atelier" ? (
              <AtelierContainer
                handleClose={this.handleClose}
                rerender={dividerVisible}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
