import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export function useAnimatedVisibility(rootMargin, initialVariants, transition) {
  const { ref, inView } = useInView({ trigger: true, rootMargin });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  // Função para resetar as animações
  const resetAnimation = () => {
    controls.start('hidden');
  };

  const animateSettings = {
    animate: controls,
    initial: 'hidden',
    variants: initialVariants,
    transition: transition,
  };

  return { ref, animateSettings, resetAnimation };
}
