import React, { useState } from "react"
import Image from "next/image"

import GuanacoData from "./../data/guanaco.json"

import {NaviTwo} from "./../components/navi"

import styles from "./../styles/pages/guanaco.module.css"

export default function GuanacoPage(props){

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
let managmentNumber = "00593996027198";
let managementEmail = "mabelenlara@gmail.com"

let spotifyPlayerEmbedding = <iframe src="https://open.spotify.com/embed/artist/7hU7xPPEEDgzWw3Ao8SupC?theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>


// for floating mobile menu
// let menuIconArr=[
        // <AssignmentIndIcon />,
        // <MicIcon />,
        // <AlbumIcon />,
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
        let videoSelector=GuanacoData.videoArr.map((elem, i)=><React.Fragment>
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
              src={"/assets/bands/guanaco/pics/homeLanding2.jpg"}
              layout="fill" objectFit="cover"
              alt="Guanaco MC - Cholonizacion Landing Image"
            /></div>
            <div className={styles.guanacoLogo}>
            <Image 
                src="/assets/bands/guanaco/logoGold.png"
                height={155}
                width={930}
                alt="Guanaco MC Logo - GOLD"
            /></div>
            </div>
            </>
        )
    }

    return(
        <>
        <div className={styles.guanacoMCGenPAge}>
            {guanacoLandingSplash()}
            <div className={styles.aBandPage}>
                {videoDisplayer()}
            </div>
        </div>
        </>
    )
}