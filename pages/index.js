import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { useEffect, useState } from 'react'

import styles from '../styles/pages/Home.module.css'
//////
// STRIPE ELEMENTS
import { Elements } from '@stripe/react-stripe-js'
import getStripe from './../utils/get-stripejs'
import {StripeGeneralCheckout} from "./../components/paymentComp/stripeCardSetup"


import {Navi, Footer} from "./../components/navi"
import {EventDisp, EventBanner, EventPlaceholder, HomeEventDisplayer} from "./../components/events"
import {SalesForm} from "../components/forms"
import {MerchDisp} from "./../components/merch"
import {ServiceDisp} from "./../components/services"


import {WebveoMiniSite, WebVeoHomeBanner } from "./../components/miniSites/webveo"
import {WuanTakeMiniSite, WaraxTvMiniSite} from "./../components/miniSites/waraxMinisites"

import waraxhomeData from "./../data/warax.json"

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Dialog } from '@material-ui/core'

// 
// Webveo Cap Merch
let capBlack={
  "priceDetail": "incl. delivery",
  "productCatalog": "WebVeo",
  "productCategory": "merch",
  "productType": "cap",
  "prodName":"Gorra - BLACK",
  "priceObj":{
      "price": 35,
      "productName": "Gorra Webveo - BLACK"
    },
  "merchIMG":{
    "src":"/assets/merchPics/blackCap.jpg",
    "height": 400,
    "width": 400,
    "alt": "Merch Oficial Webveo - Gorra varios colores"
  }
}
let capYellow={
  "priceDetail": "incl. delivery",
  "productCatalog": "WebVeo",
  "productCategory": "merch",
  "productType": "cap",
  "prodName":"Gorra - LIME/ASH",
  "priceObj":{
      "price": 35,
      "productName": "Gorra Webveo - LIME/ASH"
    },
  "merchIMG":{
    "src":"/assets/merchPics/yellowCap.jpg",
    "height": 400,
    "width": 400,
    "alt": "Merch Oficial Webveo - Gorra Amarillo"
  }
}
let capGrey={
  "priceDetail": "incl. delivery",
  "productCatalog": "WebVeo",
  "productCategory": "merch",
  "productType": "cap",
  "prodName":"Gorra - ONYX/LIME",
  "priceObj":{
      "price": 35,
      "productName": "Gorra Webveo - Onyx/Grey"
    },
  "merchIMG":{
    "src":"/assets/merchPics/greyCap.jpg",
    "height": 400,
    "width": 400,
    "alt": "Merch Oficial Webveo - Onyx/Grey"
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
  const [pageDisplayer,setPageDisplayer]=useState("home")

  const [showHomeMerch, setShowMerch]=useState(false)

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
  const [saleUsarData, setSaleUserData]= useState()
  const [userDataTrig, setUserDataTrig]=useState(false)
  const paymenInput=()=>{
    return(
      <>
        {payment? <>
            <Elements stripe={getStripe()}>
              <StripeGeneralCheckout 
                totalPaymentAmount={finalPrice} 
                receiptDescription={"Compra en linea - Warax Arte"}
                saleUsarData={saleUsarData}
                setSaleUserData={setSaleUserData}
                setUserDataTrig={setUserDataTrig}
                waraxCart={waraxCart}
                setWaraxCart={setWaraxCart}
              /> 
            </Elements>
        </>:<>
          {userDataTrig? <>
            <SalesForm   
              saleUsarData={saleUsarData}
              setSaleUserData={setSaleUserData}
              submitForm={setPayment}
            />
          </>:<>
            <div className={styles.payNowBtn} onClick={()=>{setUserDataTrig(true)}}>Comprar Ahora</div>
          </>}
        </>}
      </>
    )
  }

  useEffect(()=>{
      let saleEmialObj={
      ...saleUsarData,
      "waraxCart": waraxCart
    }
    console.log(saleEmialObj)
  },[saleUsarData])

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
        <Dialog open={cartModalCont} onClose={()=>{
          setPayment(false)
          setCartModal(false)
          setUserDataTrig(false)
          }}>
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
            <div style={{ "width":"100%", "textAlign": "end", "padding": "18px" }} onClick={()=>{setMobCartTrigg(false)
            setUserDataTrig(false)
            setPayment(false)
            }}> 
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
        {/* <EventDisp addToCart={addToCart} /> */}
        <EventPlaceholder />
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
          <div className={styles.homeSplashText}> WARáX <strong>LO HACE REAL</strong> </div>
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

          {showHomeMerch? <>
            <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={capBlack} />
            <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={capYellow} />
            <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={capGrey} />
          </>:<>
            <div className={styles.merchOpenerCont} onClick={()=>{setShowMerch(true)}}>
              <div className={styles.merchsectionImage}>
                <Image 
                  src="/assets/merchPics/webveoGorras.jpg"
                  height={600}
                  width={600}
                  alt="cucu"
                />
              </div>
              <div className={styles.merchOpenerText}>  
                Mira <br></br>nuestras <br></br>increibles opciones
              </div>
            </div>
          </>}
        </div>
      </div>        
      </>
    )
  }
  const webVeoMerch=()=>{
    return(
      <>
        <div className={styles.merchDispCont}>
            <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={capBlack} />
            <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={capYellow} />
            <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={capGrey} />
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
            <ServiceDisp activeCart={false} addToCart={addToCart} theService={serviceOne} />
            <ServiceDisp activeCart={false} addToCart={addToCart} theService={serviceTwo} />
            <ServiceDisp activeCart={false} addToCart={addToCart} theService={serviceThree} />
          </div>
        </div>        
      </>
    )
  }


  const homeSwitcher=()=>{
    let concertDate= new Date("Nov 06 2021")
    let toDate= new Date()
    if(toDate < concertDate){
      return(
        <>
        <div className={styles.pichiLanding} onClick={()=>{
          let eventCalAnchor = document.getElementById(`EventCalendarAnchor`)
              eventCalAnchor.scrollIntoView({behavior: "smooth"})
        }}>
          <div className={styles.altLandingCont}><Image 
            src="/assets/eventPosters/pichiriloRioNov5.jpg"
            width={1085}
            height={572}
            alt="Warax Presents: Pichirilo Radioactivo ft. Pakul | Nov 05 Riobamba"
          /></div>
        </div>
        <div className={styles.pichiLandingNobile} onClick={()=>{
          let eventCalAnchor = document.getElementById(`EventCalendarAnchor`)
              eventCalAnchor.scrollIntoView({behavior: "smooth"})
        }}>
          <div className={styles.altLandingCont}><Image 
            src="/assets/eventPosters/pichiriloRioNov5mobile.jpg"
            width={600}
            height={700}
            alt="Warax Presents: Pichirilo Radioactivo ft. Pakul | Nov 05 Riobamba"
          /></div>
        </div>
        </>
      )
    } else {
      {homeLanding()}
    }
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
        <br></br>
        <br></br>
            {homeSwitcher()}
            {/* {anEventDisp()} */}
            <div className={styles.homeCardDispCont}> 
              <WebVeoHomeBanner 
                setMinisite={setMinisite}
                setPageDisplayer={setPageDisplayer}
              />

              <EventBanner  
                bannerData={waraxhomeData.homeBannerData.wrxSalsaEnsambleBannerData}
              />
              <EventBanner  
                bannerData={waraxhomeData.homeBannerData.fridayJazzHomeBannerData}
              />
            </div>



            <div id="EventCalendarAnchor"/>
            <HomeEventDisplayer 
              addToCart={addToCart}
            />



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
          <br></br>
          {servicedisp()}
          {merchDisp()}
        </>}
        {pageDisplayer==="eventos"&&<>
          <br></br>
          <br></br>
          {anEventDisp()}
          {merchDisp()}
        </>}
        {minisiteDisp==="WebVeo"&&<>
          <WebveoMiniSite merchDisp={webVeoMerch} />
        </>}
        {minisiteDisp==="WuanTake"&&<>
          <WuanTakeMiniSite />
        </>}
        {minisiteDisp==="WaraxTv"&&<>
          <WaraxTvMiniSite />
        </>}
      </div>
      <Footer socialLinks={true}/>
      {cartModal()}
      {itemAddedAlert()}
    </>
  )
}
