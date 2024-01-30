import { useContext } from "react";
import { ShoppingCartContext } from "../ShoppingCart/ShoppingCartContext.jsx";

const ProductCard = ({ item }) => {
  const { addProductsShoppingCart, productShopping } =
    useContext(ShoppingCartContext);
  return (
    <div className="full-shadow flex w-full flex-1 flex-col  overflow-hidden rounded-2xl bg-slate-300 p-5 ">
      <div className="flex justify-center">
        <img src={item.image} className="rounded-xl h-48" />
      </div>
      <div className="flex items-start flex-col">
        <p className="title-small text-start text-blackApp line-clamp-2">
          {item.model}
        </p>
        <span>{item?.code}</span>
        <span>{`Precio: $${item.price}`}</span>
        <button
          className="bg-slate-400 hover:bg-slate-200 hover:shadow-xl rounded-lg h-10 p-5 flex items-center justify-center"
          onClick={() => {
            const found = productShopping.find((ps) => ps.id === item.id);
            if (found && found.cant === item.stock) {
              alert("No existen productos en stock");
            } else {
              addProductsShoppingCart(item);
            }
          }}
        >
          <b>Agregar al carrito</b>
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
