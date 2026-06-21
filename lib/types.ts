export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string | null;
  sourceUrl: string | null;
  imagePlaceholder: string;
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  startDate: string;
  endDate: string | null;
  accomplishments: string[];
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  border: string;
}

export interface ThemePalette {
  name: string;
  slug: string;
  light: ThemeColors;
  dark: ThemeColors;
}

export interface ThemePreference {
  mode: "light" | "dark";
  palette: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface SectionInfo {
  id: string;
  label: string;
}
