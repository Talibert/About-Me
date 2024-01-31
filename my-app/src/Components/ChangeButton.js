import React from 'react';
import { useGlobalState } from './GlobalStateContext';

// O componente ChangeButton utiliza o hook useGlobalState para acessar o contexto global.

const ChangeButton = () => {
  // Desestruturação do objeto retornado pelo hook useGlobalState para obter a função toggleButton.
  const { toggleButton } = useGlobalState();

  return (
    // Renderiza um botão que, ao ser clicado, chama a função toggleButton para alternar o estado global.
    <button onClick={toggleButton}>
      Alternar Estado Global
    </button>
  );
};

export default ChangeButton;