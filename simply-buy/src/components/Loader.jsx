import {PulseLoader} from 'react-spinners/'

const Loader = () => {
    return (
        <div className="h-[70vh] flex justify-center items-center">
            <PulseLoader size={10}/>
        </div>
    );
};

export default Loader;