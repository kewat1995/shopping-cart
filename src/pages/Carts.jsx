
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BagCartItems from "../components/BagCartItems";

const Carts = () => {
  
  const bagItems = useSelector((state) => state.cart.cart);
 

 
  
  return (
    <div className="md:flex ">
      {bagItems && bagItems.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto overflow-hidden">
            <div className="p-3">
              {bagItems?.map((item) => (
                <BagCartItems key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="  mt-10  p-2 mr-10 ">
            <div className="w-[360px] border-2 p-4 rounded-lg">
              <h1 className=" text-2xl font-bold">Your Card Summery</h1>
              <p>
                <span className="font-semibold">Total Items = </span>
                <span>{bagItems.length}</span>

                <br />
                <span className="font-semibold">Total Amount = </span>
                <span>${0}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col justify-center items-center">
          <h1 className="text-2xl text-gray-800 font-bold mb-3">
            Your cart is Empty
          </h1>
          <Link to="/">
            <button className="bg-black text-white px-3 py-2 rounded-2xl">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Carts;
