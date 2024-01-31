import "./Styles/General.css"
import Header from "./Components/Header"
import AboutSection from "./Components/AboutSection"
import TechnologiesSection from "./Components/TechnologiesSection";
import PortifolioSection from "./Components/PortifolioSection";
import ContactSection from "./Components/ContactSection";
import { GlobalStateProvider } from './Components/GlobalStateContext';

function App() {


  return (
    // Componente GlobalStateProvider envolve a estrutura principal da aplicação.
    <GlobalStateProvider>
        <main>
              <Header/>
              <AboutSection title="Sobre mim"/>
              <TechnologiesSection title="Minhas Tecnologias"/>
              <PortifolioSection title="Acesse meu Portifólio!"/>
              <ContactSection title="Meus Contatos"/>
        </main>
    </GlobalStateProvider>
  );
}

export default App;
