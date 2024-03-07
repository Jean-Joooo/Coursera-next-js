import Head from "next/head"
import { Ubuntu } from 'next/font/google'
import { Source_Code_Pro } from 'next/font/google'

const UbuntuBold = Ubuntu({ 
  subsets: ['latin'],
  weight: "700"
 })

const SourceCodePro = Source_Code_Pro({ subsets: ['latin']})

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>ESpectso 1000 by ESP</title>
        <meta name="description" content="ESpectso 1000 by ESP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="topBand">
  <p className={`mainTitle ${UbuntuBold.className}`} style={{ fontSize: "2rem", fontWeigh: "bold", marginBottom: "0.3rem", display: "flex",
  alignItems: "center", justifyContent: "center", textShadow: "0px 1px 1px rgb(25, 26, 27), 0 0 1em rgb(238, 238, 245), 0 0 0.1em rgb(12, 11, 11)" }}> Introducing ESPectso 1000</p>
</div>

{ children }

<div className={`footer ${SourceCodePro.className}`} style={{ fontSize: "1.2rem", fontWeigh: "bold", marginBottom: "0.3rem", textAlign: "center", justifyContent: "center", textShadow: "0px 1px 1px rgb(25, 26, 27), 0 0 1em rgb(238, 238, 245), 0 0 0.1em rgb(12, 11, 11)" }}>
        <hr />
        <p>Copyrights (C) 2023 ESP, Inc. All Rights Reserved.</p>
      </div>
    </>
  )
}
