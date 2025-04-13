import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeInOnScrollProps {
  children: React.ReactNode;
  start?: string;
  end?: string;
  scrub?: boolean;
  baseOpacity?: number;
}

const ScrollDown: React.FC<FadeInOnScrollProps> = ({
  children,
  start = "top bottom",
  end = "bottom top",
  scrub = true,
  baseOpacity = 1,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
        el,
        { opacity: baseOpacity },
        {
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 30%",
            scrub: true, 
          },
        }
      );
      

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [start, end, scrub, baseOpacity]);

  return <div ref={ref}>{children}</div>;
};

export default ScrollDown;
