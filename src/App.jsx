import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Single from "./pages/Single";
import Write from "./pages/Write";
import "./style.scss"

const Layout = () =>{
  return(
    <>
     <Navbar />
     <Outlet />
     <Footer />
    </>
  );
};

const router = createBrowserRouter([
{
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },
      {
        path:"/Write",
        element:<Write/>
      },
    ]
},
{
    path: "/Register",
    element: <Register/>,
},  
{
    path: "/Login",
    element: <Login/>,
},  
]);

function App() {
  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;