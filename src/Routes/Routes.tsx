import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Homepage from "pages/Homepage";
import Coinpage from "pages/Coinpage";
import Page404 from "pages/404Page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "coin/:id", element: <Coinpage /> },
      { path: "*", element: <Page404 /> },
    ],
  },
]);
