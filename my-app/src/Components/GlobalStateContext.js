import { createContext, useContext, useState } from 'react';

// Criação de um contexto global para gerenciar o estado compartilhado.
const GlobalStateContext = createContext();

// Provedor do contexto global que encapsula toda a aplicação.
export const GlobalStateProvider = ({ children }) => {
  // Estado global que será compartilhado entre os componentes.
  const [isButtonActive, setIsButtonActive] = useState(false);

  // Função para alternar o estado global.
  const toggleButton = () => {
    setIsButtonActive((prev) => !prev);
  };

  // Renderiza o provedor do contexto global, fornecendo o valor do estado e a função de toggle.
  return (
    <GlobalStateContext.Provider value={{ isButtonActive, toggleButton }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Hook personalizado para facilitar o acesso ao contexto global.
export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};