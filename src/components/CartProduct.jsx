import React, { useState } from "react";
import Image from "next/image";

import { useDispatch } from "react-redux";
import { changeQuantity, removeFromBasket } from "../slices/basketSlice";

import { StarIcon } from "@heroicons/react/24/solid";
import { formatPrice } from "../utils/helpers";

const CartProduct = ({ data }) => {
  const { id, title, description, rating, price, images, quantity } = data;

  const dispatch = useDispatch();

  const rate = Array(Math.floor(rating))
    .fill()
    .map(($, i) => <StarIcon key={i} className="h-5 text-yellow-500" />);

  return (
    <li key={id} className="w-full lg:flex justify-between mb-5 border-b pb-4">
      {/* image  */}
      <div className="relative flex-shrink-0 flex justify-center w-[180px] h-[140px] my-auto mx-auto lg:mr-5">
        <Image src={images[0]} layout="fill" objectFit="contain" />
      </div>

      {/* info */}
      <div className="flex-grow flex flex-col gap-2 p-3">
        {/* title */}
        <h3 className="font-semibold text-lg">{title}</h3>

        {/* rate  */}
        <div className="flex">{rate}</div>

        {/* description */}
        <p>{description}</p>

        {/* price  */}
        <p className="font-semibold text-lg">{formatPrice(price * quantity)}</p>

        {/* Quantity */}
        <div className="flex items-center mt-2 mb-3">
          <span className="font-semibold">Quantity:</span>

          <input
            type="number"
            value={quantity}
            className="border-2 border-gray-300 pl-2 w-[60px] ml-3 text-xl"
            onChange={(e) =>
              dispatch(changeQuantity({ id, quantity: +e.target.value }))
            }
          />
        </div>
      </div>

      <div className="flex-shrink-0 flex items-end">
        <button className="btn" onClick={() => dispatch(removeFromBasket(id))}>
          Remove from basket
        </button>
      </div>
    </li>
  );
};

export default CartProduct;
