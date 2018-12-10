import styled, { keyframes } from "react-emotion";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const Backdrop = styled("div")`
  label: BACKDROP;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  animation: ${fadeIn};
  animation-duration: 1.5s;
  animation-fill-mode: both;
`;

export default Backdrop;
