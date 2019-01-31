import JS_1 from "./productImages/JS_1.jpg";
import JS_2 from "./productImages/JS_2.jpg";
import JS_3 from "./productImages/JS_3.jpg";
import PNT_1 from "./productImages/PNT_1.jpg";
import PNT_2 from "./productImages/PNT_2.jpg";
import PNT_3 from "./productImages/PNT_3.jpg";
import JKT_1 from "./productImages/JKT_1.jpg";
import JKT_2 from "./productImages/JKT_2.jpg";
import JKT_3 from "./productImages/JKT_3.jpg";
import SB_1 from "./productImages/SB_1.jpg";
import BH_1 from "./productImages/BH_1.jpg";
import styled from "react-emotion";
import React from "react";

const Text = styled("p")`
  text-align: start;
  padding: 5px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
`;

const Header = styled("p")`
  color: rgba(255, 55, 115, 1);
  font-weight: 500;
  font-size: 1.2em;
`;

const products = [
  {
    name: "$ ( Jumpsuit )",
    image: [JS_1, JS_2, JS_3],
    text: (
      <Text>
        <Header>Jumpsuit Version 4</Header>
        <br /> <u>Featuring</u> <br /> <br />
        Waterproof Stretch Fabric
        <br />
        Built-in kangaroo pockets
        <br />
        Articulated knees and elbows
        <br />
        Full body zipper
        <br />
      </Text>
    )
  },
  {
    name: "$ ( Pants )",
    image: [PNT_1, PNT_2, PNT_3],
    text: (
      <Text>
        <Header>Pants Version 3</Header> <br /> <u>Featuring</u> <br /> <br />
        Waterproof cotton fabric
        <br />
        Built-in waistband and pocket
        <br />
        Waterproof zipper
        <br />
        Elastic waist buttoning
        <br />
      </Text>
    )
  },
  {
    name: "$ ( Jacket )",
    image: [JKT_1, JKT_2, JKT_3],
    text: (
      <Text>
        <Header>Jacket Version 2</Header> <br /> <u>Featuring</u> <br /> <br />
        Waterproof cotton fabric
        <br />
        high neck collar
        <br />
        Inner hood for warmth
        <br />
        outer hood for weather resistancy
        <br />
        waterproof zipper
      </Text>
    )
  },
  {
    name: "$ ( Sling bag )",
    image: [SB_1],
    text: (
      <Text>
        <Header>Sling bag Version 1</Header>
        <br /> <u>Featuring</u> <br /> <br />
        Rip-proof kevlar fabric for security
        <br />
        Magnetic fidlock buckle
        <br />
        waterproof zipper
      </Text>
    )
  },
  {
    name: "$ ( Bucket hat )",
    image: [BH_1],
    text: (
      <Text>
        <Header>bucket hat Version 1</Header>
        <br /> <u>Featuring</u> <br /> <br />
        waterproof cotton fabric w/ kevlar panels
        <br />
        two-parted brim enabling wearing headphones
      </Text>
    )
  }
];

export default function getProducts() {
  return products;
}
