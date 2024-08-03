import React from "react";
import "./index.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const links = [
    {
      url: "https://www.linkedin.com/in/parshv-limbad/",
      icon: <LinkedInIcon />,
    },
    {
      url: "https://github.com/ParshvLimbad",
      icon: <GitHubIcon />,
    },
  ];

  return (
    <footer className="mt-40 xl:px-44 md:px-12 px-6 bg-white flex flex-col items-center w-full h-[20rem]">
      <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col w-full justify-between xl:mb-32 lg:mb-32 md:mb-32 mb-6">
        <h1 className="font-semibold text-3xl text-[#0AE448] xl:mb-0 lg:mb-0 md:mb-0 mb-8">
          Brain.
        </h1>
        <div className="flex flex-row gap-24 xl:mb-0 lg:mb-0 md:mb-0 mb-8">
          <ul className="flex flex-col text-black gap-6">
            <li className="link-underline">Find Passion</li>
            <li className="link-underline">Categories</li>
          </ul>
          <ul className="flex flex-col text-black gap-6">
            <li className="link-underline">Skills</li>
            <li className="link-underline">Customers</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-medium">
            Subscribe to our newsletter
          </label>
          <div className="flex flex-row gap-2">
            <input
              type="email"
              className="xl:w-[20rem] lg:w-[20rem] md:w-[12rem] w-full px-4 rounded-full border border-1 border-black hover:bg-[#0AE448] focus:bg-[#0AE448] outline-none duration-500 ease-in-out"
            />
            <button className="button-side-hover">GO</button>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-black w-full"></div>
      <div className="flex flex-row justify-between items-center w-full mt-6">
        <p>2024 Parshv Limbad All rights reserved</p>
        <div className="flex flex-row gap-1">
          {links.map((link) => (
            <button className="flex items-center justify-center p-2 h-12 w-12 text-black hover:text-white hover:bg-black rounded-full border border-1 duration-300 ease-in-out">
              <a href={link.url} target="_blank">
                {link.icon}
              </a>
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
