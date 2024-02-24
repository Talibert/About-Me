import '../Styles/ContactSection.css';
import { motion } from 'framer-motion';
import { useAnimatedVisibility } from '../Hooks/AnimationHooks';

const ContactItem = ({ url, src, alt }) => {
  // Variável que configura a animação do primeiro parágrafo
  const { ref: ref, animateSettings: animateSettings } = useAnimatedVisibility(
    '-100px 0px',
    { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    { duration: 1, delay: 0.5 },
  );
  return (
    <a
      className="contactlink"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.img
        className="contactimage"
        src={src}
        alt={alt}
        ref={ref}
        {...animateSettings}
      ></motion.img>
    </a>
  );
};
export default ContactItem;
