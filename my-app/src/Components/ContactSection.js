import '../Styles/ContactSection.css';
import ContactItem from './ContactItem';
import { useGlobalState } from './GlobalStateContext';
import { motion } from 'framer-motion';
import { useAnimatedVisibility } from '../Hooks/AnimationHooks';

export default function ContactSection(props) {
  // Desestruturação do hook useGlobalState para acessar a váriavel do estado do botão
  const { isButtonActive } = useGlobalState();

  // Variável que configura a animação do título
  const { ref: refTitle, animateSettings: animateSettingsTitle } =
    useAnimatedVisibility(
      '-100px 0px',
      {
        hidden: { opacity: 0, x: 250 },
        visible: { opacity: 1, x: 0 },
      },
      { duration: 1, delay: 0.0 },
    );

  const gitimage = !isButtonActive
    ? '/assets/githubLogo.png'
    : '/assets/githubLogoInv.png';

  const contacts = [
    {
      url: 'https://www.linkedin.com/in/guilhermetaliberti',
      src: '/assets/linkedinLogo.png',
      alt: 'logo linkedin',
    },
    { url: 'https://github.com/Talibert', src: gitimage, alt: 'logo github' },
    {
      url: 'mailto:guilhermetaliberti@gmail.com',
      src: '/assets/gmaillogo.png',
      alt: 'logo gmail',
    },
    {
      url: 'https://wa.me/5511984390735',
      src: '/assets/wpplogo.png',
      alt: 'logo wpp',
    },
  ];

  return (
    <section
      id="contact"
      className={!isButtonActive ? 'contactsection' : 'funcontactsection'}
    >
      <motion.h1 {...animateSettingsTitle} className="title" ref={refTitle}>
        {props.title}
      </motion.h1>
      <div className="contactblock">
        {contacts.map((contact, index) => (
          <ContactItem
            key={index}
            url={contact.url}
            src={contact.src}
            alt={contact.src}
          />
        ))}
      </div>
    </section>
  );
}
