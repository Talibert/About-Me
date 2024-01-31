import "../Styles/GameSection.css"
import GameItem from "./GameItem";
import { useGlobalState } from './GlobalStateContext';

export default function GameSection(props) {
    // Array que recebe as tecnologias
    const games = [
        { src: "/assets/lolcover.jpg", alt: "coverlol", preference: 90 },
        { src: "/assets/rocketcover.jpg", alt: "coverrocket", preference: 70 },
        { src: "/assets/minecraftcover.png", alt: "coverminecraft", preference: 50 },
        { src: "/assets/rdr2cover.jpg", alt: "coverrdr2", preference: 50 },
        { src: "/assets/warzonecover.jpg", alt: "coverwarzone", preference: 30 },
    ];
    
      // Desestruturação do hook useGlobalState para acessar a váriavel do estado do botão
      const {isButtonActive} = useGlobalState();

      // Retorno do código HTML
      return (
        <section className={!isButtonActive ? "invisible" : "gamesection"}>
        <h1 className="title">
            {props.title}
        </h1>
        {/*chamada do componente TechItem*/}
        {/*map em cima do array de tecnologias*/}
        <div className="gamespace">
            {games.map((game, index) => (
              // Passando para o componente TechItem os dados de cada item da lista. O index é para auxiliar o React
              <GameItem key={index} src={game.src} alt={game.alt} preference={game.preference}/>
            ))}
        </div>
          
        </section>
      );
};