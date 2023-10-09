import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from '../Pages/Register/Register';
import About from "../Pages/About/About";
import Details from "../Pages/Home/Details";
import PrivateRoutes from "./PrivateRoutes";
import Reviews from "../Pages/Reviews/Reviews";
import Error from "../Pages/Shared/Error/Error";
import ComingSoon from "../Pages/Shared/Error/ComingSoon";
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
   children:[
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('../../public/services.json')
    },
    {
      path: '/news/:id',
      element: <PrivateRoutes><Details></Details></PrivateRoutes>,
      loader: () => fetch('../../public/services.json')
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/coming',
      element: <ComingSoon></ComingSoon>
    },
    {
      path: '/about',
      element: <About></About>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path: '/reviews',
      element: <Reviews></Reviews>,
      loader: () => fetch('../../public/reviews.json')
    }

   ]
  },
]);

export default router;