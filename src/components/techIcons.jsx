import { brandIcons } from "./brandIcons";

// Marks Simple Icons does not ship — Amazon and OpenAI were both pulled over
// trademark — are drawn here instead.
const customIcons = {
  AWS: {
    color: "#FF9900",
    body: (
      <>
        <text
          x="12"
          y="12.4"
          textAnchor="middle"
          fontSize="10.5"
          fontWeight="700"
          fontFamily="Helvetica, Arial, sans-serif"
          letterSpacing="-0.4"
        >
          aws
        </text>
        <path
          d="M2.6 16.5c2.7 2.1 6 3.2 9.4 3.2s6.7-1.1 9.4-3.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <path d="M19.5 13.9 23.6 16l-3.4 2.9z" />
      </>
    ),
  },
};

export const techIcons = { ...brandIcons, ...customIcons };
