import {
  createBrowserRouter,
  RouterProvider,
  Route,  
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home Page!</div>,
  },
]);

function App() {
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
