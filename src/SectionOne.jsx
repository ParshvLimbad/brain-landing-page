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
    <section className="xl:px-44 md:px-12 px-6 bg-white xl:h-[40rem] lg:h-[40rem] md:h-[35rem] h-[50rem] flex xl:flex-row lg:flex-row md:flex-col flex-col xl:justify-between lg:justify-between xl:gap-0 lg:gap-0 gap-12 items-center">
      <div className="flex flex-row justify-center">
        <div>
          <h2 className="xl:text-[45px] xl:max-w-[28rem] lg:max-w-[25rem] md:max-w-[33rem] xl:mt-0 lg:mt-0 md:text-[35px] text-[25px] xl:text-left md:text-center lg:text-left text-center text-black tracking-tight leading-[50px] font-semibold mb-1">
            Unlock Your Potential with
            <span className="text-[#0AE448]"> Brain.</span>
          </h2>
          <p className="xl:max-w-[28rem] lg:max-w-[25rem] md:max-w-[33rem] md:text-[14px] text-[14px] xl:text-left md:text-center lg:text-left text-center">
            Empower your future by learning new skills and knowledge. Take
            charge of your personal growth and development. By mastering new
            abilities, you can transform your life and open up new
            opportunities.
          </p>
        </div>
      </div>
      <div className="xl:flex lg:flex md:flex hidden flex-row gap-3 w-[40rem] overflow-hidden justify-between">
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
      <div className="flex xl:hidden lg:hidden md:hidden flex-col gap-3 w-full overflow-hidden justify-between">
        {courses.map((course) => (
          <div
            className="h-40 w-full bg-black ease-in-out duration-500 rounded-xl overflow-hidden relative"
            id="block-cont"
          >
            <img src={course.image} className="h-full w-full object-cover" />
            <p
              className="font-normal text-right absolute bottom-1 left-8 w-[22rem] pr-4 -translate-x-1/2 -translate-y-1/2 text-2xl z-10 text-black pb-1"
              id="img-text-sm"
            >
              {course.name}
            </p>
            <div
              className="absolute top-[-60px] p-2 bg-white hover:bg-[#0AE448] rounded-full right-[-60px] duration-500 ease-in-out cursor-pointer"
              id="arrow-icon-sm"
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
