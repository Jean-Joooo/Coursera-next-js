import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import { Inter } from "next/font/google";
import galleryStyles from "@/styles/Gallery.module.css";
import Layout from "../../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Preorder() {
  return (
    <>
      <Layout>
<div>
<p className={galleryStyles.subTitle}>To pre-order, call 1-800-555-1212</p>
<Link className={galleryStyles.navLink} href="/">
  Back to home page
</Link>

 {/* template starts */}

 <div className={galleryStyles.imageContainer}>
          <Image 
          priority
          src="/images/preorder.png"
          width={480}
          height={420}
          style={{
            boxShadow: "5px 5px 9px 1px rgba(0, 0, 0, 0.4)", borderRadius: "40px", border: "3px solid rgb(201, 201, 142)"
          }}
          alt="preorder"
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
