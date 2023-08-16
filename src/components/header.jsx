import React from "react";
import { SiKasasmart } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  let cartItemsData = useSelector((state) => state.cart.cartItemsData);

  return (
    <header className=" flex justify-between sticky top-0 z-50 bg-white items-center gap-10 shadow-sm py-5 px-10  ">
      <Link to="/">
        <div className="logo flex gap-2 items-center">
          <div className=" text-4xl">
            <SiKasasmart />
          </div>
          <h3 className=" font-serif text-5xl ">
            <span className=" text-orange-400">B</span>ig
            <span className=" text-orange-400">M</span>art
          </h3>
        </div>
      </Link>
      <form action="submit" className="flex items-center">
        <input
          type="text"
          className=" px-5 py-2 border-2 border-orange-400 rounded-lg"
          placeholder="Search Products..."
        />
        <button className=" -m-9 p-3">
          <FiSearch className=" text-orange-400" />
        </button>
      </form>
      <div className="menu flex gap-10 items-center ">
        <Link to="/products">Products</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/sales">Sales with us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="buttons flex gap-5 items-center ">
        <Link to="/cart">
          <div className="cart relative">
            <BsFillCartFill className=" text-orange-400 text-2xl" />
            {cartItemsData.length !== 0 && (
              <span className=" absolute -top-6 -right-2 text-white bg-orange-400 border-1 border-white text-sm rounded-md  px-1 py-0.5">
                {cartItemsData.length}
              </span>
            )}
          </div>
        </Link>
        <div className="cart">Login</div>
        <div className="cart">Register</div>
      </div>
    </header>
  );
};

export default Header;
