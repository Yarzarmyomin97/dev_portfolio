import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./_components/theme-provider";
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

export const metadata: Metadata = {
  title: `${profile.name} - ${profile.title}`,
  description: `Portfolio of ${profile.name}`,
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
      </body>
    </html>
  );
}
