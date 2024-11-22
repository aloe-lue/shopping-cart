import { Outlet } from "react-router-dom";
import useApiProductsInfo from "../../custom_hooks/useApiProducts";
import Header from "../header/header";
import useProductQuantity from "../../custom_hooks/useProductQuantity";
import useCart from "../../custom_hooks/useCart";

const Home = () => {
  const shopLoad1 = useApiProductsInfo();
  const handleQuantity = useProductQuantity();
  const cart = useCart();

  return (
    <>
      <Header cartLoad={cart.cartLoad.length} />
      <Outlet context={[shopLoad1, handleQuantity, cart]} />
    </>
  );
};

export default Home;
