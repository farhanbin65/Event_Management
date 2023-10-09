import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import toast, { Toaster } from 'react-hot-toast';
import Footer from "../Shared/Footer/Footer";

const Login = () => {
    const notify = () => toast('Login Successful');
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        // signIn
        signIn(email, password)
        .then(() =>{
            notify();
            // console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div>
            <Navbar></Navbar>
           <div className="text-center">
           <h2 className="text-5xl font-bold m-10">Login</h2>
            <form onSubmit={handleLogin} className="md:w-3/4 my-10 mx-auto lg:w-1/2">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p>Dont Have An Account? Please <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
           </div>
           <Toaster />
           <Footer></Footer>
        </div>
    );
};

export default Login;