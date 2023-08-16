import React, { useState, useEffect } from "react";
import Header from "./components/header";
import FeatureProductSection from "./sections/featureproductsection";
import Herosection from "./sections/herosection";
import Footer from "./components/footer";
import { Outlet, useLocation } from "react-router-dom";
function App() {
  const [products, setProducts] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      {location.pathname === "/" && (
        <>
          <Herosection />
          <FeatureProductSection
            itemsCount={5}
            title="Featured Products"
            products={products}
          />
          <FeatureProductSection
            itemsCount={5}
            title="Recently Added Products"
            products={products}
          />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
