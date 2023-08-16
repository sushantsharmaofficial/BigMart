import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
import { updateCart } from "../services/cartslice";
import { useDispatch } from "react-redux";

const Product = ({ productData }) => {
  const dispatch = useDispatch();

  return (
    <article className="prodecut  group shadow-lg rounded-md hover:-translate-y-3 hover:shadow-2xl cursor-pointer transition-all duration-200 ">
      <div className="image relative overflow-hidden">
        <Link key={productData.id} to={`/products/${productData.id}`}>
          <img
            src={productData.image}
            alt="shoes"
            className=" rounded-md h-72 w-full object-contain "
          />
        </Link>
        <button
          onClick={() => dispatch(updateCart(productData))}
          className=" absolute text-white bg-orange-300 py-3 font-semibold  -bottom-32 group-hover:bottom-0 transition-all rounded-md left-0 w-full "
        >
          ADD TO CART
        </button>
      </div>
      <div className="info py-5">
        <Link key={productData.id} to={`/products/${productData.id}`}>
          <h3 className=" font-bold text-lg text-orange-600">
            {productData.title.slice(0, 30)}...
          </h3>
        </Link>
        <div className="price flex  items-center font-bold">
          <BsCurrencyDollar />
          {productData.price}
        </div>
        <div className="text text-sm my-3">
          {productData.description.slice(0, 200)}...
        </div>
      </div>
    </article>
  );
};

export default Product;
