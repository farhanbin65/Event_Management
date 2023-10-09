import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Services = ({services}) => {
    const {name, price,id, image, description}= services;
    return (
        <div className="card m-4 bg-base-100 shadow-xl mb-16 border-b-2">
        <figure><img src={image} alt="" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>
                {
                    description.length > 50 ? <p>{description.slice(0,50)}<Link to={`/news/${id}`} className="text-blue-600 font-bond">  Read More....</Link></p>
                    : <p>{description}</p>
                }
            </p>
            <div className="flex gap-36">
            <Link className="font-bold text-green-400" to={`/news/${id}`}><button>Details</button></Link>
            <p className="font-bold text-red-500">{price}</p>
            </div>
        </div>
      </div>
    );
};

export default Services;