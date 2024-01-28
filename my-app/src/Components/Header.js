import "../Styles/Header.css"

export default function Header () {
    return(
        <header className="header">
            <div className="space">
                <div className="social">
                    <div>
                        <a className="sociallink" href="https://www.linkedin.com/in/guilhermetaliberti" target="_blank" rel="noopener noreferrer" >
                            {/*<p className="socialtext">Meu LinkedIn</p>*/}
                            <img className="socialimage" src="/assets/linkedinLogo.png" alt="logo do linkedin"/>
                        </a>
                    </div>
                </div>
                <div className="borderProfile">
                    <img className="profile"
                    src="/assets/guilhermeprofile.jpg" 
                    alt="Foto de perfil do Guilherme" />
                </div>
                <div className="social">
                    <div>
                        <a className="sociallink" href="https://github.com/Talibert" target="_blank" rel="noopener noreferrer">
                            {/*<p className="socialtext">Meu GitHub</p>*/}
                            <img className="socialimage" src="/assets/githubLogo.png" alt="logo do github"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        
    )
}