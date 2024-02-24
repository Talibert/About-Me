import '../Styles/PortifolioSection.css';
import { useGlobalState } from './GlobalStateContext';
import { motion } from 'framer-motion';
import { useAnimatedVisibility } from '../Hooks/AnimationHooks';

export default function PortifolioSection(props) {
  // Desestruturação do hook useGlobalState para acessar a váriavel do estado do botão
  const { isButtonActive } = useGlobalState();

  // Variável que configura a animação do título
  const { ref: refTitle, animateSettings: animateSettingsTitle } =
    useAnimatedVisibility(
      '-200px 0px',
      {
        hidden: { opacity: 0, x: 400 },
        visible: { opacity: 1, x: 0 },
      },
      { duration: 1, delay: 0.0 },
    );

  return (
    <section
      id="portifolio"
      className={!isButtonActive ? 'portifoliosection' : 'funportifoliosection'}
    >
      <motion.h1 {...animateSettingsTitle} className="title" ref={refTitle}>
        {props.title}
      </motion.h1>
    </section>
  );
}
