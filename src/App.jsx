import "./App.css";
import CatalogContainer from "./components/ProductCatalog/CatalogContainer.jsx";
import { ShoppingCartContextProvider } from "./components/ShoppingCart/ShoppingCartContext.jsx";

function App() {
  return (
    <div className="flex justify-center items-center ">
      <ShoppingCartContextProvider>
        <CatalogContainer />
      </ShoppingCartContextProvider>
    </div>
  );
}

export default App;
