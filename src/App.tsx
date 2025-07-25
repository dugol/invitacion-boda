import { useEffect, useRef, useState } from 'react'
import './App.css'
import Versiculo from './components/Versiculo'
import { Box, CssBaseline, Fade, GlobalStyles, Typography } from '@mui/material'

import Countdown from './components/Countdown'
import Padres from './components/Padres'
import Lugar from './components/Lugar'
import DressCode from './components/DressCode'
import Galeria from './components/Galeria'
import Confirmacion from './components/Confirmacion'
import Bienvenida from './components/Bienvenida'
import AnimatedSection from './components/AnimatedSection'

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;

    // Intento de auto-reproducción
    audio?.play().then(() => {
      // El navegador permitió el autoplay
      setIsPlaying(true);
    }).catch(() => {
      // El navegador bloqueó el autoplay, el usuario deberá iniciarlo manualmente
      console.log("La auto-reproducción fue bloqueada por el navegador.");
      setIsPlaying(false);
    });
  }, []); // El array vacío asegura que se ejecute solo una vez
  // 1. Estado para controlar la visibilidad de la pantalla de inicio.
  const [portadaVisible, setPortadaVisible] = useState(true);

  // 3. Función que se ejecuta al hacer clic en el botón de la portada.
  const handleEmpezarClick = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
    setPortadaVisible(false);
  };

  const inputGlobalStyles = (
    <GlobalStyles
      styles={{
        'html, body, #root': {
          margin: 0,
          padding: 0,
          height: '100%',
          width: '100%',
          overflowX: 'hidden', // Evita el scroll horizontal
        },
      }}
    />
  )

  return (
    <>
      <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
        <audio ref={audioRef} src="/music.webm" loop />
        <CssBaseline />
        {inputGlobalStyles}
        <Box
          sx={{
            maxWidth: '450px', // Ancho máximo similar al de un celular grande
            margin: '0 auto', // ¡Este truco centra la caja horizontalmente!
            backgroundColor: 'white', // El fondo de tu "aplicación"
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)', // Una sombra para darle efecto de profundidad
            minHeight: '100vh' // Asegura que el fondo blanco llene la altura
          }}
        >
          <Fade in={portadaVisible} timeout={500} unmountOnExit>
            <Box
              sx={{
                position: 'fixed', // La fijamos para que ocupe toda la pantalla
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#E0D2C2', // Un fondo para que no se vea el contenido de atrás
                zIndex: 1000 // Aseguramos que esté por encima de todo
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  paddingBottom: 3,
                  fontFamily: "'Dancing Script', cursive",
                  color: "#6e3e19", // Color suave y romántico
                  fontSize: '3.7rem',
                }}
              >
                ¡¡Nos Casamos!!
              </Typography>
              <Box component="img" src='/sello.png' sx={{
                width: '40%',
                objectFit: 'contain',
                animation: 'pulse 2s infinite',
              }}
                onClick={handleEmpezarClick}>
              </Box>
            </Box>
          </Fade>

          {/* Sección 1: Bienvenida */}
          <AnimatedSection>
            <Bienvenida />
          </AnimatedSection>
          <AnimatedSection>
            <Countdown />
          </AnimatedSection>
          <AnimatedSection>
            <Padres />
          </AnimatedSection>
          <AnimatedSection>
            <Lugar />
          </AnimatedSection>
          <AnimatedSection>
            <DressCode />
          </AnimatedSection>
          <AnimatedSection>
            <Galeria />
          </AnimatedSection>
          <AnimatedSection>
            <Versiculo />
          </AnimatedSection>
          <AnimatedSection>
            <Confirmacion />
          </AnimatedSection>
        </Box>
      </Box>
    </>
  )
}

export default App
