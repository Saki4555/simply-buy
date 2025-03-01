import { CRYPTO_MARKET_DATA, PAGE_CONTENT } from "../../constants";
import Button from "../shared/Button";
import CryptoCard from "./CryptoCard";


const CryptoMarket = () => {
    return (
       <div className="bg-nhf py-20">
         <div className="container mx-auto px-36 space-y-10 text-center">
          <Button buttonStyle='ghost' variant='normal' py='py-3' >Trade Crypto</Button>
          <h1 className="text-gray-200 text-3xl font-medium">{PAGE_CONTENT.marketSection.heading}</h1>
        {CRYPTO_MARKET_DATA.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
      </div>
      <div className="text-center pt-10">
      <Button buttonStyle='ghost' variant='outlinedPadded' py='py-2'>View Other Crypto</Button>
      </div>
       </div>
    );
};

export default CryptoMarket;