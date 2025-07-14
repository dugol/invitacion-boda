import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Box, Fade } from '@mui/material';

// 1. Definimos la interfaz para los props del componente.
// En este caso, solo esperamos 'children', que es el contenido a renderizar.
interface SeccionAnimadaProps {
  children: React.ReactNode;
}

/**
 * Este componente envuelve a sus hijos y aplica una animación 'Fade' (aparecer)
 * cuando el componente entra en la pantalla del usuario.
 *
 * @param {SeccionAnimadaProps} props Los props del componente.
 */
const SeccionAnimada: React.FC<SeccionAnimadaProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <Fade in={inView} timeout={1200}>
        <Box>
            {children}
        </Box>
      </Fade>
    </div>
  );
};

export default SeccionAnimada;