import exclusiveImage1 from "../assets/images/exclusive/img1.png";
import exclusiveImage2 from "../assets/images/exclusive/img2.png";
import exclusiveImage3 from "../assets/images/exclusive/img3.png";

const exclusiveDealsLink = [
  { id: 1, title: "Vegan", path: "/vegan" },
  { id: 2, title: "Sushi", path: "/sushi" },
  { id: 3, title: "Pizza & Fast food", path: "/pizza" },
  { id: 4, title: "others", path: "/others" },
];

const exclusiveDeals = [
  {
    id: 1,
    content: [
      {
        id: 1,
        type: "Restaurant",
        title: "Chef Burgers London",
        img: exclusiveImage1,
      },
      {
        id: 2,
        type: "Restaurant",
        title: "Grand Ai Cafe London",
        img: exclusiveImage2,
      },
      {
        id: 3,
        type: "Restaurant",
        title: "Butterbrot Caf’e London",
        img: exclusiveImage3,
      },
    ],
  },
  {
    id: 2,
    content: [
      {
        id: 1,
        type: "Restaurant",
        title: "Chef Burgers London",
        img: exclusiveImage1,
      },
      {
        id: 2,
        type: "Restaurant",
        title: "Grand Ai Cafe London",
        img: exclusiveImage2,
      },
      {
        id: 3,
        type: "Restaurant",
        title: "Butterbrot Caf’e London",
        img: exclusiveImage3,
      },
    ],
  },
  {
    id: 3,
    content: [
      {
        id: 1,
        type: "Restaurant",
        title: "Chef Burgers London",
        img: exclusiveImage1,
      },
      {
        id: 2,
        type: "Restaurant",
        title: "Grand Ai Cafe London",
        img: exclusiveImage2,
      },
      {
        id: 3,
        type: "Restaurant",
        title: "Butterbrot Caf’e London",
        img: exclusiveImage3,
      },
    ],
  },
];

export { exclusiveDealsLink, exclusiveDeals };
