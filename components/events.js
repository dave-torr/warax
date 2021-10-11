import Image from "next/image"
import React, { useState } from "react"

import { Dialog } from '@material-ui/core'

import styles from "./../styles/components/eventDisp.module.css"

// Material UI Icons
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocationOnIcon from '@material-ui/icons//LocationOn';
import LocalPhoneIcon from '@material-ui/icons//LocalPhone';

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

export function EventPlaceholder(props){
    return(
        <>
        <div className={styles.eventPlaceholder}> 
            <div className={styles.eventPlaceholderTitle}> Muy pronto</div>
            <div className={styles.eventPlaceholderTitle2}> Los mejores eventos de la ciudad, más cerca de ti </div>
        </div>
        </>
    )
}

///////////////////////////////
// Home page event components
/////////////////////////////
export function EventBanner(props){

    // location
    // contact
    // buy now

let locationIcon = <LocationOnIcon />
let contactIcon = <LocalPhoneIcon />
let shoppingIcon = <AddShoppingCartIcon />
const [eventBannerDialogTrig, setBannerIMGTrig]= useState(false)

    return(
        <>
            <div className={styles.eventBannerGenCont}> 
                <Image
                    src={props.bannerData.src}
                    width={props.bannerData.width}
                    height={props.bannerData.height}
                    alt={props.bannerData.alt}
                    onClick={()=>setBannerIMGTrig(true)}
                />
                <i>{props.bannerData.categorization} </i>
                <h1> {props.bannerData.title} </h1>
                <div className={styles.bannerIconContainer}>
                    <a href={props.bannerData.location} target="_blank" ><div className={styles.aBannerIcon}> {locationIcon} </div></a>
                    <a href={`tel:${props.bannerData.phone}`} rel="noopener" ><div className={styles.aBannerIcon}> {contactIcon} </div></a>
                    {/* <div className={styles.aBannerIcon}> {shoppingIcon} </div> */}
                </div>
            </div>
            <Dialog open={eventBannerDialogTrig} onClose={()=>{
                setBannerIMGTrig(false)
            }}>
            <div width="100%" >
                <Image 
                    src={props.bannerData.src}
                    width={600}
                    height={600}
                    alt={props.bannerData.alt}
                />
            </div>
            </Dialog>
        </>
    )
}


export function HomeEventDisplayer(props){


    let sampleEventArr=[
        {
            "eventName": "Lanzamiento C.H.A.M.A",
            "eventType": "estreno single",
            "eventLocation": "https://goo.gl/maps/HVdxyNV3boXrqh9y9",
            "productCatalog": "Pakul",
            "productCategory": "event",
            "productType": "concert",
            "prodName":"Pakul | Lanzamiento C.H.A.M.A Ticket",
            "eventDate": "OCT 23 2021",
            "priceObj":[
                {
                    "price": 8,
                    "priceDetail": "Preventa",
                    "priceExpirationDate": "Oct 20 2021"
                },
                {
                    "price": 10,
                    "priceDetail": "Cover"
                }
            ],
            "eventPoster":{
                "src":"/assets/eventPosters/pakulOct23.jpeg",
                "height": 600,
                "width": 600,
                "alt": "Pakul En Vivo | Poster Evento"
            }
        },
        {
            "eventName": "Pichirilo Radioactivo | En vivo",
            "eventType": "concert",
            "eventLocation": "https://goo.gl/maps/HVdxyNV3boXrqh9y9",
            "productCatalog": "Pichirilo Radioactivo",
            "productCategory": "event",
            "productType": "concert",
            "prodName":"Pichirilo Raioactivo | En vivo | Ticket",
            "eventDate": "NOV 05 2021",
            "priceObj":[
                {
                    "price": 8,
                    "priceDetail": "Preventa",
                    "priceExpirationDate": "Oct 20 2021"
                },
                {
                    "price": 10,
                    "priceDetail": "Cover"
                }
            ],
            "eventPoster":{
                "src":"/assets/eventPosters/pichiriloRioNov5mobile.jpg",
                "height": 730,
                "width": 600,
                "alt": "Pichirilo Radioactivo En Vivo | Poster Evento"
            }
        },
    ]

    // CALENDAR DISPLAYER
    // - upcoming 3-5 events ordered by date. 
    // - addToCartBTN(eventPurchaseObj) 
    // - event poster popup
    // - share to instagram stories BTN?? 

    const [eventPurchaseObj, setEventSaleObj] = useState({
        "price": null,
        "priceDetail": null,
        "productName": null,
        "productType": null,
        "productCatalog": null,
        "productCategory": null,
    })
    // props.waraxCart
    // props.addToCart()





    const [eventIMGDialogTrig, setPosterIMDialogTrig] = useState(false)
    const [eventDialogIMG, setImgDialogData] = useState({
        "alt": "aSample Alt Tag",
        "height": 500,
        "width": 500,
        "src":"./"
    })

    

    const eachEventDisp=(upcomingEventArr)=>{
        let eachEventDispl=upcomingEventArr.map((elem, i)=><React.Fragment key={i}>
            <div className={styles.eachEventCont}> 
                <div className={styles.posterdispl} onClick={()=>{
                    setPosterIMDialogTrig(true)
                    setImgDialogData(elem.eventPoster)
                }}> 
                    <Image
                        height={150}
                        width={150}
                        alt={elem.eventPoster.alt}
                        src={elem.eventPoster.src}
                    />
                </div>
                <div className={styles.priceBox}> 
                    <div> priceBox </div>
                </div>
            </div>
        </React.Fragment>)
        return(
            <>
            <div className={styles.eventCalendarCont}>
                {eachEventDispl}
            </div>
            </>
        )
    }


    const homeLandingSection=()=>{
        return(
            <>
            <div className={styles.homeSection}>
                <div className={styles.backgroundImageCont}>
                    <Image
                        alt="Mountains"
                        src="/assets/pictures/homeEventCalendarIMG.jpg"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
                <div className={styles.eventCalendarContent}>
                    <h1>Eventos Próximos</h1>
                    {eachEventDisp(sampleEventArr)}
                </div>
            </div>
            </>
        )
    }
    const eventPosterDialog=()=>{
        // trigger: eventIMGDialogTrig
        // onClose: setPosterIMDialogTrig
        return(
            <><Dialog open={eventIMGDialogTrig} onClose={()=>setPosterIMDialogTrig(false)}>
                <div className={styles.closeDialogBTN} onClick={()=>setPosterIMDialogTrig(false)}> cerrar | x </div>
                <Image
                    height={eventDialogIMG.height}
                    width={eventDialogIMG.width}
                    alt={eventDialogIMG.alt}
                    src={eventDialogIMG.src}
                />
            </Dialog> 
            </>
        )
    }

    return(
        <>
        {homeLandingSection()}
        {eventPosterDialog()}
        </>
    )
}