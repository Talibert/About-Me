import "../Styles/Header.css"

export default function Header () {
    return(
        <header className="header">
            <div className="space">
                <div className="linkedin">
                    <div>
                        <a className="linkedinlink" href="https://www.linkedin.com/in/guilhermetaliberti" target="_blank" rel="noopener noreferrer" >
                            <p>Meu LinkedIn</p>
                            <img className="linkedinImage" src="/assets/linkedinLogo.png" alt="logo do linkedin"/>
                        </a>
                    </div>
                </div>
                <div className="borderProfile">
                    <img className="profile"
                    src="/assets/guilhermeprofile.jpg" 
                    alt="Foto de perfil do Guilherme" />
                </div>
                <div className="github">
                    <div>
                        <a className="githublink" href="https://github.com/Talibert" target="_blank" rel="noopener noreferrer">
                            <p>Meu GitHub</p>
                            <img className="gitHubImage" src="/assets/githubLogo.png" alt="logo do github"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        
    )
}