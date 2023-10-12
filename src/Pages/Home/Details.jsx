/* eslint-disable react/prop-types */
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Details = () => {
    const {id} = useParams();
    const idInt = parseInt(id);
    const details = useLoaderData();
    const detail = details.find(detail => detail.id === idInt);
    const {image, name, description, price} = detail;
    return (
        <div>
            <Navbar></Navbar>
            <div className="card m-4 mx-auto w-4/5 lg:w-3/4 bg-base-100 shadow-xl my-24 border-b-2">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="flex gap-36">
                    <p className="font-bold text-red-500">{price}</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;