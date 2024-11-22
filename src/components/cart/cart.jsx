import { Carrot } from "lucide-react";
import { Link, useParams, useOutletContext } from "react-router-dom";
import CartLoad from "../cart_load/cart-load";
import Default from "../default/default";
import Checkoutpage from "../checkout_page/checkout-page";
import style from "../shop/shop.module.css";

const Cart = () => {
  const { name } = useParams();
  const [shopLoad2, handleQuantity, cart] = useOutletContext();
  const { cartLoad, setCartItem, deleteCartItem } = cart;

  return (
    <>
      {name === "cart" ? (
        <main>
          <section className={style.products}>
            <div className={style.productContent}>
              <div className={style.checkoutHead}>
                <h2 className={style.hlvl2}>
                  My Cart <Carrot />
                </h2>

                <div>
                  {cartLoad.length >= 1 ? (
                    <Link to={"/checkout"} state={{ cartLoad }}>
                      <button className={style.checkoutBtn}>Checkout</button>
                    </Link>
                  ) : (
                    <Link to={"/shop"}>
                      <button className={style.checkoutBtn}>Shop Now!</button>
                    </Link>
                  )}
                </div>
              </div>
              {cartLoad.length >= 1 ? (
                <div className={style.items}>
                  {cartLoad.map(({ id, image, title, price }) => {
                    return (
                      <CartLoad
                        key={id}
                        id={id}
                        image={image}
                        title={title}
                        price={price}
                      />
                    );
                  })}
                </div>
              ) : (
                <h3>oh, so your cart is empty, huh?</h3>
              )}
            </div>
          </section>
        </main>
      ) : name === "checkout" ? (
        <Checkoutpage />
      ) : (
        <Default />
      )}
    </>
  );
};

export default Cart;
