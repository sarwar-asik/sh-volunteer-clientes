import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SIgnUp from "../pages/SIgnUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {path: '/' , element:<Home/>},
        {path:'/login',element:<LogIn/>},
        {path: '/signup',element:<SIgnUp/>},
        
    ]
  },
]);

export default routes;
