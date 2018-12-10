import CR1 from "./backgroundImages/CR1.jpg";
import CR2 from "./backgroundImages/CR2.jpg";
import CR3 from "./backgroundImages/CR3.jpg";
import CR4 from "./backgroundImages/CR4.jpg";
import CR5 from "./backgroundImages/CR5.jpg";
import CR6 from "./backgroundImages/CR6.jpg";
import CR7 from "./backgroundImages/CR7.jpg";
import CR8 from "./backgroundImages/CR8.jpg";

const background = {
  name: "$ ( backgroundImages )",
  image: [CR1, CR2, CR3, CR4, CR5, CR6, CR7, CR8]
};

export default function getBackground() {
  return background;
}
