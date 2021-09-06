import React, { useState } from "react"
import Image from "next/image"

import styles from "./../../styles/pages/minisites.module.css"

export function WebveoMiniSite(props){


return(<>
<br></br> 
<br></br> 
    <div className={styles.miniSiteGenCont}>
        <div className={styles.WebveoLanding}>
        <Image
            src="/assets/icons/webVeoColor.png"
            height={250}
            width={430}
            alt="WebVeo Icon"
        />    
        <div className={styles.episodeList}>
        
        </div>
        </div>
    </div>
</>)
}