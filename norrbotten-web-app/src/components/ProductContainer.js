import React from "react";
import styled from "react-emotion";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import getProducts from "../productFactory";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faQuestionCircle,
  faAngleUp
} from "@fortawesome/free-solid-svg-icons";
import ContentContainer from "./ContentContainer";
import ProductInfoContainer from "./ProductInfoContainer";

library.add(faAngleLeft, faAngleRight, faQuestionCircle, faAngleUp);

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
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
`;
const ImageContainer = styled("div")`
  display: flex;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  height: 90%;
  cursor: pointer;
`;
const NavBarBottom = styled("div")`
  display: flex;
  width: 100%;
  height: 5%;
  min-height: 30px;
  label: NavBarBtm;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
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

const Image = styled("img")`
  display: flex;
  max-width: 100%;
  max-height: 100%;
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
      photoIndex: 0
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
    const { products, productIndex, showInfo, imageIndex, isOpen } = this.state;
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
            <Image
              alt="product"
              src={product ? product.image[imageIndex] : null}
            />
          </ImageContainer>
          {/* <Image
            alt="product"
            src={product ? product.image[imageIndex] : null}
          />
 */}

          <NavBarBottom>
            <InfoBtn onClick={this.handleShowInfo}>
              <FontAwesomeIcon icon="question-circle" color="#016E5B" />
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
