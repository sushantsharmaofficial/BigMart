import React, { useState, useEffect } from "react";
import FeatureProductSection from "../sections/featureproductsection";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className=" py-10">
      <FeatureProductSection
        itemsCount={20}
        title="All Products"
        products={products}
      />
    </div>
  );
};

export default ProductsPage;
