import Home from "../components/home/home";
import MainHome from "../components/home/mainhome/mainhome";
import ErrorPage from "../components/errorpage/errorpage";
import MainShop from "../components/home/shop/shop";
import Cart from "../components/home/shop/cart/cart";

const route = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainHome />,
      },
      {
        path: "shop",
        element: <MainShop />,
      },
      {
        path: ":name",
        element: <Cart />,
      },
    ],
  },
];

export default route;
