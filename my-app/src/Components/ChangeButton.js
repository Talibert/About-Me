import React from 'react';
import { useGlobalState } from './GlobalStateContext';
import "../Styles/Header.css"

// O componente ChangeButton utiliza o hook useGlobalState para acessar o contexto global.

const ChangeButton = () => {
  // Desestruturação do objeto retornado pelo hook useGlobalState para obter a função toggleButton.
  const { toggleButton } = useGlobalState();
  const { isButtonActive } = useGlobalState();

  return (
    // Renderiza um botão que, ao ser clicado, chama a função toggleButton para alternar o estado global.
    <button className="modebutton" onClick={toggleButton}>
      {!isButtonActive? "Work Mode" : "Fun Mode"}
    </button>
  );
};

export default ChangeButton;