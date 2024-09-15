import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Homepage from "../pages/Homepage";
import Coinpage from "../pages/Coinpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "coin", element: <Coinpage /> },
    ],
  },
]);
