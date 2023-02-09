import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import Footer from "../components/Footer";
import { addProducts } from "../slices/basketSlice";

export default function Home({ products }) {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    dispatch(addProducts(products));
  }, [products]);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone by Md Rafi</title>
      </Head>

      <Header
        products={products}
        setShowCart={setShowCart}
        showCart={showCart}
      />

      {/* <main className="mx-auto" style={{ maxWidth: "1920px" }}> */}
      <main className="mx-auto max-w-screen-2xl">
        {/* Banner */}
        <Banner />
        {/* Product feed */}
        <ProductFeed products={products} setShowCart={setShowCart} />
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  // const session = await getSession(context);

  const products = await fetch(
    "https://course-api.com/react-store-products"
  ).then((response) => response.json());

  return {
    props: {
      products,
      // session,
    },
  };
}
