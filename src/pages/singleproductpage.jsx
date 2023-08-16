import React, { useState, useEffect } from "react";
import { BsCurrencyDollar, BsFillCartFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { updateCart } from "../services/cartslice";
import { useDispatch } from "react-redux";

const SingleProductPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  console.log(singleProduct);
  console.log(productId);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setSingleProduct(json));
  }, [productId]);
  const newLocal = (
    <div className="price flex  items-center gap-1 py-1  text-2xl font-bold text-orange-300 mb-5 bg-orange-50 rounded-2xl ">
      <BsCurrencyDollar /> {singleProduct.price}
    </div>
  );
  return (
    <article className="flex justify-between gap-10 p-10">
      <div className="image flex-1">
        <img src={singleProduct.image} alt="singleproductimage" />
      </div>
      <div className="info flex-[3] gap-10 px-10 ">
        <div className="title flex text-orange-400 font-bold text-3xl mb-3">
          <h3>{singleProduct.title}</h3>
        </div>
        {/* {newLocal} */}

        <div className="text flex text-xl font-light ">
          <p>{singleProduct.description}</p>
        </div>
      </div>
      <div className="buttons flex-1 ">
        <div
          onClick={() => dispatch(updateCart(singleProduct))}
          className="flex gap-3 p-3 py-6 items-center justify-center cursor-pointer bg-orange-300 rounded-3xl text-3xl   "
        >
          <BsFillCartFill className=" text-orange-600" /> Add to Cart
        </div>
      </div>
    </article>
  );
};

export default SingleProductPage;
