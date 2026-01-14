import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

function About() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const mainRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // about us section animation
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const split1 = new SplitText(headingRef.current, {
        type: "chars",
      });
      gsap.fromTo(
        split1.chars,
        {
          y: 250,
        },
        {
          y: 0,
          stagger: 0.25,
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 70%",
            end: "top top",
            scrub: true,
          },
        }
      );
      // About para section animation
      const split2 = new SplitText(paraRef.current, {
        type: "chars",
      });
      gsap.fromTo(
        split2.chars,
        {
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.25,
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 70%",
            end: "top 10%",
            scrub: true,
          },
        }
      );
      // Image Animation
      gsap.to(imageRef.current, {
        height: "100vh",
        width: "100vw",
        right: "0",
        top: "0",
        scrollTrigger: {
          trigger: mainRef.current,
          scrub: true,
          start: "top top",
          pin: true,
          end: "bottom top",
        },
      });
      return () => {
        split1.revert();
        split2.revert();
      };
    })

  }, []);
  return (
    <>
      <div ref={mainRef} className="h-screen lg:flex hidden relative justify-around  ">
        <div className=" px-5">
          <h1
            ref={headingRef}
            className="font-[font5] overflow-hidden mt-20 text-[13vw]  uppercase leading-[14vw]"
          >
            About us
          </h1>
          <p
            ref={paraRef}
            className="font-[font1] w-1/2  pt-10 uppercase lg:text-xl font-medium tracking-wider"
          >
            I’m a MERN stack developer focused on building modern, interactive web
            experiences. I specialize in creating clean, responsive UIs using
            Tailwind CSS and bringing them to life with smooth GSAP animations. My
            goal is to craft fast, engaging interfaces that feel intuitive,
            polished, and visually impactful.
          </p>
        </div>
        <div
          ref={imageRef}
          className="h-[32vw] origin-right absolute w-[43vw] right-10 top-28 flex items-center justify-center rounded-md overflow-hidden"
        >
          <img
            className="h-full w-full object-cover"
            src="/images/projects/image (4).png"
            alt=""
          />
        </div>
      </div>
      <div className="lg:hidden flex flex-col items-center justify-center">
        <h1 className="text-[17vw] font-[font5] uppercase flex items-center justify-center">About us</h1>
        <p className=" text-center tracking-wider font-[font1]">I’m a MERN stack developer focused on building modern, interactive web experiences. I specialize in creating clean, responsive UIs using Tailwind CSS and bringing them to life with smooth GSAP animations. My goal is to craft fast, engaging interfaces that feel intuitive, polished, and visually impactful.</p>
        <div className="h-[62vw] w-[82vw] flex items-center roumd  justify-center rounded-md overflow-hidden mt-10">
          <img className="h-full w-full object-cover" src="/images/projects/image (2).png" alt="" />
        </div>
      </div>
    </>

  );
}

export default About;
