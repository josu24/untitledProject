import React from "react";
import styled, { css } from "react-emotion";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";

library.add(faSquareFull);
const Container = styled("div")`
  position: absolute;
  right: 3%;
  top: 5%;
  justify-content: center;
  align-items: center;
  font-family: "rift-soft", sans-serif;
  font-size: 1em;
  font-weight: 500;
  label: email-btn;
  z-index: 10;
`;

const adress = css`
  margin-left: 12px;
  opacity: 0;
  word-break: break-all;
  line-height: 1;
  text-align: center;
  font-weight: 700;
  width: 0.5em;
  label: adress;
`;
const Icon = css`
  &:hover + p {
    transition: transform 1.5s, opacity 1.5s;
    opacity: 1;
    transform: translateY(12px);
  }
`;

const EmailBtn = ({ onMouseOver, onMouseOut, onClick }) => (
  <Container>
    <FontAwesomeIcon
      className={Icon}
      icon="square-full"
      color="rgba(255, 55, 115, 0.8)"
      size="2x"
      cursor="pointer"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
    />

    <p className={adress}>
      {" "}
      info@title
      <br />
      .com{" "}
    </p>
  </Container>
);
export default EmailBtn;
