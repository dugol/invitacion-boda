import { Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Definimos la animación de "rebote" usando keyframes de CSS
const bounceAnimation = {
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateY(0)',
    },
    '40%': {
      transform: 'translateY(-20px)',
    },
    '60%': {
      transform: 'translateY(-10px)',
    },
  },
};

function ScrollDownIndicator() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        position: 'absolute', // Se posiciona sobre su contenedor padre
        bottom: '30px',       // A 30px del borde inferior del padre
        left: '50%',          // Lo centramos horizontalmente
        transform: 'translateX(-50%)',
        textAlign: 'center',
        backgroundColor: '#E0D2C280',
        ...bounceAnimation, // Incluimos la definición de la animación
      }}
    >
      <Typography 
        variant="caption" 
        sx={{ color: "white", fontWeight: 'bold', fontFamily: "'Dancing Script', cursive", fontSize: '1.2rem' }}
      >
        Desliza para descubrir
      </Typography>
      <ExpandMoreIcon sx={{ color: 'white', fontWeight: 'bold', animation: 'bounce 2.5s infinite' }} />
    </Box>
  );
}

export default ScrollDownIndicator;