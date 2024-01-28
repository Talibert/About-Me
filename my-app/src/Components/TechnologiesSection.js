import "../Styles/TechnologiesSection.css"

export default function TechnologiesSection() {
    return(
        <section className="techsection">
            <h1 className="title">
                    Minhas Tecnologias
            </h1>
            <ul className="techlist">
                <li className="itemlist">
                    <img className="techimage" src="/assets/jslogo.png" alt="logo javascript"/>
                    <p className="techcontent"> O JavaScript é uma linguagem extramamente poderosa e versátil, originalmente pensada para ser usada apenas em navegadores, mas posteriormente sendo aplicada também ao BackEnd</p>
                </li>
                <li className="itemlist">
                    <p className="techcontentinv"> O JavaScript é uma linguagem extramamente poderosa e versátil, originalmente pensada para ser usada apenas em navegadores, mas posteriormente sendo aplicada também ao BackEnd</p>
                    <img className="techimage" src="/assets/jslogo.png" alt="logo javascript"/>
                </li>
                <li className="itemlist">
                    <img className="techimage" src="/assets/jslogo.png" alt="logo javascript"/>
                    <p className="techcontent"> O JavaScript é uma linguagem extramamente poderosa e versátil, originalmente pensada para ser usada apenas em navegadores, mas posteriormente sendo aplicada também ao BackEnd</p>
                </li>
            </ul>
        </section>
    )
}