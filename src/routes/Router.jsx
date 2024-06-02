import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import {loader} from "../utilities/loader";
import Item from "../components/Item/Item";
import Product from "../pages/product/Product";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import AllCategory from "../pages/allCategory/AllCategory";
import Category from "../pages/category/Category";
import Landing from "../pages/landing/Landing";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";


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
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/allCategory",
        element: <AllCategory />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/landing",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);
