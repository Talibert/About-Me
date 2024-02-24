import '../Styles/TechnologiesSection.css';
import TechItem from './TechItem';
import { useGlobalState } from './GlobalStateContext';
import { motion } from 'framer-motion';
import { useAnimatedVisibility } from '../Hooks/AnimationHooks';

export default function TechnologiesSection(props) {
  // Array que recebe as tecnologias
  const technologies = [
    {
      description:
        'JavaScript é uma linguagem extramamente poderosa e versátil, originalmente pensada para ser usada apenas em navegadores, mas posteriormente sendo aplicada também ao BackEnd.',
      src: '/assets/jslogo.png',
      alt: 'logo javascript',
      level: 80,
    },
    {
      description:
        'O HTML é uma linguagem de marcação utilizada para criar a estrutura dos sites. Com ela podemos definir os blocos e elementos que irão existir em um página, além de definir sua organização.',
      src: '/assets/htmllogo.png',
      alt: 'logo html',
      level: 80,
    },
    {
      description:
        'O CSS é uma linguagem de estilos utilizada para aplicar alterações visuais nos elementos HTML. É fundamental para a estilização de páginas web.',
      src: '/assets/csslogo.png',
      alt: 'logo css',
      level: 60,
    },
    {
      description:
        'O NodeJS é um ambiente de desenvolvimento de código aberto baseado no interpretador V8 do Google. Naturalmente, o JavaScript só pode ser compilado por navegadores, mas em um ambiente NodeJS podemos rodar códigos JavaScript em ServerSide, permitindo sua aplicação no BackEnd.',
      src: '/assets/nodejslogo.png',
      alt: 'logo nodejs',
      level: 70,
    },
    {
      description:
        'O PostgreSQL é um SGBD (Sistema Gerenciador de Banco de Dados). Seu projeto é de código aberto e é uma ferramenta muito poderosa para desenvolvedores independentes. Seu diferencial, além do OpenSource, é o fato de que seu Banco de Dados é objeto/relacional (contra SGBDs apenas relacionais como o MySQL). Isso permite o armazenamento de dados em forma, também, de objetos.',
      src: '/assets/postgresqllogo.png',
      alt: 'logo postgresql',
      level: 70,
    },
    {
      description:
        'O React é um framework FrontEnd para auxiliar no desenvolvimento de interfaces em páginas web. É uma ferramenta muito poderosa que trata os elementos de uma página web como componentes, organizando o desenvolvimento e permitindo a interação com JS.',
      src: '/assets/reactlogo.png',
      alt: 'logo react',
      level: 60,
    },
    {
      description:
        'O Git, junto com o GitHub, formam uma ferramenta poderosa para o versionamento de código. Com o uso dos repositórios locais e remotos, podemos desenvolver de forma individual ou em equipe de qualquer lugar.',
      src: '/assets/githubLogo.png',
      alt: 'logo github',
      level: 80,
    },
  ];

  // Desestruturação do hook useGlobalState para acessar a váriavel do estado do botão
  const { isButtonActive } = useGlobalState();

  // Variável que configura a animação do título
  const { ref: refTitle, animateSettings: animateSettingsTitle } =
    useAnimatedVisibility(
      '-100px 0px',
      { hidden: { opacity: 0, x: 250 }, visible: { opacity: 1, x: 0 } },
      { duration: 1, delay: 0.0 },
    );

  // Retorno do código HTML
  return (
    <section
      id="tech"
      className={!isButtonActive ? 'techsection' : 'invisible'}
    >
      <motion.h1 {...animateSettingsTitle} className="title" ref={refTitle}>
        {props.title}
      </motion.h1>
      {/*chamada do componente TechItem*/}
      {/*map em cima do array de tecnologias*/}
      {technologies.map((tech, index) => (
        // Passando para o componente TechItem os dados de cada item da lista. O index é para auxiliar o React
        <TechItem
          key={index}
          description={tech.description}
          src={tech.src}
          alt={tech.src}
          level={tech.level}
        />
      ))}
    </section>
  );
}
