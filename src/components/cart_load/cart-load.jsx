import { Minus, Plus, Save, Trash } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import { string, number, oneOfType } from "prop-types";
import style from "../product/product.module.css";

const CartLoad = ({ image, title, price, id }) => {
  const [shopLoad2, handleQuantity, cart] = useOutletContext();
  const {
    prodQuantity,
    handleProdQuantityInput,
    handleProdQuantityMinus,
    handleProdQuantityPlus,
  } = handleQuantity;
  const { setCartItem, deleteCartItem } = cart;

  return (
    <article>
      <div>
        <div>
          <img src={image} alt="" width={200} />
        </div>
        <div>
          <h3 className={style.prodTitle}>{title}</h3>
          <p className={style.prodPrice}>price: {price}$</p>
          <div>
            <label htmlFor={`quantity-${id}`} className={style.quantityLabel}>
              Qty:{" "}
            </label>
            <input
              className={style.quantityInput}
              type="number"
              name={`quantity-${id}`}
              id={`quantity-${id}`}
              min={1}
              value={
                Object.hasOwn(prodQuantity, `quantity-${id}`)
                  ? prodQuantity[`quantity-${id}`]
                  : 0
              }
              onChange={handleProdQuantityInput(`quantity-${id}`)}
            />
            {prodQuantity[`quantity-${id}`] >= 2 ? (
              <button
                onClick={handleProdQuantityMinus(`quantity-${id}`)}
                className={style.minus}
              >
                <Minus />
                Minus
              </button>
            ) : (
              <button
                onClick={() => deleteCartItem({ id })}
                className={style.minus}
              >
                <Trash /> delete
              </button>
            )}
            <button
              onClick={handleProdQuantityPlus(`quantity-${id}`)}
              className={style.plus}
            >
              <Plus />
              Plus
            </button>
            <button
              className={style.addToCart}
              onClick={() =>
                setCartItem({
                  id,
                  data: {
                    id,
                    image,
                    title,
                    price,
                    quantity: Object.hasOwn(prodQuantity, `quantity-${id}`)
                      ? prodQuantity[`quantity-${id}`]
                      : 0,
                  },
                })
              }
            >
              <Save />
              update
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

CartLoad.propTypes = {
  image: string,
  title: string,
  price: oneOfType([string, number]),
  id: oneOfType([number, string]),
};

export default CartLoad;
