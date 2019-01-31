import React from "react";
import styled, { css, keyframes } from "react-emotion";
import RiseLoader from "react-spinners/RiseLoader";
import Img from "react-image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import getProducts from "../productFactory";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import ContentContainer from "./ContentContainer";
import ProductInfoContainer from "./ProductInfoContainer";

library.add(faAngleLeft, faAngleRight, faQuestionCircle);

const fadeIn = keyframes`
  0% {
    opacity: 0;
    
  }
  100%{
    opacity: 1;
  }
`;
const fadeInHeader = keyframes`
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

const ContentContainer2 = styled("div")`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 334px;
  height: 500px;
  min-height: 500px;
  min-width: 334px;

  label: ContentContainer2;
`;

const InfoContainerTest = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  label: InfoContainerTest;
`;

const NavBarTop = styled("div")`
  width: 100%;
  height: 5%;
  min-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1em;
  label: NavBarTop;
  color: rgba(0, 0, 0, 0.9);
  background: linear-gradient(
    90deg,
    rgba(255, 55, 115, 0.9) 0%,
    rgba(245, 174, 173, 0.9) 20%,
    rgba(255, 255, 255, 0.9) 70%,
    rgba(255, 255, 255, 0.9) 100%
  );
  opacity: 0;
  animation: ${fadeInHeader};
  animation-duration: 2.5s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;
const ImageContainer = styled("div")`
  display: flex;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  height: 90%;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeIn};
  animation-duration: 4s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;
const NavBarBottom = styled("div")`
  display: flex;
  width: 100%;
  height: 5%;
  min-height: 30px;
  label: NavBarBtm;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  animation: ${fadeIn};
  animation-duration: 4s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;
const InfoBtn = styled("div")`
  display: flex;
  height: 100%;
  margin-left: 25%;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  label: info-btn;
`;

const NavBtn = styled("div")`
  margin: 0 10px;
  cursor: pointer;
`;

const Name = styled("h2")`
  cursor: default;
  margin: 0;
  font-weight: 500;
`;

var ImageStyle = {
  display: "flex",
  maxWidth: "100%",
  maxHeight: "100%"
};

const cssloading = css`
  margin-left: 107px;
  margin-top: 210px;
`;

const Text = styled("span")`
  font-size: 1.2em;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  padding-right: 5px;
  &:hover {
    color: rgba(255, 55, 115, 0.8);
  }
`;

export default class ProductContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      products: null,
      numOfProducts: 0,
      productIndex: 0,
      showInfo: false,
      imageIndex: 0,
      dragging: false,
      isOpen: false,
      photoIndex: 0,
      loading: true
    };
    this.handleShowInfo = this.handleShowInfo.bind(this);
    this.onNextImageClick = this.onNextImageClick.bind(this);
    this.onPrevImageClick = this.onPrevImageClick.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  componentDidMount() {
    const products = getProducts();
    const numOfProducts = products.length;
    this.setState({
      products,
      numOfProducts
    });
    /* var rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
		console.log(rect)
		console.log(rect.bottom) */
  }

  changeProduct(step) {
    const { numOfProducts, productIndex } = this.state;
    let newIndex = productIndex + step;
    if (newIndex < 0) newIndex = numOfProducts - 1;
    if (newIndex > numOfProducts - 1) newIndex = 0;
    this.setState({
      productIndex: newIndex
    });
  }
  onNextImageClick() {
    const { dragging } = this.state;
    if (!dragging) {
      this.setState({ imageIndex: this.state.imageIndex + 1 });
    }
    this.setState({ dragging: false });
  }
  onPrevImageClick() {
    const { dragging } = this.state;
    if (!dragging) {
      this.setState({ imageIndex: this.state.imageIndex - 1 });
    }
    this.setState({ dragging: false });
  }
  handleDrag() {
    this.setState({ dragging: true });
  }
  handleShowInfo() {
    this.props.callbackFromApp();
    this.setState(prevState => ({
      showInfo: !prevState.showInfo
    }));
  }

  render() {
    const {
      products,
      productIndex,
      showInfo,
      imageIndex,
      isOpen,
      loading
    } = this.state;
    const product = products ? products[productIndex] : null;

    return (
      <ContentContainer handleClose={this.props.handleClose}>
        <ContentContainer2>
          <NavBarTop>
            <NavBtn
              onClick={() => {
                this.changeProduct(-1);
              }}
            >
              <FontAwesomeIcon icon="angle-left" />
            </NavBtn>
            <Name>{product ? product.name : "no product"}</Name>
            <NavBtn
              onClick={() => {
                this.changeProduct(1);
              }}
            >
              <FontAwesomeIcon icon="angle-right" />
            </NavBtn>
          </NavBarTop>

          <ImageContainer
            onClick={() => {
              this.setState({
                isOpen: true
              });
            }}
            onScroll={() => {
              console.log("SCROLL");
            }}
          >
            <Img
              style={ImageStyle}
              alt="product"
              src={product ? product.image[imageIndex] : null}
              loader={
                <div className={cssloading}>
                  <RiseLoader
                    sizeUnit={"px"}
                    size={20}
                    color={"rgba(255, 255, 255, 0.6)"}
                    loading={this.state.loading}
                  />
                </div>
              }
            />
          </ImageContainer>

          <NavBarBottom>
            <InfoBtn onClick={this.handleShowInfo}>
              <Text>INFO</Text>
              <FontAwesomeIcon
                icon="question-circle"
                color="rgba(255,255,255,0.8)"
              />
            </InfoBtn>
          </NavBarBottom>

          {isOpen && (
            <Lightbox
              mainSrc={product ? product.image[imageIndex] : null}
              nextSrc={product.image[(imageIndex + 1) % product.image.length]}
              prevSrc={
                product.image[
                  (imageIndex + product.image.length - 1) % product.image.length
                ]
              }
              onCloseRequest={() =>
                this.setState({ isOpen: false, imageIndex: 0 })
              }
              onMovePrevRequest={() =>
                this.setState({
                  imageIndex:
                    (imageIndex + product.image.length - 1) %
                    product.image.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  imageIndex: (imageIndex + 1) % product.image.length
                })
              }
            />
          )}
        </ContentContainer2>

        <InfoContainerTest onClick={this.props.handleClose}>
          {showInfo ? (
            <ProductInfoContainer>
              {product ? product.text : null}
            </ProductInfoContainer>
          ) : null}
        </InfoContainerTest>
      </ContentContainer>
    );
  }
}
