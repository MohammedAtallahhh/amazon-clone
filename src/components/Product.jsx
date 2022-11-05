import React, { useState } from "react";

import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

const Product = ({ data: { category, title, description, price, images } }) => {
  const [rating] = useState(Math.floor(Math.random() * 5) + 1);

  const hasPrime = false;
  return (
    <div className="relative z-30 flex flex-col gap-3 p-10 bg-white text-left shadow-md">
      <p className="capitalize absolute top-2 right-2 text-xs text-gray-400 italic">
        {category.replace(/-/g, " ")}
      </p>

      <div className="image relative w-full h-[200px] flex justify-center">
        <Image src={images[0]} alt={title} layout="fill" objectFit="contain" />
      </div>

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {" "}
        {Array(rating)
          .fill()
          .map(($, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="font-semibold">
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "GBP",
        }).format(price)}
      </div>

      {hasPrime && (
        <div className="flex items-center gap-2 h-[120px] max-w-[250px]">
          <img
            src="https://links.papareact.com/fdw"
            alt="Amazon prime"
            className="w-[50%] object-contain"
          />
          <p className="text-xs text-gray-500">FREE next-day delivery</p>
        </div>
      )}

      <button className="btn mt-auto font-semibold">Add to basket</button>
    </div>
  );
};

export default Product;
