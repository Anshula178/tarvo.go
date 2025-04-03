import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        outfitThin: ["outfit-thin"], // Replace with your font name
        outfitLight: ["outfit-light"], // Replace with your font name
        outfitBold: ["outfit-bold"], // Replace with your font name
        outfitBlack: ["outfit-Black"], // Replace with your font name
        outfitSemiBold: ["outfit-semiBold"], // Replace with your font name
        outfitRegular: ["outfit-regular"], // Replace with your font name
        outfitMedium: ["outfit-medium"], // Replace with your font name
      },
    },
  },
  plugins: [],
} satisfies Config;
