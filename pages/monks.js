import React, { useState } from "react"
import Image from "next/image"

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import AppleIcon from '@material-ui/icons/Apple';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import TvIcon from '@material-ui/icons/Tv';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MicIcon from '@material-ui/icons/Mic';
import AlbumIcon from '@material-ui/icons/Album';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import styles from "./../styles/pages/monks.module.css"
import artistData from "./../data/swingOriginalMonks.json"

import {NaviTwo} from "./../components/navi"


let menuOptsArr=[
    "bio",
    "eventos",
    "discografia",
    "videos",
    "lyrics"
]
let menuIconArr=[
    <AssignmentIndIcon />,
    <MicIcon />,
    <AlbumIcon />,
    <TvIcon />,
    <MenuBookIcon />
]

let AlbumArr=[
    {
        "albumName": "Somos",
        "trackLength": 12,
        "albumCoverUrl": "/assets/bands/monks/somosAlbumCover.png",
        "albumDescription": "Este disco es la reedición de nuestro primer trabajo: La Santa Fanesca + 6 temas nuevos. La idea de realizar una reedición nació después de un encuentro con Eduardo Cabra el 'Visitante de Calle 13'. Fue un ejercicio para volver más potente nuestro sonido, limpiarlo, y entenderlo. También un gran momento de aprendizaje y autoconocimiento. Es el resumen de todo lo que hemos vivido como banda y de los sonidos que hemos creado en familia.",
        "yearofRelease": "2017",
        "country": "Puerto Rico & Ecuador",
        "AlbumAltalt":"Swing Original Monks - SIOMOS Album Cover",
        "discoLogo":{
            "src":"/assets/bands/monks/somosAlbumTypeface.png",
            "width": 420,
            "height": 120,
            "alt":"Album Icon"
        }
    }
]

export default function MonksPage(props){
    
    const [monkCart, setMonkCart] = useState([])
    const [mobileMenuTrig, setMenuTrig]=useState(false)

    const eachIconDisp=(anIcon, iconLink)=>{
        return(
            <>
                <div className={styles.eachIconDisp}>
                <a href={iconLink}>
                    {anIcon}
                </a> 
                </div>
            </>
        )
    }
    const miniMenu =()=>{
        // vertical mini menu, always visible in wide displays, with content to right. 
        let menuItemDispl= menuOptsArr.map((elem, i)=><div key={i} className={styles.eachNaviBTN} onClick={()=>{
            let menuNaviAncho = document.getElementById(`anchor${i}`)
            menuNaviAncho.scrollIntoView({behavior: "smooth"})
        }}>
            {elem}
        </div>)

        let floatibngMenuOpts=menuIconArr.map((elem, i)=>
            <div key={i} className={styles.aMenuItem} onClick={()=>{
                let menuNaviAncho = document.getElementById(`anchor${i}`)
                menuNaviAncho.scrollIntoView({behavior: "smooth"})}}>
            {elem} </div>)

        return(
            <>
                <div className={styles.naviCont}>     
                    <div className={styles.bandLogo}>
                    <Image
                        src="/assets/bands/monks/typefaceYllwMonks.png"
                        width={200}
                        height={120}
                        alt="Swing Original Monks - Icon Yellow"
                    /></div>
                    <div className={styles.menuOptsCont}>  
                        {menuItemDispl}
                    </div>
                    <div className={styles.socialLinks}>  
                        {eachIconDisp(<AppleIcon />, "https://music.apple.com/ec/album/somos/1181676008")}
                        {eachIconDisp(<YouTubeIcon />, "https://www.youtube.com/channel/UCskvsvRAo8S_z5pSE1Hu17w")}
                        {eachIconDisp(<TwitterIcon />, "https://twitter.com/swingoriginal")}
                        {eachIconDisp(<InstagramIcon />, "https://www.instagram.com/swingoriginalmonks/")}
                        {eachIconDisp(<FacebookIcon />, "https://www.facebook.com/SwingOriginalMonksOficial/")}
                    </div>
                </div>

                <div className={styles.naviContMOBILE}>
                    {floatibngMenuOpts}
                    {/* <div className={styles.aMenuItem}>
                        <MenuOpenIcon />
                    </div> */}
                </div>
            </>
        )
    }
    const lyricsDisp=(lyricsArr, anchorNum)=>{
        let eachLyric = lyricsArr.map((elem, i)=><Accordion key={i}>
            <div className={styles.eachSongTitle} >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                {elem.songName}
            </AccordionSummary>
            </div>
            <div className={styles.songVersesCont}>
            <AccordionDetails>
                <div className={styles.songVerses}>
                    {elem.songLyrics.map(element => <div className={styles.eachSongVerse}>
                        {element}
                    </div>)}
                </div>
            </AccordionDetails>
            </div>
        </Accordion>)

        return(
            <>
            <div className={styles.aSectionContainer} id={`anchor${anchorNum}`}> 
                <h3> Lyrics </h3>
                <div className={styles.lyricContainer}>
                    {eachLyric}
                </div>
            </div>
            </>
        )
    }
    const discographieDisp=(discoArr, anchorNum)=>{

        let eachAlbum=discoArr.map((elem,i)=><div key={i} className={styles.eachAlbumCont}>
            <div className={styles.albumArtCont}>
                <Image
                    src={elem.albumCoverUrl}
                    height={450}
                    width={450}
                    alt={elem.AlbumAltalt}
                />
            </div> 
            <div className={styles.albumDetails}>
                {elem.yearofRelease&&<div className={styles.eachAlbumDetail}>
                <ScheduleIcon /> - {elem.yearofRelease}</div>}
                {elem.country&&<div className={styles.eachAlbumDetail}>
                <LocationOnIcon /> - {elem.country}</div>}
            </div>
            <div className={styles.eachAlbumDescript}>  
                {elem.albumDescription}
            </div>
            <div className={styles.albumLogo}>
                <Image
                    src={elem.discoLogo.src}
                    width={elem.discoLogo.width}
                    height={elem.discoLogo.height}
                    alt={elem.discoLogo.alt}
                />
            </div>
        </div>)

        return(
            <>
            <div className={styles.aSectionContainer} id={`anchor${anchorNum}`}> 
                <h3> Discografia </h3>
                <div className={styles.accordionContainer}>
                    {eachAlbum} 
                </div>
            </div>
            </>
        )
    }
    const bioDisp=(discoArr, anchorNum)=>{

        let bioArr=[
            "Swing Original Monks nació en 2010 con integrantes de Latinoamérica, Europa y Estados Unidos. La mitad del mundo fue el punto de encuentro de un viaje sonoro en el que se mezclan culturas, pensamientos, artes, ropajes e influencias, con las raíces del mundo que habitan sus personajes.",
            "Rock, balkan, merengue, música del pacífico, electrónica, jazz, champeta o cumbia, todo cabe en esta mescolanza sin fin que somos los humanos; tan opuestos, tan parecidos, tan buenos y a la vez tan malos; masculinos, femeninos, blancos, negros, amarillos, libres o enjaulados.",
        ]

        let paragDisp= bioArr.map((elem, i)=> <div key={i} className={styles.eachBioParag}>
            {elem}
        </div>)

        return(
            <>
            <div className={styles.aSectionContainer} id={`anchor${anchorNum}`}> 
                <h3> Bio </h3>
                <div className={styles.bioPicCont}>
                    <Image
                        src={"/assets/bands/monks/bioPicOne.jpg"}
                        height={500}
                        width={750}
                        alt="Swing Original Monks Live - photo by Juan Pablo Viteri "
                    />
                </div>
                <div className={styles.bioParagraphDisp}> 
                    {paragDisp}
                </div>
            </div>
            </>
        )
    }
    const eventsDisp=(eventArr, anchorNum)=>{

        let eachEvent
        if(eventArr){
            eachEvent=eventArr.map((elem, i)=><div key={i}>

        </div>)}



        return(
            <>
            <div className={styles.aSectionContainer} id={`anchor${anchorNum}`}> 
                <h3> eventos </h3>
                <div className={styles.eventContainer}>
                    {eventArr?<>

                    </>:<>
                        <div className={styles.noEventsCont}>
                            <h2>
                                Disculpa, nuevos eventos vendran pronto!
                            </h2>
                            <div >
                                Interesado en hacer un evento con los Monks?
                            </div>
                            <div >
                                Contactanos Aqui:
                            </div>
                            <div className={styles.eachIconCont}>
                                {eachIconDisp(<PhoneIcon />, "tel:+593995651012")}
                                {eachIconDisp(<MailIcon />, "mailto:swingoriginalmonks@gmail.com")}
                            </div>
                        </div>
                    </>}
                </div>
            </div>
            </>
        )
    }
    const videosDisp=(discoArr, anchorNum)=>{

        

        return(
            <>
            <div className={styles.aSectionContainer} id={`anchor${anchorNum}`}> 
                <h3> Videos </h3>
                <h4> Chocolate</h4>
                <div className={styles.videoCont}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0Di5yFzgIMM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                    
                </div>
                <div className={styles.videoContMOBILE}>
                    <iframe width="400" height="240" src="https://www.youtube.com/embed/0Di5yFzgIMM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                    
                </div>

                <h4> Hora Pico</h4>
                <div className={styles.videoCont}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/t7fb6Y-NQ_A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                 
                </div>
                <div className={styles.videoContMOBILE}>
                    <iframe width="400" height="240" src="https://www.youtube.com/embed/t7fb6Y-NQ_A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                   
                </div>

                <h4> Amor Inalambrico </h4>
                <div className={styles.videoCont}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HhqiAgADhxA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                 
                </div>
                <div className={styles.videoContMOBILE}>
                    <iframe width="400" height="240" src="https://www.youtube.com/embed/HhqiAgADhxA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                  
                </div>
            </div>
            </>
        )
    }

    const welcomeSplash=()=>{

        return(
            <>
                <div className={styles.splashCont}>
                    <Image
                        src="/assets/bands/monks/typefaceYllwMonks.png"
                        width={600}
                        height={360}
                        alt="Swing Original Monks - Icon Yellow"
                    />
                </div>
            </>
        )
    }

    return(
        <>
        <NaviTwo />
        {welcomeSplash()}
        <div className={styles.aBandPage}>
            <div className={styles.bandPageNavi}>
                {miniMenu()}
            </div>
            <div className={styles.bandPageContent}>
                {bioDisp([], 0)}
                {eventsDisp(null, 1)}
                {discographieDisp(AlbumArr, 2)}
                {videosDisp([], 3)}
                {lyricsDisp(artistData.lyrics, 4)}

            </div>
        </div>
        </>
    )
}