import Image from "next/image"
import React, { useState } from "react"

import { Dialog } from '@material-ui/core'

import styles from "./../styles/components/eventDisp.module.css"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export function EventDisp(props){

    const [imgTrig, setImgTrig] = useState(false)

    let aSampleEvent = {
        "eventName": "Criollando Con Amigos",
        "eventType": "concierto en linea",
        "eventDate":"2021-07-29",
        "eventDescription":"Iraiz y Sebastian Oviedo después de trece años de trabajo juntos tienen la dicha de presentarnos su primer disco grabado en vivo “Criollando con amigos” que es un homenaje a la música popular latinoamericana. Una “guitarreada” virtual acompañada de amigos entrañables y admirados.",
        "buyNowURL": "https://recitalesapp.com/event/80",
        "priceObj":[
            {
                "price": 13,
                "priceDetail": "Concierto Virtual + Disco",
                "productName": "Criollando Con Amigos"
            },
            {
                "price": 10,
                "priceDetail": "Concierto Virtual + Disco Digital",
                "productName": "Criollando Con Amigos"
            }
            ,
            {
                "price": 8,
                "priceDetail": "Concierto Virtual",
                "productName": "Criollando Con Amigos"
            },
        ],
        "eventPoster":{
            "src":"/assets/eventPosters/criollando.jpg",
            "height": 765,
            "width": 595,
            "alt": "Poster Evento: Criollando con Amigos - "
        }
    }


    let eachEventPrice
    if(aSampleEvent.priceObj){
    eachEventPrice=aSampleEvent.priceObj.map((elem, i)=><React.Fragment key={i}>
        {i===0?<>
        <div className={styles.aPriceBoxMain}>
            <div className={styles.priceDetailMain}> {elem.priceDetail} </div>
            <div className={styles.anEventPriceMain}> $ {elem.price} </div>
            <div className={styles.addToCartMain} onClick={()=>{props.addToCart(elem)}}
            > Comprar <AddShoppingCartIcon /> </div>
        </div>
        </>:<> 
        <div className={styles.aPriceBox}>
            <div className={styles.priceDetail}> {elem.priceDetail} </div>
            <div className={styles.anEventPrice}> $ {elem.price} </div>
            <div className={styles.addToCart} onClick={()=>{props.addToCart(elem)}}
            > Comprar <AddShoppingCartIcon /> </div>
        </div>
        </>}



    </React.Fragment>)
    } else {
        eachEventPrice= <>
        <div className={styles.extsaleBTN}> 
            <a href={aSampleEvent.buyNowURL} target="_blank" className={styles.buyNowBTN}> Comprar Ahora! </a>
            <p> Link a RecitalesApp </p>
        </div> 
        </>
    }

    let presentationDate =  new Date (aSampleEvent.eventDate)
    console.log(presentationDate.toLocaleDateString())
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return(
        <>
            <div className={styles.eventContainer}> 
                <div className={styles.imgCont} onClick={()=>setImgTrig(true)}> 
                    <Image
                        src={aSampleEvent.eventPoster.src}
                        width={aSampleEvent.eventPoster.width}
                        height={aSampleEvent.eventPoster.height}
                        alt={aSampleEvent.eventPoster.alt}
                    />
                </div>
                <div className={styles.eventDescrCont}>
                    <div className={styles.eventListing}> eventos / {aSampleEvent.eventType} </div>
                    <h2>{presentationDate.toLocaleDateString(undefined, options)} </h2>
                    <h1> {aSampleEvent.eventName} </h1>
                    <p> {aSampleEvent.eventDescription} </p>
                    <div className={styles.priceContainer}> 
                        {eachEventPrice}
                    </div>
                </div>
            </div>
            <Dialog open={imgTrig} onClose={()=>setImgTrig(false)} >
                <div className={styles.generalModalCont} >
                    <div className={styles.modalBTN} onClick={()=>setImgTrig(false)}> close | X </div>
                    <h3> &nbsp; {aSampleEvent.eventName} </h3>
                    <Image
                        src={aSampleEvent.eventPoster.src}
                        width={aSampleEvent.eventPoster.width}
                        height={aSampleEvent.eventPoster.height}
                        alt={aSampleEvent.eventPoster.alt}
                    />
                </div>
            </Dialog>
        </>
    )
}