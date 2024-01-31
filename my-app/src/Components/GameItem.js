import React, { useState } from 'react';
import "../Styles/GameSection.css"

// Criando uma função que irá receber o nome da tecnologia, a descrição, a imagem e o level
const GameItem = ({src, alt, preference}) => {

  // Define a variável que irá receber o useState
  const [isHovered, setIsHovered] = useState(false);

  // Função chamada quando o mouse está em cima do item
  const handleMouseEnter = () => {
    // seta como true o estado
    setIsHovered(true);
  };

  // Função chamada quando o mouse está fora do item
  const handleMouseLeave = () => {
    // Seta como false o estado
    setIsHovered(false);
  };

  return (
    // Declaração da div do item. Os eventos onMouseEnter e onMouseLeave chamam as funções declaradas
    <div
      className="gameitem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseEnter}
    >
        <div className="gameblock">
            <img className="gameimage" src={src} alt={alt}></img>
            <div className="preferenceblock" style={{ 
              visibility: isHovered ? 'visible' : 'hidden',
              display: isHovered ? 'flex' : 'none'
            }}>
                <p className="preferencetext">Preferência: {preference}%</p>
                <div className="preferencedefault">
                    <div className="preference-meter" style={{ width: `${preference}%` }}></div>
                </div>
            </div>
        </div>
        {/* no próprio css é feita a checagem de isHovered para definir a visibilidade e o display*/}
    </div>
  );
};

export default GameItem;