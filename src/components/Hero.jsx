import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);
function Hero() {
  const textRef = useRef(null);

  useGSAP(() => {
    // const split = new SplitText()
    const mm = gsap.matchMedia();
    mm.add("(min-width:1024px)", () => {
      // Main Text Animation
      gsap.fromTo(
        ".text1",
        {
          x: -200,
        },
        {
          x: 0,
          duration: 1,
          ease: "power4.inOut",
        }
      );
      gsap.fromTo(
        ".text2",
        {
          x: 200,
        },
        {
          x: 0,
          duration: 1,
          ease: "power4.inOut",
        }
      );
      // Greeting Text animation
      const split = new SplitText(textRef.current, {
        type: "chars",
      });
      gsap.fromTo(
        split.chars,
        {
          opacity: 0,
          filter: "blur(5px)"
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power3.inOut",

          filter: "blur(0px)",
          stagger: {
            amount: 0.25,
          },
        }
      );
      // Image animation
      gsap.fromTo(".img", {
        y: 90
      }, {
        y: 0,
        duration: 1,
        ease: "power4.inOut"

      })
      return () => {
        split.revert(); // REQUIRED
      };


    });
    mm.add("(min-width:768px) and (max-width:1023px)", () => {
      // Main Text Animation
      gsap.fromTo(
        ".text1",
        {
          x: -200,
        },
        {
          x: 0,
          duration: 1,
          ease: "power4.inOut",
        }
      );
      gsap.fromTo(
        ".text2",
        {
          x: 200,
        },
        {
          x: 0,
          duration: 1,
          ease: "power4.inOut",
        }
      );
      // Greeting Text animation
      const split = new SplitText(textRef.current, {
        type: "chars",
      });
      gsap.fromTo(
        split.chars,
        {
          opacity: 0,
          filter: "blur(5px)"
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power3.inOut",

          filter: "blur(0px)",
          stagger: {
            amount: 0.25,
          },
        }
      );
      // Image animation
      gsap.fromTo(".img", {
        y: 90
      }, {
        y: 0,
        duration: 1,
        ease: "power4.inOut"

      })
      return () => {
        split.revert(); // REQUIRED
      };


    });
    mm.add("(min-width:640px) and (max-width:767px)", () => {
      const split = new SplitText(".text1", {
        type: "chars"
      });
      gsap.fromTo(split.chars, {
        y: 100
      }, {
        y: 0,
        duration: 1,
        ease: "power4.inOut",
        stagger: {
          amount: 0.25
        }
      })
      const split2 = new SplitText(".text2", {
        type: "chars"
      });
      gsap.fromTo(split2.chars, {
        y: 100
      }, {
        y: 0,
        duration: 1,
        ease: "power4.inOut",
        stagger: {
          amount: 0.25
        }
      })
      gsap.fromTo(".img", {
        scale: 1.2
      }, {
        scale: 1,
        ease: "power4.inOut",
        duration: 1
      })
    })
    mm.add("(max-width:639px)", () => {
      const split = new SplitText(".text1", {
        type: "chars"
      });
      gsap.fromTo(split.chars, {
        y: 100
      }, {
        y: 0,
        duration: 1,
        ease: "power4.inOut",
        stagger: {
          amount: 0.25
        }
      })
      const split2 = new SplitText(".text2", {
        type: "chars"
      });
      gsap.fromTo(split2.chars, {
        y: 100
      }, {
        y: 0,
        duration: 1,
        ease: "power4.inOut",
        stagger: {
          amount: 0.25
        }
      })
    })
    return () => mm.revert();
  }, []);

  return (
    <div className="relative pt-20 h-screen ">
      <div className="upperHeading  lg:flex hidden items-center justify-center text-[1.5vw] pt-10 overflow-hidden">
        <h1 ref={textRef} className=" h1 font-[font1]">
          👋 Hi my name is Naman Dadwal and i am a Website Developer
        </h1>
      </div>
      <div className="ImageHeading  flex items-center justify-center pt-32 ">
        <div className="image absolute z-30 lg:top-14 bottom-5 md:bottom-0 sm:bottom-0 overflow-hidden  ">
          <img
            className="img  object-cover"
            src="/images/namanRemove3.png"
            alt=""
          />
        </div>

        <div className="Headings font-[font5] flex flex-col  items-center lg:justify-center text-[13vw] leading-[12vw] lg:text-[9vw] lg:leading-[8.5vw]">
          <h1 className="text1 overflow-hidden z-10">
            Welcome <span className="lg:font-[font5] font-[font1]">to</span>{" "}
          </h1>
          <h1 className="text2 overflow-hidden">
            Dadwal <span className="">Developer's</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
