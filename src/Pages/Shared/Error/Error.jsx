import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center my-40">
            <h1 className="text-blue-500 text-7xl font-extrabold my-32">404 Error</h1>
            <h1 className="text-red-500 text-7xl font-extrabold my-32">Page Not Found</h1>
            <p className="text-4xl font-bold mt-10">Back to <Link to='/' className="bg-black text-white rounded-lg p-2">Home</Link> <span>  </span></p>
        </div>
    );
};

export default Error;