import React from "react";
import Image from "next/image"
import { useState } from "react"

import styles from "./../styles/components/services.module.css"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Dialog } from '@material-ui/core'




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
            <><Dialog open={contactModTrig} onClose={()=>setContactModTrig(false)} maxWidth="lg">
            <form className={styles.contactFormModal}>
                Email/Whatsapp icon
                {contactForm()}
                {/* parking lot checkbox */}
                {/* factura checkbox */}
                {/* Submit BTN */}
            </form>
            </Dialog></>
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
    const contactForm=()=>{
        return(
            <>
                {anInputDisp("text", "userName", "Nombre", contactObj, setContactObj)}
                {anInputDisp("text", "projectName", "Proyecto/Banda", contactObj, setContactObj)}
                {anInputDisp("text", "hometown", "Ciudad", contactObj, setContactObj)}
                {anInputDisp("number", "phono", "Telefono", contactObj, setContactObj)}
                {anInputDisp("date", "DOB", "Fecha Nacimiento", contactObj, setContactObj)}
                {/* factura y/n */}
                {/* parking y/n */}
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