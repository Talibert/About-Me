import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../Styles/ArtistSection.css';

// Criando uma função que irá receber o nome da tecnologia, a descrição, a imagem e o level
const ArtistItem = ({ src, alt, name }) => {
  // Configuração do hook useInView para detectar a visibilidade do elemento na tela
  const { ref, inView } = useInView({ trigger: true });
  // Configuração do hook useAnimation para controlar as animações do framer-motion
  const controls = useAnimation();
  // Criando um objeto para armazenar as configurações da animação
  const animateSettings = {
    animate: controls,
    initial: 'hidden',
    variants: {
      hidden: { opacity: 0, y: 400 },
      visible: { opacity: 1, y: 0 },
    },
    transition: { duration: 1 },
  };

  // useEffect que irá identificar a visibilidade do elemento e alterar sua animação
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]); // O UseEffect será chamado sempre que inView ou controls forem alterados

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
