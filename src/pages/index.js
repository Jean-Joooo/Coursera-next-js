import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
      <h3 className={styles.h3}>An espresso maker that reads your mind </h3>
<Link className={styles.navLink} href="gallery">
    Click here to learn more ...
  </Link>
<div className={styles.heroDiv}>
<Image
  priority
  src="/images/hero.png"
  fill
  borderRadius={40}
  objectFit="contain"
  style={{
    boxShadow: "5px 5px 9px 1rgb(201, 201, 142)px rgba(0, 0, 0, 0.4)", borderRadius: "40px", border: "3px solid #70705c"
  }}
  alt="ESPectso 1000"
/>
</div>
<Link className={styles.navLink} href="preorder">
  Click here to pre-order...
</Link>
</Layout>
</>
  )
}
