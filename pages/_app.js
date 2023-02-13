import Navbar from "@/components/Navbar";
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AnimaHub</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
