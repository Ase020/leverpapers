import React from "react";

const HowItWorks = () => {
  return (
    <section className="w-full bg-[rgb(247,247,254)] flex flex-col items-center justify-center p-6 h-screen text-gray-600">
      <h3 className="font-semibold font-sans  text-4xl py-3">How it Works</h3>
      <div className="flex w-full">
        <div className="flex-1" />
        <div className="flex-1 p-2">
          <div className="pr-36">
            <h5 className="my-5 font-semibold text-lg">
              1. Submit your requirements
            </h5>
            <p className="font-light font-sans text-base tracking-wide">
              Include essential details when filling the order description
              section once you place an order. Also, ensure you provide the
              writer with all the relevant material and confirm your request.
            </p>
          </div>
          <div className="pr-24">
            <h5 className="my-5 font-semibold text-lg">
              2. We will select the most suitable writer
            </h5>
            <p className="font-light font-sans text-base tracking-wide">
              We have a diverse team with experts in every area of study. Our
              support will go through the requirements and determine the best
              writer for your paper based on their success rates.
            </p>
          </div>
          <div className="pr-24">
            <h5 className="my-5 font-semibold text-lg">3. Quality check</h5>
            <p className="font-light font-sans text-base tracking-wide">
              Writers are expected to submit drafts, which our quality assurance
              departments checks for originality. Our internal checking system
              also inspects if all the paper instructions are followed.
            </p>
          </div>
          <div className="pr-24">
            <h5 className="my-5 font-semibold text-lg">
              4. Download the finished paper
            </h5>
            <p className="font-light font-sans text-base tracking-wide">
              We will send you an email with instructions about downloading your
              paper once everything is confirmed to be in place..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
