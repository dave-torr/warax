import React, { useState, useEffect } from "react"
import Image from "next/image"
import Head from "next/head"
import GuanacoData from "./../data/guanaco.json"

import {MiniMerchDisp} from "./../components/merch"
import {Footer} from "./../components/navi"

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Dialog } from '@material-ui/core'

import InstagramIcon from '@material-ui/icons/Instagram';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import styles from "./../styles/pages/guanaco.module.css"

export default function GuanacoPage(props){

    let SoundCloudIcon = <Image src="/assets/icons/soundcloud.png" height={20} width={20} alt="SoundCloud Icon" />
    let SpotifyIcon = <Image src="/assets/icons/spotify.png" height={20} width={20} alt="Spotify Icon" />

// for large screen lateral menu
let menuOptsArr=[
        "bio",
        "eventos",
        "discografia",
        "videos",
        "lyrics"
    ]

let instagramLink ="https://www.instagram.com/guanaco_mc/"
let twitterLink = "https://twitter.com/guanaco_mc?s=17"
let facebookLink = "https://www.facebook.com/guanacomcoficial/"
let youtubeLink = "https://www.youtube.com/channel/UCAbqgPCOhrOYMhpmPsbPXvg"
let spotifyLink = "https://open.spotify.com/artist/7hU7xPPEEDgzWw3Ao8SupC?si=UIn1jimpTLer-Fgjv1csZg&dl_branch=1"
let soundcloudLink = "https://soundcloud.com/guanaco-mc/tracks";
let managmentNumber = "tel:00593996027198";
let managementEmail = "mailto:mabelenlara@gmail.com?subject=Guanaco MC | Website Email"

let spotifyPlayerEmbedding = <iframe src="https://open.spotify.com/embed/artist/7hU7xPPEEDgzWw3Ao8SupC?theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>


// for floating mobile menu
// let menuIconArr=[
        // <AssignmentIndIcon />,
        // <MicIcon />,
        // <PlayArrowIcon />,
        // <TvIcon />,
        // <MenuBookIcon />
    // ]

    // Bio
    // Merch
    // Cholonizacion
    // discografia
    // eventos
    // 

// Landing: 
// Cholonizacion landing. Spotify mini player, Merch, 

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



    let capBlack={
    "associatedActs": "incl. delivery",
    "productCateg": "WebVeo",
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
    let capCholoBrown={
    "associatedActs": "incl. delivery",
    "productCateg": "Cholonizacion",
    "prodName":"Gorra - SAHARA - BLACK",
    "priceObj":{
        "price": 35,
        "productName": "Gorra Webveo - SAHARA - BLACK"
        },
    "merchIMG":{
        "src":"/assets/bands/guanaco/merch/capBrownBlack.png",
        "height": 400,
        "width": 400,
        "alt": "Merch Oficial Cholonizacion - Gorra varios colores"
    }
    }
    let hoodieCholoBlk={
    "associatedActs": "incl. delivery",
    "productCateg": "Cholonizacion",
    "prodName":"Hoodie - BLACK STAMP",
    "priceObj":{
        "price": 35,
        "productName": "Hoodie Cholonizacion - BLACK STAMP"
        },
    "merchIMG":{
        "src":"/assets/bands/guanaco/merch/cholonizacionHoodie.png",
        "height": 400,
        "width": 400,
        "alt": "Merch Oficial Cholonizacion - Gorra varios colores"
    }
    }
    let buzoCholoBlk={
    "associatedActs": "incl. delivery",
    "productCateg": "Cholonizacion",
    "prodName":"Buzo - Cholonizacion STAMP",
    "priceObj":{
        "price": 35,
        "productName": "Buzo Cholonizacion - BLACK STAMP"
        },
    "merchIMG":{
        "src":"/assets/bands/guanaco/merch/cholonizacionBuzo.png",
        "height": 400,
        "width": 400,
        "alt": "Merch Oficial Cholonizacion - Buzo varios colores"
    }
    }

/////////////////////////////////
// cartFunctions
////////////////////////////////
    const [waraxiCarti, setWaraxiCart]=useState(true)
    const [waraxCart, setWaraxCart]=useState([])
    const [addedItemSnack, setAddedItem]=useState(false)
    const [cartModalCont, setCartModal]=useState(false)
    const [mobileCartTrig, setMobCartTrigg] =useState(false)
    const [finalPrice, setFinalPrice]=useState()
    const [payment, setPayment]=useState(false)

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

    console.log(waraxCart)


////////////////////
// DISPLAY ELEMENTS
///////////////////
    const merchDisplayer=()=>{
        return(
            <div className={styles.merchSectionCont}>
                <h1> MERCH</h1>
                <div className={styles.merchContainer}>
                    <div className={styles.merchSubCont}>
                        <MiniMerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={capBlack} />
                        <MiniMerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={capCholoBrown} />
                    </div>
                    <div className={styles.merchSubCont}>
                        <MiniMerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={hoodieCholoBlk} />
                        <MiniMerchDisp activeCart={waraxiCarti} addToCart={addToCart} merchItem={buzoCholoBlk} />
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

    return(
        <>
        <div className={styles.guanacoMCGenPAge}>
            {guanaMCHead()}
            {guanacoLandingSplash()}
            <div className={styles.aBandPage}>
                {albumDisplayer()}
                {merchDisplayer()}
                {videoDisplayer()}
            </div>
            {GuanacoMCFooter()}
        </div>
        <Footer socialLinks={false}/>
        {/* {cartModal()} */}
        {itemAddedAlert()}    
        </>
    )
}