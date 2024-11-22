import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const { status, statusText, data } = useRouteError();

  return (
    <>
      <main>
        <div>
          <h2>{status}</h2>
          <p>
            {statusText}, {data}
          </p>
          <h3>Oh, you&rsquo;re lost huh? here are some lists of links.</h3>
          <div>
            <Link to="/">go home</Link>
          </div>
          <div>
            <Link to="/shop">shop now!</Link>
          </div>
          <div>
            <Link to="/cart">check your cart!</Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
