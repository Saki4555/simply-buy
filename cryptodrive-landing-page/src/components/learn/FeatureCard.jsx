import { learn1,learn2, learn3, learn4 } from "../../assets";
const FeatureCard = ({text, id}) => {
    const srcImg = id === 1 ? learn1 : id === 2 ? learn2 : id === 3 ? learn3 : learn4;
   
  return (
   
      <div className="bg-neon-green-700/20 w-44 p-6 rounded-4xl flex flex-col items-center shadow-lg">
        <div className="bg-neon-green-700/15 p-4 rounded-xl">
          <img src={srcImg} alt="Money Bag" className="w-10 h-10" />
        </div>
        <p className="text-neon-green-700 text-lg font-medium pt-2">{text}</p>
      </div>
    
  );
};

export default FeatureCard;
