import React from "react";
import Image from "next/image"
import { useState } from "react"

import styles from "./../styles/components/services.module.css"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Dialog } from '@material-ui/core'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export function ServiceDisp(props){

    let theService=props.theService

    let eachServicePrice=theService.priceObj.map((elem, i)=><React.Fragment key={i}>
        <div className={styles.aPriceBox}>
        {i===0?<>
            <div className={styles.cartOptions}>
                <div className={styles.priceDetailMain}> {elem.priceDetail} </div>
                <div className={styles.aPriceMain}> $ {elem.price} </div>
                {props.activeCart?<>
                    <div className={styles.addToCartMain} onClick={()=>{props.addToCart(elem)}}> 
                    Comprar <AddShoppingCartIcon /> </div>
                    </>:<> 
                    <div className={styles.addToCartMain} onClick={()=>setContactModTrig(true)}> Contactanos </div> </>}
            </div>
        </>:<> 
            <div className={styles.cartOptions}>
                <div className={styles.priceDetail}> {elem.priceDetail} </div>
                <div className={styles.aPrice}> $ {elem.price} </div>
                {props.activeCart?<>
                    <div className={styles.addToCart} onClick={()=>{props.addToCart(elem)}}> 
                    Comprar <AddShoppingCartIcon /> </div>
                    </>:<> 
                    <div className={styles.addToCart} onClick={()=>setContactModTrig(true)}> Contactanos </div> </>}
            </div>
        </>}</div>
    </React.Fragment>)





////////////////////////////////////////
// CONTACT FORM

    // MIGHT EXTRACT THIS AS A SEPARATE COMPONENT
    const [contactModTrig, setContactModTrig]= useState(false)
    const [contactObj, setContactObj]= useState({})
    const contactModal=()=>{
        return(
            <><Dialog open={contactModTrig} onClose={()=>{
                setContactObj({})
                setContactModTrig(false)}
                } maxWidth="xl">
            <div className={styles.contactFormModal}>
                <div className={styles.contactIntro}>Escribenos un mensaje o Email: </div>
                <div className={styles.contactIconCont}>
                    <a href="https://wa.me/593998638396" target="_blank" rel="noopener noreferrer"> <WhatsAppIcon /></a>
                    <a href="mailto:warax.arte@gmail.com?subject=Servicios Warax!" target="_blank" rel="noopener noreferrer"> <MailOutlineIcon /></a>
                </div>
                <div className={styles.contactIntro}>O Envianos tu información:</div>
                {contactForm()}
                {/* parking lot checkbox */}
                {/* factura checkbox */}
                {/* Submit BTN */}
            </div>
            </Dialog>
            </>
        )
    }

    const anInputDisp=(formType, idTag, placeholderLabel, dataObj, setDataObj)=>{
        return(
            <><div className={styles.anInputCont}>
                <label className={styles.anInputLabel} htmlFor={idTag}> {placeholderLabel} </label>
                <input
                    required
                    id={`${idTag}`}
                    placeholder={placeholderLabel}
                    className={styles.aFormInput}
                    type={formType}
                    onChange={(e)=>{
                        setDataObj({
                            ...dataObj,
                            [idTag]: e.target.value
                        })
                    }}
                />
            </div></>
        )
    }
    
    const backEndAPI=async()=>{
        let stringifiedUserData=JSON.stringify(contactObj)
        const res = await fetch("/api/servicesUserData",{
            method: "post",
            body: stringifiedUserData
        })
        const sentClientData = await res.json()
        if(sentClientData){
            setSentDataTrig(true)
        }
    }

    const [submitDataTrig, setDataTrig]=useState(false)
    const [sentDataTrig, setSentDataTrig]=useState(false)
    const contactForm=()=>{
        return(
            <>
                <form className={styles.contactForm} onSubmit={(e)=>{
                    e.preventDefault();
                    setDataTrig(true)
                    backEndAPI()
                }}> 
                {anInputDisp("text", "userName", "Nombre", contactObj, setContactObj)}
                {anInputDisp("text", "projectName", "Proyecto/Banda", contactObj, setContactObj)}
                {anInputDisp("email", "email", "Email", contactObj, setContactObj)}
                {anInputDisp("text", "hometown", "Ciudad", contactObj, setContactObj)}
                {anInputDisp("number", "phono", "Telefono", contactObj, setContactObj)}
                {anInputDisp("date", "reqDate", "Fecha Requerida", contactObj, setContactObj)}
                {/* factura y/n */}
                {/* parking y/n */}
                {sentDataTrig?<>
                    <div className={styles.sformSubBTN}>Datos Enviados! </div>
                </>:<> 
                    {submitDataTrig?<> 
                        <div className={styles.sformSubBTN}>Enviando tus datos!</div>
                    </>:<> 
                        <input type="submit" value="Enviar!" className={styles.sformSubBTN} />
                    </>}
                </>}
                </form>
            </>
        )
    }


    
/////////////////////////////////////////////
    return(
        <>
        {contactModal()}
            <div className={styles.aServiceCont}> 
                <div className={styles.imgCont}> 
                    <Image
                        src={theService.serviceIMG.src}
                        width={theService.serviceIMG.width}
                        height={theService.serviceIMG.height}
                        alt={theService.serviceIMG.alt}
                    />
                </div>
                <div className={styles.serviceDescrCont}>
                    <div className={styles.serviceListing}> servicios / {theService.serviceType} </div>
                    <h2> {theService.serviceName} </h2>
                    <p> {theService.serviceDescription} </p>
                    <div className={styles.priceContainer}>
                        {eachServicePrice}
                    </div>
                </div>
            </div>
        </>
    )
}