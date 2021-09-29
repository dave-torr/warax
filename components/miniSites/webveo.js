import React, { useEffect, useState } from "react"
import Image from "next/image"

import styles from "./../../styles/pages/minisites.module.css"

export function WebveoMiniSite(props){

let episodeArr= [
    {
        "episodeNum": 1,
        "season": 3,
        "episodeName": "Gabriel Baumann - El WEBVEO",
        "embeddiLink": "DlhTTHMKzBQ",
        "episodeDescription": "En esta ocasión tenemos como invitado al inigualable Gabriel Bauman, músico, actor y voz principal de Swing Original Monks."
    },
    {
        "episodeNum": 2,
        "season": 3,
        "episodeName": "Carolina Pérez - El WEBVEO",
        "embeddiLink": "QoF8umQ-hfA",
        "episodeDescription": "En esta ocasión tenemos a una invitada increíble, nada más y nada menos que la talentosísima Carolina Pérez Flor, gran actriz de la ciudad de Quito. "
    },
    {
        "episodeNum": 3,
        "season": 3,
        "episodeName": "Raúl Molina - El WEBVEO",
        "embeddiLink": "1zgi2zPCy8c",
        "episodeDescription": "En esta ocasión tenemos como invitado al genio rítmico Raúl Molina, músico, poeta, compositor, profesor, amante y cocinero, gran baterista de la escena independiente ecuatoriana."
    },
    {
        "episodeNum": 4,
        "season": 3,
        "episodeName": "Roberto Ayala - El WEBVEO",
        "embeddiLink": "d3lwnf2HjqE",
        "episodeDescription": "En esta ocasión tenemos como invitado al campeón vigente de Masterchef Ecuador 2021 nada más y nada menos que al gran Roberto Ayala, amante de la cocina, piloto, GOUNI ambassador y gran ser humano.  No te pierdas este episodio y más."
    },
    {
        "episodeNum": 5,
        "season": 3,
        "episodeName": "Daniel Luzuriaga - El WEBVEO",
        "embeddiLink": "bFA_itoLzk4",
        "episodeDescription": "En esta ocasión tenemos como invitado al gran Daniel Luzuriaga, fundador y compositor de la orquesta La Sagrada Familia, percusionista, compositor y arreglista. Comenzó su carrera musical desde muy pequeño de la mano de su abuelo el mítico Don Medardo Luzuriaga. No te pierdas este episodio y más todos los martes a las 20.00."
    },
    {
        "episodeNum": 6,
        "season": 3,
        "episodeName": "Paola Navarrete - El WEBVEO",
        "embeddiLink": "59QWaDWirYI",
        "episodeDescription": "En este nuevo episodio nos acompaña una cantante y música talentosisima, sin dudarlo uno de los referentes musicales hoy en nuestra industria musical,  nada más y nada menos que a la reina Paola Navarrete, cantante, compositora, artista, guayaca de sangre.  No te pierdas este más episodios todos los martes a las 20.00. "
    },
    {
        "episodeNum": 7,
        "season": 3,
        "episodeName": "Ave Jaramillo - El WEBVEO",
        "embeddiLink": "b4qn2z9fEAI",
        "episodeDescription": "En este nuevo episodio nos acompaña un comediante increible, sin dudarlo uno de los mayores exponentes y precursor del Stand Up Comedy en Ecuador,  con mucho agrado presentamos a Ave Jaramillo, comediante, actor, artista, escritor y amante de los perros, desde los estudios de Warax Arte"
    },    
    {
        "episodeNum": 8,
        "season": 3,
        "episodeName": "Begoña Salas - El WEBVEO",
        "embeddiLink": "jFCvd0WE8DM",
        "episodeDescription": "En este episodio nos acompaña la talentosísima Begoña Salas, artista plástica, pintora, tarotista y amante de la cocina. No te pierdas esta lectura única del tarot por Bego Salas a Guanaco, desde los estudios de Warax Arte."
    },    
    {
        "episodeNum": 9,
        "season": 3,
        "episodeName": "Mac Tempo - El WEBVEO",
        "embeddiLink": "XijAg3nqOE0",
        "episodeDescription": "En este episodio nos acompaña el genio rítmico del rap Mac Tempo, actual campeón nacional de la Redbull Batalla de Gallos, escritor, rapero y una persona increíble. No te pierdas este freestyle de Mac Tempo junto a la Waráx Band, directamente desde los estudios de Waráx Arte."
    },    
    {
        "episodeNum": 10,
        "season": 3,
        "episodeName": "Fresa Malakian - El WEBVEO",
        "embeddiLink": "OqIr30BxfZw",
        "episodeDescription": "En este episodio nos acompaña la increíble Fresa Malakian, body fitness coach, bailarina, presentadora, amante de los tatuajes y por supuesto la actual Twerking queen del Ecuador. No te pierdas la entrevista única junto a Fresa Malakian con Guanaco, desde los estudios de Warax Arte."
    },    
    {
        "episodeNum": 11,
        "season": 3,
        "episodeName": "Black Prince - El WEBVEO",
        "embeddiLink": "9uk-t5DJ7SU",
        "episodeDescription": "En este episodio nos acompaña Black Prince cantante,  músico, empresario, actual CEO de Moringa Power.No te pierdas este episodio de negocios y mucha musica con la improvisación de Black Prince  junto a la Waráx Band, directamente desde los estudios de Waráx Arte"
    },    
]


let epIndex = episodeArr.length-1
const [selectedEp, setSelectedEp]=useState(episodeArr[epIndex])
useEffect(()=>{
    window.scrollTo(0,0)
    setSelectedEp
},[])
const eachepisodeDisplayer=(episodeList)=>{

    let eachEpisodeList= episodeList.map((elem, i)=><React.Fragment key={i}>
        <div className={styles.eachepisodeList} onClick={()=>setSelectedEp(episodeList[i])}>  
        <strong>Ep. #{elem.episodeNum}:</strong> {elem.episodeName} </div>
    </React.Fragment>)

    let eachEpisodeListSELECT= episodeList.map((elem, i)=><React.Fragment key={i}>
        <option className={styles.eachepisodeList} 
        // onChange={()=>{
        //     console.log(episodeList[i])
        //     setSelectedEp(episodeList[i])
        
        // }}
        value={JSON.stringify(episodeList[i])}
        >  
        {elem.episodeName} </option>
    </React.Fragment>)

    return(<>
        <div className={styles.episodePicker}>
            {eachEpisodeList}
        </div>
        <div className={styles.episodePickerMOBILE}>
            {/* {eachEpisodeList} */}
            <select className={styles.episodeDropdown} onChange={(e)=>{
                console.log(JSON.parse(e.target.value))
                setSelectedEp(JSON.parse(e.target.value))
            }}> 
            <option>Elige un Episodio!</option>
            {eachEpisodeListSELECT} </select>
        </div>
    </>)
}
const youtubeEmbedder=()=>{
    return(
        <>
        <div className={styles.youTubeIframCont}>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${selectedEp.embeddiLink}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className={styles.youTubeIframContMOBILE}>
            <iframe width="320" height="190" src={`https://www.youtube.com/embed/${selectedEp.embeddiLink}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        </>
    )
}
const webVeoSessDisp=()=>{
    return(
        <>
            <div className={styles.seasonIntrotitle}> WebVeo Sessions </div>
            <div className={styles.webVeoSessIntro}> Increibles temas grabados en vivo desde Warax Studios</div>
            <div className={styles.wevVeoSessCont}>
            <div className={styles.youTubeIframCont}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/EUFxlMliUNo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className={styles.youTubeIframCont2MOBILE}>
                <iframe width="320" height="190" src="https://www.youtube.com/embed/EUFxlMliUNo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            </div>
        </>
    )
}

return(<>
    <div className={styles.miniSiteGenCont}>
        <div className={styles.webVeoIntroBanner}> 
        <Image
            src="/assets/icons/webVeoFirma.png"
            height={388}
            width={1318}
            alt="WebVeo landing Cover"
        />    
        </div>
        <div className={styles.seasonIntrotitle}> Temporada 3 </div>
        <div className={styles.webveoPageCont}>
            <div className={styles.episodeListAndPlayer}> 
                {eachepisodeDisplayer(episodeArr)}
                {youtubeEmbedder()}
            </div>
            <div className={styles.episodeDescription}>
                <div className={styles.epDesTitle}>
                    <h3> {selectedEp.episodeName} </h3>
                    <h5> Ep. {selectedEp.episodeNum} / S. 3 </h5>
                </div>
                <p> {selectedEp.episodeDescription} </p>
            </div>
            {webVeoSessDisp()}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className={styles.seasonIntrotitle}> WebVeo - Merch </div>
        {props.merchDisp()}
        <div className={styles.webVeoLogo}> <Image
            src="/assets/icons/webVeoColor.png"
            height={250}
            width={430}
            alt="WebVeo Icon"
        />
        </div>
    </div>
</>)
}

export function WebVeoHomeBanner(props){
    return(
        <>
        <div className={styles.webveoBannerCont} onClick={()=>{
            props.setMinisite("WebVeo")
            props.setPageDisplayer(null)}}>
            <div className={styles.webVeoBannerLogo}> <Image
                src="/assets/icons/webVeoColor.png"
                height={250}
                width={430}
                alt="WebVeo Icon"
            />
            </div>
            <i>/ WaraxTv / Guanaco MC</i>
            <h1> Tercera temporada</h1>
            <h3> Nuevos episodios: Martes 8pm</h3>
        </div>
        </>
    )
}