import React, { useEffect, useRef, useState } from "react";
import { MdNightsStay } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
function Navbar({ open, setOpen }) {

  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null);
  const textRef = useRef(null);


  const isMounted = useRef(false);

  useGSAP(
    () => {
      gsap.set(menuRef.current, {
        autoAlpha: 0,
        backdropFilter: "blur(0px)",
      });
      const tl = gsap.timeline();
      if (menu) {
        tl.fromTo(
          menuRef.current,
          {
            backdropFilter: "blur(0px)",
            autoAlpha: 0,
          },
          {
            backdropFilter: "blur(10px)",
            autoAlpha: 1,
            duration: 1,
            ease: "power4.inOut",
          }
        );
      } else {
        // Prevents animation on initial load
        if (isMounted.current) {
          tl.fromTo(
            menuRef.current,
            {
              backdropFilter: "blur(10px)",
              autoAlpha: 1,
            },
            {
              backdropFilter: "blur(0px)",
              autoAlpha: 0,
              duration: 1,
              ease: "power3.inOut",
            }
          );
        }
      }
      isMounted.current = true;
    },
    { dependencies: [menu] }
  );

  useGSAP(
    () => {
      if (menu) {
        const split = new SplitText(".text", {
          type: "words",
        });
        gsap.fromTo(
          split.words,
          {
            y: 100,
          },
          {
            y: 0,
            duration: 2,
            ease: "power3.inOut",
          }
        );
        return () => split.revert();
      }
    },
    { dependencies: [menu] }
  );

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "auto";
  }, [menu]);

  return (
    <div className="relative ">
      <nav className="flex lg:justify-around justify-between z-50 w-full left-0 fixed top-0 backdrop-blur-md  p-2">
        <div className="logo">
          <h1 className="lg:text-[3vw] lg:leading-[3vw] md:text-[5vw] md:leading-[5vw] sm:text-[5vw] sm:leading-[5vw] text-[10vw] leading-[9vw] uppercase font-[font5]">
            Dadwal
            <br />
            Developer
          </h1>
        </div>
        <div className="links   lg:flex md:flex sm:hidden hidden gap-5 font-[font2] items-center  text-2xl justify-center">
          <h1>Home</h1>
          <h1>Projects</h1>
          <button className="bg-[var(--foreground)] text-[var(--background)] px-4 py-2 rounded-full cursor-pointer transition-colors duration-300">
            Contact
          </button>
        </div>
        <div className="flex gap-5 items-center">
          <div className="menu md:hidden lg:hidden">
            <div
              onClick={() => {
                setMenu((prev) => !prev);
              }}
              className="menuBar flex flex-col gap-2"
            >
              <div
                className="bg-[var(--foreground)] h-1 w-10 rounded-full"
              ></div>
              <div
                className="bg-[var(--foreground)] h-1 w-10 rounded-full"
              ></div>
            </div>
          </div>
          <button
            onClick={() => {
              setOpen((prev) => !prev);
            }}
            className="text-4xl cursor-pointer text-[var(--foreground)]"
          >
            {!open ? <MdNightsStay /> : <IoSunny />}
          </button>
        </div>
      </nav>
      {menu &&(
        <div
        ref={menuRef}
        className={`fixed  h-screen opacity-0 invisible z-40  w-full menu lg:hidden md:hidden flex flex-col items-center justify-center ${menu ? "pointer-events-auto" : "pointer-events-none"
          }`}
        style={{ opacity: 0 }}
      >
        <div
          ref={textRef}
          className="uppercase font-[font5]  flex items-center justify-center flex-col "
        >
          <h1 className="text-[17vw] sm:text-[14vw] md:text-[9vw] text overflow-hidden">
            Home
          </h1>
          <h1 className="text-[17vw] sm:text-[14vw] md:text-[9vw] text overflow-hidden">
            Projects
          </h1>
          <h1 className="text-[17vw] sm:text-[14vw] md:text-[9vw] text overflow-hidden">
            {" "}
            COntact us
          </h1>
        </div>
      </div>
      )}
    </div>
  );
}

export default Navbar;
