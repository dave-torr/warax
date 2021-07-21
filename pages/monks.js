import React, { useState } from "react"
import Image from "next/image"

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

import styles from "./../styles/pages/monks.module.css"
import artistData from "./../data/swingOriginalMonks.json"

let menuOptsArr=[
    "bio",
    "eventos",
    "discografia",
    "videos",
    "lyrics"
]

let AlbumArr=[
    {
        "albumName": "Somos",
        "trackLength": 12,
        "albumCoverUrl": "/assets/bands/monks/somosAlbumCover.png",
        "albumDescription": "Este disco es la reedición de nuestro primer trabajo: La Santa Fanesca + 6 temas nuevos. La idea de realizar una reedición nació después de un encuentro con Eduardo Cabra el 'Visitante de Calle 13'. Fue un ejercicio para volver más potente nuestro sonido, limpiarlo, y entenderlo. También un gran momento de aprendizaje y autoconocimiento. Es el resumen de todo lo que hemos vivido como banda y de los sonidos que hemos creado en familia.",
        "yearofRelease": "2017",
        "country": "Puerto Rico, Ecuador",
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
    const [monksMenu, setMonksMenu] = useState("home")

    const miniMenu =()=>{

        // vertical mini menu, always visible in wide displays, with content to right. 

        let menuItemDispl= menuOptsArr.map((elem, i)=><div key={i} className={styles.eachNaviBTN} onClick={()=>{
            let menuNaviAncho = document.getElementById(`anchor${i}`)
            menuNaviAncho.scrollIntoView({behavior: "smooth"})
        }}>
            {elem}
        </div>)

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
                </div>
                <div className={styles.naviContMOBILE}>     </div>
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
                <div className={styles.accordionContainer}>
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
            <div style={{"width":"650px", "display":"flex", "justifyContent":"center" }}>
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
                                {eachIconDisp(<PhoneIcon />)}
                                {eachIconDisp(<MailIcon />)}
                            </div>
                        </div>
                    </>}
                </div>
            </div>
            </>
        )
    }
    const videosDisp=(discoArr, anchorNum)=>{

        let eachAlbum=discoArr.map((elem,i)=><div key={i}> 

        </div>)

        return(
            <>
            <div className={styles.aSectionContainer} id={`anchor${anchorNum}`}> 
                <h3> Videos </h3>
                <div className={styles.accordionContainer}>
                    {eachAlbum}
                </div>
            </div>
            </>
        )
    }

    return(
        <>
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