import "./Styles/General.css"
import Header from "./Components/Header"
import AboutSection from "./Components/AboutSection"
import TechnologiesSection from "./Components/TechnologiesSection";
import PortifolioSection from "./Components/PortifolioSection";
import React, { useState } from 'react';
import ContactSection from "./Components/ContactSection";

function App() {
  return (
    <main>
          <Header/>
          <AboutSection title="Sobre mim"/>
          <TechnologiesSection title="Minhas Tecnologias"/>
          <PortifolioSection title="Acesse meu Portifólio!"/>
          <ContactSection title="Meus Contatos"/>
    </main>

  );
}

export default App;
