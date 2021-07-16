import React, { useState } from "react"
import {NaviTwo, Footer} from "./../components/navi"

import styles from "./../styles/pages/forms.module.css"

export default function FormsPage(props){

const [formOneData, setFormOneData]=useState()

let webveoFormArray=[
    {
        "label": "Nombre Completo",
        "type": "text",
        "id": "nameInput",
        "objKey": "userName",
        "required": true,
    },
    {
        "label": "Fecha de Nacimiento",
        "type": "date",
        "id": "dobInput",
        "objKey": "dateOfbirth",
        "required": true,
    },
    {
        "label": "Email",
        "type": "email",
        "id": "emailInput",
        "objKey": "email",
        "required": true,
    },
    {
        "label": "Teléfono",
        "type": "number",
        "id": "userNumber",
        "objKey": "userNumber",
        "required": false,
    },
]

let eachUserInput = webveoFormArray.map((elem, i)=> <React.Fragment key={i}>
    <div className={styles.userInputCont}>
        <label className={styles.userInputLabel} htmlFor={elem.id}>{elem.label}:</label>
        <input className={styles.aUserInput} id={elem.id} type={elem.type} required={elem.required} placeholder={elem.label} onChange={(e)=>{
            setFormOneData({
                ...formOneData,
                [elem.objKey]: e.target.value
            })
        }} />
    </div>
</React.Fragment>)

const formOneDisp=()=>{
    return(
        <>
            <form className={styles.formOne} onSubmit={(e)=>{
                e.preventDefault();
                window.alert("Formulatio enviado")
            }}>
                <h2> Déjanos tus datos: </h2>
                <p> Podrás ganar increibles premios! </p>
                <div className={styles.inputContainer}> {eachUserInput} </div>
                <input type="submit" value="Enviar!" className={styles.submitBTN}/>
            </form>
        </>
    )
}

console.log(formOneData)
const textAnimation=(textToAnimate)=>{
    let eachLetter=textToAnimate.map((elem,i)=><span key={i} className={styles.eachLetter}>{elem} </span>)

    return(
        <>
            <div className={styles.eachLetterCont}> {eachLetter} </div>   
        </>
    )
}

const animationSection=()=>{

    return(
        <>
            <div className={styles.animSection}> 
                <div className={styles.animationnimationCont} >
                    {textAnimation(["w","e","b","v","e","o" ])}
                    {textAnimation(["w","e","b","v","e","o" ])}
                    {textAnimation(["w","e","b","v","e","o" ])}
                </div>
                <div className={styles.animationnimationCont} >
                    {textAnimation(["w","e","b","v","e","o" ])}
                    {textAnimation(["w","e","b","v","e","o" ])}
                    {textAnimation(["w","e","b","v","e","o" ])}
                </div>
                <div className={styles.animationnimationCont} >
                    {textAnimation(["w","e","b","v","e","o" ])}
                    {textAnimation(["w","e","b","v","e","o" ])}
                    {textAnimation(["w","e","b","v","e","o" ])}
                </div>
                <div className={styles.animationnimationCont} >
                    {textAnimation(["w","e","b","v","e","o" ])}
                    {textAnimation(["w","e","b","v","e","o" ])}
                    {textAnimation(["w","e","b","v","e","o" ])}
                </div>
            </div>
        </>
    )
}

return(<>
        <div className={styles.fomrsPageGenCont}>
        <NaviTwo />
        {animationSection()}
        {formOneDisp()}

        </div>
        <Footer />
    </>)
}