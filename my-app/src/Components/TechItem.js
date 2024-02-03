import React, { useState } from 'react';
import "../Styles/TechnologiesSection.css"

// Criando uma função que irá receber o nome da tecnologia, a descrição, a imagem e o level
const TechnologyItem = ({description, src, alt, level }) => {

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

  return (
    // Declaração da div do item. Os eventos onMouseEnter e onMouseLeave chamam as funções declaradas
    <div
      className="techitem"
      //onMouseEnter={handleMouseEnter}
      //onMouseLeave={handleMouseLeave}
      //onTouchStart={handleMouseEnter}
      //onTouchEnd={handleMouseEnter}
    >
        <div className="techblock">
            <img className="techimage" src={src} alt={alt}></img>
            <p className="techcontent">{description}</p>
        </div>
        {/* no próprio css é feita a checagem de isHovered para definir a visibilidade e o display*/}
        <div className="levelblock">
                <p className="leveltext">Skill: {level}%</p>
                <div className="leveldefault">
                    <div className="level-meter" style={{ width: `${level}%` }}></div>
                </div>
        </div>
    </div>
  );
};

export default TechnologyItem;