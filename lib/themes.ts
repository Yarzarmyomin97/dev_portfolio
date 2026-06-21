import { ThemePalette } from "./types";

export const themes: ThemePalette[] = [
  {
    name: "Ocean",
    slug: "ocean",
    light: {
      primary: "#0077B6",
      secondary: "#00B4D8",
      accent: "#90E0EF",
      background: "#F8FDFF",
      surface: "#FFFFFF",
      text: "#1B2838",
      border: "#CAF0F8",
    },
    dark: {
      primary: "#00B4D8",
      secondary: "#48CAE4",
      accent: "#90E0EF",
      background: "#0A1628",
      surface: "#132238",
      text: "#E8F4F8",
      border: "#1B3A5C",
    },
  },
  {
    name: "Forest",
    slug: "forest",
    light: {
      primary: "#2D6A4F",
      secondary: "#40916C",
      accent: "#95D5B2",
      background: "#F5FAF7",
      surface: "#FFFFFF",
      text: "#1B2E23",
      border: "#B7E4C7",
    },
    dark: {
      primary: "#52B788",
      secondary: "#74C69D",
      accent: "#95D5B2",
      background: "#0B1A12",
      surface: "#132A1C",
      text: "#E8F5EC",
      border: "#1E4D33",
    },
  },
  {
    name: "Sunset",
    slug: "sunset",
    light: {
      primary: "#E85D04",
      secondary: "#F48C06",
      accent: "#FFBA08",
      background: "#FFFBF5",
      surface: "#FFFFFF",
      text: "#2E1B0E",
      border: "#FDDCB5",
    },
    dark: {
      primary: "#F48C06",
      secondary: "#FFBA08",
      accent: "#FFD166",
      background: "#1A0F05",
      surface: "#2A1A0D",
      text: "#F8EDD8",
      border: "#4D2E14",
    },
  },
];

export const defaultTheme = themes[0]; // Ocean
