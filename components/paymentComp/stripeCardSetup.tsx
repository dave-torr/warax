import { fetchPostJSON } from '../../utils/api-helpers'
import React, { useState, useEffect } from 'react'

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import styles from "./../../styles/components/stripeStyles.module.css"

//CARD STYLING
//CARD STYLING
const CARD_OPTIONS = {
    hidePostalCode: true,
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  };

export function StripeGeneralCheckout(props){

// OP:
  // - Email confirmation with dynamic cabin display
  // - Availability alteration in DB, including extensions.
  
  const [payment, setPayment] = useState({ status: 'initial' })
  const [userEmail, setuserEmail] = useState< undefined | string >()
  const [errorMessage, setErrorMessage] = useState('')
  const [count, setCount] = useState(0)  
  const stripe = useStripe()
  const elements = useElements()
  const [input, setInput] = useState({
    cardholderName: '',
  })  


  let receiptDescription=props.receiptDescription;

    // receiptDescription: receiptDescription

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    // Abort if form isn't valid
    if (!e.currentTarget.reportValidity()) return
    setPayment({ status: 'processing' })
    // Create a PaymentIntent with the specified amount.
    const response = await fetchPostJSON('/api/paymentIntents', {
      amount: props.totalPaymentAmount,
      userEmail: userEmail,
      receiptDescription: receiptDescription
    })
    setPayment(response)

    if (response.statusCode === 500) {
      setPayment({ status: 'error' })
      setErrorMessage(response.message)
      return
    }

    const cardElement = elements!.getElement(CardElement)

    const { error, paymentIntent } = await stripe!.confirmCardPayment(
      response.client_secret,
      {
        payment_method: {
          card: cardElement!,
          billing_details: { name: input.cardholderName },
        },
        receipt_email: userEmail,
      }
    )

    if (error) {
      setPayment({ status: 'error' })
      setErrorMessage(error.message ?? 'An unknown error occured')
    } else if (paymentIntent) {
      setPayment(paymentIntent)
    }
  }
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
  })

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// useEffect(()=>{
//   setCount(0)
// },[])


// add new sale email to clients with product arr. 

const purchaseProcess=async()=>{
  if(payment.status==="succeeded"&&count===0){
    // send email to client with receipt {{product_arr}}
    // send email to Mundi
    // empty cart
    // close modal
  setCount(count+1)
  let purchaseDate=new Date();
  // Automated emails
    let saleEmailObj={
      ...props.saleUsarData,
      "purchaseDate": purchaseDate,
      "waraxCart": props.waraxCart
    }
    let stringifiedEmailData=JSON.stringify(saleEmailObj)
    /////////////////////////////////////////////////////
    const emailRes = await fetch("/api/emails/clientSaleEmail",{
      method: 'PATCH',
      body: stringifiedEmailData
    })
    const emailResAns = await emailRes.json()
    if (emailResAns){ console.log(emailResAns)}

    const emailRes2 = await fetch("/api/emails/adminSaleEmail",{
      method: 'PATCH',
      body: stringifiedEmailData
    })
    const emailRes2Ans = await emailRes2.json()
    if (emailRes2Ans){ console.log(emailRes2Ans)}

// to Backend and Database
  const res = await fetch("/api/newSale",{
      method: 'POST',
      body: stringifiedEmailData
    })

  const submittedUserData = await res.json()
    if(submittedUserData){
      console.log("res instance created")
    }
  } 
}







////////////////
// Payment Stat
//////////////
const PaymentStatus = ({ status }: { status: string }) => {
  switch (status) {
    case 'processing':
    case 'requires_payment_method':
    case 'requires_confirmation':
      return <h2> Procesando! ... </h2>
    case 'requires_action':
      return <h2>Acciones adicionales requeridos</h2>
    case 'succeeded':

      // EMAIL API ROUTE

      purchaseProcess()

      return (<>
        <h2>Pago Recibido!</h2>
        <h3>Nuestro team se pondra en contacto pronto!</h3>
        <div className={styles.btnCont} onClick={()=>{
          props.setWaraxCart([])
          props.setSaleUserData()
          props.setUserDataTrig(false)
        }}> Salir! </div>
      </>)
    case 'error':
      return (
        <>
          <h2>Error</h2>
          <p className="error-message">{errorMessage}</p>
        </>
      )
    default:
      return null
    }
  }  

 



  return(
    <>
      <div style={{display: "flex", justifyContent: "center"}} > 
        <form onSubmit={(e)=>handleSubmit(e)} className={styles.CheckoutForm} >
              <legend className={styles.CheckoutLegend} >
              Genial! <br></br> Puedes comprar tus productos ahora!  </legend>
              <input
                placeholder="Nombre en Tarjeta*"
                className={styles.CardInputfield}                
                type="Text"
                name="cardholderName"
                onChange={handleInputChange}
                required
              />
              <input
                placeholder="Email*"
                className={styles.CardInputfield}                
                type="Text"
                name="email"
                onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
            ): void => setuserEmail(ev.target.value)}
                required
              />
              <div className={styles.CardInputfield}>
                <CardElement
                  options={CARD_OPTIONS}
                  onChange={(e) => {
                    if (e.error) {
                      setPayment({ status: 'error' })
                      setErrorMessage(e.error.message ?? 'Error Desconocido')
                    } else {
                      setPayment({ status: 'initial' })
                    }
                  }}
                />
              </div>

            {payment.status==="initial"&&<>
              <button
                className={styles.CheckoutBtn}
                type="submit"> 
                Monto Total $ {props.totalPaymentAmount} .- usd
                </button></>}
            {payment.status==="error"||payment.status==="succeeded"&&
              <>
                <button
                  className={styles.CheckoutBtn}
                  type="submit"
                  disabled> 
                Monto Total $ {props.totalPaymentAmount} .- usd
                </button></>}
            {payment.status==="error"&&
              <>
                <button
                  className={styles.CheckoutBtn}
                  type="submit"
                  disabled> 
                Monto Total $ {props.totalPaymentAmount} .- usd
                </button></>}
            {payment.status==="processing"&&
            <>
              <button
              className={styles.CheckoutBtn}
                type="submit"
                disabled> 
              Monto Total $ {props.totalPaymentAmount} .- usd
              </button></>}
           <p style= {{margin: "unset", marginTop:"21px", textAlign:"center"}}>
           Pagos realizados con <a href="https://stripe.com/"> <strong> 
           Stripe</strong></a> para procesar pagos seguros y eficientes </p> 
        <PaymentStatus status={payment.status} />
      </form>
      </div>
    </>
  )
}