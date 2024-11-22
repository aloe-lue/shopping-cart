import {
  Store,
  HomeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { string, number, oneOfType } from "prop-types";
import { Link } from "react-router-dom";
import style from "./header.module.css";

const Header = ({ cartLoad }) => {
  return (
    <header className={style.headerSection}>
      <div className={style.headerLayout}>
        <div className={style.headerContent}>
          <div className={style.logo}>
            <Store size={48} color="#515151" />
            <h1 className={style.logoName}>Noname Store</h1>
          </div>
          <div className={style.navContent}>
            <nav>
              <ul className={style.headNav}>
                <li>
                  <Link to="/" className={style.headLink}>
                    <HomeIcon color="#515151" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className={style.headLink}>
                    <ShoppingBagIcon color="#515151" /> Products
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className={style.headLink}>
                    <ShoppingCartIcon color="#515151" />
                    Cart
                    <span className={style.cartNum}>{cartLoad}</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  cartLoad: oneOfType([number, string]),
};

export default Header;
