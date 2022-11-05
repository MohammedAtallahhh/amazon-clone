import Head from "next/head";

import axios from "axios";

import { Banner, ProductFeed } from "../components";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Amazon</title>
      </Head>

      <main className="max-w-screen-2xl m-auto bg-gray-100">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const {
    data: { products },
  } = await axios.get("https://dummyjson.com/products?limit=20");

  return {
    props: { products },
  };
};
