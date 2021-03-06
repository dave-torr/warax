import React, { useState, useEffect } from "react"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"

import GuanacoData from "./../data/guanaco.json"

import {MerchDisp, MiniMerchDisp} from "./../components/merch"
import {Footer} from "./../components/navi"
import {SalesForm} from "./../components/forms"

import { Elements } from '@stripe/react-stripe-js'
import getStripe from './../utils/get-stripejs'
import {StripeGeneralCheckout} from "./../components/paymentComp/stripeCardSetup"

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Dialog } from '@material-ui/core'


import styles from "./../styles/pages/guanaco.module.css"

// Icons and links
/////////////////////////////////////////////////////////////////////////////////
    import InstagramIcon from '@material-ui/icons/Instagram';
    import PlayArrowIcon from '@mui/icons-material/PlayArrow';
    import FacebookIcon from '@material-ui/icons/Facebook';
    import YouTubeIcon from '@material-ui/icons/YouTube';
    import TwitterIcon from '@mui/icons-material/Twitter';
    import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
    import EmailIcon from '@mui/icons-material/Email';
    import NewReleasesIcon from '@mui/icons-material/NewReleases';
    import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
    import WarningAmberIcon from '@mui/icons-material/WarningAmber';
    let SoundCloudIcon = <Image src="/assets/icons/soundcloud.png" height={20} width={20} alt="SoundCloud Icon" />
    let SpotifyIcon = <Image src="/assets/icons/spotify.png" height={20} width={20} alt="Spotify Icon" />
    let instagramLink ="https://www.instagram.com/guanaco_mc/"
    let twitterLink = "https://twitter.com/guanaco_mc?s=17"
    let facebookLink = "https://www.facebook.com/guanacomcoficial/"
    let youtubeLink = "https://www.youtube.com/channel/UCAbqgPCOhrOYMhpmPsbPXvg"
    let spotifyLink = "https://open.spotify.com/artist/7hU7xPPEEDgzWw3Ao8SupC?si=UIn1jimpTLer-Fgjv1csZg&dl_branch=1"
    let soundcloudLink = "https://soundcloud.com/guanaco-mc/tracks";
    let managmentNumber = "tel:00593996027198";
    let managementEmail = "mailto:mabelenlara@gmail.com?subject=Guanaco MC | Website Email"
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


    // Bio
    // Merch
    // Cholonizacion
    // discografia
    // eventos

// Landing: 
// Cholonizacion landing. Spotify mini player, Merch, 

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
export default function GuanacoPage(props){
    const [guanacoPageDisp, setGuanacoPage]=useState("landing")
/////////////////////////////////////
/////////////////////////////////////
// home sections
/////////////////////////////////////
    const [pickedMusicVideo, setMusicVideo] = useState(GuanacoData.videoArr[0])
    const eachVideoDisp=(eachVideoData)=>{
        return(
            <>
                <div className={styles.eachVideoDisplayer}> 
                    <div className={styles.youtubeDisp}> <iframe width="560" height="315" src={`https://www.youtube.com/embed/${eachVideoData.videoLink}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                    <div className={styles.youtubeDispMOBILE}> <iframe width="320" height="190" src={`https://www.youtube.com/embed/${eachVideoData.videoLink}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                    <div className={styles.videoData}> 
                        <i> {eachVideoData.videoType} </i>
                        <h1> {eachVideoData.videoTitle} </h1>
                        <h3> {eachVideoData.releaseDate} </h3>
                    </div>
                </div>
            </>
        )
    }
    const videoDisplayer=()=>{
        let videoSelector=GuanacoData.videoArr.map((elem, i)=><React.Fragment key={i}>
            <option className={styles.eachVideoOption} value={i}>{ elem.videoTitle} </option>
        </React.Fragment>)
        return(
            <>
            <div className={styles.musicVideoSection}>
            <h2>VIDEOS</h2>  
                <select className={styles.videoPickerBox} onChange={(e)=>{
                    setMusicVideo(GuanacoData.videoArr[e.target.value])
                }}>{videoSelector}</select>
                {eachVideoDisp(pickedMusicVideo)}
            </div>
            </>
        )
    }
    ////////////////////////////////
    const [aPickedAlbum, setAPickedAlbum] = useState(GuanacoData.albumArr[0])
    const albumDisplayer=()=>{
        let eachAlbumCover=GuanacoData.albumArr.map((elem, i)=><React.Fragment key={i}>
            {(aPickedAlbum != GuanacoData.albumArr[i]) &&<>
            <div className={styles.eachAlbumCover} onClick={()=>
                {setAPickedAlbum(GuanacoData.albumArr[i])
                let aBTNAnchor = document.getElementById("GuanacoAlbumDisp")
                    aBTNAnchor.scrollIntoView({behavior: "smooth"})
                }}><Image 
                src={`/assets/bands/guanaco/albums${elem.imageLink}`}
                height={350}
                width={350}
                alt={`${elem.albumName} - Disco por Guanaco MC`}
            /></div></>}
        </React.Fragment>)
        return(
            <>
            <div className={styles.albumDisplayerSection} id="GuanacoAlbumDisp">
                <h2>DISCOGRAFIA</h2>
                {aPickedAlbum===GuanacoData.albumArr[0] && <>
                    <div className={styles.newDiscTitle}><WarningAmberIcon /> <NewReleasesIcon /> &nbsp; &nbsp; &nbsp; DISCO NUEVO &nbsp; &nbsp; &nbsp; <NewReleasesIcon /> <WarningAmberIcon /> </div>
                </>} 
                <div className={styles.albumDataDisplayer}>
                    <div className={styles.aPickedAlbumCont}>
                        <div className={styles.aPickedAlbumIMG}><Image 
                            src={`/assets/bands/guanaco/albums${aPickedAlbum.imageLink}`}
                            height={350}
                            width={350}
                            alt={`${aPickedAlbum.albumName} - Disco por Guanaco MC`}
                        /></div>
                        <div className={styles.anAlbumData}>
                            <div> L/P || {aPickedAlbum.releaseYear} </div>
                            <h1>{aPickedAlbum.albumName} </h1>
                            <div className={styles.albumMediaLinks}> 
                                <a href={aPickedAlbum.youtubeMusicLink} target="_blank" rel="noopener" > <PlayArrowIcon /></a>
                                <a href={aPickedAlbum.spotifyLink} target="_blank" rel="noopener" > {SpotifyIcon}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.albumCoverCont}>
                    {eachAlbumCover}
                </div>
            </div>
            </>
        )
    }

    // Floating Menu
    const [menuTrig, setMenuTrig] = useState(false)
    const floatingMenu=()=>{
        return(
            <>
                <div className={styles.floatingMenu}> 
                    <div className={styles.burgerCont} onClick={()=>setMenuTrig(true)}>
                        <div className={styles.burgerDeco}/>
                        <div className={styles.burgerDeco}/>
                        <div className={styles.burgerDeco}/>
                    </div>
                    {waraxCart.length>0&&<>
                    <div className={styles.cartDisplayer} onClick={()=>setCartModal(true)}>
                        <ShoppingCartIcon />
                        <div className={styles.cartCount}> {waraxCart.length} </div>
                    </div>
                    </>}
                </div>
                <Dialog open={menuTrig} onClose={()=>setMenuTrig(false)} fullScreen>
                    <div className={styles.guanacoMenu}>
                        <div className={styles.closeMenuBTN} onClick={()=>setMenuTrig(false)}> close | x </div>
                        <div className={styles.menuLogoIMG}>
                            <Image
                                src="/assets/bands/guanaco/logoBLK.png"
                                height={155}
                                width={930}
                                alt="Guanaco MC Logo - Black"
                            /></div>
                        <div className={styles.menuOptsCont}> 
                            <div className={styles.aMenuOpt} onClick={()=>{
                                window.scrollTo(0,0)
                                setMenuTrig(false); setGuanacoPage("landing");}}>
                                Home
                            </div>
                            {/* <div className={styles.aMenuOpt} onClick={()=>{
                                window.scrollTo(0,0)
                                setMenuTrig(false); setGuanacoPage("marketPlace");}}>
                                Tienda
                            </div> */}
                            {/* <div className={styles.aMenuOpt} onClick={()=>{
                                window.scrollTo(0,0)
                                setMenuTrig(false); setGuanacoPage("eventCalendar");}}>
                                Eventos
                            </div> */}
                        </div>
                        <Link className={styles.waraxLogo} href="/">
                            <div className={styles.menuLogoWRX}>
                                <Image
                                    src="/assets/icons/waraxLogoBLK.png"
                                    height={242}
                                    width={644}
                                    alt="Guanaco MC Logo - Black"
                                /></div>
                        </Link>
                    </div>
                </Dialog>
            </>
        )
    }


    /////////////////////////////////
    // Cart Functions
    ////////////////////////////////
    const [waraxiCarti, setWaraxiCart]=useState(true)
    const [waraxCart, setWaraxCart]=useState([])
    const [addedItemSnack, setAddedItem]=useState(false)
    const [cartModalCont, setCartModal]=useState(false)
    const [mobileCartTrig, setMobCartTrigg] =useState(false)
    const [finalPrice, setFinalPrice]=useState()
    const [payment, setPayment]=useState(false)
    const [saleUsarData, setSaleUserData]= useState()
    const [userDataTrig, setUserDataTrig]=useState(false)
    useEffect(()=>{
        if(waraxCart.length>0){
            setFinalPrice(waraxCart.map(elem => elem.price).reduce((prev, next) => prev + next))
        } else if(waraxCart.length===0){
            setCartModal(false)
            setMobCartTrigg(false)
        }
    },[waraxCart])
    function Alert(props) {return <MuiAlert elevation={6} variant="filled" {...props} />}    
    const itemAddedAlert=()=>{
        return(<>
            <Snackbar open={addedItemSnack} autoHideDuration={5000} onClose={()=>setAddedItem(false)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} >
                <Alert onClose={()=>setAddedItem(false)} severity="success">
                    A??adido a Carrito Warax
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
                <Elements stripe={getStripe()}>
                <StripeGeneralCheckout 
                    totalPaymentAmount={finalPrice} 
                    receiptDescription={"Compra en linea - Warax Arte"}
                    saleUsarData={saleUsarData}
                    waraxCart={waraxCart}
                    setWaraxCart={setWaraxCart}
                /> 
                </Elements>
            {/* CAJITA KUSHKI MOFOOO */}
            {/* <Script src="https://cdn.kushkipagos.com/kushki-checkout.js"/>

            <form id="payment-form" action="/confirm" method="post">
                <input type="hidden" name="cart_id" value="123"/>
            </form>

            <Script type="text/javascript">
                {formLoader()}
            </Script> */}
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
    const cartModal=()=>{
        let cartDispl=waraxCart.map((elem, i)=><React.Fragment key={i}>
        <div className={styles.eachCartItemCont}>
            <div className={styles.cartItemName}> 
            {elem.productName} 
            <span className={styles.rmvBTN} onClick={()=>{ removeFromCart(waraxCart, i)}}> X </span>
            </div>
            <div className={styles.cartItmeDescription}>Talla {elem.merchSize} || {elem.priceDetail} </div> 
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
                    <div style={{ "width":"100%", "textAlign": "end", "padding": "18px" }} onClick={()=>{
                        setMobCartTrigg(false)
                        setUserDataTrig(false)
                        setPayment(false)
                    }}> cerrar | <strong> X </strong>
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


////////////////////
// DISPLAY ELEMENTS
///////////////////
    const merchDisplayer=()=>{

        return(
            <div className={styles.merchSectionCont}>
                <h1> MERCH</h1>
                <div className={styles.merchContainer}>
                    {/* <div className={styles.merchSubCont}>
                        <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={GuanacoData.merchItems.buzoCholoBlk} />
                        <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={GuanacoData.merchItems.capCholoSnapback} />
                    </div> */}

                    {/* <div className={styles.merchSubCont}>
                        <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={GuanacoData.merchItems.capCholoFivePanl} />
                        <MerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={GuanacoData.merchItems.capCholoFPRed} />
                    </div> */}

                    {/* <div className={styles.marketPLCBTN} onClick={()=>{window.scrollTo(0,0); setGuanacoPage("marketPlace")}}> Ver m??s increibles productos!</div> */}

                    <div className={styles.newCollectionNotice}> 
                        Muy Pronto 
                        <div>Nuevos dise??os exclusivos & Ediciones Limitadas</div>
                    </div> 
                </div>
            </div>
        )
    }
    const guanacoLandingSplash=()=>{
        return(
            <>
            <div className={styles.homeSplash}>
                <div className={styles.homeSplashIMG}>
                <Image
                    src={"/assets/bands/guanaco/pics/homeLanding2.jpg"}
                    width={1442}
                    height={1042}
                    alt="Guanaco MC - Cholonizacion Landing Image"
                /></div>
                <div className={styles.homeSplashIMGMobi}>
                <Image
                    src={"/assets/bands/guanaco/pics/homeLanding.jpg"}
                    layout="fill" objectFit="cover"
                    alt="Guanaco MC - Cholonizacion Landing Image"
                /></div>
                <div className={styles.guanacoLogo}>
                <Image 
                    src="/assets/bands/guanaco/logoWHT.png"
                    height={155}
                    width={930}
                    alt="Guanaco MC Logo - GOLD"
                /></div>
                <div className={styles.guanacoLogo2}>
                <Image 
                    src="/assets/bands/guanaco/logoGold.png"
                    height={155}
                    width={930}
                    alt="Guanaco MC Logo - White"
                /></div>
            </div>
            </>
        )
    }
    const guanaMCHead=()=>{
        return(
            <>
            <Head>
                <title> Guanaco MC | Pagina Oficial | warax.art</title>
                <meta name="description" content="Guanaco MC - Conciertos, musica, noticas, Webveo" />
                <meta property="og:title" content="Guanaco MC - Conciertos, musica, noticas, Webveo" key="title" />
                <link rel="canonical" href="https://www.warax.art/guanaco" />
                <meta name="robots" content="index, follow" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            </>
        )
    }
    const aSocialLinkDisp=(aLink, anIcon)=>{
        return(
            <>
            <a href={aLink} target="_blank" rel="noopener"> {anIcon} </a>
            </>
        )
    }
    const GuanacoMCFooter=()=>{
        return(
            <>
            <div className={styles.guanacoFooter}>
                <div className={styles.footerIMG}>
                <Image
                    src="/assets/bands/guanaco/logoBLK.png"
                    height={155}
                    width={930}
                    alt="Guanaco MC Logo - Black"
                /></div>
                <div className={styles.socialLinksCont}>
                    {aSocialLinkDisp(instagramLink, <InstagramIcon />)}
                    {aSocialLinkDisp(twitterLink, <TwitterIcon />)}
                    {aSocialLinkDisp(facebookLink, <FacebookIcon />)}
                    {aSocialLinkDisp(youtubeLink, <YouTubeIcon />)}
                    {aSocialLinkDisp(soundcloudLink, SoundCloudIcon)}
                    {aSocialLinkDisp(spotifyLink, SpotifyIcon)}
                </div>
                <i> Management:</i>
                <div className={styles.mngmntLinksCont}>
                    <a href={managmentNumber} target="_blank" rel="noopener"> <LocalPhoneIcon /> </a>
                    <a href={managementEmail} target="_blank" rel="noopener"> <EmailIcon /> </a>
                </div>
            </div>
            </>
        )
    }
    let productArr = Object.keys(GuanacoData.merchItems).map(function (key){
        return {...GuanacoData.merchItems[key]}
    })
    const marketPlace=()=>{
        let eachProdDisplayer = productArr.map((elem, i)=><React.Fragment key={i}>
            <MiniMerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={elem} />
        </React.Fragment>)
        return(
            <>
            <div className={styles.marketplaceSectionCont}>
                <h1> MARKETPLACE </h1>
                {/* MarketplaceCont */}
                <div className={styles.merchContainer2}>
                    <div className={styles.merch}> </div>
                    <div className={styles.MarketplaceCont}>
                        {eachProdDisplayer}
                    </div>
                </div>
            </div>
            </>
        )
    }

    return(
        <>
        <div className={styles.guanacoMCGenPAge}>
            {guanaMCHead()}
            {floatingMenu()}
            {guanacoPageDisp==="landing"&&<>
                {guanacoLandingSplash()}
                <div className={styles.aBandPage}>
                    {albumDisplayer()}
                    {merchDisplayer()}
                    {videoDisplayer()}
                </div>
            </>}
            {guanacoPageDisp==="marketPlace"&&<>
                {marketPlace()}
            </>}
            {GuanacoMCFooter()}
            {cartModal()}
            {itemAddedAlert()}    
        </div>
        <Footer socialLinks={false}/>
        </>
    )
}