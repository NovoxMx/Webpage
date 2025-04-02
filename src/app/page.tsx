"use client";
import Background from "./constants/background";
import Navbar from "./components/navbar";
import About from "./components/About";
import Skills from "./components/skills";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <About />
        <Skills />
      </div>
      <Background />
    </div>

  );
}
