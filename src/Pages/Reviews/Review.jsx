/* eslint-disable react/prop-types */
const Review = ({review}) => {
    const {customer_name, rating, comment} = review;
    return (
        <div>
            <div>
                <div className="p-4 bg-base-100 shadow-xl mb-10 rounded-b-lg border-b-2 m-4 ">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-semibold">{customer_name}</span>
                    
                        <span className="text-yellow-500">Rating: {rating}</span>
                       
                    </div>
                    <p className="text-gray-700">{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;