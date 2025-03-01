import { btcIcon } from "../../assets";
const FormInput = ({ btc, fieldType, contactSection, placeholderText }) => {
  const inputFieldContent = (
    <input
      type={fieldType}
      className={`w-full bg-gray-700 text-white rounded-md outline-none ${contactSection ? 'py-3 px-3' : 'text-sm pr-16 py-2 px-4'} ` }
      placeholder={placeholderText}
    />
  );
  return (
    <>
    
      {
        contactSection ?  <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Email Address
        </label>
        {inputFieldContent}
      </div> :   <div className="relative w-60 text-white">
       
       {
         inputFieldContent
       }
       <button
         type="button"
         className="absolute right-3 top-2 flex items-center space-x-1 focus:outline-none"
       >
         {btc ? (
           <img src={btcIcon} alt="btc" className="w-3" />
         ) : (
           <span className="text-neon-green-700">$</span>
         )}
         <span className="text-sm">{btc ? "BTC" : "USD"}</span>
       </button>
     </div>
      }
    </>
  );
};

export default FormInput;
