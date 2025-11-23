import BlueBear from "@/assets/images/blue-bear.svg";
import BlockChain from "@/assets/images/block-chain.svg";
import Chess from "@/assets/images/chess.svg";
import Arabic from "@/assets/images/arabic.svg";
import Puzzle from "@/assets/images/puzzle.svg";

export const productCards = [
  {
    id: 0,
    src: BlueBear.src,
    title: "Hedge Fund",
    description:
      "A classic choice for professional investors with defined moderate risk parameters. Based on investing in S&P 500 index stocks, diversified across 11 economic sectors.",
    content: [
      // beside image paragraph
      `Investments aimed at long-term capital growth through investing in securities of international issuers with high growth potential. Investments aimed at long-term capital growth through investing in securities of international issuers with high growth potential. Investments aimed at long-term capital growth through investing in securities of international issuers with high growth potential.`,
      // first long paragraph
      `Individual Investment Accounts (IIAs) of the third type will replace IIAs of the first type. The new format of IIAs will be included in the unified tax deduction system for all investment products, including agreements with pension funds and insurance policies. This was reported by Vedomosti, citing a concept developed by the Ministry of Finance for the development of such a system.`,
      // second long paragraph
      `The first two types of Individual Investment Accounts (IIAs) appeared in 2015. According to data from the Moscow Exchange at the end of July, they had been opened by 5.6 million people. IIA‑I allows its owner to receive 13% of the amount deposited into the account during the year, but no more than 400,000 rubles (the maximum deduction is 52,000 rubles per year). Under IIA‑II, all income from operations is exempt from tax when the account is closed. To receive benefits under both formats, the account must be held for three years without withdrawing funds. Only one IIA can be held, and no more than 1 million rubles can be deposited into it per year.`,
    ],
  },
  {
    id: 1,
    src: BlockChain.src,
    title: "Crypto Fund",
    description:
      "Provides clients with legal opportunities to invest in cryptocurrency and related products.",
    content: [
      `Investments focused on blockchain technologies and digital currencies with strong growth potential. Investments focused on blockchain technologies and digital currencies with strong growth potential. Investments focused on blockchain technologies and digital currencies with strong growth potential.`,
      `Crypto funds provide exposure to decentralized finance projects and digital assets while maintaining compliance with evolving regulations. They are designed to capture the rapid expansion of blockchain ecosystems and offer investors access to innovative markets.`,
      `Due to volatility, crypto funds are suitable for investors with higher risk tolerance. They can deliver significant returns but require patience and long-term commitment to withstand market fluctuations and regulatory changes.`,
    ],
  },
  {
    id: 2,
    src: Chess.src,
    title: "Venture Fund",
    description:
      "Investments in companies and projects (startups), including companies at the pre-IPO stage.",
    content: [
      `Investments aimed at supporting startups and early-stage companies with disruptive potential. Investments aimed at supporting startups and early-stage companies with disruptive potential. Investments aimed at supporting startups and early-stage companies with disruptive potential.`,
      `Venture funds provide access to companies before they go public, allowing investors to benefit from early growth. They focus on industries such as technology, healthcare, and renewable energy, where innovation drives rapid expansion.`,
      `These funds carry higher risk but can yield exceptional returns. Investors must be prepared for long holding periods and the possibility of failure among some ventures, balanced by the success of others.`,
    ],
  },
  {
    id: 3,
    src: Arabic.src,
    title: "Sukuk Fund",
    description:
      "Offers the opportunity to make long-term investments in Shariah-compliant fixed-income instruments.",
    content: [
      `Investments structured to comply with Islamic finance principles, avoiding interest-based returns. Investments structured to comply with Islamic finance principles, avoiding interest-based returns. Investments structured to comply with Islamic finance principles, avoiding interest-based returns.`,
      `Sukuk funds generate stable income streams through asset-backed securities. They are designed for investors seeking ethical investments aligned with Shariah law while maintaining predictable returns.`,
      `These funds are ideal for long-term investors who value both financial performance and adherence to religious principles. They provide diversification and stability within a broader portfolio.`,
    ],
  },
  {
    id: 4,
    src: Puzzle.src,
    title: "Custom/Private",
    description:
      "We can accommodate your wishes regarding the fund's parameters.",
    content: [
      `Investments tailored to individual preferences and risk profiles. Investments tailored to individual preferences and risk profiles. Investments tailored to individual preferences and risk profiles.`,
      `Custom funds allow investors to define sector focus, asset allocation, and risk appetite. They are designed to meet unique financial goals, whether conservative or growth-oriented.`,
      `This option provides flexibility and personalization, ensuring alignment with investor objectives. It is suitable for clients who require bespoke solutions rather than standardized investment products.`,
    ],
  },
];

// ✅ orderMap for 5 products
export const orderMap = [
  [0, 1, 2, 3, 4], // page 1
  [1, 2, 3, 4, 0], // page 2
  [2, 3, 4, 0, 1], // page 3
  [3, 4, 0, 1, 2], // page 4
  [4, 0, 1, 2, 3], // page 5
];
