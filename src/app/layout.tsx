import type { Metadata } from "next";
import { LanguageProvider } from "./context/languageContext";
import "./globals.css";

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
      <LanguageProvider>
      <body>
        {children}
      </body>
      </LanguageProvider>
    </html>
  );
}
