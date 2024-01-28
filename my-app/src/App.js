import "./Styles/General.css"
import Header from "./Components/Header"
import AboutSection from "./Components/AboutSection"
import TechnologiesSection from "./Components/TechnologiesSection";

function App() {
  return (
    <main>
        <div>
          <Header/>
        </div>
        <div>
          <AboutSection title="Sobre mim"/>
        </div>
        <div>
          <TechnologiesSection/>
        </div>
    </main>

  );
}

export default App;
