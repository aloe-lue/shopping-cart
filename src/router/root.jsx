import Home from "../components/home/home";
import MainHome from "../components//mainhome/mainhome";
import ErrorPage from "../components/errorpage/errorpage";
import MainShop from "../components/shop/shop";
import Cart from "../components/cart/cart";

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
