import {
  FEATURED_CARDS_DATA,
  INFO_CARDS_DATA,
  PAGE_CONTENT,
} from "../../constants";
import Button from "../shared/Button";
import FeatureCard from "./FeatureCard";
import InfoCard from "./InfoCard";

const LearnCrypto = () => {
  return (
   <div className="bg-learn-crypto">
     <div className="container py-20 mx-auto  px-36 space-y-6 text-center">
      <Button buttonStyle="ghost" variant="normal" py="py-3">
        Learn Crypto
      </Button>
      <h1 className="text-gray-200 text-3xl font-medium">
        {PAGE_CONTENT.learnCryptoSection.heading}
      </h1>
      <p className="text-gray-400 px-48">
        {PAGE_CONTENT.learnCryptoSection.text}
      </p>

      <div className="flex justify-between pt-6 px-16">
        {FEATURED_CARDS_DATA.map((item) => (
          <FeatureCard key={item.id} {...item} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-8 pt-10">
        {INFO_CARDS_DATA.map(item => (
            <InfoCard key={item.id} {...item}/>
        ))}
      </div>
    </div>
   </div>
  );
};

export default LearnCrypto;
