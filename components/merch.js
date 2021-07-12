import React from "react"
import { useState } from "react"
import styles from "./../styles/components/merch.module.css"
import Image from "next/image"
import { Dialog } from '@material-ui/core'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


export function MerchDisp(props){

let theItem = props.merchItem

    const [merchVisTrigger, setMerchVis]=useState(false)
    const [merchObj, setMerchObj] =useState({
        "price": theItem.priceObj.price,
        "priceDetail": theItem.priceObj.priceDetail,
        "productName": theItem.priceObj.productName
    })

    let variantPickers=theItem.variants.map((elem, i)=><React.Fragment key={i}>
            <option value={elem}> {elem} </option>
        </React.Fragment>)
    
    const IMGDisplayer=(imgObj)=>{
        return(
            <>
                <Dialog open={merchVisTrigger} onClose={()=>{setMerchVis(false)}} >
                    <div className={styles.modalRow}>  
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
                    <div className={styles.merchListing}> merch / {theItem.productCateg} </div>
                    <h2> {theItem.prodName} </h2>
                    <h5> {theItem.associatedActs} </h5>
                    {merchObj.priceDetail? <>
                        <label htmlFor="variantPickerID" className={styles.varPickLabel} > Selecciona tu favorita:</label>
                        <select className={styles.variantPickerInput} onChange={(e)=>{
                            setMerchObj({
                                ...merchObj,
                                "priceDetail":e.target.value
                            })
                        }}> {variantPickers} </select>
                        <div className={styles.priceDet}> {merchObj.priceDetail} - ${merchObj.price} </div>
                        <div className={styles.addToCart} onClick={()=>{props.addToCart(merchObj)}}
                        > Comprar <AddShoppingCartIcon /> </div> 
                    </>:<>
                        <label htmlFor="variantPickerID" className={styles.varPickLabel} > Selecciona tu opcion favorita:  </label>
                        <select id="variantPickerID" className={styles.variantPickerInput} onChange={(e)=>{
                            setMerchObj({
                                ...merchObj,
                                "priceDetail":e.target.value
                            })
                        }}> <option value=""> </option>
                        {variantPickers} </select>
                    </>}
                </div>
            </div>
        </>
    )
}