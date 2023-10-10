import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
