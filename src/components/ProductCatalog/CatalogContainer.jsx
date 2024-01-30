import { useContext, useEffect, useState } from "react";
import ShoppingCartContainer from "../ShoppingCart/ShoppingCartContainer.jsx";
import { ShoppingCartContext } from "../ShoppingCart/ShoppingCartContext.jsx";
import { getPrices, getProducts, getStock } from "./APIS/ProductsApis.js";
import { transformData } from "./Logic.js";
import ProductContainer from "./ProductContainer.jsx";

const CatalogContainer = () => {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const { productShopping } = useContext(ShoppingCartContext);

  const obtainProducts = async () => {
    await Promise.all([getProducts(), getStock(), getPrices()])
      .then((responses) => {
        if (responses.find((r) => !r.ok))
          throw { msg: "Error al obtener información" };
        setProducts(
          transformData(responses[0].data, responses[1].data, responses[2].data)
        );
      })
      .catch((error) => alert(error));
  };
  useEffect(() => {
    obtainProducts();
  }, []);
  return (
    <div className="w-3/4 h-full rounded-lg shadow-xl bg-slate-200 p-5">
      <div className="flex justify-between">
        <b className="flex justify-start text-xl">Catálogo de productos</b>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:cursor-pointer"
            onClick={() => setShowCart(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <b>{productShopping.reduce((a, b) => a + b.cant, 0)}</b>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {products.map((prod, index) => (
          <ProductContainer key={index} model={prod} />
        ))}
      </div>
      {showCart && (
        <ShoppingCartContainer
          show={showCart}
          setShow={() => {
            setShowCart(false);
          }}
        />
      )}
    </div>
  );
};
export default CatalogContainer;
