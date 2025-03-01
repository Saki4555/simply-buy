import { facebookIcon, instagramIcon, telegramIcon } from "../assets";
import Button from "./shared/Button";
import FormInput from "./shared/FormInput";


const Contact = () => {
    return (

     <div className="bg-contact relative overflow-x-clip py-20">
      <div className='absolute w-48 h-28 top-1/3 -left-12 bg-nhf-glow/60 blur-3xl'></div>
       <div className="flex flex-row gap-10 container mx-auto px-36">
      
      <div className="flex flex-col w-6/12 justify-center">
        <h2 className="text-3xl text-gray-200 mb-4">Get It On The Crypto Action</h2>
        <p className="text-gray-400 pb-20">
          Provide easy access to customer support through chatbots or live chat features.
        </p>
        <div className="flex space-x-6">
         
            <img src={facebookIcon} alt="Facebook" className="w-6 h-6" /> 
          
            <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
          
          
            <img src={telegramIcon} alt="Telegram" className="w-6 h-6" />
         
        </div>
      </div>

      
      <div className="flex flex-col w-4/12 space-y-6">
        <FormInput fieldType="email" contactSection placeholderText="Enter Email Address" />
        <FormInput fieldType="text" contactSection placeholderText="Enter Your Topic" />
        <div className="w-1/2">
        <Button buttonStyle="filled" variant="normal" py='py-3'>Send Message</Button>
        </div>
      </div>
    </div>
     </div>
   
    );
};

export default Contact;