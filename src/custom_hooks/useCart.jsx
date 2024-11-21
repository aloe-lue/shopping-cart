import { useState } from "react";
const useCart = () => {
  const [cartLoad, setCartLoad] = useState([]);

  const setCartItem = ({ id, data }) => {
    data.quantity >= 1
      ? setCartLoad(cartLoad.filter((item) => item.id !== id).concat(data))
      : 0;
  };

  const deleteCartItem = ({ id }) => {
    setCartLoad(cartLoad.filter((item) => item.id !== id));
  };

  return {
    cartLoad,
    setCartItem,
    deleteCartItem,
  };
};

export default useCart;
