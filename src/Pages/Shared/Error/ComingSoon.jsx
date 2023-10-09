import { Link } from "react-router-dom";

const ComingSoon = () => {
    return (
        <div className="text-center my-40">
            <h1 className="text-blue-500 text-7xl font-extrabold my-32">Coming Soon.........</h1>
            <span className="loading loading-spinner text-blue-600 loading-lg"></span>
            <p className="text-4xl font-bold mt-10">Back to <Link to='/' className="bg-black text-white rounded-lg p-2">Home</Link> <span>  </span></p>
            
        </div>
    );
};

export default ComingSoon;