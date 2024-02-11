
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const bagItems = useSelector((state) => state.cart.cart);
  

  return (
    <div>
      <nav className="max-w-8xl flex items-center justify-between h-20 mx-auto  ">
        <Link to="/">
          <div className="ml-5">
            <h1 className="text-red-900 font-bold cursor-pointer text-xl tracking-wide sm:text-2xl md:text-3xl">
              SHOPPING CART
            </h1>
          </div>
        </Link>
        <div>
          <ul className=" mr-5 flex list-none items-center space-x-6 text-gray-800 font-semibold">
            <Link to="/">
              <li className="text-xl hover:text-purple-500">Home</li>
            </Link>
            <Link to="/carts">
              <li className="text-xl hover:text-purple-500">
                Carts
                <span className="translate-middle badge rounded-pill bg-danger">
                  {bagItems.length}
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
