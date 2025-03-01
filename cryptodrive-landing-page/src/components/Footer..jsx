
import { googlePlayIcon, appleStoreIcon, amazonIcon, microsoftIcon, xIcon } from "../assets";
const Footer = () => {
  return (
    <div className="bg-nhf py-10">
      <footer  className="container mx-auto px-36">
      <div className="flex flex-row justify-between gap-8 ">
    
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Feature</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Career</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg text-gray-200 font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Customer Support</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg text-gray-200 font-semibold mb-4">Others</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Start Trading</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Earn Free Crypto</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Crypto Wallet</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Payment Option</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg text-gray-200 font-semibold mb-4">Download App</h3>
          <div className="bg-white rounded-lg p-3 flex items-center mb-2">
            <img src={googlePlayIcon} alt="Google Play" className="w-8 h-8 mr-3" />
            <div className="font-semibold">
              <span className="text-xs text-gray-700 block">Get it on</span>
              <span className="text text-gray-900">Google Play</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 flex items-center">
            <img src={appleStoreIcon} alt="App Store" className="w-8 h-8 mr-3" />
            <div className="font-semibold">
              <span className="text-xs text-gray-700 block m-0 p-0">Download on the</span>
              <span className="text-gray-900">App Store</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-700 flex justify-between items-center">
        <p className="text-xs text-gray-400">
          © Copyright 2004, all right reserve by cryptodive
        </p>
        <div className="flex space-x-4">
          <a href="#" ><img src={amazonIcon} alt="amazon" className="w-5"/></a>
          <a href="#" ><img src={microsoftIcon} alt="microsoft" className="w-5"/></a>
          <a href="#" ><img src={xIcon} alt="X" className="w-5"/></a>
          
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;