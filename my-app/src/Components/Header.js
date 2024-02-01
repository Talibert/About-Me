import "../Styles/Header.css"
import "animate.css"
import ChangeButton from "./ChangeButton";
import { useGlobalState } from "./GlobalStateContext";
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Header () {

    const {isButtonActive} = useGlobalState();

    return(
        <header className={!isButtonActive? "header" : "funheader"}>
            <nav className="navbar">
                {!isButtonActive?
                <ul className="navlist">
                    <li className="navitem">
                        <Link to="about" smooth={true} duration={500}>
                        Sobre mim
                        </Link>
                    </li>
                    <li className="navitem">
                        <Link to="tech" smooth={true} duration={500}>
                        Minhas Tecnologias
                        </Link>
                    </li>
                    <li className="navitem">
                        <Link to="portifolio" smooth={true} duration={500}>
                        Portifolio
                        </Link>
                    </li>
                    <li className="navitem">
                        <Link to="contact" smooth={true} duration={500}>
                        Contato
                        </Link>
                    </li>
                </ul>
                :
                <ul className="navlist">
                    <li className="naviteminv">
                        <Link to="about" smooth={true} duration={500}>
                        Sobre mim
                        </Link>
                    </li>
                    <li className="naviteminv">
                        <Link to="game" smooth={true} duration={500}>
                        Meus Jogos
                        </Link>
                    </li>
                    <li className="naviteminv">
                        <Link to="artist" smooth={true} duration={500}>
                        Meus Artistas
                        </Link>
                    </li>
                    <li className="naviteminv">
                        <Link to="portifolio" smooth={true} duration={500}>
                        Portifolio
                        </Link>
                    </li>
                    <li className="naviteminv">
                        <Link to="contact" smooth={true} duration={500}>
                        Contato
                        </Link>
                    </li>
                </ul>
                }
                <ChangeButton/>
            </nav>
            <div className="space">
                <div className="borderprofile">
                    <img className="profile"
                    src="/assets/guilhermeprofile.jpg" 
                    alt="Foto de perfil do Guilherme" />
                </div>
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