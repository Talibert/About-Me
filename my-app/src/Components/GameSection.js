import '../Styles/GameSection.css';
import GameItem from './GameItem';
import { useGlobalState } from './GlobalStateContext';
import { motion } from 'framer-motion';
import { useAnimatedVisibility } from '../Hooks/AnimationHooks';

export default function GameSection(props) {
  // Array que recebe as tecnologias
  const games = [
    { src: '/assets/lolcover.jpg', alt: 'coverlol', preference: 90 },
    { src: '/assets/rocketcover.jpg', alt: 'coverrocket', preference: 70 },
    {
      src: '/assets/minecraftcover.png',
      alt: 'coverminecraft',
      preference: 50,
    },
    { src: '/assets/rdr2cover.jpg', alt: 'coverrdr2', preference: 50 },
    { src: '/assets/warzonecover.jpg', alt: 'coverwarzone', preference: 30 },
  ];

  // Desestruturação do hook useGlobalState para acessar a váriavel do estado do botão
  const { isButtonActive } = useGlobalState();

  // Variável que configura a animação do título
  const { ref: refTitle, animateSettings: animateSettingsTitle } =
    useAnimatedVisibility(
      '-200px 0px',
      { hidden: { opacity: 0, x: 400 }, visible: { opacity: 1, x: 0 } },
      { duration: 1, delay: 0.0 },
    );

  // Retorno do código HTML
  return (
    <section
      id="game"
      className={!isButtonActive ? 'invisible' : 'gamesection'}
    >
      <motion.h1 {...animateSettingsTitle} className="title" ref={refTitle}>
        {props.title}
      </motion.h1>
      {/*chamada do componente TechItem*/}
      {/*map em cima do array de tecnologias*/}
      <div className="gamespace">
        {games.map((game, index) => (
          // Passando para o componente TechItem os dados de cada item da lista. O index é para auxiliar o React
          <GameItem
            key={index}
            src={game.src}
            alt={game.alt}
            preference={game.preference}
          />
        ))}
      </div>
    </section>
  );
}
