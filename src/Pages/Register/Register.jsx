/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../../Providers/AuthProviders";
import Footer from "../Shared/Footer/Footer";

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const notify = () => toast('User Created Successfully');
    const problem = () => toast('Something Went Wrong');
    const [registerError, setRegisterError] = useState(problem());
    
    const handleRegister = e =>{


        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        console.log(email, name, password)
        const regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
        if(password.search(regularExpression)){
            setRegisterError('invalid Password', problem());
            return;
        }
        setRegisterError('')
        // create user
        createUser(email, password)
        .then(() =>{
           notify()
        })
        .catch(error=>{
            setRegisterError(error.message)
        })
    }

    return (
        <div>
        <Navbar></Navbar>
        
       <div className="text-center">
       <h2 className="text-5xl font-bold m-10">Register</h2>
        <form onSubmit={handleRegister} className="md:w-3/4 my-10 mx-auto lg:w-1/2">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Create Password</span>
            </label>
            <input type="password" placeholder="create password" name="password" className="input input-bordered" required />
            </div>
            <p className="text-red-700 font-bold m-4">{registerError}</p>
            <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
            </div>
        </form>
        <p>Already Have An Account? Please <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
       </div>
       <Toaster />
       <Footer></Footer>
    </div>
    );
};

export default Register;