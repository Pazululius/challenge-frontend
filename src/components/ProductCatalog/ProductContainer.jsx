import ProductCard from "./ProductCard.jsx";

const ProductContainer = ({ model }) => {
  return (
    <div className="w-full h-auto flex flex-col m-2 shadow-xl rounded-lg">
      <b className="flex justify-start p-5">{model.model.toUpperCase()}</b>
      <div className="flex p-5 gap-3">
        {model.children.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
export default ProductContainer;
