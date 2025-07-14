import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import TouchAppIcon from '@mui/icons-material/TouchApp';


// Puedes poner esto en tu componente o importarlo desde otro archivo.
const slides = [
    { src: "/1000359411.jpg" },
    { src: "/1000359386.jpg" },
    { src: "/foto13.jpeg" },
    { src: "/foto11.jpeg" },
    { src: "/foto1.jpeg" },
    { src: "/foto3.jpeg" },
    { src: "/foto4.jpeg" },
    { src: "/foto5.jpeg" },
    { src: "/foto6.jpeg" },
    { src: "/foto7.jpeg" },
    { src: "/foto8.jpeg" },
    { src: "/foto9.jpeg" },
    { src: "/foto10.jpeg" },
    { src: "/foto12.jpeg" },
];

const pulseAnimation = {
    '@keyframes pulse': {
        '0%': {
            transform: 'scale(1)',
            opacity: 1,
        },
        '50%': {
            transform: 'scale(1.2)',
            opacity: 0.7,
        },
        '100%': {
            transform: 'scale(1)',
            opacity: 1,
        },
    },
};

export default function Galeria() {
    const [open, setOpen] = useState(false);
    const [iconVisible, setIconVisible] = useState(true);

    const handleImageClick = () => {
        setOpen(true);
        setIconVisible(false); // Ocultamos el ícono al hacer clic
    };

    return (
        <>
            <Box>
                <Typography variant="h4" gutterBottom
                    sx={{
                        fontSize: '1.75rem',
                        fontFamily: 'Poiret One',
                        color: 'black',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: 2,
                        marginBottom: 1
                    }}>
                    NUESTRA GALERÍA
                </Typography>
                <Typography variant="h5"
                    sx={{
                        mb: 3,
                        fontSize: '1.75rem',
                        fontFamily: 'Poiret One',
                        color: 'black',
                        textAlign: 'center',
                        marginBottom: 2,
                    }}>
                    Un vistazo a nuestros momentos especiales.
                </Typography>
                <Box onClick={handleImageClick}
                    sx={{
                        position: 'relative', // Necesario para posicionar el ícono encima
                        cursor: 'pointer',
                        display: 'inline-block', // Para que el contenedor se ajuste a la imagen
                        ...pulseAnimation, // Incluimos la definición de la animación
                    }}
                >
                    <Box
                        component="img"
                        src={slides[0].src} // Mostramos la primera imagen del array
                        alt="Nuestra historia"
                        sx={{
                            cursor: 'pointer',
                            height: '70vh', // Altura fija para la vista previa
                            maxWidth: '100%',
                            objectFit: 'contain', // 'cover' para que llene el espacio, 'contain' para que se vea completa
                            borderRadius: '8px',
                            boxShadow: 3
                        }}
                    />
                    {iconVisible && (
                        <TouchAppIcon
                            sx={{
                                position: 'absolute',
                                top: '20%',
                                left: '60%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '60px',
                                color: 'black',
                                opacity: 0.8,
                                pointerEvents: 'none', // Para que el clic atraviese el ícono y llegue a la imagen
                                // Aplicamos la animación
                                animation: 'pulse 2s infinite',
                            }}
                        />
                    )}
                </Box>

                {/* Este es el componente de la galería que se abre en pantalla completa */}
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={slides}
                />

            </Box>
        </>
    )
}