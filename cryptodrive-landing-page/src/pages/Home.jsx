import { Contact, CryptoMarket, FAQs, Footer, Hero, LearnCrypto, Navbar } from "../components";


const Home = () => {
    return (
        <>
        <Navbar />
        <hr className="text-black/85" />
  
        <Hero/>
        <CryptoMarket />
        <LearnCrypto />
        <FAQs />
        <Contact />
        <Footer />
      </>
    );
};

export default Home;