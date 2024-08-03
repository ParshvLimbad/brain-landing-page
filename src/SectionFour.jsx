import React from "react";
import profile1 from "../public/profile-1.jpg";
import rating1 from "../public/rating-1.png";
import profile2 from "../public/profile-2.jpg";
import rating2 from "../public/rating-2.png";
import profile3 from "../public/profile-3.jpg";
import rating3 from "../public/rating-3.png";
import profile4 from "../public/profile-4.jpg";
import rating4 from "../public/rating-4.png";

const SectionFour = () => {
  const testimonials = [
    {
      name: "John Doe",
      img: profile1,
      rating: rating1,
      review:
        "Clear explanations, friendly teachers, and some practical homework to practice.",
    },
    {
      name: "Don Joe",
      img: profile2,
      rating: rating2,
      review:
        "I learned a lot and immediately applied it at work, gaining a new client.",
    },
    {
      name: "Jim Smith",
      img: profile3,
      rating: rating3,
      review: "Great speakers, high-quality lectures, and consistent feedback.",
    },
    {
      name: "Ash Sun",
      img: profile4,
      rating: rating4,
      review:
        "New profession brings vivid impressions. Today, I attended a business award.",
    },
  ];

  return (
    <div className="xl:px-44 md:px-12 px-6 mt-24 bg-white flex flex-col items-center">
      <h2
        className="reveal-type xl:mb-6 lg:mb-6 mb-4 mt-12 lg:text-[50px] md:text-[35px] text-[22px] text-center text-black tracking-tight leading-[50px] font-semibold"
        data-bg-color="white"
        data-fg-color="black"
      >
        What our students say.
      </h2>
      <div className="w-full grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-4 bg-[#0AE448] rounded-xl w-full border border-1 border-black"
          >
            <div className="flex flex-row items-center gap-3 mb-2">
              <img
                src={testimonial.img}
                className="rounded-full h-10 w-10 border border-1 border-black"
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-medium text-white">
                  {testimonial.name}
                </h3>
                <img src={testimonial.rating} />
              </div>
            </div>
            <div className="bg-white border border-1 border-black rounded-xl p-3">
              <p>{testimonial.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFour;
