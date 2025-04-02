import { IconCloud } from "@/registry/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "next.js",
  "node.js",
  "tailwindcss",
  "vercel",
  "amazon",
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
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
