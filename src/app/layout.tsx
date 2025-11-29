import type { Metadata } from "next";
import { LanguageProvider } from "./context/languageContext";
import "./globals.css";
import { ThemeProvider } from "./context/themeContext";

export const metadata: Metadata = {
  title: "Novox Website",
  description: "Portfolio website for Novox",
  icons: {
    icon: "/svg/Logo.svg",
    shortcut: "/svg/Logo.svg",
    apple: "/svg/Logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
