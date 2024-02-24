import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import News from "../pages/News";
import Layout from "../layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
