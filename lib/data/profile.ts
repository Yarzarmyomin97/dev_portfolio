import { SocialLink } from "../types";

export const profile = {
  name: "Yar Zar Myo Min",
  title: "Flutter Developer | Mobile Application Developer",
  tagline: "Building reliable, user-focused mobile applications with Flutter",
  bio: "I'm a a dedicated and innovative Mobile Application Developer with 7+ years of experience in designing, implementing, and maintaining cross-platform mobile applications. Proficient in utilizing Flutter framework to create smooth, responsive, and visually appealing user interfaces. Seeking to leverage expertise in mobile app development to contribute effectively to a dynamic team. Skilled in Flutter, Dart, Ionic, Android, iOS, Java, C#, Software Development and Mobile Applications.",
  skills: [
    "Flutter",
    "Dart",
    "Ionic",
    "Android",
    "iOS",
    "Java",
    "C#",
    "JavaScript",
    "Angular",
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "Supabase",
    "Docker",
    "ClaudeCode",
  ],
  imagePlaceholder: "/images/profile.jpeg",
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/yarzarmyomin97", icon: "github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/yarzarmyomin", icon: "linkedin" },
    { platform: "Email", url: "mailto:yarzarmyomin.dev@gmail.com", icon: "email" },
  ] satisfies SocialLink[],
  get copyright() {
    return `© ${new Date().getFullYear()} ${this.name}. All rights reserved.`;
  },
};
