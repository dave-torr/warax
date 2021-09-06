import React, { useState } from "react"
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
    }    
]

const [selectedEp, setSelectedEp]=useState(episodeArr[6])

const eachepisodeDisplayer=(episodeList)=>{

    let eachEpisodeList= episodeList.map((elem, i)=><React.Fragment key={i}>
        <div className={styles.eachepisodeList} onClick={()=>setSelectedEp(episodeList[i])}>  
        <strong>Ep. #{elem.episodeNum}:</strong> {elem.episodeName} </div>
    </React.Fragment>)

    return(<>
        <div className={styles.episodePicker}>
            <h2>Temporada #3: </h2>
            {eachEpisodeList}
        </div>
    </>)
}

const youtubeEmbedder=()=>{
    return(
        <>
        <div>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${selectedEp.embeddiLink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </>
    )
}
console.log(selectedEp)


return(<>
<br></br> 
<br></br> 
    <div className={styles.miniSiteGenCont}>
        <Image
            src="/assets/icons/webVeoFirma.png"
            height={388}
            width={1318}
            alt="WebVeo landing Cover"
        />    
        <div className={styles.episodeListAndPlayer}> 
            {eachepisodeDisplayer(episodeArr)}
            {youtubeEmbedder()}
        </div>
        <div className={styles.episodeDescription}>
            <h5> Ep. {selectedEp.episodeNum} / S. 3 </h5>
            <h3> {selectedEp.episodeName} </h3>
            <p> {selectedEp.episodeDescription} </p>
        </div>
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