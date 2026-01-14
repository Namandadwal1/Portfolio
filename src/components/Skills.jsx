import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const skillsData = [
  { img: "/images/logos/mongodb-new.png", bg: true },
  { img: "/images/logos/express-new.png", bg: true },
  { img: "/images/logos/react-logo.svg ", bg: false },
  { img: "/images/logos/nodejs-new.png", bg: true },
  { img: "/images/logos/gsap-black.svg", bg: false },
  { img: "/images/logos/tailwindnew.svg", bg: false },
];

function Skills() {
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const mainRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width:1024px)", () => {
      const split = new SplitText(textRef.current, { type: "chars" });
    const split2 = new SplitText(textRef2.current, { type: "chars" });

    gsap.fromTo(split.chars, { y: -250 }, {
      y: 0,
      duration: 2,
      stagger: 0.25,
      scrollTrigger: {
        trigger: mainRef.current,
        scrub: true,
        start: "top bottom",
        end: "top 50%",
      }
    });

    gsap.fromTo(split2.chars, { y: -250 }, {
      y: 0,
      duration: 2,
      stagger: 0.25,
      scrollTrigger: {
        trigger: mainRef.current,
        scrub: true,
        start: "top 60%",
        end: "top top",
      }
    });

    return () => {
      split.revert();
      split2.revert();
    };
    })
    mm.add("(min-width:768px) and (max-width:1023px)", () => {
      const split = new SplitText(textRef.current, { type: "chars" });
    const split2 = new SplitText(textRef2.current, { type: "chars" });

    gsap.fromTo(split.chars, { y: -250 }, {
      y: 0,
      duration: 2,
      stagger: 0.25,
      scrollTrigger: {
        trigger: mainRef.current,
        scrub: true,
        start: "top bottom",
        end: "top 50%",
      }
    });

    gsap.fromTo(split2.chars, { y: -250 }, {
      y: 0,
      duration: 2,
      stagger: 0.25,
      scrollTrigger: {
        trigger: mainRef.current,
        scrub: true,
        start: "top 60%",
        end: "top top",
      }
    });

    return () => {
      split.revert();
      split2.revert();
    };
    });
    
  }, []);

  return (
    <div ref={mainRef} className="main w-full lg:mt-32 mt-12 overflow-hidden">
      <div>
        <h1 ref={textRef} className="lg:text-[16vw] overflow-hidden lg:leading-[10vw] text-[15vw] leading-[14vw] sm:text-[13vw] sm:leading-[13vw] md:text-[11vw] md:leading-[11vw] px-3 uppercase font-[font5] lg:p-10 flex items-center justify-center text-center">
          Modern
        </h1>
        <h1 ref={textRef2} className="lg:text-[16vw] overflow-hidden lg:leading-[10vw] text-[15vw] leading-[14vw] sm:text-[13vw] sm:leading-[13vw] md:text-[11vw] md:leading-[11vw] px-3 uppercase font-[font5] lg:p-10 flex items-center justify-center text-center">
          tech stack
        </h1>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden lg:grid w-full grid-cols-3 grid-rows-2">
        {skillsData.map((skill, index) => (
          <div key={index} className={`h-[15vw]   flex items-center justify-center
            ${index % 3 === 0 ? "border-l" : "border-l-0"}
            ${index < 3 ? "border-b-0" : "border-b-0"}
          `}>
            <img
              className={`object-contain h-20 w-auto ${skill.bg ? 'icon-white-bg' : 'icon-adaptive'}`}
              src={skill.img}
              alt="skill-logo"
            />
          </div>
        ))}
      </div>

      {/* Mobile Marquee View */}
      <div className="lg:hidden flex w-full overflow-hidden py-10 relative">
        <div className="flex animate-marquee gap-10 whitespace-nowrap">
          {/* Duplicate list for seamless loop */}
          {[...skillsData, ...skillsData, ...skillsData].map((skill, index) => (
            <div key={index} className="shrink-0 w-[20vw] h-[20vw] flex items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-full">
              <img
                className={`object-contain h-[50%] w-[50%] ${skill.bg ? 'icon-white-bg' : 'icon-adaptive'}`}
                src={skill.img}
                alt="skill-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
