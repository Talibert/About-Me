import React, { useState } from 'react';
import "../Styles/ArtistSection.css"

// Criando uma função que irá receber o nome da tecnologia, a descrição, a imagem e o level
const ArtistItem = ({src, alt, name}) => {

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
    <div className="artistitem">
        <div className="artistblock">
            <img className="artistimage" src={src} alt={alt}></img>
            <p className="description">{name}</p>
        </div>
        {/* no próprio css é feita a checagem de isHovered para definir a visibilidade e o display*/}
    </div>
  );
};

export default ArtistItem;