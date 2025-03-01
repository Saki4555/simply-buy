import { exchangeIcon } from "../../assets";
import { CRYPTO_MARKET_DATA, PAGE_CONTENT } from "../../constants";
import Button from "../shared/Button";
import FormInput from "../shared/FormInput";

import CryptoSymbolBadge from "../shared/CryptoSymbolBadge";

const Hero = () => {
  return (
    <div className="bg-nhf py-20 relative overflow-x-clip">

      {/* glow effect */}
      <div className="absolute w-20 h-20 top-1/6 left-1/4 bg-nhf-glow/60 blur-3xl"></div>
      <div className="absolute w-20 h-20 top-3/6 right-1/5 bg-nhf-glow/60 blur-3xl"></div>
      <div className="absolute w-20 h-20 top-5/6 left-0 bg-nhf-glow/60 blur-3xl"></div>

      {/* cryptos */}
      {
        CRYPTO_MARKET_DATA.map(crypto => (
          <CryptoSymbolBadge key={crypto.id} crypto={crypto} hero={true} />
        ))
      }

      <div className="text-center max-w-3xl mx-auto space-y-12">
        <div className="px-32 space-y-6">
          <h1 className="text-neon-green-700 text-5xl font-bold">
            {PAGE_CONTENT.heroSection.heading}
          </h1>
          <p className="text-gray-300">{PAGE_CONTENT.heroSection.text}</p>
          <div className="space-x-4">
            <Button buttonStyle="filled" variant="normal" py="py-3">
              Get Started
            </Button>
            <Button buttonStyle="outlined" py="py-3">
              Get Started
            </Button>
          </div>
        </div>

        <div className="bg-gray-700/30 space-y-8 pt-6 pb-10 rounded-xl">
          <div className="flex font-medium justify-center gap-5">
            <p className="text-neon-green-700 border-b">Buy</p>
            <p className="text-gray-300">Sell</p>
          </div>
          <div className="flex gap-6 px-5 items-center justify-center">
            <FormInput fieldType="text" placeholderText="I will spend" />
            <img src={exchangeIcon} alt="exchangeIcon" className="w-4 h-4" />
            <FormInput
              btc={true}
              fieldType="text"
              placeholderText="I will receive"
            />
            <Button buttonStyle="filled" variant="compact" py="py-2">
              <span className="text-sm">Buy Crypto</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
