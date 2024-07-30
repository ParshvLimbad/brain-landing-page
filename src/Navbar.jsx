import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between h-20 items-center xl:px-44 md:px-12 px-6">
      <h1 className="font-semibold text-3xl text-black">Brain.</h1>
      <ul className="flex flex-row gap-6 text-black">
        <li className="link-underline">Find Passion</li>
        <li className="link-underline">Categories</li>
        <li className="link-underline">Skills</li>
        <li className="link-underline">Customers</li>
      </ul>
      <div className="flex flex-row gap-4 items-center">
        <p className="link-underline">Login</p>
        <button className="button-side-hover">Free Trial</button>
      </div>
    </nav>
  );
};

export default Navbar;
