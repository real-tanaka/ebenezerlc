import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import Feature2 from "../components/Feature2";
import Feature3 from "../components/Feature3";
import Companies from "../components/Companies";

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ebenezer Legal Consultancy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="Legal Consultancy"
          content="Logal Consultancy based in Pretoria that deals in policy and law"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Companies />
      <Feature />
      <Feature2 />
      <Feature3 />
      <Team />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}
