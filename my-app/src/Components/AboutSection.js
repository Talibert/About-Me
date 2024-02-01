import "../Styles/AboutSection.css"
import { useGlobalState } from "./GlobalStateContext"
import React from 'react';

export default function AboutSection (props) {

    const workText = ["Meu nome é Guilherme Taliberti, tenho 23 anos e sou apaixonado por tecnologia. Comecei minha jornada pelo FrontEnd, utilizando HTML, CSS e JavaScript, fui para o BackEnd com o NodeJS e o PostgreSQL e agora estou buscando a trilha FullStack, me aprimorando ainda mais com frameworks como ReactJS. Atualmente curso Sistemas de Informação, e sou formado no Tecnólogo de Automação Industrial e no curso Técnico de Mecatrônica.", "Atuei por três anos em uma empresa de automação, onde comecei como estagiário. Fiz projetos elétricos e mecânicos e encerrei minha passagem programando CLP's e IHM's de linhas famosas como a paçoquinha Santa Helena... Trabalho atualmente como Analista de Dados na reconhecida distribuidora paulista Apolo Aromas. Minha paixão por programação e automação me levaram para a área de tecnologia e hoje busco minha primeira oportunidade como desenvolvedor."]

    const funtext = ["Eu sou apaixonado por videogames, principalmente jogos competivos. Gosto de me reunir em call com meus amigos quando estamos disponíveis para jogarmos League of Legends, Rocket League, Minecraft e outros jogos que possam nos interessar. Gostamos também de realizar o 'evento dos filmes', onde sincronizamos os serviços de streaming para assistirmos conteúdo juntos. Passo meus finais de semana com minha namorada, onde adoramos comer e ver filmes de terror!", "Sou uma pessoa ativa fisicamente. Adoro fazer academia e tento manter uma rotina de disciplina de treinos e refeições. E é claro que não tem como treinar sem música, né? Adoro o gênero Rock como um todo, mas também gosto de me aventurar em outros estilos, sempre de acordo com o humor!"]

    const {isButtonActive} = useGlobalState()

    return(
        <section id="about" className={!isButtonActive? "aboutsection" : "funaboutsection"}>
                <h1 className="title">
                    {props.title}
                </h1>
            <div className="aboutcontent">
                <p className="content">
                    {!isButtonActive? workText[0] : funtext [0]}
                </p><br/>
                <p className="content">
                    {!isButtonActive? workText[1] : funtext [1]}
                </p>
            </div>
        </section>
    )

}