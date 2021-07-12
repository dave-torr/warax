
import Image from "next/image"
import Link from "next/link"
import {Footer} from "./../components/navi"
import styles from "./../styles/pages/social.module.css"

export default function SocialPage(){

    const socialPageSection=( secTitle, passingVar )=>{

        return(
            <>
                <Link href={`/`+ "?switr=" + passingVar}>
                    {secTitle}
                </Link>
            </>
        )
    }

    return(
        <>
            <div className={styles.socialPageContainer}>
                {socialPageSection("Warax Home", "home")}
                {socialPageSection("Artistas", "artistas")}
                {socialPageSection("Team", "team")}
                {socialPageSection("Servicios", "servicios")}
                {socialPageSection("Eventos", "eventos")}
            </div>
            <Footer />
        </>
    )
}