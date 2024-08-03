import React from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PsychologyIcon from "@mui/icons-material/Psychology";

const features = [
  {
    text: "Leadership",
    icon: <WorkspacePremiumIcon style={{ color: "black", fontSize: "4rem" }} />,
    description: "lorem ipsum dolor",
  },
  {
    text: "Responsibility",
    icon: <PsychologyIcon style={{ color: "black", fontSize: "4rem" }} />,
    description: "lorem ipsum dolor sit amet",
  },
  {
    text: "Flexibility",
    icon: <PsychologyIcon style={{ color: "black", fontSize: "4rem" }} />,
    description: "lorem ipsum dolor sit amet",
  },
];

const SectionThree = () => {
  return (
    <section className="xl:px-44 md:px-12 px-6 bg-white xl:h-[50rem] lg:h-[50rem] md:h-[35rem] h-[50rem] flex flex-col items-center">
      <h2
        className="reveal-type xl:mb-6 lg:mb-6 mb-4 mt-12 lg:text-[50px] md:text-[35px] text-[22px] text-center text-black tracking-tight leading-[50px] font-semibold"
        data-bg-color="white"
        data-fg-color="black"
      >
        Get the skills needed for an in-demand job.
      </h2>
      <p className="xl:max-w-[40rem] lg:max-w-[40rem] md:max-w-[33rem] md:text-[14px] text-[14px] text-center text-black">
        In today's job market, being a competitive worker requires more than
        just having good professional skills. The current labor landscape sets
        its own expectations.
      </p>

      <div className="flex flex-row w-[70%] justify-between items-center">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-[#0AE448] rounded-xl w-[15rem] border border-1 border-black">
                <div className="h-[7rem] w-full bg-white border border-1 border-black rounded-xl flex items-center justify-center p-6">
                  {feature.icon}
                </div>
                <p className="mt-2 text-center text-sm text-xl font-medium">
                  {feature.text}
                </p>
              </div>
            </div>
            {index < features.length - 1 && (
              <div className="w-[10rem] h-[1px] bg-black"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default SectionThree;
