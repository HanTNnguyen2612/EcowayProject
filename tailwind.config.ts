import { nextui } from "@nextui-org/theme";
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat Alternates"],
        mono: ["var(--font-mono)"],
        satoshi: ["Satoshi"]

      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            default: {
              DEFAULT: "#fff",
              foreground: "#fff",
            },
            primary: {
              DEFAULT: "#0e2714",
              foreground: "#fff",
            },
            focus: "#6babe2",
          },
        },
        light: {
          colors: {
            default: {
              DEFAULT: "#fff",
              foreground: "#0e2714",
            },
            primary: {
              DEFAULT: "#0e2714",
              foreground: "#fff",
            },
            foreground: {
              DEFAULT: "#fff",
            },
            focus: "#6babe2",
          },
        },
      },
    }),
  ],
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
};
