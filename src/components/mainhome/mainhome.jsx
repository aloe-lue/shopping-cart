import { Link } from "react-router-dom";
import shopNow from "./shop-now-205w.jpg";
import style from "./main-home.module.css";

const MainHome = () => {
  return (
    <main>
      <section>
        <div className={style.home}>
          <div className={style.homeContent}>
            <div>
              <h2 className={style.hero}>Call to Act</h2>
              <p className={style.heroPara}>
                Eligendi ratione distinctio, fuga necessitatibus assumenda, rem
                sed quidem officia delectus, odio in ea quos dicta? Ipsam
                voluptas voluptatibus illum libero ullam.
              </p>
              <Link to="/shop" className={style.heroLink}>
                Shop now!
              </Link>
            </div>
            <div>
              <img src={shopNow} alt="" width={205} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default MainHome;
