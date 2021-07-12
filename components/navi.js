import Image from "next/image"
import Link from "next/link"
import React from "react"

import styles from  "./../styles/components/navi.module.css"

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export function Navi(props){

    let menuOptsArr= [
        {
            "key": "Home",
            "link": "home"
        },
        {
            "key": "Artistas",
            "link": "artistas"
        },
        {
            "key": "Team Warax",
            "link": "team"
        },
        {
            "key": "Servicios",
            "link": "servicios"
        },
        {
            "key": "Eventos",
            "link": "eventos"
        },
    ]

    const theMenu=()=>{
        let eachMenuOpt=menuOptsArr.map((elem, i)=><React.Fragment key={i}>
                {elem.link===props.pageDisplayer? <>
                <a className={styles.eachMenuBTNActive}>
                    {elem.key}</a>
                </>:<>
                    <a className={styles.eachMenuBTN} onClick={()=>
                    props.setPageDisplayer(elem.link)}>
                        {elem.key}</a>
                </>}
        </React.Fragment>)

        return(
            <>
                <div className={styles.naviGenCont}>
                    <div className={styles.naviRow}>
                        <Image
                            src={"/assets/icons/waraxLogoBLK.png"}
                            height={90}
                            width={216}
                            alt="Warax Logo"
                            onClick={()=>props.setPageDisplayer("home")}
                            />
                        <div className={styles.naviBTNCont}>
                            {eachMenuOpt}
                        </div>
                        <div className={styles.hamburgerCont}> 
                            <div className={styles.burgerLine} />
                            <div className={styles.burgerLine} />
                            <div className={styles.burgerLine} />
                        </div>
                    </div>
                    {props.waraxCart.length>0&&<>
                    <div className={styles.naviCartRow} onClick={()=>props.setCartModal(true)}>  
                        Carrito Warax &nbsp; x {props.waraxCart.length} &nbsp;  <ShoppingCartIcon /> 
                    </div>
                    </>}
                </div>
            </>
        )
    }

    return(
        <>
            {theMenu()}
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