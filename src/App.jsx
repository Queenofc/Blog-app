import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";

const router = createBrowserRouter([
{
    path: "/",
    element: <div>Hello world!</div>,
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