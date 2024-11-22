import { string, number, oneOfType } from "prop-types";
import { Minus, Plus } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import style from "./product.module.css";

const Product = ({ id, image, title, price }) => {
  const [shopLoad1, handleQuantity, cart] = useOutletContext();

  const {
    prodQuantity,
    handleProdQuantityInput,
    handleProdQuantityMinus,
    handleProdQuantityPlus,
  } = handleQuantity;
  const { setCartItem } = cart;

  return (
    <article>
      <div className={style.prodItem}>
        <div>
          <img src={image} alt="" width={200} />
        </div>
        <div>
          <h3 className={style.prodTitle}>{title}</h3>
          <h4 id="minus" className={style.hidden}>
            minus
          </h4>
          <h4 id="plus" className={style.hidden}>
            plus
          </h4>
          <p className={style.prodPrice}>{price}$</p>
          <div className={style.field}>
            <label className={style.prodQuantity} htmlFor={`quantity-${id}`}>
              Quantity:{" "}
            </label>

            <button
              className={style.minus}
              onClick={handleProdQuantityMinus(`quantity-${id}`)}
              aria-labelledby="minus"
            >
              <Minus color="#515151" size={22} />
            </button>
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

            <button
              aria-labelledby="plus"
              className={style.plus}
              onClick={handleProdQuantityPlus(`quantity-${id}`)}
            >
              <Plus color="#515151" size={22} />
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
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

Product.propTypes = {
  id: number,
  image: string,
  title: string,
  price: oneOfType([number, string]),
};

export default Product;
