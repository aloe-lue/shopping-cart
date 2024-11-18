import { useState } from "react";

const useProductQuantity = ({ qty = 0 }) => {
  const [quantity, setQuantity] = useState(qty);

  const setQuantityInput = (e) => {
    setQuantity(e.target.value);
  };

  const setQuantityMinus = () => {
    setQuantity((value) => {
      if (value >= 1) {
        return value - 1;
      }
      return value;
    });
  };
  const setQuantityPlus = () => {
    if (typeof quantity === "string") {
      setQuantity(Number(quantity) + 1);
    }
    if (typeof quantity === "number") {
      setQuantity(quantity + 1);
    }
  };

  return {
    quantity,
    input: setQuantityInput,
    minus: setQuantityMinus,
    plus: setQuantityPlus,
  };
};

export default useProductQuantity;
