import styles from "./../styles/components/forms.module.css"

export function SalesForm(props){

    const anInputDisp=(formType, idTag, placeholderLabel, dataObj, setDataObj)=>{
        return(
            <><div className={styles.anInputCont}>
                <label className={styles.anInputLabel} htmlFor={idTag}> {placeholderLabel} </label>
                <input
                    required
                    id={`${idTag}`}
                    placeholder={placeholderLabel}
                    className={styles.aFormInput}
                    type={formType}
                    onChange={(e)=>{
                        setDataObj({
                            ...dataObj,
                            [idTag]: e.target.value
                        })
                    }}
                />
            </div></>
        )
    }
    
    return(
        <>
        <form className={styles.formContainer}
            onSubmit={(e)=>{
            e.preventDefault();
            props.submitForm(true)
        }}>
            <div> Dejanos tus Datos: </div>
            <br></br>
            {anInputDisp("text", "clientName", "Nombre", props.saleUsarData, props.setSaleUserData)}
            {anInputDisp("number", "clientPhono", "Telefono", props.saleUsarData, props.setSaleUserData)}
            {anInputDisp("email", "clientEmail", "Email", props.saleUsarData, props.setSaleUserData)}
            {anInputDisp("text", "clientCity", "Ciudad", props.saleUsarData, props.setSaleUserData)}
            {anInputDisp("text", "clientProvince", "Provincia", props.saleUsarData, props.setSaleUserData)}
            {anInputDisp("text", "clientAddress", "Dirección", props.saleUsarData, props.setSaleUserData)}
            {anInputDisp("text", "clientBuilding", "Edif/Dpto", props.saleUsarData, props.setSaleUserData)}
            {/* {anInputDisp("date", "DOB", "Fecha Nacimiento", props.saleUsarData, props.setSaleUserData)} */}
            <input 
                type="submit"
                value="Proceder al Pago"
                className={styles.submitBTN}
            />
        </form>
        </>
    )
}