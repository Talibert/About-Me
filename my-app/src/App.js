import "./Styles/General.css"
import Header from "./Components/Header"
import AboutSection from "./Components/AboutSection"
import TechnologiesSection from "./Components/TechnologiesSection";
import PortifolioSection from "./Components/PortifolioSection";
import ContactSection from "./Components/ContactSection";
import { GlobalStateProvider, useGlobalState} from './Components/GlobalStateContext';
import GameSection from "./Components/GameSection";
import ArtistSection from "./Components/ArtistSection";
import Footer from "./Components/Footer";

// Componente MainContent criado para que o useGlobalState esteja dentro do escopo do GlobalStateProvider
const MainContent = () => {
  const { isButtonActive } = useGlobalState();

  return (
        <div className={!isButtonActive ? "work" : "fun"}>
          <Header/>
          <AboutSection title="Sobre mim"/>
          <TechnologiesSection title="Minhas Tecnologias"/>
          <GameSection title="Meus jogos"/>
          <ArtistSection title="Meus Artistas Preferidos"/>
          <PortifolioSection title="Acesse meu Portifólio!"/>
          <ContactSection title="Meus Contatos"/>
          <Footer/>
      </div>
    
  );
};

function App() {
  return (
    // Componente GlobalStateProvider envolve a estrutura principal da aplicação.
    <GlobalStateProvider>
      <MainContent />
    </GlobalStateProvider>
  );
}

export default App;