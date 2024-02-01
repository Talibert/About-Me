import "../Styles/ArtistSection.css"
import ArtistItem from "./ArtistItem";
import { useGlobalState } from './GlobalStateContext';

export default function ArtistSection(props) {
    // Array que recebe as tecnologias
    const artists = [
        { src: "/assets/a7xpicture.jpg", alt: "a7x", name: "Avenged Sevenfold" },
        { src: "/assets/linkinparkpicture.jpg", alt: "linkinpark", name: "Linkin Park" },
        { src: "/assets/metallicapicture.jpg", alt: "metallica", name: "Metallica" },
        { src: "/assets/tdg picture.jpeg", alt: "tdg", name: "Three Days Grace" },
        { src: "/assets/supercombopicture.jpg", alt: "supercombo", name: "Supercombo" },
    ];
    
      // Desestruturação do hook useGlobalState para acessar a váriavel do estado do botão
      const {isButtonActive} = useGlobalState();

      // Retorno do código HTML
      return (
        <section id="artist" className={!isButtonActive ? "invisible" : "artistsection"}>
        <h1 className="title">
            {props.title}
        </h1>
        {/*chamada do componente TechItem*/}
        {/*map em cima do array de tecnologias*/}
        <div className="artistspace">
            {artists.map((artist, index) => (
              // Passando para o componente TechItem os dados de cada item da lista. O index é para auxiliar o React
              <ArtistItem key={index} src={artist.src} alt={artist.alt} name={artist.name}/>
            ))}
        </div>
          
        </section>
      );
};