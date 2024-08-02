import React, { useRef, useEffect, useState } from "react";
import "./SectionTwo.css";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";
import block4 from "/block-4.jpg";
import block5 from "/block-5.jpg";
import block6 from "/block-6.jpg";
import block7 from "/block-7.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

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
    { text: "Web Design", id: 6 },
  ];

  const images = [
    { name: "HTML5", src: block4, duration: "3 months" },
    { name: "Illustration", src: block5, duration: "3 months" },
    { name: "Photography", src: block6, duration: "3 months" },
    { name: "UI/UX Design", src: block7, duration: "3 months" },
  ];

  return (
    <section
      ref={sectionRef}
      className="xl:px-44 md:px-12 px-6 bg-white xl:h-[50rem] lg:h-[50rem] md:h-[35rem] h-[50rem] flex flex-col"
    >
      {/* <h2 className="xl:mt-0 lg:mt-0 mt-12 md:text-[35px] text-[25px] text-center text-white tracking-tight leading-[50px] font-semibold mb-1">
        Unlock Your Potential with Brain.
      </h2> */}
      <h2
        className="reveal-type xl:mb-10 lg:mb-10 mb-4 mt-12 lg:text-[50px] md:text-[35px] text-[22px] text-center text-white tracking-tight leading-[50px] font-semibold"
        data-bg-color="white"
        data-fg-color="black"
      >
        Unlimited access to 100+ courses.
      </h2>
      <div className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4 mb-12">
        {buttonContent.map((content) => (
          <button
            key={content.id}
            onClick={() => setActiveButton(content.id)}
            id="categories-button"
            className={`
              rounded-full border border-[1px] border-black px-4 py-2 font-medium hover:bg-[#0AE448] hover:text-black duration-300 ease-in-out
              ${
                activeButton === content.id
                  ? "bg-[#0AE448] text-black"
                  : "bg-white text-black"
              }
            `}
          >
            {content.text}
          </button>
        ))}
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
        {images.map((image) => (
          <div key={image.name} className="flex flex-col">
            <Card
              id="card-redirect"
              className="flex relative w-full aspect-square overflow-hidden"
            >
              <div
                id="redirect-icon"
                className="absolute flex items-center justify-center lg:top-[-50px] lg:right-[-50px] xl:top-[-50px] xl:right-[-50px] md:top-4 md:right-4 top-3 right-3 p-2 xl:w-10 xl:h-10 lg:w-10 mlg:h-10 md:w-10 md:h-10 w-8 h-8 z-10 bg-white hover:bg-[#0AE448] rounded-full duration-500 ease-in-out cursor-pointer"
              >
                <ArrowOutwardIcon />
              </div>

              <img
                src={image.src}
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt={image.name}
              />
            </Card>
            <div className="flex flex-row justify-between items-center mt-2">
              <h3 className="text-[#0AE448] xl:text-[25px] lg:text-[25px] md:text-[20px] text-[18px]">
                {image.name}
              </h3>
              <p className="text-black rounded-full px-2 py-1">
                {image.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="categories-side-hover text-center">
        View all of the categories that we provide.
      </div> */}
    </section>
  );
};

export default SectionTwo;
