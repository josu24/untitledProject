import React from "react";
import { css, keyframes } from "react-emotion";

const strike = keyframes`
	0% {
        transform: scaleX(0);
        background: rgba(255, 55, 115, 0.3);
    }

    45%{
        background: rgba(255, 55, 115, 0.6);
    }
    
    60% {
        transform: scaleX(0.85);
    }

	100% {
        transform: scaleX(1);
        background: rgba(255, 55, 115, 0.8);
}
`;
const before = css`
  display: inline-block;
  position: relative;
  width: 100%;

  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    background: rgba(255, 55, 115, 0.8);
    height: 2px;
    margin-top: -0.6em;
    transform-origin: center center;
    animation: ${strike} 0.5s 0s linear 1;
  }
`;
const after = css`
  ::after {
    margin-top: -0.6em;
    content: "";
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    background: rgba(255, 55, 115, 0.8);
    height: 2px;
    animation: ${strike} 0.5s 0s linear 1;
  }
`;
const MenuItemLine = ({ active, name }) => (
  <div className={active ? after : before}>{name}</div>
);
export default MenuItemLine;
