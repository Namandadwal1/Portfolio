import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Work from "./pages/Work";
import {Routes, Route} from "react-router-dom";

function App() {
  useEffect(() => {

    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 500); 
    });

    gsap.ticker.lagSmoothing(0);
 
  }, []);

 const [open, setOpen] = useState(
  localStorage.getItem("theme") === "dark"
);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", open);
    localStorage.setItem("theme", open ? "dark" : "light");
  }, [open]);

  return (
    <div className="">
      <Navbar open={open} setOpen={setOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
