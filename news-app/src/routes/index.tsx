import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";

import Home from "../pages/Home";
import News from "../pages/News";
import Error from "../pages/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "news/:slug",
        element: <News />,
      },
    ],
  },
]);

export default routes;
