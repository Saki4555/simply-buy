import { NAV_ITEMS } from "../constants";
import Button from "./shared/Button";
import {moreOptionsIcon} from '../assets'

 


const Navbar = () => {
  return (
    <div className="relative bg-nhf overflow-x-clip">
       <div className='absolute w-36 h-28 z-[999] -top-10 -right-6 bg-nhf-glow/60 blur-3xl'></div>
      <nav className="text-gray-200 py-8 px-24 flex items-center justify-between">
      
       {/* <div className="absolute w-36 h-28 top-20 left-1/2 -translate-x-1/6 bg-nhf-glow/60 blur-3xl"></div> */}
      
      <div className="text-2xl font-bold"><span className="text-neon-green-700">Crypto</span>Dive</div>

      
      <ul className="flex space-x-6">
        {NAV_ITEMS.map((item, index) => (
          <li key={index}>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              {item}
            </a>
          </li>
        ))}
      </ul>

      
      <div className="flex items-center space-x-8">
        <Button buttonStyle="filled" variant="normal" py='py-2'>Sign Up</Button>
        <button className="cursor-pointer">
          <img src={moreOptionsIcon} alt="More-options" className="h-6"/>
        </button>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;