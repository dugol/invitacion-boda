import React from 'react';
import { motion } from 'framer-motion';

// Este componente envolverá cada sección de tu página
function AnimatedSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }} // Estado inicial: invisible y 50px más abajo
      whileInView={{ opacity: 1, y: 0 }} // Estado final: visible y en su posición original
      transition={{ duration: 3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;