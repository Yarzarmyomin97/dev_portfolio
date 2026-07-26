import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./_components/theme-provider";
import { AnalyticsTracker } from "./_components/analytics-tracker";
import { profile } from "@/lib/data/profile";

const archivo = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://yarzarmyomin.vercel.app";

const description = "Discover my projects, technical expertise, and development journey through an interactive portfolio built with modern web technologies.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: profile.name,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [
    profile.title,
    ...profile.skills,
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: profile.name,
    description,
    url: SITE_URL,
    siteName: profile.name,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${profile.name} - ${profile.title}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* Aurora gradient mesh background */}
        <div className="aurora-bg" aria-hidden="true">
          <div className="aurora-blob-1" />
          <div className="aurora-blob-2" />
        </div>
        <ThemeProvider>{children}</ThemeProvider>
        <AnalyticsTracker />
      </body>
    </html>
  );
}
