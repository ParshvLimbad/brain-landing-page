import React, { useRef, useEffect, useState } from "react";
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
    const categoriesButton = document.querySelectorAll("#categories-button");

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
      gsap.fromTo(
        categoriesButton,
        { marginTop: 20, opacity: 0 },
        {
          marginTop: 0,
          opacity: 100,
          duration: 0.3,
          scrollTrigger: {
            trigger: categoriesButton,
            start: "top 80%",
            end: "top 40%",
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

  const [activeButton, setActiveButton] = useState(null);

  const buttonContent = [
    { text: "All Categories", id: 1 },
    { text: "Programming", id: 2 },
    { text: "Animation", id: 3 },
    { text: "UI/UX Design", id: 4 },
    { text: "Illustration", id: 5 },
    { text: "Web Applications", id: 6 },
  ];

  return (
    <section
      ref={sectionRef}
      className="xl:px-44 md:px-12 px-6 bg-black xl:h-[50rem] lg:h-[50rem] md:h-[35rem] h-[50rem] flex flex-col"
    >
      {/* <h2 className="xl:mt-0 lg:mt-0 mt-12 md:text-[35px] text-[25px] text-center text-white tracking-tight leading-[50px] font-semibold mb-1">
        Unlock Your Potential with Brain.
      </h2> */}
      <h2
        className="reveal-type xl:mb-10 lg:mb-10 mb-4 mt-12 lg:text-[50px] md:text-[35px] text-[22px] text-center text-white tracking-tight leading-[50px] font-semibold w-full"
        data-bg-color="black"
        data-fg-color="white"
      >
        Unlimited access to 100+ courses.
      </h2>
      <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4">
        {buttonContent.map((content) => (
          <button
            key={content.id}
            onClick={() => setActiveButton(content.id)}
            id="categories-button"
            className={`
              rounded-full border border-[1px] border-[#0AE448] px-4 py-2 font-medium hover:bg-[#0AE448] hover:text-black duration-300 ease-in-out
              ${
                activeButton === content.id
                  ? "bg-[#0AE448] text-black"
                  : "bg-black text-[#0AE448]"
              }
            `}
          >
            {content.text}
          </button>
        ))}
      </div>
      {/* <div className="categories-side-hover text-center">
        View all of the categories that we provide.
      </div> */}
    </section>
  );
};

export default SectionTwo;
