import React from "react";
import styled, { keyframes } from "react-emotion";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  30% {
      transform: scaleY(1);
      opacity: 0.5;
  }
  100%{
    opacity: 1;

  }
`;

const Container = styled("div")`
  justify-content: flex-end;
  box-sizing: border-box;
  text-align: end;
  font-size: 1.1em;
  font-weight: 400;
  line-height: 1.5;
  transition: background-color 1.5s ease;
  background-color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }
  animation: ${fadeIn};
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-fill-mode: both;
  margin-left: 15%;
  white-space: nowrap;
  width: min-content;
  label: INFOTEXT;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  @media screen and (max-width: 620px) {
    display: none;
  }
`;

const ProductInfoContainer = ({ children }) => (
  <Container
    onClick={e => {
      e.stopPropagation();
    }}
  >
    {children}
  </Container>
);

export default ProductInfoContainer;
