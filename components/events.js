import Image from "next/image"
import React, { useState } from "react"

import { Dialog } from '@material-ui/core'

import styles from "./../styles/components/eventDisp.module.css"

// Material UI Icons
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocationOnIcon from '@material-ui/icons//LocationOn';
import LocalPhoneIcon from '@material-ui/icons//LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';

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
let instaIcon = <InstagramIcon />
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
                    <a href={props.bannerData.location} target="_blank" rel="noopener" ><div className={styles.aBannerIcon}> {locationIcon} </div></a>
                    <a href={`tel:${props.bannerData.phone}`} rel="noopener" ><div className={styles.aBannerIcon}> {contactIcon} </div></a>
                    {props.bannerData.instagramLink&&<>
                    <a href={props.bannerData.instagramLink} target="_blank" rel="noopener" ><div className={styles.aBannerIcon}> {instaIcon} </div></a>
                    </>}
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
    let toDate = new Date()
    let sampleEventArr=[
        {
            "eventName": "Pakul | Lanzamiento C.H.A.M.A",
            "eventType": "estreno single",
            "eventLocation": "https://goo.gl/maps/HVdxyNV3boXrqh9y9",
            "eventCity": "Quito",
            "productCatalog": "Pakul",
            "productCategory": "Event",
            "productType": "Concert",
            "productName":"Pakul | Lanzamiento C.H.A.M.A Ticket",
            "eventDate": "OCT 23 2021",
            "contactPhone": "https://wa.me/593984057223",
            "priceObj":[
                {
                    "price": 8,
                    "priceDetail": "Preventa",
                    "priceExpirationDate": "Oct 21 2021"
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
            "eventName": "Guanaco | Cholonizacion Tour",
            "eventType": "en vivo",
            "eventLocation": "https://goo.gl/maps/xrNwvJhYBXbmFdCj7",
            "eventCity": "Riobamba",
            "productCatalog": "Guanaco",
            "productCategory": "Event",
            "productType": "Concert",
            "productName":"Guanaco | Cholonizacion Tour Ticket",
            "eventDate": "OCT 23 2021",
            "contactPhone": "https://wa.me/593995284667",
            "priceObj":[
                {
                    "price": 10,
                    "priceDetail": "Cover"
                }
            ],
            "eventPoster":{
                "src":"/assets/eventPosters/choloOCT23mobile.jpeg",
                "height": 600,
                "width": 600,
                "alt": "Guanaco MC Cholonizacion | Poster Evento"
            }
        },
        {
            "eventName": "Guanaco | Cholonizacion Ft. Pakul",
            "eventType": "en vivo",
            "eventCity": "Baños",
            "productCatalog": "Guanaco",
            "productCategory": "Event",
            "productType": "Concert",
            "productName":"Guanaco | Cholonizacion Ft. Pakul Ticket",
            "eventDate": "OCT 31 2021",
            "contactPhone": "https://wa.me/593984057223",
            "priceObj":[
                {
                    "price": 20,
                    "priceDetail": "Cover"
                }
            ],
            "eventPoster":{
                "src": "/assets/eventPosters/cholo31OCTMobile.jpeg",
                "width": 629,
                "height": 629,
                "alt": "Guanaco Ft. Pakul | Oct 31 Baños"
            }
        },
        {
            "eventName": "Pichirilo Radioactivo | En Vivo",
            "eventType": "en vivo",
            "eventLocation": "https://goo.gl/maps/xrNwvJhYBXbmFdCj7",
            "eventCity": "Riobamba",
            "productCatalog": "Pichirilo Radioactivo",
            "productCategory": "Event",
            "productType": "Concert",
            "productName":"Pichirilo Raioactivo | En vivo | Ticket",
            "eventDate": "NOV 05 2021",
            "contactPhone": "https://wa.me/593984057223",
            "priceObj":[
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

// props.waraxCart
// props.addToCart()

    const dateFormatter=(theDate)=>{
        let aFormattedDate = new Date(theDate);
        aFormattedDate.setHours(18,0,0,0)
        return (aFormattedDate)
    }

    let sortedArray=sampleEventArr.sort((a, b)=> dateFormatter(a.eventDate) - dateFormatter(b.eventDate))
    const [eventIMGDialogTrig, setPosterIMDialogTrig] = useState(false)
    const [eventDialogIMG, setImgDialogData] = useState({
        "alt": "aSample Alt Tag",
        "height": 500,
        "width": 500,
        "src":"./"
    })
    const priceDisplayer=(priceObj, eventData)=>{
        let theEventPrice;
        if(priceObj.length>1){
            let priceOne=priceObj[0]
            let priceExpirationDate = new Date(priceOne.priceExpirationDate)
            if(toDate < priceExpirationDate){
                theEventPrice=priceObj[0]
                return(
                    <>
                        <div className={styles.eventPrice}> ${theEventPrice.price}.-</div>
                        <div className={styles.eventPriceDetail}>{theEventPrice.priceDetail}</div>
                        <div className={styles.addToCartBTN} onClick={()=>{
                            let cartEventObj= {
                                "price":theEventPrice.price,
                                "priceDetail":theEventPrice.priceDetail,
                                "productName":eventData.productName,
                                "productType":eventData.productType,
                                "productCatalog":eventData.productCatalog,
                                "productCategory":eventData.productCategory,
                            }
                            props.addToCart(cartEventObj)
                        }}> <AddShoppingCartIcon/></div>
                    </>
                )
            } else {
                theEventPrice=priceObj[1]
                return(
                    <>
                        <div className={styles.eventPrice}> ${theEventPrice.price}.-</div>
                        <div className={styles.eventPriceDetail}>{theEventPrice.priceDetail}</div>
                        <div className={styles.addToCartBTN} onClick={()=>{
                            let cartEventObj= {
                                "price":theEventPrice.price,
                                "priceDetail":theEventPrice.priceDetail,
                                "productName":eventData.productName,
                                "productType":eventData.productType,
                                "productCatalog":eventData.productCatalog,
                                "productCategory":eventData.productCategory,
                            }
                            props.addToCart(cartEventObj)
                        }}> <AddShoppingCartIcon/></div>
                    </>
                )
            }
        } else {
            theEventPrice=priceObj[0]
            return(
                <>
                    <div className={styles.eventPrice}> ${theEventPrice.price}.-</div>
                    <div className={styles.eventPriceDetail}>{theEventPrice.priceDetail}</div>
                    <div className={styles.addToCartBTN} onClick={()=>{
                        let cartEventObj= {
                                "price":theEventPrice.price,
                                "priceDetail":theEventPrice.priceDetail,
                                "productName":eventData.productName,
                                "productType":eventData.productType,
                                "productCatalog":eventData.productCatalog,
                                "productCategory":eventData.productCategory,
                        }
                        props.addToCart(cartEventObj)
                    }}> <AddShoppingCartIcon/></div>
                </>
            )
        }
    }
    const eachEventDisp=(upcomingEventArr)=>{
        let compDate = new Date()
        let eachEventDispl=upcomingEventArr.map((elem, i)=><React.Fragment key={i}>
            {compDate <= dateFormatter(elem.eventDate)&&<>
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
                <div className={styles.eventDataCont}> 
                    <i className={styles.eventCatalog}> / eventos / {elem.eventType} / {elem.productCatalog} </i>
                    <div className={styles.eventName}>{elem.eventName} </div>
                    <div className={styles.eventDate}>{elem.eventDate} | {elem.eventCity}</div>
                    <div className={styles.eventIconCont}>
                        {elem.eventLocation&&<>
                            <a target="_blank" href={elem.eventLocation} rel="noopener" className={styles.anEventIcon}><div><LocationOnIcon/></div></a> </>}
                        <a target="_blank" href={elem.contactPhone} rel="noopener" className={styles.anEventIcon}><div><LocalPhoneIcon/></div></a> 
                    </div>
                </div>
                <div className={styles.priceBox}> 
                    {priceDisplayer(elem.priceObj, elem)}
                </div>
            </div>
            </>}
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
                    {eachEventDisp(sortedArray)}
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