import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 px-6 z-20 absolute top-0 w-full text-gray-700">
      <Link to="/">
        <img src={logo} alt="logo" className="object-fit h-12 cursor-pointer" />
      </Link>

      {/* links */}
      <div className="flex items-center justify-between gap-6 text-lg">
        <div className="flex justify-between items-center gap-7">
          <Link to="/">Home</Link>
          <Link to="/pricing">Pricing & FAQ</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact</Link>
          <Link to="/shop">Services</Link>
          <Link to="/my-account">My Account</Link>
        </div>
        <Link to="/shop">
          <button
            className="bg-[#06b43d] text-[#fff] py-2 px-6 rounded-3xl uppercase text-md font-medium
          "
          >
            order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
