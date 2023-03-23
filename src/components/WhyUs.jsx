import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faClock,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

const WhyUs = () => {
  return (
    <section className="w-4/5 mx-auto flex flex-col items-center justify-center p-2 h-screen text-gray-600">
      <div className="flex w-full items-start justify-center">
        <div className=" flex flex-col gap-4 flex-1 p-2 ">
          <h1 className="font-semibold text-[44px] text-black">
            Why Choose Us?
          </h1>
          <p className="font-light font-sans text-sm tracking-wide">
            LeverPapers offers the best rates in essay writing. We only hire top
            professionals with more than 10 years experience. Utmost
            satisfaction is our top priority.
          </p>
        </div>

        <div className="flex gap-y-4 flex-col flex-1 pl-12 ">
          <div className="flex items-start justify-start gap-3">
            <div className="flex flex-col items-center justify-center py-4">
              <FontAwesomeIcon
                icon={faCrown}
                className="border-[3px] border-[#0274BE] text-[#0274BE] rounded-full p-3 flex items-center justify-center"
              />
            </div>
            <div>
              <h5 className="my-2 font-semibold text-lg">Industry Leaders</h5>
              <p className="font-light font-sans text-sm tracking-wide">
                Our team of professional essay writers work tirelessly to
                produce the best results. We offer quality work on a consistent
                basis.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-3">
            <div className="flex flex-col items-center justify-center py-4">
              <FontAwesomeIcon
                icon={faClock}
                className="border-[3px] border-[#0274BE] text-[#0274BE] rounded-full p-3 flex items-center justify-center"
              />
            </div>
            <div>
              <h5 className="my-2 font-semibold text-lg">
                Order at Your convenience
              </h5>
              <p className="font-light font-sans text-sm tracking-wide">
                Ordering a paper is quite straightforward. Simply click on the
                order button.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-3">
            <div className="flex flex-col items-center justify-center py-4">
              <FontAwesomeIcon
                icon={faCertificate}
                className="border-[3px] border-[#0274BE] text-[#0274BE] rounded-full p-3 flex items-center justify-center"
              />
            </div>
            <div>
              <h5 className="my-2 font-semibold text-lg">Industry Leaders</h5>
              <p className="font-light font-sans text-sm tracking-wide">
                Our team of professional essay writers work tirelessly to
                produce the best results. We offer quality work on a consistent
                basis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
