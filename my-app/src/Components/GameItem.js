import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../Styles/GameSection.css"

// Criando uma função que irá receber o nome da tecnologia, a descrição, a imagem e o level
const GameItem = ({src, alt, preference}) => {

        // Configuração do hook useInView para detectar a visibilidade do elemento na tela
        const { ref, inView } = useInView({ trigger: true });
        // Configuração do hook useAnimation para controlar as animações do framer-motion
        const controls = useAnimation();
        // Criando um objeto para armazenar as configurações da animação
        const animateSettings = {
            animate: controls,
            initial: "hidden",
            variants: {
                hidden: { opacity: 0, y: 400 },
                visible: { opacity: 1, y: 0 },
                },
            transition: { duration: 1}
        }
    
        // useEffect que irá identificar a visibilidade do elemento e alterar sua animação
        useEffect(() => {
            if (inView) {
                controls.start("visible");
            }
        }, [inView, controls]); // O UseEffect será chamado sempre que inView ou controls forem alterados

  return (
    <div
      className="gameitem"
      ref={ref}
    >
        <motion.div className="gameblock" {...animateSettings}>
            <img className="gameimage" src={src} alt={alt}></img>
            <div className="preferenceblock">
                <p className="preferencetext">Preferência: {preference}%</p>
                <div className="preferencedefault">
                    <div className="preference-meter" style={{ width: `${preference}%` }}></div>
                </div>
            </div>
        </motion.div>
    </div>
  );
};

export default GameItem;