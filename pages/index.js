import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Home.module.css'

import {Navi, Footer} from "./../components/navi"

export default function Home() {

const homeHead=()=>{
  return(
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}



  return (
    <>
    <div className={styles.generalCont}>
      <Navi pageRouter={"Home"}/>
      Cucu
    </div>
      <Footer />
    </>
  )
}
