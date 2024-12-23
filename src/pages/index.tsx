import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomePage from "./website/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const metaDescription =
    HomePage.metaDescription || "Selamat datang di epay.co.id";
  return (
    <>
      <Head>
        <title>
          Integrasi Pembayaran Online dengan API Berstandard SNAP melalui
          epay.co.id
        </title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <HomePage />
      </main>
    </>
  );
}
