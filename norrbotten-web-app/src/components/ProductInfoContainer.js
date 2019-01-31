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
  transition: background-color 1.5s ease;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 20%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 1) 100%
  );
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
