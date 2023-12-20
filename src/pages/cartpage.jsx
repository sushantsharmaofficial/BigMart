import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { removeCart } from "../services/cartslice";

const CartPage = () => {
  const dispatch = useDispatch();
  let cartData = useSelector((state) => state.cart.cartItemsData);

  return (
    <div className="p-10 ">
      <h3 className=" font-bold text-3xl mb-5 text-orange-400 py-10">
        My Cart Items
      </h3>
      <div className="cartwrapper flex gap-10 ">
        <div className="left w-3/4  ">
          {cartData.length !== 0 ? (
            cartData.map((item) => (
              <div
                key={item?.id}
                className="flex justify-between gap-5 mb-5 relative "
              >
                <div className="image flex-1  bg-orange-50  ">
                  <img
                    src={item?.image}
                    alt="image"
                    className="rounded-3xl items-center h-60 w-full object-contain "
                  />
                </div>
                <div className="info flex-[3]  gap-10 px-3  bg-orange-50 rounded-3xl">
                  <div className="whole flex">
                    <div className="infosys ">
                      <h3 className="title flex text-orange-400 font-bold text-3xl mb-3 mt-10">
                        <p>{item?.title}</p>
                      </h3>
                      <p className="price flex  items-center gap-1 py-1  text-2xl font-bold text-orange-300 mb-3  rounded-2xl ">
                        <BsCurrencyDollar /> {item?.price}
                      </p>
                      <form className="flex mb-2 rounded-lg p-1">
                        <button className=" px-2 text-xl font-bold ">-</button>
                        <input type="number" min={0} max={3} />
                        <button className="px-2 text-xl font-bold ">+</button>
                      </form>
                      <div className="  flex font-semibold text-xl text-orange-500 py-3 px-2">
                        {item?.category}
                      </div>
                    </div>
                    <button
                      onClick={() => dispatch(removeCart(item?.id))}
                      className=" flex absolute right-5 top-0 p-5 text-3xl text-orange-500"
                    >
                      <RiDeleteBin6Fill />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className=" flex justify-between items-center font-semibold text-xl  ">
              There are no items in the cart
            </div>
          )}
        </div>
        <div className="totaling w-1/4 ">
          {cartData.length !== 0 ? (
            <div className="right   bg-slate-600  rounded-3xl p-10 text-white shadow-3xl">
              <h3 className="title font-bold text-3xl mb-5">Cart Summary</h3>
              <div className="info flex justify-between items-center my-2">
                <div className="left font-semibold ">Toatal Products</div>
                <div className="right">4</div>
              </div>
              <div className="info flex justify-between items-center my-2">
                <div className="left font-semibold ">Toatal Price</div>
                <div className="right flex items-center g-1">
                  <BsCurrencyDollar />
                  422
                </div>
              </div>
              <div className="info flex justify-between items-center my-2">
                <div className="left font-semibold ">Discount</div>
                <div className="right flex items-center g-1">
                  <BsCurrencyDollar />
                  44
                </div>
              </div>
              <div className="info flex justify-between items-center my-2">
                <div className="left font-semibold ">Pay Amount</div>
                <div className="right flex items-center g-1">
                  <BsCurrencyDollar />
                  498
                </div>
              </div>
            </div>
          ) : (
            <div className="  flex justify-between items-center bg-slate-600 rounded-3xl p-10 text-white shadow-3xl ">
              No Items Selected
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
