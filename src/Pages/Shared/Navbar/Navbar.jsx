import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {

    const {user, withDraw} = useContext(AuthContext);
    const notify = () => toast('LogOut Successful');
    const handleSignOut = () =>{
         withDraw()
        .then(() => notify())
        .catch((error) => console.error(error));
    }

    const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/reviews">Reviews</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
</>

    return (
        <div className="mb-10">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content gap-4 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Event Management</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end ">
                {
                    user ? <>
                    {
                    user.displayName ?
                    <div className="flex items-center m-2">
                    <img className="rounded-l-full h-10" src={user.photoURL}  />
                    <span className="text-bold bg-slate-300 p-2 text-black rounded-r-full ">{user.displayName}</span>
                    </div>
                    :
                    <div className="flex bg-slate-300 rounded-full items-center m-2">
                        <img className="rounded-l-full h-10" src="https://i.ibb.co/94VBGVL/user-3296.png"  />
                        <span className="text-bold bg-slate-300 p-2 text-black rounded-r-full">{user.email}</span>
                    </div>
                    }
                    <button onClick={handleSignOut} className="btn">Sign Out</button>
                    </>
                    : 
                    <Link to='/login'>
                        <button className="btn">Login</button>
                    </Link>
                } 
            </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Navbar;