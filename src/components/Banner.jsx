import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="absolute top-[5%] left-[10%] flex flex-col gap-4 py-4 px-5 text-white">
      <h3 className=" uppercase text-2xl font-light mb-2">
        quality essays, on time!
      </h3>

      <h1 className="uppercase font-bold text-[54px] py-2">
        hire a professional <br /> essay writer
      </h1>
      <span className="text-lg">
        Order any type of essay from our professionals at an affordable rate.
      </span>

      <Link to="/shop">
        <button
          className="bg-[#06b43d] text-[#fff] py-2 px-6 rounded-3xl text-md font-medium mt-2
          "
        >
          ORDER NOW
        </button>
      </Link>
    </section>
  );
};

export default Banner;
