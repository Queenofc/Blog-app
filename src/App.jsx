import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Single from "./pages/Single";
import Write from "./pages/Write";

const router = createBrowserRouter([
{
    path: "/",
    element: <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>,
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
    <div>
        <RouterProvider router={router} />
    </div>
  );
}


export default App;