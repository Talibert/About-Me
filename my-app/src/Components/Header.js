import "../Styles/Header.css"
import ChangeButton from "./ChangeButton";

export default function Header () {

    return(
        <header className="header">
            <div className="space">
                <div className="borderProfile">
                    <img className="profile"
                    src="/assets/guilhermeprofile.jpg" 
                    alt="Foto de perfil do Guilherme" />
                </div>
                <ChangeButton/>
                <div className="textProfile">
                    <h1 className="text">
                        Guilherme Taliberti.
                    </h1>
                    <h1 className="text">
                        Desenvolvedor Full Stack.
                    </h1>
                    <h1 className="text">
                        Cursando Sistemas de Informação.
                    </h1>
                </div>
            </div>
        </header>
        
    )

}