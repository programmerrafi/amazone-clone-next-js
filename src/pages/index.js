import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone by Md Rafi</title>
      </Head>

      <Header
      // products={products}
      // setShowCart={setShowCart}
      // showCart={showCart}
      />

      {/* <main className="mx-auto" style={{ maxWidth: "1920px" }}> */}
      <main className="mx-auto max-w-screen-2xl">
        {/* Banner */}
        {/* <Banner /> */}
        {/* Product feed */}
        {/* <ProductFeed products={products} setShowCart={setShowCart} /> */}
      </main>

      {/* <Footer /> */}
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
