import React, { useRef, useEffect } from "react";
import "./SectionTwo.css";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";

const SectionTwo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((char) => {
      const bg = char.dataset.bgColor;
      const fg = char.dataset.fgColor;

      const text = new SplitType(char, { types: "chars" });

      gsap.fromTo(
        text.chars,
        {
          color: bg,
        },
        {
          color: fg,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });

    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="xl:px-44 md:px-12 px-6 bg-black xl:h-[40rem] lg:h-[40rem] md:h-[35rem] h-[50rem] flex xl:flex-row lg:flex-row md:flex-col flex-col xl:gap-0 lg:gap-0 gap-12"
    >
      {/* <h2 className="xl:mt-0 lg:mt-0 mt-12 md:text-[35px] text-[25px] text-center text-white tracking-tight leading-[50px] font-semibold mb-1">
        Unlock Your Potential with Brain.
      </h2> */}
      <h2
        className="reveal-type mt-12 lg:text-[50px] md:text-[35px] text-[25px] text-center text-white tracking-tight leading-[50px] font-semibold w-full"
        data-bg-color="black"
        data-fg-color="white"
      >
        Unlimited access to 100+ instructors.
      </h2>
    </section>
  );
};

export default SectionTwo;
