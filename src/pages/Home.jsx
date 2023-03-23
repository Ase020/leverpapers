import imgBanner from "../assets/Home-page.jpg";
import {
  Banner,
  Features,
  HowItWorks,
  Testimonials,
  WhyUs,
} from "../components";

const BannerWrapper = () => {
  return (
    <div className="z-[-2] bg-[#0400FF9C] rounded-br-[150px] overflow-hidden  mb-5">
      {/* bg-img */}
      <img
        src={imgBanner}
        alt="Home-page"
        className="sticky top-0 w-full object-cover z-[-1] h-[85vh]"
      />
      <Banner />
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative">
      <BannerWrapper />
      <Features />
      <div className="w-4/5 items-center mx-auto border-b  border-b-black border-dashed mb-4" />
      <HowItWorks />
      <div className="w-4/5 items-center mx-auto border-b  border-b-black border-dashed mt-4" />
      <WhyUs />
      <Testimonials />
    </div>
  );
}
