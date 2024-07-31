import React from "react";
import "./index.css";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between h-20 items-center xl:px-44 md:px-12 px-6">
      <h1 className="font-semibold text-3xl text-[#0AE448]">Brain.</h1>
      <ul className="lg:flex hidden flex-row gap-6 text-black">
        <li className="link-underline">Find Passion</li>
        <li className="link-underline">Categories</li>
        <li className="link-underline">Skills</li>
        <li className="link-underline">Customers</li>
      </ul>
      <div className="flex flex-row gap-4 items-center">
        <p className="link-underline xl:flex lg:flex hidden">Login</p>
        <button className="button-side-hover">Free Trial</button>
        <Sheet>
          <SheetTrigger className="xl:hidden lg:hidden">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <ul className="flex flex-col gap-4 text-black">
                  <li className="cursor-pointer">Login</li>
                  <li className="cursor-pointer">Find Passion</li>
                  <li className="cursor-pointer">Categories</li>
                  <li className="cursor-pointer">Skills</li>
                  <li className="cursor-pointer">Customers</li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
