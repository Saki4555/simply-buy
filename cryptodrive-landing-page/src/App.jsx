import { Button, Navbar } from "./components";

const App = () => {
  return (
    <div className="bg-nhf p-16">
      <Navbar />
     
      <Button buttonStyle="filled" variant='compact' >
        <p>hello</p>
      </Button>
      {/* <button className="bg-neon-green-700/20 border border-neon-green-700/85 bg rounded-4xl text-neon-green-700/85 ml-2 px-36 font-medium py-1.5">
        test
      </button> */}
    </div>
  );
};

export default App;
