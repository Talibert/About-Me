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
                    <p className="techcontent"> O JavaScript é uma linguagem extramamente poderosa e versátil, originalmente pensada para ser usada apenas em navegadores, mas posteriormente sendo aplicada também ao BackEnd.</p>
                </li>
                <li className="itemlist">
                    <p className="techcontentinv"> O HTML é uma linguagem de marcação utilizada para criar a estrutura dos sites. Com ela podemos definir os blocos e elementos que irão existir em um página, além de definir sua organização.</p>
                    <img className="techimage" src="/assets/htmllogo.png" alt="html javascript"/>
                </li>
                <li className="itemlist">
                    <img className="techimage" src="/assets/csslogo.png" alt="logo css"/>
                    <p className="techcontent"> O CSS é uma linguagem de estilos utilizada para aplicar alterações visuais nos elementos HTML. É fundamental para a estilização de páginas web.</p>
                </li>
            </ul>
        </section>
    )
}