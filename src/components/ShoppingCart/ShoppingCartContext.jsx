import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = (props) => {
  const [productShopping, setProductsShopping] = useState([]);
  return (
    <ShoppingCartContext.Provider
      value={{
        setProductsShopping,
        productShopping,
        addProductsShoppingCart: (prod) => {
          const found = productShopping.find((ps) => ps.id === prod.id);
          if (found) {
            setProductsShopping((old) => {
              const filterOld = old.filter((o) => o.id !== found.id);
              return [
                ...filterOld,
                { ...found, cant: old.find((o) => o.id === found.id).cant + 1 },
              ];
            });
          } else {
            setProductsShopping((old) => {
              return [...old, { ...prod, cant: 1 }];
            });
          }
        },
        removeProduct: (prod) => {
          const found = productShopping.find((ps) => ps.id === prod.id);
          if (found.cant === 1) {
            setProductsShopping((old) => {
              const filterOld = old.filter((o) => o.id !== found.id);
              return [...filterOld];
            });
          } else {
            setProductsShopping((old) => {
              const filterOld = old.filter((o) => o.id !== found.id);
              return [
                ...filterOld,
                { ...found, cant: old.find((o) => o.id === found.id).cant - 1 },
              ];
            });
          }
        },
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
