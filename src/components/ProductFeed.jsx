import React from "react";

import axios from "axios";

import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div className="grid gap-6 grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-20 px-5 md:-mt-40">
      {/* First 4 products */}
      {products.slice(0, 4).map((product) => (
        <Product key={product.id} data={product} />
      ))}

      {/* Banner */}
      <div className="md:col-span-full">
        <img src="https://links.papareact.com/dyz" alt="banner" />
      </div>

      {/* Product spanned two cells */}
      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>

      {/* Rest of the products */}
      {products.slice(5, products.length - 1).map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
};

export default ProductFeed;
