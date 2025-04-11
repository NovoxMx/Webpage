"use client";
import Background from "./constants/background";
import Navbar from "./sections/navbar";
import About from "./sections/About";
import Skills from "./sections/skills";
import Education from "./sections/education";


export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Education />
      <Background />
    </div>

  );
}
