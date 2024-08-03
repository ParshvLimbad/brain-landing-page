import React, { useEffect, useRef } from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const features = [
  {
    text: "Leadership",
    icon: <WorkspacePremiumIcon style={{ color: "black", fontSize: "4rem" }} />,
    description: "Fully committed to the success company",
  },
  {
    text: "Responsibility",
    icon: <PsychologyIcon style={{ color: "black", fontSize: "4rem" }} />,
    description: "Employees will always be our top priority",
  },
  {
    text: "Flexibility",
    icon: <ArchitectureIcon style={{ color: "black", fontSize: "4rem" }} />,
    description: "The ability to switch is an important skill",
  },
];

const SectionThree = () => {
  const section2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const featureTab = document.querySelectorAll("#features");

    gsap.fromTo(
      featureTab,
      { marginTop: 60, filter: "blur(50px)" },
      {
        marginTop: 20,
        duration: 0.3,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: featureTab,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          markers: false,
          toggleActions: "play play reverse reverse",
        },
      }
    );
  });

  return (
    <section
      ref={section2Ref}
      className="xl:px-44 md:px-12 px-6 bg-white xl:h-[50rem] lg:h-[50rem] md:h-[35rem] h-[50rem] flex flex-col items-center"
    >
      <h2
        className="reveal-type xl:mb-6 lg:mb-6 mb-4 mt-12 lg:text-[50px] md:text-[35px] text-[22px] text-center text-black tracking-tight leading-[50px] font-semibold"
        data-bg-color="white"
        data-fg-color="black"
      >
        Get the skills needed for in-demand job.
      </h2>
      <p className="xl:max-w-[40rem] lg:max-w-[40rem] md:max-w-[33rem] md:text-[14px] text-[14px] text-center text-black">
        In today's job market, being a competitive worker requires more than
        just having good professional skills. The current labor landscape sets
        its own expectations.
      </p>
      <div
        id="features"
        className="flex xl:flex-row lg:flex-row md:flex-row flex-col xl:w-[80%] lg:w-full w-full xl:gap-0 lg:gap-0 md:gap-0 gap-6 justify-between items-center"
      >
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center w-full">
              <div className="p-4 bg-[#0AE448] rounded-xl w-full border border-1 border-black">
                <div className="h-[7rem] w-full bg-white border border-1 border-black rounded-xl flex items-center justify-center p-6">
                  {feature.icon}
                  <h2 className="mt-2 text-center text-xl font-semibold">
                    {feature.text}
                  </h2>
                </div>
                <p className="text-center mt-3">{feature.description}</p>
              </div>
            </div>
            {index < features.length - 1 && (
              <div className="xl:w-[30rem] lg:w-[30rem] md:w-[30rem] w-[2rem] h-[1px] bg-black xl:rotate-0 lg:rotate-0 md:rotate-0 rotate-90"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default SectionThree;
