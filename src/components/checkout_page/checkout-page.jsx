import { useLocation } from "react-router-dom";
import style from "../shop/shop.module.css";
import { Check, PackageCheck } from "lucide-react";
import style2 from "../product/product.module.css";

const Checkoutpage = () => {
  const { state } = useLocation();
  const financial = (x) => {
    return Number.parseFloat(x).toFixed(2);
  };

  return (
    <>
      <section>
        <div className={style.products}>
          <div className={style.productContent}>
            <div>
              <h2 className={style.hlvl2}>
                Checkout <PackageCheck />
              </h2>
            </div>
            <div className={style.items}>
              {state.cartLoad.map((value) => {
                return (
                  <article key={value.id}>
                    <div>
                      <div>
                        <img src={value.image} alt="" width={200} />
                      </div>
                      <div>
                        <h3 className={style2.prodTitle}>{value.title}</h3>
                        <p className={style2.prodPrice}>{value.price} $</p>
                        <p className={style2.prodPrice}>
                          Qty: {value.quantity}
                        </p>
                        <p className={style2.prodPrice}>
                          product total:{" "}
                          {financial(value.price * value.quantity)}$
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div>
              <p className={style.hlvl2}>
                total:{" "}
                {financial(
                  state.cartLoad.reduce(
                    (acc, curr) => (acc += curr.price * curr.quantity),
                    0
                  )
                )}
                $
              </p>
              <div>
                <button className={style2.checkoutBtn}>Place order</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkoutpage;
