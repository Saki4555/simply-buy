
import Button from "../shared/Button";
import CryptoSymbolBadge from "../shared/CryptoSymbolBadge";

const CryptoCard = ({crypto}) => {
  return (
    <div className="flex justify-between items-center">
      
      <div className="flex space-x-4 w-36">
        <CryptoSymbolBadge crypto={crypto} hero={false}/>
        <div className="text-start">
          <div className="text-gray-200 font-medium">{crypto.name}</div>
          <div className="text-gray-400 text-sm">{crypto.currency}</div>
        </div>
      </div>

     
      <div className="flex flex-col w-20 text-start">
        <div className="text-gray-400 text-xs mb-1">Change</div>
        <div
          className={`text-sm ${
            crypto.change.startsWith("+") ? "text-green-500" : "text-red-500"
          }`}
        >
          {crypto.change}
        </div>
      </div>

     
      <div className="flex flex-col w-28 text-start">
        <div className="text-gray-400 text-xs mb-1">Price</div>
        <div className="text-sm text-gray-200">{crypto.price}</div>
      </div>

      
      <div className="w-20 text-start">
        <div className="text-gray-400 text-xs pb-3">Chart</div>
        <img
          src={crypto.chart}
          alt={`${crypto.name} chart`}
          className="w-full h-10 -ml-3"
        />
      </div>

     
      <div>
        <Button buttonStyle='ghost' variant='normal' py='py-2'>Trade</Button>
      </div>
    </div>
  );
};

export default CryptoCard;