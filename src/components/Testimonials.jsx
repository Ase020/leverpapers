import React from "react";

const ratingData = [
  {
    id: 3256378,
    profPic: "",
    rating: 4,
    testimonial:
      "Ordered a dissertation with them. Excellent customer service, quality paper, fast delivery. I love it!",
  },
  {
    id: 3526736,
    profPic: "",
    rating: 3,
    testimonial:
      "Thank you for the best experience. I will definitely continue using your services.",
  },
  {
    id: 257356,
    profPic: "",
    rating: 5,
    testimonial:
      "You guys made me so happy. I can recommend this company for essay writing.",
  },
  {
    id: 2654738,
    profPic: "",
    rating: 4,
    testimonial:
      "Not many companies offer such prices. I was amazed at the quality of the paper I received. Top-notch.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[rgb(247,247,254)] flex flex-col  items-center gap-24">
      <div className="w-4/5 flex justify-between border p-12 ">
        <div className="flex-[3] bg-green-400">
          <h6 className="pb-8 font-sans font-normal text-base">Testimonials</h6>
          <h2 className="text-[44px] font-semibold">
            Trusted by Thousands of Students around the <br />
            World
          </h2>
        </div>
        <div className="flex-[2] bg-blue-800 flex items-start leading-none">
          <h1 className="text-[90px] font-semibold text-gray-800">4.8</h1>
          <div className="py-3">
            <div></div>
          </div>
        </div>
      </div>
      <div className="w-4/5 p-12">Div 2</div>
    </section>
  );
};

export default Testimonials;
