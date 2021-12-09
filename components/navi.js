import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"

import {useUser} from "./../utils/auth/userHook"


import styles from  "./../styles/components/navi.module.css"

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcCall from '@material-ui/icons/AddIcCall';
import Directions from '@material-ui/icons/Directions';
import { NavigationTwoTone } from "@material-ui/icons";
import { Dialog } from '@material-ui/core'

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
                props.setPageDisplayer(elem.link)
                props.setMinisite(null)
                setDialogTrigg(false)
                window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {elem.key}</a>
            </>}
    </React.Fragment>)

    const miniSiteNavi=()=>{
        return(<>
            <div className={styles.naviHighlightCont}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <div className={styles.highlightTitle}>Lo Nuevo</div>
                    {props.minisiteDisp==="WebVeo"?<>
                        <div className={styles.miniSiteLinkActive}>
                            #WebVeo
                        </div>
                    </>:<>
                        <div className={styles.miniSiteLink} onClick={()=>{
                            props.setMinisite("WebVeo")
                            props.setPageDisplayer(null)
                            window.scrollTo({ top: 0, behavior: "smooth" })
                            }}>
                            #WebVeo
                        </div>
                    </>}
                    <Link href="/guanaco"> 
                    <div className={styles.miniSiteLink}>
                    Guanaco MC</div>
                    </Link>
                </div>

                {props.waraxCart.length>0&&<>
                <div className={styles.naviCartMob} onClick={()=>props.setMobCartTrigg(true)}>  
                    {props.waraxCart.length} <ShoppingCartIcon color="error"/> 
                </div> </>}

    {/* some changes must occur */}

                {/* {props.minisiteDisp==="WuanTake"?<>
                    <div className={styles.miniSiteLinkActive}>
                        #WuanTake
                    </div>
                </>:<>
                    <div className={styles.miniSiteLink} onClick={()=>{
                        props.setMinisite("WuanTake")
                        props.setPageDisplayer(null)
                        window.scrollTo({ top: 0, behavior: "smooth" })
                        }}>
                        #WuanTake
                    </div>
                </>} */}



                {/* {props.minisiteDisp==="WaraxTv"?<>
                    <div className={styles.miniSiteLinkActive}>
                        #WaraxTv
                    </div>
                </>:<>
                    <div className={styles.miniSiteLink} onClick={()=>{
                        props.setMinisite("WaraxTv")
                        props.setPageDisplayer(null)
                        window.scrollTo({ top: 0, behavior: "smooth" })
                        }}>
                        #WaraxTv
                    </div>
                </>} */}


            </div>
        </>)
    }

    const theMenu=()=>{
        return(
            <>
                <div className={styles.naviGenCont}>
                    <div className={styles.naviRow}>
                        <Image
                            src={"/assets/icons/waraxLogoBLK.png"}
                            height={70}
                            width={190}
                            alt="Warax Logo"
                            onClick={()=>{
                                props.setPageDisplayer("home") 
                                props.setMinisite(null)
                                window.scrollTo({ top: 0, behavior: "smooth" })
                                }}
                            />
                        <div className={styles.naviBTNCont}>
                            <div>
                                {eachMenuOpt}
                            </div>
                            {props.waraxCart.length>0&&<>
                            <div className={styles.naviCart} onClick={()=>props.setCartModal(true)}>  
                                Carrito Warax &nbsp; x {props.waraxCart.length} &nbsp;  <ShoppingCartIcon color="error"/> 
                            </div>
                            </>}
                        </div>
                        <div className={styles.hamburgerCont} onClick={()=>setDialogTrigg(true)}> 
                            <div className={styles.burgerLine} />
                            <div className={styles.burgerLine} />
                            <div className={styles.burgerLine} />
                        </div>
                    </div>

                    <div className={styles.aNaviRow}>
                        {miniSiteNavi()}
                    </div>
                </div>
            </>
        )
    }
    const mobilePopup=()=>{
        return(
            <>
                <Dialog open={dialogTrigg} fullScreen onClose={()=>setDialogTrigg(false)}> 
                    <div className={styles.naviColum}>
                        <div className={styles.closeModBTN} onClick={()=>setDialogTrigg(false)}> cerrar | x </div>
                        <Image
                            src={"/assets/icons/waraxLogoBLK.png"}
                            height={80}
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
            <div className={styles.naviGenCont2}>
            <Link href="/"><a> 
                <div className={styles.naviRow2}>
                <div className={styles.waraxNaviLogo}> 
                    <Image
                        src={"/assets/icons/waraxLogoBLK.png"}
                        height={80}
                        width={216}
                        alt="Warax Logo"
                        />
                </div>
                </div>
            </a></Link>
            </div>
        </>
    )    
}
export function Footer(props){

/////////////////////////////////
// User Data
/////////////////////////////////
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
/////////////////////////////////
// AUTH
/////////////////////////////////

    const [user, { mutate }] = useUser();
    const [loginSwitcher, setLogInSwitch]=useState(false)
    const logInSubmit= async(e)=>{
        e.preventDefault();
        const body = {
            userName: e.currentTarget.userName.value,
            password: e.currentTarget.password.value,
        };
        const res = await fetch('/api/auth/logInOut', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (res.status === 200) {
            const userObj = await res.json();
            mutate(userObj);

        } else {
            console.log(res.status)
            console.log("Error")
        }
    }
    const logInSwitcherDisp=(switcher, setSwitch)=>{
        if(switcher){
            return(<>
                <form className={styles.naviLogInFrom} onSubmit={(e)=>logInSubmit(e)}>
                    <div className={styles.naviInputCont}> 
                        <label htmlFor="naviLoginUsername">Username</label> 
                        <input 
                            required 
                            id="naviLoginUsername" 
                            type="text" 
                            name="userName"
                            placeholder="Ingresa tu Usuario"
                            />
                    </div>
                    <div className={styles.naviInputCont}> 
                        <label htmlFor="naviLoginPassword">Password</label> 
                        <input 
                            required 
                            id="naviLoginPassword" 
                            type="password" 
                            name="password"
                            placeholder="Ingresa tu Password"
                            />
                    </div>
                    <button className={styles.logInBtn} type="submit">Sign In</button>
                </form>
            </>)
        } else {
            return(<>
                <div className={styles.logInBtn} onClick={()=>setSwitch(true)}> LogIn</div>
            </>)
        }
    }

    const samplePass = "WrxLabs3000!@@"

 
    return(
        <>
            <div className={styles.generalFooterCont}>
                {props.socialLinks&&<>
                <div className={styles.aSomeIconCont}> {eachSoMeBTN} </div> </>}
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
                <div className={styles.contactData}>
                    <h4>Contáctanos:</h4>
                    <h5>
                        <a href="tel:593993712981"><AddIcCall /> </a> 
                        {/* &nbsp; &nbsp; &nbsp; */}
                        {/* <a href="tel:593993712981"><Directions /> </a> */}
                    </h5>
                </div>
                {logInSwitcherDisp(loginSwitcher, setLogInSwitch)}
            </div>
            
        </>
    )
}

//  npm install @mui/material