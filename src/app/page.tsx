"use client";

import { useState, useEffect } from "react";

import Background from "./constants/background";
import Navbar from "./sections/navbar";
import About from "./sections/about";
import Skills from "./sections/skills";
import Education from "./sections/education";
import ScrollDown from "./constants/scrolldown";
import Project from "./sections/projects";
import Experience from "./sections/experience";
import Badges from "./sections/badges";
import PhoneWarning from "./components/phonewarning";
import Contact from "./sections/contact";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // w < 768px = modo móvil
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return <PhoneWarning />;

  return (
    <div>
      <Navbar />
      <About />
      <Skills />

      <ScrollDown baseOpacity={0.5}>
        <Education />
      </ScrollDown>

      <ScrollDown baseOpacity={0.5}>
        <Project />
      </ScrollDown>

      <ScrollDown baseOpacity={0.5}>
        <Experience />
      </ScrollDown>

      <ScrollDown baseOpacity={0.5}>
        <Badges />
      </ScrollDown>

      <ScrollDown baseOpacity={0.5}>
        <Contact />
      </ScrollDown>

      <Background />
    </div>
  );
}
