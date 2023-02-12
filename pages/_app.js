import Navbar from "@/components/Navbar";
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AnimaHub</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
