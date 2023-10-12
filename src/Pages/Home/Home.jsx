import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Services from "./Services";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
    const serviceData = useLoaderData();
    console.log(serviceData);
    return (
        <div>
          <Navbar></Navbar>
          <section className="mx-auto w-4/5">
            <div className="my-10 w-full mx-auto bg-[#FEF9E7] p-4 rounded-lg">
              <h2 className="text-5xl font-bold text-center m-4">Explore us</h2>
              <p className="text-center">Welcome , where passion for gaming and technology meets the art of event
               management. The driving force behind this venture, and Ive been captivated by the world of gaming 
               and tech from an early age. What started as a personal fascination has evolved into a full-fledged
                commitment to creating unforgettable events that bring these two realms together.</p>
              <div className="text-center m-5">
                <Link to='/about'><button className="btn btn-primary">Explore More</button></Link>
              </div>
            </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2"> 
          {
            serviceData.map(services => <Services
            key={services.id}
            services={services}
            ></Services>)
          }
          </div>
        
          </section>
          <Footer></Footer>
        </div>
    );
};

export default Home;