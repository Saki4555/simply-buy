import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/premium-vector/smart-gadgets-home-appliances-icons_9206-994.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Discover Smart Gadgets</h1>
        <p className="mb-5">
            Explore the latest technology with our premium collection of
            smart gadgets and home appliances. Upgrade your lifestyle today!
          </p>
          <button onClick={() => navigate('/products')} className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
