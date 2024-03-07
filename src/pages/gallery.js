import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import { Inter } from "next/font/google";
import galleryStyles from "@/styles/Gallery.module.css";
import Layout from "@/components/Layout";


const inter = Inter({ subsets: ["latin"] });

export default function Gallery() {
  return (
    <>
      <Layout>
<div>
<p className={galleryStyles.subTitle}>Three models for every need</p>
<Link className={galleryStyles.navLink} href="/">
  Back to home page
</Link>

 {/* template starts */}

 <div className={galleryStyles.imageContainer}>
  <p className={galleryStyles.mainTitle}>Solitude</p>
  <h3 className={galleryStyles.h3}>Perfect for highly motivated individuals</h3>
  <Image
    priority
    src="/images/solitude.png"
    width={400}
    height={480}
    style={{
      boxShadow: "5px 5px 9px 1px rgba(0, 0, 0, 0.4)", borderRadius: "40px", border: "3px solid rgb(201, 201, 142)"
    }}
    alt="solitude"
  />
</div>
<div className={galleryStyles.imageContainer}>
          <p className={galleryStyles.mainTitle}>Duo</p>
          <h3 className={galleryStyles.h3}>Perfect for you and your partner</h3>
          <Image 
          priority
          src="/images/duo.png"
          width={400}
          height={480}
          style={{
            boxShadow: "5px 5px 9px 1px rgba(0, 0, 0, 0.4)", borderRadius: "40px", border: "3px solid rgb(201, 201, 142)"
          }}
          alt="duo"
          />
        </div>
        <div className={galleryStyles.imageContainer}>
          <p className={galleryStyles.mainTitle}>Teamwork</p>
          <h3 className={galleryStyles.h3}>Perfect for your entire team</h3>
          <Image 
          priority
          src="/images/teamwork.png"
          width={400}
          height={480}
          style={{
            boxShadow: "5px 5px 9px 1px rgba(0, 0, 0, 0.4)", borderRadius: "40px", border: "3px solid rgb(201, 201, 142)"
          }}
          alt="teamwork"
          />
        </div>
        {/* template ends */}
<Link className={galleryStyles.navLink} href="/">
  Back to home page
</Link>

    </div>    
    </Layout>

    </>
  )
}
