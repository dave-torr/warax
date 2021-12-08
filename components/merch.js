import React from "react"
import { useState } from "react"
import styles from "./../styles/components/merch.module.css"
import Image from "next/image"
import { Dialog } from '@material-ui/core'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export function MerchDisp(props){

let theItem = props.merchItem

    const [merchVisTrigger, setMerchVis]=useState(false)
    const [merchObj, setMerchObj] =useState({
        "price": theItem.priceObj.price,
        "priceDetail": theItem.priceDetail,
        "productName": theItem.priceObj.productName,
        "productType": theItem.productType,
        "productCatalog": theItem.productCatalog,
        "productCategory": theItem.productCategory,
    })

    const IMGDisplayer=(imgObj)=>{
        return(
            <>
                <Dialog open={merchVisTrigger} onClose={()=>{setMerchVis(false)}} >
                    <div className={styles.modalRow}>
                        <div className={styles.modalBTN} onClick={()=>setMerchVis(false)}> close | X </div>  
                        <h2> {theItem.prodName} </h2>
                        <div>
                            <Image
                                src={imgObj.src}
                                width={imgObj.width}
                                height={imgObj.height}
                                alt={imgObj.alt}
                            />
                        </div>
                        
                        {/* Could Add variant picking from here */}
                        {/* {theItem.variants&&<></>} */}

                    </div>
                </Dialog>
            </>
        )
    }

    return(
        <>
            {IMGDisplayer(theItem.merchIMG)}
            <div className={styles.merchGenCont}>  
                <div className={styles.aMerchIMG} onClick={()=>{setMerchVis(true)}} > 
                    <Image
                        src={theItem.merchIMG.src}
                        width={theItem.merchIMG.width}
                        height={theItem.merchIMG.height}
                        alt={theItem.merchIMG.alt}
                    />
                </div>
                <div className={styles.merchDescCont}>
                    <div className={styles.merchListing}> merch / {theItem.productCatalog} </div>
                    <h2> {theItem.prodName} </h2>

                    <div>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                            <h5> {theItem.priceDetail} </h5>
                            <div className={styles.proPrice}>${theItem.priceObj.price} </div>
                        </div>

                        <div className={styles.addToCart} onClick={()=>{props.addToCart(merchObj)}}> 
                        Comprar <AddShoppingCartIcon /> </div> 
                    </div>

                </div>
            </div>
        </>
    )
};


export function MiniMerchDisp(props){

let theItem = props.merchItem

    const [merchVisTrigger, setMerchVis]=useState(false)
    const [merchObj, setMerchObj] =useState({
        "price": theItem.priceObj.price,
        "priceDetail": theItem.priceObj.priceDetail,
        "productName": theItem.priceObj.productName
    })

    const IMGDisplayer=(imgObj)=>{
        return(
            <>
                <Dialog open={merchVisTrigger} onClose={()=>{setMerchVis(false)}} >
                    <div className={styles.modalRow}>
                        <div className={styles.modalBTN} onClick={()=>setMerchVis(false)}> close | X </div>  
                        <h2> &nbsp; {theItem.prodName} </h2>
                        <div>
                            <Image
                                src={imgObj.src}
                                width={imgObj.width}
                                height={imgObj.height}
                                alt={imgObj.alt}
                            />
                        </div>
                        
                        {/* Could Add variant picking from here */}
                        {/* {theItem.variants&&<></>} */}

                    </div>
                </Dialog>
            </>
        )
    }
    return(
        <>
            {IMGDisplayer(theItem.merchIMG)}
            <div className={styles.merchMiniGenCont}>  
                <div className={styles.aMerchIMG} onClick={()=>{setMerchVis(true)}} > 
                    <Image
                        src={theItem.merchIMG.src}
                        width={theItem.merchIMG.width}
                        height={theItem.merchIMG.height}
                        alt={theItem.merchIMG.alt}
                    />
                </div>
                <div className={styles.merchDescCont}>
                    <div className={styles.merchListing}> merch / {theItem.productCatalog} </div>
                    <h2> {theItem.prodName} </h2>

                    <div>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                            <h5> {theItem.priceDetail} </h5>
                            <div className={styles.proPrice}>${theItem.priceObj.price} </div>
                        </div>

                        <div className={styles.addToCart} onClick={()=>{props.addToCart(merchObj)}}> 
                        Comprar <AddShoppingCartIcon /> </div> 
                    </div>

                </div>
            </div>
        </>
    )
}