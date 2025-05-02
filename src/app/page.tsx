"use client";
import Background from "./constants/background";
import Navbar from "./sections/navbar";
import About from "./sections/About";
import Skills from "./sections/skills";
import Education from "./sections/education";
import ScrollDown from "./constants/scrolldown";
import Project from "./sections/projects";


export default function Home() {
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
      <Background />
    </div>

  );
}
