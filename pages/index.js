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
import guanacoData from "./../data/guanaco.json"

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Dialog } from '@material-ui/core'

import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

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

  ////////////////////////////
  // Cart Display
  const cartModal=()=>{
    let cartDispl=waraxCart.map((elem, i)=><React.Fragment key={i}>
      <div className={styles.eachCartItemCont}>
        <div className={styles.cartItemName}> 
          {elem.productName} 
          <span className={styles.rmvBTN} onClick={()=>{ removeFromCart(waraxCart, i)}}> X </span>
        </div>
        <div className={styles.cartItmeDescription}> Talla {elem.merchSize}  || {elem.priceDetail} </div> 
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
                {finalPrice&&<>
                <span> ${finalPrice.toFixed(2)} </span></>}
              </div>
            </div>
            {paymenInput()}
          </div>
        </Dialog>
        <Dialog open={mobileCartTrig} fullScreen onClose={()=>setMobCartTrigg(false)}>
          <div className={styles.cartDialog} >
            <div style={{ "width":"100%", "textAlign": "end", "padding": "18px", "cursor": "pointer" }} onClick={()=>{setMobCartTrigg(false)
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
                {finalPrice&&<>
                <span> ${finalPrice.toFixed(2)} </span></>}
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
        {/* <EventDisp addToCart={addToCart} /> */}
        <HomeEventDisplayer 
          addToCart={addToCart}
        />
      </div>
    </>)
  }
  function ImageDisp(props){
    return (
      <Paper><div className={styles.homeSliderDesktopIMG} onClick={()=>{
          let eventCalAnchor = document.getElementById(`EventCalendarAnchor`)
              eventCalAnchor.scrollIntoView({behavior: "smooth"})
        }}>
        <Image
          // placeholder="blur"
          src={props.imgData.src}
          alt={props.imgData.alt}
          width={props.imgData.width}
          height={props.imgData.height}
        /></div>
      </Paper>
    )
  }
  const carouselDispl=()=>{
    return(
      <>  
        <Carousel className={styles.desktopCarousel}>
          {waraxhomeData.desktopImageArr.map((elem, i)=>
            
            <ImageDisp key={i} imgData={elem} /> 
          )}
        </Carousel>
        <Carousel className={styles.mobileCarousel}>
          {waraxhomeData.mobileImageArr.map((elem, i)=>
            
            <ImageDisp key={i} imgData={elem} /> 
          )}
        </Carousel>
      </>
    )
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
        <h1 className={styles.aSectiontitle}> Merch - Envios a todo el Ecuador </h1> 
        <div className={styles.merchDispCont}>

          {showHomeMerch? <>
            <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={waraxhomeData.merchItems.capBlack} />
            <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={guanacoData.merchItems.capCholoFPRed} />
            <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={waraxhomeData.merchItems.webVeoTshWTH} />
            <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={waraxhomeData.merchItems.capGrey} />
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
            <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={waraxhomeData.merchItems.webVeoTshWTH} />
            <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={waraxhomeData.merchItems.webVeoTshBLK} />
            <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={waraxhomeData.merchItems.capBlack} />
            <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={waraxhomeData.merchItems.capYellow} />
            <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={waraxhomeData.merchItems.capGrey} />
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
            <ServiceDisp activeCart={false} addToCart={addToCart} theService={waraxhomeData.services.salaEnsayo} />
            <ServiceDisp activeCart={false} addToCart={addToCart} theService={waraxhomeData.services.wuanTake} />
            <ServiceDisp activeCart={false} addToCart={addToCart} theService={waraxhomeData.services.estudioGrabacion} />
          </div>
        </div>        
      </>
    )
  }
  const homeSwitcher=()=>{
    let concertDate= new Date("Oct 23 2021")
    let toDate= new Date()
    if(toDate < concertDate){
      return(
        <>
        <div className={styles.pichiLanding} onClick={()=>{
          let eventCalAnchor = document.getElementById(`EventCalendarAnchor`)
              eventCalAnchor.scrollIntoView({behavior: "smooth"})
        }}>
          <div className={styles.altLandingCont}><Image 
            src="/assets/eventPosters/pakulCover.jpeg"
            width={1201}
            height={628}
            alt="Warax Presents: Pakul | Oct 23 Quito"
          /></div>
        </div>
        <div className={styles.pichiLandingNobile} onClick={()=>{
          let eventCalAnchor = document.getElementById(`EventCalendarAnchor`)
              eventCalAnchor.scrollIntoView({behavior: "smooth"})
        }}>
          <div className={styles.altLandingCont}><Image 
            src="/assets/eventPosters/pakulOct23.jpeg"
            width={620}
            height={629}
            alt="Warax Presents: Pakul | Oct 23 Quito"
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

            {homeLanding()}
            {/* {carouselDispl()} */}
            {/* {anEventDisp()} */}
            <div className={styles.homeCardDispCont}> 
              <WebVeoHomeBanner 
                setMinisite={setMinisite}
                setPageDisplayer={setPageDisplayer}
              />

              {/* <EventBanner  
                bannerData={waraxhomeData.homeBannerData.wrxSalsaEnsambleBannerData}
              /> */}
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
