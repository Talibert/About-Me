import "../Styles/Header.css"
import ChangeButton from "./ChangeButton";
import { useGlobalState } from "./GlobalStateContext";

export default function Header () {

    const {isButtonActive} = useGlobalState();

    return(
        <header className={!isButtonActive? "header" : "funheader"}>
            <div className="space">
                <div className={!isButtonActive? "borderprofile" : "funborderprofile"}>
                    <img className="profile"
                    src="/assets/guilhermeprofile.jpg" 
                    alt="Foto de perfil do Guilherme" />
                </div>
                <ChangeButton/>
                <div className="textProfile">
                    <h1 className={!isButtonActive? "text" : "textfun"}>
                        Guilherme Taliberti.
                    </h1>
                    <h1 className={!isButtonActive? "text" : "textfun"}>
                        Desenvolvedor Full Stack.
                    </h1>
                    <h1 className={!isButtonActive? "text" : "textfun"}>
                        Cursando Sistemas de Informação.
                    </h1>
                </div>
            </div>
        </header>
        
    )

}