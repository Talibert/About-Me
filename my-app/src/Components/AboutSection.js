import "../Styles/AboutSection.css"

export default function AboutSection (props) {
    return(
        <section className="aboutsection">
                <h1 className="title">
                    {props.title}
                </h1>
            <div className="aboutcontent">
                <p className="content">
                    Meu nome é Guilherme Taliberti, tenho 23 anos e sou apaixonado por tecnologia. Comecei minha jornada pelo FrontEnd, utilizando HTML, CSS e JavaScript, fui para o BackEnd com o NodeJS e o PostgreSQL e agora estou buscando a trilha FullStack, me aprimorando ainda mais com frameworks como ReactJS. Atualmente curso Sistemas de Informação, e sou formado no Tecnólogo de Automação Industrial e no curso Técnico de Mecatrônica.
                </p><br/>
                <p className="content">
                    Atuei por três anos em uma empresa de automação, onde comecei como estagiário. Fiz projetos elétricos e mecânicos e encerrei minha passagem programando CLP's e IHM's de linhas famosas como a paçoquinha Santa Helena... Trabalho atualmente como Analista de Dados na reconhecida distribuidora paulista Apolo Aromas. Minha paixão por programação e automação me levaram para a área de tecnologia e hoje busco minha primeira oportunidade como desenvolvedor.
                </p>
            </div>
        </section>
    )
    
}