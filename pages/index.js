import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { useEffect, useState } from 'react'

import styles from '../styles/pages/Home.module.css'

import {Navi, Footer} from "./../components/navi"
import {EventDisp} from "./../components/events"
import {MerchDisp} from "./../components/merch"
import {ServiceDisp} from "./../components/services"

import {WebveoMiniSite } from "./../components/miniSites/webveo"

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Dialog } from '@material-ui/core'


let merchOne={
  "associatedActs": "WEBVEO",
  "productCateg": "softGoods",
  "prodName":"HOODIE",
  "priceObj":{
      "price": 30,
      "productName": "Hoodie Webveo"
  },
  "variants":
    [
      "Stamp Complete",
      "Green + Stamp",
      "Yellow + Stamp",
      "Amethyst + Stamp",
      "B&W + Stamp",
      "Wine + Stamp",
      "White + Stamp"
    ],
  "merchIMG":{
    "src":"/assets/merchPics/webveoHoodies.jpg",
    "height": 400,
    "width": 400,
    "alt": "Merch Oficial Webveo - Hoodie varios colores"
  }
}
let merchTwo={
  "associatedActs": "WEBVEO",
  "productCateg": "softGoods",
  "prodName":"Gorra",
  "priceObj":{
      "price": 30,
      "productName": "Gorra Webveo"
    },
  "variants":
    [
      "Black + Stamp",
      "Lime & Onyx + Stamp",
      "Grey & Lime + Stamp",
      "Black & Amethyst + Stamp"
    ],
  "merchIMG":{
    "src":"/assets/merchPics/webveoGorras.jpg",
    "height": 400,
    "width": 400,
    "alt": "Merch Oficial Webveo - Gorra varios colores"
  }
}


let serviceOne={
  "serviceName": "Sala de ensayo",
  "serviceType": "ensayo",
  "serviceDescription":"Horas de ensayo en el iconico estudio de Warax, donde lo hacemos real",  
  "priceObj":[
      {
          "price": 10,
          "priceDetail": "1 hora de servicio",
          "productName": "Sala de Ensayo"
      },
      {
          "price": 65,
          "priceDetail": "8 horas de ensayo por mes",
          "productName": "Sala de ensayo"
      }
  ],
  "serviceIMG":{
    "src":"/assets/merchPics/salaEnsayo.png",
    "height": 400,
    "width": 350,
    "alt": "Sala de Ensayo - Servicios"
  }
}
let serviceTwo={
  "serviceName": "Wuan Take",
  "serviceType": "Wuan Take",
  "serviceDescription":"Grabación y edición profesional de una session de ensayo. Incluye fotografia & Videografia profesional, masterisación y edición de video",  
  "priceObj":[
      {
          "price": 250,
          "priceDetail": "1 Sesion de Wuan Take",
          "productName": "Wuan Take"
      }
  ],
  "serviceIMG":{
    "src":"/assets/merchPics/wuanTake.png",
    "height": 400,
    "width": 350,
    "alt": "Wuan Take - Grabación de sesiones en vivo"
  }
}
let serviceThree={
  "serviceName": "Estudio de Grabación",
  "serviceType": "grabación",
  "serviceDescription":"Horas de ensayo en el iconico estudio de Warax, donde lo hacemos real",  
  "priceObj":[
      {
          "price": 15,
          "priceDetail": "1 hora de grabación",
          "productName": "Estudio de Grabación"
      }
  ],
  "serviceIMG":{
    "src":"/assets/merchPics/horaEstudio.jpg",
    "height": 400,
    "width": 350,
    "alt": "Imagen - Estudio de Grabación en Iconico Warax"
  }
}


export default function Home() {


// State
  const [pageDisplayer,setPageDisplayer]=useState(null)

  const [waraxiCarti, setWaraxiCart]=useState(true)

  const [waraxCart, setWaraxCart]=useState([])
  const [addedItemSnack, setAddedItem]=useState(false)
  const [cartModalCont, setCartModal]=useState(false)
  const [mobileCartTrig, setMobCartTrigg] =useState(false)
  const [finalPrice, setFinalPrice]=useState()
  const [payment, setPayment]=useState(false)

  const [minisiteDisp, setMinisite] = useState(null)

// useEffects
  useEffect(()=>{
    if(waraxCart.length>0){
      setFinalPrice(waraxCart.map(elem => elem.price).reduce((prev, next) => prev + next))
    } else if(waraxCart.length===0){
      setCartModal(false)
      setMobCartTrigg(false)
    }
  },[waraxCart])
  useEffect(()=>{
    if(window.location.search){
      let hrefVari = window.location.search
      setPageDisplayer(  hrefVari.slice(hrefVari.search("=")+1) )
    }
  },[])

  ///////////////////////////
  // Cart Utils
  function Alert(props) {return <MuiAlert elevation={6} variant="filled" {...props} />}    
  const itemAddedAlert=()=>{
      return(<>
          <Snackbar open={addedItemSnack} autoHideDuration={5000} onClose={()=>setAddedItem(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} >
              <Alert onClose={()=>setAddedItem(false)} severity="success">
                  Añadido a Carrito Warax
              </Alert>
          </Snackbar>
      </>)
  }
  const addToCart=(product)=>{ 
    setWaraxCart(waraxCart.concat(product))
    setAddedItem(true)
  }
  const removeFromCart=(cart, prodIndex)=>{
    let tempCart = [...cart];
    tempCart.splice(prodIndex, 1)
    setWaraxCart(tempCart)
  }
  const paymenInput=()=>{
    return(
      <>
        {payment? <>


          {/* CAJITA KUSHKI MOFOOO */}
          {/* <Script src="https://cdn.kushkipagos.com/kushki-checkout.js"/>

          <form id="payment-form" action="/confirm" method="post">
              <input type="hidden" name="cart_id" value="123"/>
          </form>

          <Script type="text/javascript">
              {formLoader()}
          </Script> */}

        </>:<>
          <div className={styles.payNowBtn} onClick={()=>{setPayment(true)}}> Pagar Ahora </div>
        </>}
      </>
    )
  }

  ////////////////////////////
  // Cart Display
  const cartModal=()=>{
    let cartDispl=waraxCart.map((elem, i)=><React.Fragment key={i}>
      <div className={styles.eachCartItemCont}>
        <div className={styles.cartItemName}> 
          {elem.productName} 
          <span className={styles.rmvBTN} onClick={()=>{ removeFromCart(waraxCart, i)}}> X </span>
        </div>
        <div className={styles.cartItmeDescription}> {elem.priceDetail} </div> 
        <div className={styles.cartItmePrice}> $ {elem.price} </div>
      </div>
    </React.Fragment>)

    return(
      <>
        <Dialog open={cartModalCont} onClose={()=>setCartModal(false)}>
          <div className={styles.cartDialog} >
            <h2 className={styles.cartTitle}> Carrito Warax </h2>
            <div className={styles.eachCartElemCont}> {cartDispl} 
              <div className={styles.totalCartPrice}>
                <strong> Total </strong>
                <span> ${finalPrice} </span>
              </div>
            </div>
            {paymenInput()}
          </div>
        </Dialog>
        <Dialog open={mobileCartTrig} fullScreen onClose={()=>setMobCartTrigg(false)}>
          <div className={styles.cartDialog} >
            <div style={{ "width":"100%", "textAlign": "end", "padding": "18px" }} onClick={()=>setMobCartTrigg(false)}> 
              cerrar | <strong> X </strong>
            </div>
            <h2 className={styles.cartTitle}> Carrito Warax </h2>
            <div className={styles.eachCartElemCont}> 
              {cartDispl} 
              <div className={styles.totalCartPrice}>
                <strong> Total </strong>
                <span> ${finalPrice} </span>
              </div>
            </div>
            {paymenInput()}
          </div>
        </Dialog>
      </>
    )
  }

  //////////////////////////
  // SEO
  const homeHead=()=>{
    return(
      <>
        <Head>
          <title> Warax Arte - Lo Hacemos Real </title>
          <meta name="description" content="Warax.Art - Creando sonidos, eventos y multimedia" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </>
    )
  }

  //////////////////////////
  // Display elems
  const anEventDisp=()=>{
    return(<>
      <div className={styles.aHomeSection}>
        <h1 className={styles.aSectiontitle}> Eventos Proximos </h1> 
        <EventDisp addToCart={addToCart} />
      </div>
    </>)
  }
  const homeLanding=()=>{
    return(
      <>
        <div className={styles.aHomeSection}>
          <div className={styles.homeSplash}>
          <div className={styles.homeSplashIMG}>
            <Image
              src={"/assets/pictures/coverMain.png"}
              width={1500}
              height={1030}
              alt="Warax Concerts Image - Saxophone player with Band"
            /></div>
          <div className={styles.homeSplashIMGMobi}>
            <Image
              src={"/assets/pictures/coverMain.png"}
              layout="fill" objectFit="cover"
              alt="Warax Concerts Image - Saxophone player with Band"
            /></div>
          <div className={styles.homeSplashText}> WARAX <strong>LO HACE REAL</strong> </div>
          </div> 
        </div>
      </>
    )
  }
  const merchDisp=()=>{

    return(
      <>
      <div className={styles.aHomeSection}>
        <h1 className={styles.aSectiontitle}> Merch - Exclusiva para ti </h1> 
        <div className={styles.merchDispCont}>
          <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={merchOne} />
          <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={merchTwo} />
        </div>
      </div>        
      </>
    )
  }
  const servicedisp=()=>{

    return(
      <>
        <div className={styles.aHomeSection}>
          <h1 className={styles.aSectiontitle}> Servicios Warax </h1> 
          <div className={styles.merchDispCont}>
            <ServiceDisp activeCart={waraxiCarti} addToCart={addToCart} theService={serviceOne} />
            <ServiceDisp activeCart={waraxiCarti} addToCart={addToCart} theService={serviceTwo} />
            <ServiceDisp activeCart={waraxiCarti} addToCart={addToCart} theService={serviceThree} />
          </div>
        </div>        
      </>
    )
  }


////////////////////////////////////////////////////
////////////////////////////////////////////////////
  return (
    <>
      {homeHead()}
      <div className={styles.generalCont}>
        <Navi 
          pageDisplayer={pageDisplayer} 
          setPageDisplayer={setPageDisplayer}
          waraxCart={waraxCart}
          minisiteDisp={minisiteDisp}
          setMinisite={setMinisite}
          setWaraxCart={setWaraxCart}
          setCartModal={setCartModal}
          setMobCartTrigg={setMobCartTrigg}
        />

        {pageDisplayer==="home"&&<>
            {homeLanding()}
            {/* {anEventDisp()} */}
            {merchDisp()}
            {servicedisp()}
        </>}
        {pageDisplayer==="artistas"&&<>
          artistas
        </>}
        {pageDisplayer==="team"&&<>
          TEAM
        </>}
        {pageDisplayer==="servicios"&&<>
          <br></br>
          {servicedisp()}
          {merchDisp()}
        </>}
        {pageDisplayer==="eventos"&&<>
          <br></br>
          {anEventDisp()}
          {merchDisp()}
        </>}
        {minisiteDisp==="WebVeo"&&<>
          <WebveoMiniSite />
        </>}


      </div>
      <Footer />

      {cartModal()}
      {itemAddedAlert()}
    </>
  )
}
