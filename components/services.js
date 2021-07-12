import React from "react";
import Image from "next/image"
import { useState } from "react"

import styles from "./../styles/components/services.module.css"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';




export function ServiceDisp(props){

    let theService=props.theService

    let eachServicePrice=theService.priceObj.map((elem, i)=><React.Fragment key={i}>
        <div className={styles.aPriceBox}>
            <div className={styles.priceDetail}> {elem.priceDetail} </div>
            <div className={styles.aPrice}> $ {elem.price} </div>
            <div className={styles.addToCart} onClick={()=>{props.addToCart(elem)}}
            > Comprar <AddShoppingCartIcon /> </div>
        </div>
    </React.Fragment>)

    return(
        <>
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