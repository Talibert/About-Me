import React from 'react';
import { motion } from 'framer-motion';
import { useAnimatedVisibility } from '../Hooks/AnimationHooks';
import '../Styles/ArtistSection.css';

// Criando uma função que irá receber o nome da tecnologia, a descrição, a imagem e o level
const ArtistItem = ({ src, alt, name }) => {
  // Variável que configura a animação do item
  const { ref: ref, animateSettings: animateSettings } = useAnimatedVisibility(
    '-100px 0px',
    { hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } },
    { duration: 1, delay: 0.5 },
  );

  return (
    <div className="artistitem" ref={ref}>
      <motion.div className="artistblock" {...animateSettings}>
        <img className="artistimage" src={src} alt={alt}></img>
        <p className="description">{name}</p>
      </motion.div>
    </div>
  );
};

export default ArtistItem;
