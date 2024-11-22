import { DonutIcon } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import Product from "../product/product";
import style from "./shop.module.css";

const MainShop = () => {
  const [shopLoad1] = useOutletContext();
  const { isLoading, error, products } = shopLoad1;

  if (error) return <p>An internet error has encountered.</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {products && (
        <main>
          <section>
            <div className={style.products}>
              <div className={style.productContent}>
                <div>
                  <h2 id="Products" className={style.hlvl2}>
                    Products <DonutIcon color="#515151" />
                  </h2>
                </div>
                <div className={style.items}>
                  {products.map(({ id, title, price, image }) => (
                    <Product
                      id={id}
                      title={title}
                      image={image}
                      price={price}
                      key={id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default MainShop;
