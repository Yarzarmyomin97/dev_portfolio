import { ThemePalette } from "./types";

export const themes: ThemePalette[] = [
  {
    name: "Aurora",
    slug: "aurora",
    light: {
      primary: "#6366F1",
      secondary: "#EC4899",
      accent: "#06B6D4",
      background: "#F8FAFC",
      surface: "rgba(255, 255, 255, 0.7)",
      text: "#0F172A",
      border: "rgba(255, 255, 255, 0.5)",
    },
    dark: {
      primary: "#818CF8",
      secondary: "#F472B6",
      accent: "#22D3EE",
      background: "#0B0E1A",
      surface: "rgba(15, 20, 40, 0.7)",
      text: "#E2E8F0",
      border: "rgba(255, 255, 255, 0.1)",
    },
  },
  {
    name: "Sunset",
    slug: "sunset",
    light: {
      primary: "#F97316",
      secondary: "#EF4444",
      accent: "#FBBF24",
      background: "#FFFBF5",
      surface: "rgba(255, 255, 255, 0.7)",
      text: "#1C1008",
      border: "rgba(255, 255, 255, 0.5)",
    },
    dark: {
      primary: "#FB923C",
      secondary: "#F87171",
      accent: "#FCD34D",
      background: "#1A0F05",
      surface: "rgba(30, 18, 8, 0.7)",
      text: "#FEF3C7",
      border: "rgba(255, 255, 255, 0.1)",
    },
  },
  {
    name: "Ocean",
    slug: "ocean",
    light: {
      primary: "#0EA5E9",
      secondary: "#10B981",
      accent: "#38BDF8",
      background: "#F0F9FF",
      surface: "rgba(255, 255, 255, 0.7)",
      text: "#0C1425",
      border: "rgba(255, 255, 255, 0.5)",
    },
    dark: {
      primary: "#38BDF8",
      secondary: "#34D399",
      accent: "#7DD3FC",
      background: "#05101F",
      surface: "rgba(8, 20, 40, 0.7)",
      text: "#E0F2FE",
      border: "rgba(255, 255, 255, 0.1)",
    },
  },
];

export const defaultTheme = themes[0]; // Aurora
