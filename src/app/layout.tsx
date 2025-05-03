import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Novox Website",
  description: "Portfolio website for Novox",
  icons: {
    icon: "/svg/Novox.svg",
    shortcut: "/svg/Novox.svg",
    apple: "/svg/Novox.svg",
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
        {children}
      </body>
    </html>
  );
}
