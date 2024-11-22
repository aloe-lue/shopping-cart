import { Link } from "lucide-react";

const Default = () => {
  return (
    <>
      <div>
        <h2>oh, you&rsquo;re lost, huh?</h2>
        buy <Link to="/shop">products</Link> or check your{" "}
        <Link to="/cart">cart</Link>
        or go <Link to="/">home</Link>
      </div>
    </>
  );
};

export default Default;
