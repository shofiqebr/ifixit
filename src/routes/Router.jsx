import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import {loader} from "../utilities/loader";
import Item from "../components/Item/Item";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: loader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/item",
        element: <Item />,
      },
    ],
  },
]);
