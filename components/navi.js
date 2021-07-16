import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

import styles from  "./../styles/components/navi.module.css"

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { Dialog } from '@material-ui/core'
import { NavigationTwoTone } from "@material-ui/icons";


export function Navi(props){


    let menuOptsArr= [
        {
            "key": "Home",
            "link": "home"
        },
        // {
        //     "key": "Artistas",
        //     "link": "artistas"
        // },
        // {
        //     "key": "Team Warax",
        //     "link": "team"
        // },
        {
            "key": "Servicios",
            "link": "servicios"
        },
        {
            "key": "Eventos",
            "link": "eventos"
        },
    ]

    const [dialogTrigg, setDialogTrigg]=useState(false)

        let eachMenuOpt=menuOptsArr.map((elem, i)=><React.Fragment key={i}>
                {elem.link===props.pageDisplayer? <>
                <a className={styles.eachMenuBTNActive}>
                    {elem.key}</a>
                </>:<>
                    <a className={styles.eachMenuBTN} onClick={()=>{
                    props.setPageDisplayer(elem.link);
                    setDialogTrigg(false)
                    window.scrollTo({ top: 0, behavior: "smooth" })}}>
                        {elem.key}</a>
                </>}
        </React.Fragment>)
    const theMenu=()=>{
        return(
            <>
                <div className={styles.naviGenCont}>
                    <div className={styles.naviRow}>
                        <Image
                            src={"/assets/icons/waraxLogoBLK.png"}
                            height={80}
                            width={216}
                            alt="Warax Logo"
                            onClick={()=>props.setPageDisplayer("home")}
                            />
                        <div className={styles.naviBTNCont}>
                            {eachMenuOpt}
                        </div>
                        <div className={styles.hamburgerCont} onClick={()=>setDialogTrigg(true)}> 
                            <div className={styles.burgerLine} />
                            <div className={styles.burgerLine} />
                            <div className={styles.burgerLine} />
                        </div>
                    </div>
                    {props.waraxCart.length>0&&<>
                    <div className={styles.naviCartRow} onClick={()=>props.setCartModal(true)}>  
                        Carrito Warax &nbsp; x {props.waraxCart.length} &nbsp;  <ShoppingCartIcon /> 
                    </div>
                    <div className={styles.naviCartRowMob} onClick={()=>props.setMobCartTrigg(true)}>  
                        Carrito Warax &nbsp; x {props.waraxCart.length} &nbsp;  <ShoppingCartIcon /> 
                    </div>
                    </>}
                </div>
            </>
        )
    }
    const mobilePopup=()=>{
        return(
            <>
                <Dialog open={dialogTrigg} fullScreen onClose={()=>setDialogTrigg(false)}> 
                    <div className={styles.naviColum}>
                        <div className={styles.closeModBTN} onClick={()=>setDialogTrigg(false)}> cerrar | <strong>X</strong> </div>
                        <Image
                            src={"/assets/icons/waraxLogoBLK.png"}
                            height={90}
                            width={216}
                            alt="Warax Logo"
                            onClick={()=>props.setPageDisplayer("home")}
                            />
                        <div className={styles.naviBTNContMobile}>
                            {eachMenuOpt}
                        </div>
                    </div>
                </Dialog>
            </>
        )
    }
    return(
        <>
            {theMenu()}
            {mobilePopup()}
        </>
    )
}

export function NaviTwo(props){
    return(
        <>
            <div className={styles.naviGenCont}>
            <Link href="/"><a> 
                <div className={styles.naviRow}>
                    <Image
                        src={"/assets/icons/waraxLogoBLK.png"}
                        height={80}
                        width={216}
                        alt="Warax Logo"
                        onClick={()=>props.setPageDisplayer("home")}
                        />

                </div>
            </a></Link>
            </div>
        </>
    )    
}

export function Footer(props){

    let footerLinkArr=[
        {
            "Icon": <InstagramIcon />,
            "link": "https://www.instagram.com/warax.arte"
        },
        {
            "Icon": <YouTubeIcon />,
            "link": "https://www.youtube.com/channel/UCz0kXDgjP1IW3v6QnuaUjJQ"
        },
        {
            "Icon": <FacebookIcon />,
            "link": "https://www.facebook.com/warax.arte/"
        }
    ]

    let eachSoMeBTN=footerLinkArr.map((elem, i)=><React.Fragment key={i}>
            <a className={styles.aSoMeIcon} href={elem.link}> 
                {elem.Icon}
            </a>
    </React.Fragment>)

    return(
        <>
            <div className={styles.generalFooterCont}>
                <div className={styles.aSomeIconCont}> {eachSoMeBTN} </div>
                <Link href="/">
                <a>
                <Image
                    src={"/assets/icons/waraxIconWHT.png"}
                    width={150}
                    height={150}
                    alt="Warax Isotype"
                    />
                    </a>
                </Link>
            </div>
        </>
    )
}