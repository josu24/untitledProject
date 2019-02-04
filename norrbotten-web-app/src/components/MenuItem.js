import React from "react";
import styled, { css } from "react-emotion";
import MenuItemLine from "./MenuItemLine";

const dynamicStyle = props =>
  css`
    opacity: ${props.opacity};
    font-weight: 500;
    font-size: 1.1em;
  `;
const Container = styled("li")`
  color: #f5aead !important;
  ${dynamicStyle};
  label: MenuItem;
`;

const MenuItem = ({ item, active, click }) => (
  <Container
    opacity={active ? 1 : 0}
    display={active ? "100%" : "0"}
    onClick={() => click(item)}
  >
    <a>
      <MenuItemLine name={item} active={active} />
    </a>
  </Container>
);

export default MenuItem;
