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
`;

const products = [
  {
    name: "$ ( Jumpsuit )",
    image: [JS_1, JS_2, JS_3],
    text: (
      <Text>
        Jumpsuit Version 100 <br /> <br /> <u>Featuring</u> <br /> <br />
        Merino Lined Waterproof Softshell fabric
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
        Pants Version 3 <br /> <br /> <u>Featuring</u> <br /> <br />
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
        Jacket Version 2 <br /> <br /> <u>Featuring</u> <br /> <br />
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
        Sling bag Version 1 <br /> <br /> <u>Featuring</u> <br /> <br />
        Rip-proof kevlar for security
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
        bucket hat Version 1 <br /> <br /> <u>Featuring</u> <br /> <br />
        waterproof cotton fabric w/ kevlar panels
        <br />
        two-parted brim
      </Text>
    )
  }
];

export default function getProducts() {
  return products;
}
