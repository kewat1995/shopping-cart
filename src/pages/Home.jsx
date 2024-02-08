import  { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import ProductsItems from "../components/ProductsItems";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchShopingCartData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      if (data) {
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShopingCartData();
  }, []);
  // console.log(products);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-4 ">
          {products && products.length
            ? products.map((item) => (
                <ProductsItems key={item.id} items={item} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default Home;
