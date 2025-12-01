"use client";
import React, {
  useRef,
  useEffect,
  useState,
  CSSProperties
} from "react";
import { gsap } from "gsap";

interface PixelTransitionProps {
  firstContent: React.ReactNode | string;
  secondContent: React.ReactNode | string;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
  aspectRatio?: string;
}

const PixelTransition: React.FC<PixelTransitionProps> = ({
  firstContent,
  secondContent,
  gridSize = 12,
  pixelColor = "currentColor",
  animationStepDuration = 0.5,
  once = false,
  aspectRatio = "100%",
  className = "",
  style = {}
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pixelGridRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const delayedCallRef = useRef<gsap.core.Tween | null>(null);

  const [isActive, setIsActive] = useState<boolean>(false);

  // Detect mobile/touch
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches);

  // Build the grid of pixels
  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = "";

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixelated-image-card__pixel");
        pixel.classList.add("absolute", "hidden");

        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;

        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixels = (activate: boolean): void => {
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;

    const firstContentEl = containerRef.current?.querySelector(
      ".pixel-transition-first"
    ) as HTMLDivElement;

    if (!pixelGridEl || !activeEl || !firstContentEl) return;

    const pixels = pixelGridEl.querySelectorAll<HTMLDivElement>(
      ".pixelated-image-card__pixel"
    );
    if (!pixels.length) return;

    // Kill previous animations
    gsap.killTweensOf(pixels);
    if (delayedCallRef.current) delayedCallRef.current.kill();

    // Hide/show content
    firstContentEl.style.opacity = activate ? "0" : "1";
    activeEl.style.display = activate ? "block" : "none";

    // Initial state of pixels
    gsap.set(pixels, { display: "none" });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    // Pixel-in effect
    gsap.to(pixels, {
      display: "block",
      duration: 0,
      stagger: {
        each: staggerDuration,
        from: "random"
      }
    });

    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      // After reveal animation is done
      if (activate) {
        activeEl.style.display = "block";
      } else {
        if (!once) {
          activeEl.style.display = "none";
        }
      }
    });

    // Pixel-out effect (remove pixel grid)
    gsap.to(pixels, {
      display: "none",
      duration: 0,
      delay: animationStepDuration,
      stagger: {
        each: staggerDuration,
        from: "random"
      }
    });
  };

  const handleClick = (): void => {
    if (!isActive) animatePixels(true);
    else if (isActive && !once) animatePixels(false);
  };

  return (
    <div
      ref={containerRef}
      className={`
        ${className}
        relative
        overflow-hidden
        rounded-[15px]
        bg-neutral-200
        text-gray-700
        cursor-pointer
        font-MMomo 
        dark:bg-neutral-800
        dark:text-white
      `}
      style={style}
      onClick={handleClick}
      tabIndex={0}
    >
      {/* Aspect ratio spacer */}
      <div style={{ paddingTop: aspectRatio }} />

      {/* FIRST CONTENT */}
      <div
        className="
          absolute inset-0 w-full h-full
          pixel-transition-first
          transition-opacity duration-200
        "
      >
        {firstContent}
      </div>

      {/* SECOND CONTENT */}
      <div
        ref={activeRef}
        className="absolute inset-0 w-full h-full z-2"
        style={{ display: "none" }}
      >
        {secondContent}
      </div>

      {/* PIXEL GRID */}
      <div
        ref={pixelGridRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-3"
      />
    </div>
  );
};

export default PixelTransition;
