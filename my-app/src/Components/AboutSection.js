import '../Styles/AboutSection.css';
import { useGlobalState } from './GlobalStateContext';
import React from 'react';
import { motion } from 'framer-motion';
import { useAnimatedVisibility } from '../Hooks/AnimationHooks';

export default function AboutSection(props) {
  // Desestruturação do hook useGlobalState para acessar a váriavel do estado do botão
  const { isButtonActive } = useGlobalState();
  // Variável que recebe o texto do estado work
  const workText = [
    'Meu nome é Guilherme Taliberti, tenho 23 anos e sou apaixonado por tecnologia. Comecei minha jornada pelo FrontEnd, utilizando HTML, CSS e JavaScript, fui para o BackEnd com o NodeJS e o PostgreSQL e agora estou buscando a trilha FullStack, me aprimorando ainda mais com frameworks como ReactJS. Atualmente curso Sistemas de Informação, e sou formado no Tecnólogo de Automação Industrial e no curso Técnico de Mecatrônica.',
    "Atuei por três anos em uma empresa de automação, onde comecei como estagiário. Fiz projetos elétricos e mecânicos e encerrei minha passagem programando CLP's e IHM's de linhas famosas como a paçoquinha Santa Helena... Trabalho atualmente como Analista de Dados na reconhecida distribuidora paulista Apolo Aromas. Minha paixão por programação e automação me levaram para a área de tecnologia e hoje busco minha primeira oportunidade como desenvolvedor.",
  ];
  // Variável que recebe o texto do estado fun
  const funtext = [
    "Eu sou apaixonado por videogames, principalmente jogos competivos. Gosto de me reunir em call com meus amigos quando estamos disponíveis para jogarmos League of Legends, Rocket League, Minecraft e outros jogos que possam nos interessar. Gostamos também de realizar o 'evento dos filmes', onde sincronizamos os serviços de streaming para assistirmos conteúdo juntos. Passo meus finais de semana com minha namorada, onde adoramos comer e ver filmes de terror!",
    'Sou uma pessoa ativa fisicamente. Adoro fazer academia e tento manter uma rotina de disciplina de treinos e refeições. E é claro que não tem como treinar sem música, né? Adoro o gênero Rock como um todo, mas também gosto de me aventurar em outros estilos, sempre de acordo com o humor!',
  ];

  // Variável que configura a animação do título
  const { ref: refTitle, animateSettings: animateSettingsTitle } =
    useAnimatedVisibility(
      '100px 0px',
      { hidden: { opacity: 0, x: 400 }, visible: { opacity: 1, x: 0 } },
      { duration: 1, delay: 0.0 },
    );
  // Variável que configura a animação do primeiro parágrafo
  const { ref: ref, animateSettings: animateSettings } = useAnimatedVisibility(
    '100px 0px',
    { hidden: { opacity: 0, x: -400 }, visible: { opacity: 1, x: 0 } },
    { duration: 1, delay: 0.5 },
  );
  // Variável que configura a animação do segundo parágrafo (é invertida)
  const { ref: refInv, animateSettings: animateSettingsInv } =
    useAnimatedVisibility(
      '100px 0px',
      { hidden: { opacity: 0, x: 400 }, visible: { opacity: 1, x: 0 } },
      { duration: 1, delay: 0.75 },
    );

  //Retorno do código HTML
  return (
    <section
      id="about"
      className={!isButtonActive ? 'aboutsection' : 'funaboutsection'}
    >
      <motion.h1 {...animateSettingsTitle} className="title" ref={refTitle}>
        {props.title}
      </motion.h1>
      <div className="aboutcontent">
        <motion.p {...animateSettings} className="content" ref={ref}>
          {!isButtonActive ? workText[0] : funtext[0]}
        </motion.p>
        <br />
        <motion.p {...animateSettingsInv} className="content" ref={refInv}>
          {!isButtonActive ? workText[1] : funtext[1]}
        </motion.p>
      </div>
    </section>
  );
}
