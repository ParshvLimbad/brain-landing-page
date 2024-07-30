import React from "react";
import block1 from "/block-1.jpg";
import block2 from "/block-2.jpg";
import block3 from "/block-3.jpg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const SectionOne = () => {
  const courses = [
    { name: "Digital Marketing", image: block1, id: 1 },
    { name: "Ecobiochemistry", image: block2, id: 2 },
    { name: "Web Developing", image: block3, id: 3 },
  ];

  return (
    <section className="xl:px-44 md:px-12 px-6 bg-white h-[40rem] flex flex-row justify-between items-center">
      <div className="flex flex-row">
        <div>
          <h2 className="text-[40px] text-[#0AE448] tracking-tight leading-10 font-semibold max-w-[25rem]">
            Unlock Your Potential with a Brain
          </h2>
          <p className="max-w-[28rem]">
            Empower your future by learning new skills and knowledge. Take
            charge of your personal growth and development. By mastering new
            abilities, you can transform your life and open up new
            opportunities.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-3 w-[40rem] overflow-hidden justify-between">
        {courses.map((course) => (
          <div
            className="h-80 w-[13rem] hover:w-[23rem] bg-black ease-in-out duration-500 rounded-xl overflow-hidden relative"
            id="block-cont"
          >
            <img src={course.image} className="h-full w-full object-cover" />
            <p
              className="font-normal text-right absolute bottom-1 left-8 w-[22rem] pr-4 -translate-x-1/2 -translate-y-1/2 text-2xl z-10 text-black pb-1"
              id="img-text"
            >
              {course.name}
            </p>
            <div
              className="absolute top-[-60px] p-2 bg-white hover:bg-[#0AE448] rounded-full right-[-60px] duration-500 ease-in-out cursor-pointer"
              id="arrow-icon"
            >
              <ArrowOutwardIcon />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionOne;
