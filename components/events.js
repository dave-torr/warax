import Image from "next/image"
import React from "react"

import styles from "./../styles/components/eventDisp.module.css"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export function EventDisp(props){

    let aSampleEvent = {
        "eventName": "Criollando Con Amigos",
        "eventType": "concierto en linea",
        "eventDescription":"Iraiz y Sebastian Oviedo después de trece años de trabajo juntos tienen la dicha de presentarnos su primer disco grabado en vivo “Criollando con amigos” que es un homenaje a la música popular latinoamericana. Una “guitarreada” virtual acompañada de amigos entrañables y admirados.",
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
            },
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

    let eachEventPrice=aSampleEvent.priceObj.map((elem, i)=><React.Fragment key={i}>
        <div className={styles.aPriceBox}>
            <div className={styles.priceDetail}> {elem.priceDetail} </div>
            <div className={styles.anEventPrice}> $ {elem.price} </div>
            <div className={styles.addToCart} onClick={()=>{props.addToCart(elem)}}
            > Comprar <AddShoppingCartIcon /> </div>
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
                    <div className={styles.eventListing}> eventos / {aSampleEvent.eventType} </div>
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