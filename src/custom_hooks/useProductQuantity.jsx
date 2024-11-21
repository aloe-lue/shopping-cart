import { useState } from "react";

const useProductQuantity = () => {
  const [prodQuantity, setProdQuantity] = useState({});

  const handleProdQuantityInput = (fieldName) => (event) => {
    const { value } = event.target;
    setProdQuantity((quantity) => ({
      ...quantity,
      [fieldName]: value,
    }));
  };

  const handleProdQuantityMinus = (fieldName) => () => {
    const lestUn = prodQuantity[fieldName];
    setProdQuantity((quantity) => ({
      ...quantity,
      [fieldName]:
        typeof lestUn === "undefined" ? 0 : lestUn >= 1 ? lestUn - 1 : 0,
    }));
  };

  const handleProdQuantityPlus = (fieldName) => () => {
    const lestUn = prodQuantity[fieldName];
    setProdQuantity((quantity) => ({
      ...quantity,
      [fieldName]:
        typeof lestUn === "undefined"
          ? 0 + 1
          : typeof lestUn === "string"
          ? Number(lestUn) + 1
          : typeof lestUn === "number"
          ? lestUn + 1
          : 0,
    }));
  };

  return {
    prodQuantity,
    handleProdQuantityInput,
    handleProdQuantityMinus,
    handleProdQuantityPlus,
  };
};

export default useProductQuantity;
