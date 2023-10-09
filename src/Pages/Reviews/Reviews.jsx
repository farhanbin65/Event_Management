import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Review from "./Review";

const Reviews = () => {
    const reviews = useLoaderData();
    console.log(reviews)
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-3/4 mx-auto">
            <div className="grid grid-cols-2">
                {
                    reviews.map(review =><Review key={review.id} review={review}></Review>)   
                }
            
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Reviews;