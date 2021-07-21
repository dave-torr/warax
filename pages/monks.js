import React, { useState } from "react"

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styles from "./../styles/pages/monks.module.css"
import artistData from "./../data/swingOriginalMonks.json"

export default function MonksPage(props){
    
    const [monkCart, setMonkCart] = useState([])
    const [monksMenu, setMonksMenu] = useState("home")

    const miniMenu =()=>{
        return(
            <>
            </>
        )
    }

    const lyricsDisp=(lyricsArr)=>{
        
        let eachLyric = lyricsArr.map((elem, i)=><Accordion key={i}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} className={styles.eachSongTitle}>
                {elem.songName}
            </AccordionSummary>
            <AccordionDetails>
            <div className={styles.songVerses}>
                {elem.songLyrics.map(element => <div className={styles.eachSongVerse}>
                    {element}
                </div>)}
            </div>
            </AccordionDetails>
        </Accordion>)

        return(
            <>
            <div className={styles.aSectionContainer}> 
                <h3> Lyrics </h3>
                <div className={styles.accordionContainer}>
                    {eachLyric}
                </div>
            </div>
            </>
        )
    }
    
    return(
        <>
        <div className={styles.aBandPage}>
        {lyricsDisp(artistData.lyrics)}
        </div>
        </>
    )
}