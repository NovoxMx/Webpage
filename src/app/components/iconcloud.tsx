"use client";

import { useEffect, useState } from "react";
import { IconCloud } from "@/registry/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css",
  "next.js",
  "node.js",
  "tailwindcss",
  "vercel",
  "docker",
  "git",
  "github",
  "MySQL",
  "MongoDB",
  "php",
  "python",
  "c++",
  "Angular",
  "bootstrap",
  "figma",
];

export function IconCloudDemo() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    check();

    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Light mode → colores originales
  const lightImages = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}`
  );

  // Dark mode → todos blancos
  const darkImages = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/ffffff`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={isDark ? darkImages : lightImages} />
    </div>
  );
}
