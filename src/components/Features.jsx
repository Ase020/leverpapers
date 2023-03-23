import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiagnoses,
  faHeadset,
  faEraser,
} from "@fortawesome/free-solid-svg-icons";

const featuresData = [
  {
    id: 1,
    icon: faHeadset,
    feature: "24/7 Support",
    featureDetail:
      "Our support works around the clock for the best customer experience. You can make an inquiry at any time.",
  },
  {
    id: 2,
    icon: faDiagnoses,
    feature: "Plagiarism Report",
    featureDetail:
      "Request a plagiarism report for your paper and we will provide it instantly.",
  },
  {
    id: 3,
    icon: faEraser,
    feature: "Unlimited Revisions",
    featureDetail:
      "Our writers work on unlimited revisions at no extra costs. We make changes in the shortest time possible.",
  },
];

const FeatureDetails = ({ icon, feature, featureDetail }) => {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <FontAwesomeIcon
        icon={icon}
        className="border-[3px] border-[#02BE12] text-[#02BE12] rounded-full p-3 flex items-center justify-center"
      />

      <h4 className="font-semibold text-2xl pt-2">{feature}</h4>
      <span className="font-light text-sm font-sans py-3">{featureDetail}</span>
    </div>
  );
};

const Features = () => {
  return (
    <section className="flex flex-col w-3/5 items-center mx-auto">
      <h2 className="text-5xl font-semibold my-5">Our Service Features</h2>
      {featuresData.map(({ id, icon, feature, featureDetail }) => (
        <FeatureDetails
          key={id}
          icon={icon}
          feature={feature}
          featureDetail={featureDetail}
        />
      ))}
    </section>
  );
};

export default Features;
