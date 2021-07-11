import Image from "next/image"
import React from "react"

import styles from "./../styles/components/eventDisp.module.css"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
export function EventDisp(props){

    let aSampleEvent = {
        "eventName":"Criollando Con Amigos",
        "eventDescription":"Agarrate Catalina volvió a los escenarios con Amor y Odio, primer premio del carnaval 2020. Un espectáculo critico. humoristico y humanista, con el sello proprio de la murga más ganadora de los últimos veinte años.",
        "priceObj":[
            {
                "price": 13,
                "priceDetail": "Concierto Virtual + Disco"
            },
            {
                "price": 8,
                "priceDetail": "Concierto Virtual"
            }
        ],
        "eventPoster":{
            "src":"/assets/eventPosters/criollando.jpg",
            "height": 765,
            "width": 595,
            "alt": "Poster Evento: Criollando con Amigos - "
        }
    }

    let eachEventPrice=aSampleEvent.priceObj.map((elem, i)=><React.Fragment key={i}>
        <div className={styles.aPriceBox}>
            <div className={styles.priceDetail}> {elem.priceDetail} </div>
            <div className={styles.anEventPrice}> $ {elem.price} </div>
            <div className={styles.addToCart}> Comprar <AddShoppingCartIcon /> </div>
        </div>
    </React.Fragment>)

    return(
        <>
            <div className={styles.eventContainer}> 
                <div className={styles.imgCont}> 
                    <Image
                        src={aSampleEvent.eventPoster.src}
                        width={aSampleEvent.eventPoster.width}
                        height={aSampleEvent.eventPoster.height}
                        alt={aSampleEvent.eventPoster.alt}
                    />
                </div>
                <div className={styles.eventDescrCont}>
                    <h2> {aSampleEvent.eventName} </h2>
                    <p> {aSampleEvent.eventDescription} </p>
                    <div className={styles.priceContainer}> 
                        {eachEventPrice}
                    </div>
                </div>
            </div>
        </>
    )
}