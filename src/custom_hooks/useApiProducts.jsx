import { useEffect, useState } from "react";

const useApiProductsInfo = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const request = await fetch(
          "https://fakestoreapi.com/products?limit=5"
        );
        if (request.status >= 400) {
          throw new Error(`Server error: ${request.statusText}`);
        }
        setProducts(await request.json());
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, error, isLoading };
};

export default useApiProductsInfo;
