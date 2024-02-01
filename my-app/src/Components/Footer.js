import "../Styles/Footer.css"
import { useGlobalState } from "./GlobalStateContext";


export default function Footer () {

    const {isButtonActive} = useGlobalState();

    return(
        <footer className={!isButtonActive? "footer" : "funfooter"}>
            <p className="footertext">All Rights Reserved.</p>
        </footer>
    )

}
