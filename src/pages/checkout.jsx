import React from "react";

import Head from "next/head";
import Image from "next/image";

import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

import { StarIcon } from "@heroicons/react/24/solid";
import CartProduct from "../components/CartProduct";
import { formatPrice } from "../utils/helpers";
import { useSession } from "next-auth/react";

const Checkout = () => {
  const products = useSelector(selectItems);

  const session = useSession();

  const totalQuantity = products.reduce((acc, cur) => cur.quantity + acc, 0);

  const totalPrice = products.reduce(
    (acc, cur) => cur.quantity * cur.price + acc,
    0
  );

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>

      <main className="bg-gray-100 min-h-[86vh] py-10">
        {/* container */}
        <div className="w-[95%] max-w-screen-2xl mx-auto lg:flex">
          <div className="lg:w-[72%] flex-grow lg:mr-5 mb-10 lg:mb-0 shadow-sm">
            {/* banner */}
            <div className="relative w-full h-[140px] mb-5">
              <Image
                src="https://links.papareact.com/ikj"
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* cart products */}
            <div className="mx-auto bg-white p-5">
              <h2 className="font-semibold text-2xl border-b pb-4 mb-4">
                Shopping Basket{" "}
              </h2>

              <ul>
                {products.length ? (
                  products.map((product) => (
                    <CartProduct key={product.id} data={product} />
                  ))
                ) : (
                  <h2 className="text-3xl text-center">No products in cart!</h2>
                )}
              </ul>
            </div>
          </div>

          {/* summary */}
          {products.length ? (
            <div className="lg:w-[28%] h-[fit-content] px-3 py-10 bg-white shadow-sm">
              {/* Subtotal */}
              <h3 className="mb-5">
                Subtotal ({totalQuantity} items):
                <span className="font-semibold text-xl ml-3">
                  {formatPrice(totalPrice)}
                </span>
              </h3>

              <button
                disabled={!session.data}
                className={`btn w-full max-w-[300px] ${
                  session.data
                    ? "pointer-events-auto"
                    : "pointer-events-none btn-secondary"
                }`}
              >
                {!session.data ? "Sign in to " : ""}Check out
              </button>
            </div>
          ) : null}
        </div>
      </main>
    </>
  );
};

export default Checkout;
