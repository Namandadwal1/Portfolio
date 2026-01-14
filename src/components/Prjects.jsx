import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
function Prjects() {
  const ProjectRef1 = useRef(null);
  const ProjectRef = useRef(null);
  const mainRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo(
        ProjectRef1.current,
        {
          x: 1600,
        },
        {
          x: 0,
          duration: 2,
          scrollTrigger: {
            trigger: mainRef.current,
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=4000",
          },
        }
      );
    });

    return () => mm.revert();
  }, []);
  return (
    <>
      <div
        ref={mainRef}
        className="lg:pt-32 p-5 w-full h-screen relative hidden sm:hidden md:hidden lg:flex items-center justify-center "
      >
        <div className="flex relative flex-col h-[25vw] items-center justify-center overflow-">
          <h1
            ref={ProjectRef}
            className="uppercase origin-center lg:text-[25vw] lg:leading-[25vw] text-[15vw] font-[font5]   "
          >
            Projects
          </h1>
        </div>
        <div ref={ProjectRef1} className="h-screen grid grid-cols-2 grid-rows-2 overflow-y-scroll   gap-10 w-full bg-[var(--background)] absolute p-5">
          <div className="h-full w-full">
            <img
              className="h-full w-full object-cover rounded-md origin-bottom"
              src="/images/projects/image (1).png"
              alt=""
            />
          </div>
          <div className="h-full w-full">
            <img
              className="h-full w-full object-cover rounded-md origin-center"
              src="/images/projects/image (2).png"
              alt=""
            />
          </div>
          <div className="h-full w-full">
            <img
              className="h-full w-full object-cover rounded-md origin-center"
              src="/images/projects/image (3).png"
              alt=""
            />
          </div>
          <div className="h-full w-full">
            <img
              className="h-full w-full object-cover rounded-md origin-center"
              src="/images/projects/image (4).png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <h1 className="font-[font5] uppercase text-[17vw] leading-[17vw] flex items-center justify-center">PRojects</h1>
        <div className="projects lg:hidden md:grid md:grid-cols-2 flex flex-col sm:flex sm:flex-col gap-5 mt-5 px-2">
          <div className="image overflow-hidden rounded-md">
            <img className="h-full w-full object-cover" src="/images/projects/image (1).png" alt="" />
          </div>
          <div className="image overflow-hidden rounded-md">
            <img className="h-full w-full object-cover" src="/images/projects/image (2).png" alt="" />
          </div>
          <div className="image overflow-hidden rounded-md">
            <img className="h-full w-full object-cover" src="/images/projects/image (3).png" alt="" />
          </div>
          <div className="image overflow-hidden rounded-md">
            <img className="h-full w-full object-cover" src="/images/projects/image (4).png" alt="" />
          </div>
        </div>
      </div>
    </>

  );
}


export default Prjects;
