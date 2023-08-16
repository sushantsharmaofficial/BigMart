import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Product from "./../components/product";
import { Link } from "react-router-dom";

const FeatureProductSection = ({ title, products, itemsCount }) => {
  return (
    <section className=" p-10 pt-0">
      <div className="heading flex justify-between mb-10">
        <h3 className="text font-bold text-orange-400 text-3xl">{title}</h3>
        <div className="flex items-center gap-4 text-xl">
          <button className=" font-semibold">All Products</button>
          <BsFillArrowRightCircleFill className=" text-orange-400" />
        </div>
      </div>
      <div className="productwrapper grid grid-cols-5 gap-10 p-5">
        {products.slice(0, itemsCount).map((product) => (
          <Product key={product.id} productData={product} />
        ))}
      </div>
    </section>
  );
};

export default FeatureProductSection;
