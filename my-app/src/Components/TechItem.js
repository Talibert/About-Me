import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../Styles/TechnologiesSection.css"

// Criando uma função que irá receber o nome da tecnologia, a descrição, a imagem e o level
const TechnologyItem = ({description, src, alt, level }) => {

  // CÓDIGO ANTIGO PARA MOSTRAR A BARRA DE SKILL AO PASSAR O MOUSE POR CIMA
    // Define a variável que irá receber o useState
    //const [isHovered, setIsHovered] = useState(false);

    // Função chamada quando o mouse está em cima do item
    //const handleMouseEnter = () => {
      // seta como true o estado
      //setIsHovered(true);
    //};

    // Função chamada quando o mouse está fora do item
    //const handleMouseLeave = () => {
      // Seta como false o estado
      //setIsHovered(false);
    //};

    //const styleHovered = {
        //visibility: isHovered ? 'visible' : 'hidden',
        //display: isHovered ? 'flex' : 'none'
    //}
  
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
          transition: { duration: 0.5}
      }

      const animateSettingsInv = {
        animate: controls,
        initial: "hidden",
        variants: {
            hidden: { opacity: 0, x: 400 },
            visible: { opacity: 1, x: 0 },
            },
        transition: { duration: 0.75 }
    }
  
      // useEffect que irá identificar a visibilidade do elemento e alterar sua animação
      useEffect(() => {
          if (inView) {
              controls.start("visible");
          }
      }, [inView, controls]); // O UseEffect será chamado sempre que inView ou controls forem alterados

  return (
    <div
      //onMouseEnter={handleMouseEnter}
      //onMouseLeave={handleMouseLeave}
      className="techitem"
      ref={ref}
    >
        <motion.div className="techblock" {...animateSettings}>
            
            <img className="techimage" src={src} alt={alt}></img>
            <p className="techcontent">{description}</p>
        </motion.div>
        <motion.div className="levelblock" {...animateSettingsInv}>
                
                <p className="leveltext">Skill: {level}%</p>
                <div className="leveldefault">
                    <div className="level-meter" style={{ width: `${level}%` }}></div>
                </div>
        </motion.div>
    </div>
  );
};

export default TechnologyItem;