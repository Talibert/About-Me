import React from 'react';
import { motion } from 'framer-motion';
import { useAnimatedVisibility } from '../Hooks/AnimationHooks';
import '../Styles/GameSection.css';

// Criando uma função que irá receber o nome da tecnologia, a descrição, a imagem e o level
const GameItem = ({ src, alt, preference }) => {
  // Variável que configura a animação do item
  const { ref: ref, animateSettings: animateSettings } = useAnimatedVisibility(
    '-100px 0px',
    { hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } },
    { duration: 1, delay: 0.5 },
  );

  return (
    <div className="gameitem">
      <motion.div className="gameblock" {...animateSettings} ref={ref}>
        <img className="gameimage" src={src} alt={alt}></img>
        <div className="preferenceblock">
          <p className="preferencetext">Preferência: {preference}%</p>
          <div className="preferencedefault">
            <div
              className="preference-meter"
              style={{ width: `${preference}%` }}
            ></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GameItem;
