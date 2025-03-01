import { FAQS_DATA, PAGE_CONTENT } from "../../constants";
import Button from "../shared/Button";
import FAQItem from "./FAQItem";

const FAQs = () => {
  return (
   <div className="bg-faqs relative overflow-x-clip py-20">
    <div className='absolute w-36 h-20 top-1/3 -left-5 bg-nhf-glow/60 blur-3xl'></div>
    <div className='absolute w-36 h-20 bottom-1/3 -right-5 bg-nhf-glow/60 blur-3xl'></div>
     <div className="container  mx-auto  px-36 space-y-6 text-center">
      <Button buttonStyle="ghost" variant="normal" py="py-3">
        FAQs
      </Button>
      <h1 className="text-gray-200 text-3xl font-medium">
        {PAGE_CONTENT.faqSection.heading}
      </h1>
      <p className="text-gray-400 px-72">
        {PAGE_CONTENT.faqSection.text}
      </p>
      <div className="grid grid-cols-2 gap-10 pt-16">
        {
            FAQS_DATA.map(item => (
                <FAQItem key={item.id} {...item}/>
            ))
        }
      </div>
    </div>
   </div>
  );
};

export default FAQs;
