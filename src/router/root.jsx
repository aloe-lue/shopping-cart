import { Home, MainHome } from "../components/home/home";
import ErrorPage from "../components/errorpage/errorpage";
import { MainShop, Cart } from "../components/shop/shop";

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
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

export default route;
