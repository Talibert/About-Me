import "../Styles/AboutSection.css";
import { useGlobalState } from "./GlobalStateContext";
import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutSection(props) {
    const { isButtonActive } = useGlobalState();
    const workText = ["Meu nome é Guilherme Taliberti, tenho 23 anos e sou apaixonado por tecnologia. Comecei minha jornada pelo FrontEnd, utilizando HTML, CSS e JavaScript, fui para o BackEnd com o NodeJS e o PostgreSQL e agora estou buscando a trilha FullStack, me aprimorando ainda mais com frameworks como ReactJS. Atualmente curso Sistemas de Informação, e sou formado no Tecnólogo de Automação Industrial e no curso Técnico de Mecatrônica.", "Atuei por três anos em uma empresa de automação, onde comecei como estagiário. Fiz projetos elétricos e mecânicos e encerrei minha passagem programando CLP's e IHM's de linhas famosas como a paçoquinha Santa Helena... Trabalho atualmente como Analista de Dados na reconhecida distribuidora paulista Apolo Aromas. Minha paixão por programação e automação me levaram para a área de tecnologia e hoje busco minha primeira oportunidade como desenvolvedor."];
    const funtext = ["Eu sou apaixonado por videogames, principalmente jogos competivos. Gosto de me reunir em call com meus amigos quando estamos disponíveis para jogarmos League of Legends, Rocket League, Minecraft e outros jogos que possam nos interessar. Gostamos também de realizar o 'evento dos filmes', onde sincronizamos os serviços de streaming para assistirmos conteúdo juntos. Passo meus finais de semana com minha namorada, onde adoramos comer e ver filmes de terror!", "Sou uma pessoa ativa fisicamente. Adoro fazer academia e tento manter uma rotina de disciplina de treinos e refeições. E é claro que não tem como treinar sem música, né? Adoro o gênero Rock como um todo, mas também gosto de me aventurar em outros estilos, sempre de acordo com o humor!"];

    // Configuração do hook useInView para detectar a visibilidade do elemento na tela
    const { ref, inView } = useInView({ trigger: true });
    // Configuração do hook useAnimation para controlar as animações do framer-motion
    const controls = useAnimation();
    // Criando um objeto para armazenar as configurações da animação
    const animateSettings = {
        animate: controls,
        initial: "hidden",
        variants: {
            hidden: { opacity: 0, x: -400 },
            visible: { opacity: 1, x: 0 },
            },
        transition: { duration: 1, delay: 0.5 }
    }

    const animateSettingsInv = {
        animate: controls,
        initial: "hidden",
        variants: {
            hidden: { opacity: 0, x: 400 },
            visible: { opacity: 1, x: 0 },
            },
        transition: { duration: 1, delay: 0.75 }
    }

    // useEffect que irá identificar a visibilidade do elemento e alterar sua animação
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]); // O UseEffect será chamado sempre que inView ou controls forem alterados

    return (
        <section id="about" className={!isButtonActive ? "aboutsection" : "funaboutsection"}>
            <h1 className="title">{props.title}</h1>
            <div className="aboutcontent" ref={ref}>
                <motion.p
                    {...animateSettings}
                    className="content">
                    {!isButtonActive ? workText[0] : funtext[0]}
                </motion.p>
                <br />
                <motion.p
                    {...animateSettingsInv}
                    className="content">
                    {!isButtonActive ? workText[1] : funtext[1]}
                </motion.p>
            </div>
        </section>
    );
}