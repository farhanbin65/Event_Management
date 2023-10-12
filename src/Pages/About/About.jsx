import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=" mx-auto w-4/5 lg:w-3/4">
            <h1 className="my-10 text-center text-5xl font-bold">About Us</h1>
            <div className="collapse collapse-arrow  bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" /> 
                <div className="collapse-title text-xl font-medium">
                    Introduction
                </div>
                <div className="collapse-content"> 
                    <p> Start with a brief introduction to your event management company. Mention your companys name, location, and when it was founded.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Mission Statement:
                </div>
                <div className="collapse-content"> 
                    <p>Share your mission and vision for your event management services in the tech and gaming industry. Highlight your commitment to delivering exceptional events and experiences.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Expertise
                </div>
                <div className="collapse-content"> 
                    <p>Describe your expertise in organizing tech and gaming events. Mention any certifications, experience, or unique skills that set your team apart.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Team
                </div>
                <div className="collapse-content"> 
                    <p>Introduce key team members and their roles. Highlight their relevant experience and qualifications.</p>
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;