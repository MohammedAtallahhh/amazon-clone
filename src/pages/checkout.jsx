import Head from "next/head";
import Image from "next/image";
import React from "react";

const Checkout = () => {
  const products = false;
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>

      <main className="lg:flex max-w-screen-2xl mx-auto bg-gray-100">
        {/* cart products */}
        <div className="flex-grow">
          {/* banner */}
          <div className="relative w-full h-[250px] mb-5">
            <Image
              src="https://links.papareact.com/ikj"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="w-[90%] mx-auto bg-white">
            <h1 className="text-3xl border-b py-4">Your shopping basket: </h1>
            {products ? "products" : <h1>No products in cart!</h1>}
          </div>
        </div>

        {/* summary */}
        <div></div>
      </main>
    </>
  );
};

export default Checkout;
