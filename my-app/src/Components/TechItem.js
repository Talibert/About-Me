import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/TechnologiesSection.css';
import { useAnimatedVisibility } from '../Hooks/AnimationHooks';

// Criando uma função que irá receber o nome da tecnologia, a descrição, a imagem e o level
const TechnologyItem = ({ description, src, alt, level }) => {
  // Variável que configura a animação do primeiro parágrafo
  const { ref: ref, animateSettings: animateSettings } = useAnimatedVisibility(
    '-100px 0px',
    { hidden: { opacity: 0, x: -250 }, visible: { opacity: 1, x: 0 } },
    { duration: 1, delay: 0.5 },
  );
  // Variável que configura a animação do segundo parágrafo (é invertida)
  const { ref: refInv, animateSettings: animateSettingsInv } =
    useAnimatedVisibility(
      '-100px 0px',
      { hidden: { opacity: 0, x: 250 }, visible: { opacity: 1, x: 0 } },
      { duration: 1, delay: 0.75 },
    );

  // Retorno do HTML
  return (
    <div className="techitem">
      <motion.div className="techblock" {...animateSettings} ref={ref}>
        <img className="techimage" src={src} alt={alt}></img>
        <p className="techcontent">{description}</p>
      </motion.div>
      <motion.div className="levelblock" {...animateSettingsInv} ref={refInv}>
        <p className="leveltext">Skill: {level}%</p>
        <div className="leveldefault">
          <div className="level-meter" style={{ width: `${level}%` }}></div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechnologyItem;
