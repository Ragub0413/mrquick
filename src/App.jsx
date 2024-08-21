import React,{useState} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Projectpage from "./pages/Projectpage";
import AllTestimonialpage from "./pages/AllTestimonialpage";
import LoginPage from "./pages/AdminLoginpage";
import Notfoundpage from "./pages/Notfoundpage";
import AdminDashboard from "./pages/AdminPanelpage"

const router = createBrowserRouter([
  {
    path: "/mrquick/",
    element: <Home />,
  },
  {
    path: "/mrquick/projects/",
    element: <Projectpage />,
  },
  {
    path: "/mrquick/testimonials/",
    element: <AllTestimonialpage />,
  },
  {
    path: "/mrquick/admin/login/",
    element: <LoginPage />,
  },
  {
    path: `/mrquick/admin/dashboard/`,  
    element: <AdminDashboard />,
  },
  {
    path: "*",
    element: <Notfoundpage />,
  },
]);
const router1 = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mrquick/projects/",
    element: <Projectpage />,
  },
  {
    path: "/mrquick/testimonials/",
    element: <AllTestimonialpage />,
  },
  {
    path: "/mrquick/admin/login/",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Notfoundpage />,
  },
]);

const App = () => {
  // const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  // if(!user?.result){
  //   return <RouterProvider router={router}></RouterProvider>;
  // }
  // else if(user?.result){
  //   return <RouterProvider router={router1}></RouterProvider>;
  // }
  return <RouterProvider router={router}></RouterProvider>;

 
};

export default App;
