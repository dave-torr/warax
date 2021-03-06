import React, { useEffect, useState } from "react"
import Image from "next/image"

import styles from "./../../styles/pages/minisites.module.css"

let episodeArr= [
    {
        "episodeNum": 1,
        "season": 3,
        "episodeName": "Gabriel Baumann",
        "embeddiLink": "DlhTTHMKzBQ",
        "episodeDescription": "En esta ocasión tenemos como invitado al inigualable Gabriel Bauman, músico, actor y voz principal de Swing Original Monks."
    },
    {
        "episodeNum": 2,
        "season": 3,
        "episodeName": "Carolina Pérez",
        "embeddiLink": "QoF8umQ-hfA",
        "episodeDescription": "En esta ocasión tenemos a una invitada increíble, nada más y nada menos que la talentosísima Carolina Pérez Flor, gran actriz de la ciudad de Quito. "
    },
    {
        "episodeNum": 3,
        "season": 3,
        "episodeName": "Raúl Molina",
        "embeddiLink": "1zgi2zPCy8c",
        "episodeDescription": "En esta ocasión tenemos como invitado al genio rítmico Raúl Molina, músico, poeta, compositor, profesor, amante y cocinero, gran baterista de la escena independiente ecuatoriana."
    },
    {
        "episodeNum": 4,
        "season": 3,
        "episodeName": "Roberto Ayala",
        "embeddiLink": "d3lwnf2HjqE",
        "episodeDescription": "En esta ocasión tenemos como invitado al campeón vigente de Masterchef Ecuador 2021 nada más y nada menos que al gran Roberto Ayala, amante de la cocina, piloto, GOUNI ambassador y gran ser humano.  No te pierdas este episodio y más."
    },
    {
        "episodeNum": 5,
        "season": 3,
        "episodeName": "Daniel Luzuriaga",
        "embeddiLink": "bFA_itoLzk4",
        "episodeDescription": "En esta ocasión tenemos como invitado al gran Daniel Luzuriaga, fundador y compositor de la orquesta La Sagrada Familia, percusionista, compositor y arreglista. Comenzó su carrera musical desde muy pequeño de la mano de su abuelo el mítico Don Medardo Luzuriaga. No te pierdas este episodio y más todos los martes a las 20.00."
    },
    {
        "episodeNum": 6,
        "season": 3,
        "episodeName": "Paola Navarrete",
        "embeddiLink": "59QWaDWirYI",
        "episodeDescription": "En este nuevo episodio nos acompaña una cantante y música talentosisima, sin dudarlo uno de los referentes musicales hoy en nuestra industria musical,  nada más y nada menos que a la reina Paola Navarrete, cantante, compositora, artista, guayaca de sangre.  No te pierdas este más episodios todos los martes a las 20.00. "
    },
    {
        "episodeNum": 7,
        "season": 3,
        "episodeName": "Ave Jaramillo",
        "embeddiLink": "b4qn2z9fEAI",
        "episodeDescription": "En este nuevo episodio nos acompaña un comediante increible, sin dudarlo uno de los mayores exponentes y precursor del Stand Up Comedy en Ecuador,  con mucho agrado presentamos a Ave Jaramillo, comediante, actor, artista, escritor y amante de los perros, desde los estudios de Warax Arte"
    },    
    {
        "episodeNum": 8,
        "season": 3,
        "episodeName": "Begoña Salas",
        "embeddiLink": "jFCvd0WE8DM",
        "episodeDescription": "En este episodio nos acompaña la talentosísima Begoña Salas, artista plástica, pintora, tarotista y amante de la cocina. No te pierdas esta lectura única del tarot por Bego Salas a Guanaco, desde los estudios de Warax Arte."
    },    
    {
        "episodeNum": 9,
        "season": 3,
        "episodeName": "Mac Tempo",
        "embeddiLink": "XijAg3nqOE0",
        "episodeDescription": "En este episodio nos acompaña el genio rítmico del rap Mac Tempo, actual campeón nacional de la Redbull Batalla de Gallos, escritor, rapero y una persona increíble. No te pierdas este freestyle de Mac Tempo junto a la Waráx Band, directamente desde los estudios de Waráx Arte."
    },    
    {
        "episodeNum": 10,
        "season": 3,
        "episodeName": "Fresa Malakian",
        "embeddiLink": "OqIr30BxfZw",
        "episodeDescription": "En este episodio nos acompaña la increíble Fresa Malakian, body fitness coach, bailarina, presentadora, amante de los tatuajes y por supuesto la actual Twerking queen del Ecuador. No te pierdas la entrevista única junto a Fresa Malakian con Guanaco, desde los estudios de Warax Arte."
    },    
    {
        "episodeNum": 11,
        "season": 3,
        "episodeName": "Black Prince",
        "embeddiLink": "9uk-t5DJ7SU",
        "episodeDescription": "En este episodio nos acompaña Black Prince cantante,  músico, empresario, actual CEO de Moringa Power.No te pierdas este episodio de negocios y mucha musica con la improvisación de Black Prince  junto a la Waráx Band, directamente desde los estudios de Waráx Arte"
    },    
    {
        "episodeNum": 12,
        "season": 3,
        "episodeName": "Dario Castro y Maria Buendia",
        "embeddiLink": "w4CEFkSzOJc",
        "episodeDescription": "En este episodio nos acompañan Dario Castro y Maria Buendia músicos, cantantes, productores, pareja y amantes de la comida mexicana, actualmente juntos forman la agrupación musical Violeta Gandhi."
    },    
    {
        "episodeNum": 13,
        "season": 3,
        "episodeName": "Alex Alvear",
        "embeddiLink": "b8xYWzt2LI8",
        "episodeDescription": "En este episodio nos acompaña el genio musical Alex Alvear, músico, compositor, arreglista, y papa de todos los pollitos, su carrera ha sido una influencia para muchos músicos. Actualmente forma parte y lidera Mango Blue, Wañukta Tonic y su proyectos solista."
    },    
    {
        "episodeNum": 14,
        "season": 3,
        "episodeName": "Alvaro Bermeo",
        "embeddiLink": "JPm3nDoua4o",
        "episodeDescription": "En este episodio nos acompaña el gran Alvaro Bermeo, cantante, músico y compositor. Líder de Guardarraya y de su proyecto solista. No te pierdas este episodio y la presentación de Alvaro Bermeo junto a la Waráx Band, directamente desde los estudios de Waráx Arte."
    },    
    {
        "episodeNum": 15,
        "season": 3,
        "episodeName": "Jalal Dubois",
        "embeddiLink": "jwmDFrL9eUY",
        "episodeDescription": "En este episodio nos acompaña el emblemático Jalal Dubois, presentador, comediante, actor y personaje público. Su genialidad nos ha acompañado por más de 10 años. No te pierdas este episodio lleno de consejos, sabiduría y mucha música con la presentación musical de Jalal Dubois junto a la Waráx Band, interpretando un clásico de la música ecuatoriana, directamente desde los estudios de Waráx Arte."
    },    
    {
        "episodeNum": 16,
        "season": 3,
        "episodeName": "Nicolas Schiper, Super Can, Lady Gia",
        "embeddiLink": "X4zVLNRVFZ8",
        "episodeDescription": "En este episodio tenemos una edición especial pura GOUNI nos acompañan Nicolas Schiper, músico, gestor cultural y productor.  Super Can productor, King Road Manager, y Party Lover. Lady Gia música, rapera y amante de la comida. No te pierdas este episodio lleno de mucha comida, risas, consejos y anécdotas. En esta ocasión nos acompaña Celtic Trip interpretando los clásicos del webveo y su música inédita, directamente desde los estudios de Waráx Arte Cumbaya. "
    },    
    {
        "episodeNum": 17,
        "season": 3,
        "episodeName": "Rapder",
        "embeddiLink": "fMmeplPnRLI",
        "episodeDescription": "En este episodio nos acompaña el gran Rapder, cantante, músico, rapero. Actual campeón mundial de la Redbull Batalla de Gallos. No te pierdas este episodio con este increíble expositor del rap mundial."
    },    
    {
        "episodeNum": 18,
        "season": 3,
        "episodeName": "Alfredozky, Eppico, Adulterio",
        "embeddiLink": "rM9LnaznTVs",
        "episodeDescription": "En este episodio nos acompañan el Top 3 de la Redbull Batalla de Gallos Alfredozky, Eppico y Adulterio. Actual Top 3 de la Redbull Batalla de Gallos Ecuador. No te pierdas este episodio con estos increíbles exponentes del rap ecuatoriano."
    },    
    {
        "episodeNum": 19,
        "season": 3,
        "episodeName": "Michelena",
        "embeddiLink": "vuUlJDenJrk",
        "episodeDescription": "En este episodio nos acompaña la leyenda viva el gran Carlos Michelena. Sin duda uno de los mayores exponentes y pionero de la actuación en el Ecuador. No te pierdas este episodio lleno de palabras y musica con el gran Michelena."
    },    
    {
        "episodeNum": 20,
        "season": 3,
        "episodeName": "Spiritual Lyric Sound",
        "embeddiLink": "D4DAzZVXNHc",
        "episodeDescription": "En este episodio nos acompañan los increíbles Spiritual Lyric Sound quienes desde el 2007 traen su sonido al mundo. No te pierdas este episodio lleno de anécdotas y música con Spiritual, Guanaco y la Warax Band."
    },    
    {
        "episodeNum": 21,
        "season": 3,
        "episodeName": "San Andres",
        "embeddiLink": "ZWXqOIlVXGo",
        "episodeDescription": "En este episodio nos acompañan los increíbles San Andrés Cumbia. La dupla mágica de Carlitos Valdivieso y Marco Vivanco creadores del nuevo sonido Cumbia Reggae Style. No te pierdas este episodio lleno de risas, recuerdos y mucha  música junto a este nuevo proyecto que se viene para este 2022."
    },    
    {
        "episodeNum": 22,
        "season": 3,
        "episodeName": "Edgar Castellanos",
        "embeddiLink": "IHVuaFRlRLg",
        "episodeDescription": "Felices de terminar este 2021 con mucha felicidad y alegría. En este episodio nos acompañan el gran Edgar Castellanos Lead de la legendaria banda Mama Vudu. No te pierdas este episodio lleno de risas, anécdotas y los mejores deseos navideños del crew para este 2022."
    },    
    {
        "episodeNum": 23,
        "season": 3,
        "episodeName": "Alejandra García",
        "embeddiLink": "ZnPAVhYZN-g",
        "episodeDescription": "En este capítulo junto a la extraordinaria Alejandra, la cantante manabita más conocida como “La Toquilla” que tiene en sus manos un proyecto musical cuyo objetivo es fortalecer la cultura latinoamericana a través de la música nacional con un toque moderno y un estilo e imagen fuera de lo común, mezclando lo tradicional con un toque más tropical, manteniendo la base del requinto, el charango y todas esas mezclas sonoras  que imprimen su  estilo. No te pierdas este episodio lleno de risas, anécdotas y los mejores deseos navideños del crew para este 2022."
    },    
    {
        "episodeNum": 24,
        "season": 3,
        "episodeName": "Pancho Viñachi ",
        "embeddiLink": "hlNsBmQy6iE",
        "episodeDescription": "En este capítulo nos visita Pancho Viñachi, multifacético freelancer y autodidacta convencido. Uno de los precursores del Stand Up Comedy en Ecuador, actor, escritor, comediante y gran persona. No te pierdas este episodio lleno de risas para empezaz este 2022 junto a la familia del Webveo y Warñax Arte."
    },    
]
let epIndex = episodeArr.length-1

export function WebveoMiniSite(props){
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
        <option className={styles.eachepisodeList} value={JSON.stringify(episodeList[i])} >  
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
                    <h5> Ep. {selectedEp.episodeNum} / S.3</h5>
                </div>
                <p> {selectedEp.episodeDescription} </p>
            </div>
        </div>
        <br></br>

        <div className={styles.seasonIntrotitle}> WebVeo - Merch </div>
        {props.merchDisp()}
        {webVeoSessDisp()}
        <br></br>
        <div className={styles.webVeoLogo}> <Image
            src="/assets/icons/webVeoColor.png"
            height={145}
            width={250}
            alt="WebVeo Icon"
        />
        </div>
    </div>
</>)
}


export function WebVeoHomeBanner(props){

    const [selectedEp, setSelectedEp]=useState(episodeArr[epIndex])
    useEffect(()=>{
        window.scrollTo(0,0)
        setSelectedEp
    },[])
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

    return(
        <>
        <div className={styles.webveoBannerCont} onClick={()=>{
            props.setPageDisplayer("WebVeo")}}>
            <div className={styles.webveoBannerContent}>
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
            <div className={styles.bannerYoutubeCont}>
                {youtubeEmbedder()}
            </div>
        </div>
        </>
    )
}