import BlogOne from "@/assets/images/blog-3.png";
import BlogTwo from "@/assets/images/blog-1.jpg";
import BlogThree from "@/assets/images/blog-2.jpg";

export const blogCards = [
  {
    id: 1,
    src: BlogTwo.src,
    alt: "Investments in 5G",
    title: `Ray Dalio Stops Considering Cash "Trash"`,
    category: "Management",
    author: "Arman Armanov, October 13, 2022",
    description:
      "The Ministry of Finance has developed a new format for individual investment accounts (IIS-III)…",
    content: [
      `Ray Dalio, founder of Bridgewater Associates, has shifted his stance on cash, no longer calling it "trash." He explained that in the current macroeconomic environment, holding cash can be a strategic choice for investors.`,
      `Dalio previously argued that cash was a poor store of value compared to equities or other assets. However, rising interest rates and inflationary pressures have changed the calculus, making liquidity more attractive in certain contexts.`,
    ],
    related: [
      {
        id: 2,
        title: "Investments in 5G are a prerequisite for economic development",
      },
      {
        id: 3,
        title: "The Ministry of Finance has proposed a single tax deduction.",
      },
    ],
  },
  {
    id: 2,
    src: BlogThree.src,
    alt: "Single tax deduction",
    title: "Investments in 5G are a prerequisite for economic development",
    category: "Management",
    author: "Arman Armanov, October 13, 2022",
    description:
      "The Ministry of Finance has developed a new format for individual investment accounts (IIS-III)…",
    content: [
      `Investments in 5G infrastructure are seen as critical for driving economic growth. Experts highlight that widespread adoption of 5G will enable new industries, improve connectivity, and accelerate digital transformation.`,
      `Governments and private investors are collaborating to fund 5G projects. Analysts believe that without significant investment, countries risk falling behind in technological competitiveness and productivity gains.`,
    ],
    related: [
      { id: 1, title: `Ray Dalio Stops Considering Cash "Trash"` },
      {
        id: 3,
        title: "The Ministry of Finance has proposed a single tax deduction.",
      },
    ],
  },
  {
    id: 3,
    src: BlogOne.src,
    alt: "Ray Dalio",
    title: "The Ministry of Finance has proposed a single tax deduction.",
    category: "Management",
    author: "Arman Armanov, October 13, 2022",
    description:
      "The Ministry of Finance has developed a new format for individual investment accounts (IIS-III)…",
    content: [
      `Individual Investment Accounts (IIA) of the third type will replace type I IIA. The new format of IIA will be included in the unified tax deduction system for all investment products, including agreements with pension funds and insurance policies.`,
      `The first two types of IIA appeared in 2015. According to data from the Moscow Exchange at the end of July, 5.6 million people had opened them. IIA‑I allows its owner to receive 13% of the amount deposited into the account during the year, but no more than 400,000 rubles. Under IIA‑II, all income from operations is exempt from tax when the account is closed.`,
    ],
    related: [
      { id: 1, title: `Ray Dalio Stops Considering Cash "Trash"` },
      {
        id: 2,
        title: "Investments in 5G are a prerequisite for economic development",
      },
    ],
  },
];

// orderMap stays the same if you need routing logic
export const orderMap = [
  [2, 0, 1],
  [0, 1, 2],
  [1, 2, 0],
  [0, 2, 1],
  [1, 0, 2],
  [2, 1, 0],
  [0, 1, 2],
  [1, 2, 0],
  [2, 0, 1],
];
