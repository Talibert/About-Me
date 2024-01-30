import "../Styles/Header.css"
import React, {useState} from 'react';

export default function Header () {
const [invisible, setInvisible] = useState(false)

const makeInvisible = () => {
    setInvisible(!invisible)
}

    return(
        <header className={`${!invisible ? "header" : "invisible"}`}>
            <div className="space">
                <div className="borderProfile">
                    <img className="profile"
                    src="/assets/guilhermeprofile.jpg" 
                    alt="Foto de perfil do Guilherme" />
                </div>
                <button onClick={makeInvisible}>
                    Deixar invisivel
                </button>
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