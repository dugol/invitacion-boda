import { Box, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';

export default function Confirmacion() {
    const [searchParams] = useSearchParams();
    const guestCount = searchParams.get('invitados') || '1';
    const anfitrion = searchParams.get('anfitrion') || 'Aleja';
    const label = parseInt(guestCount, 10) === 1 ? 'persona' : 'personas';



    return (
        <>
            <Box sx={{ backgroundColor: "#E0D2C2", padding: 4, textAlign: 'center' }}>
                <Typography
                    sx={{ paddingTop: 2, fontSize: '1.75rem', fontWeight: 'bold', fontFamily: 'Poiret One', color: 'black', textAlign: 'center' }}
                    variant="h5"
                >
                    ESTÁS CORDIALMENTE INVITADO A NUESTRA BODA
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                    }}>
                    <Box
                        component="img"
                        src="/novios.png"
                        sx={{
                            width: "60%",
                            height: "60%",
                            objectFit: "contain",
                        }}>

                    </Box>

                </Box>
                <Typography
                    sx={{ paddingTop: 2, fontSize: '1.75rem', fontWeight: 'bold', fontFamily: 'Poiret One', color: 'black', textAlign: 'center' }}
                    variant="h5"
                >
                    Confirma tu asistencia antes del 26 de Septiembre
                </Typography>
                <WhatsAppIcon
                    sx={{ fontSize: '4rem', color: 'black', marginTop: 2, animation: 'pulse 2s infinite' }}
                    onClick={() => {
                        {
                            anfitrion === 'Aleja' ?
                                window.open(`https://wa.me/573215490289?text=Hola%20Aleja%2C%20confirmo%20mi%20asistencia%20a%20la%20boda.`, '_blank') :
                                window.open(`https://wa.me/573235788841?text=Hola%Daniel%2C%20confirmo%20mi%20asistencia%20a%20la%20boda.`, '_blank')
                        }
                    }} />
                <Typography
                    sx={{ paddingTop: 2, fontSize: '1.75rem', fontWeight: 'bold', fontFamily: 'Poiret One', color: 'black', textAlign: 'center' }}
                    variant="h5"
                >
                    Lluvia de sobres.
                </Typography>
                <MailIcon sx={{ fontSize: '4rem' }} />
                <Typography
                    sx={{ paddingTop: 2, fontSize: '1.75rem', fontWeight: 'bold', fontFamily: 'Poiret One', color: 'black', textAlign: 'center' }}
                    variant="h5"
                >
                    Invitación válida para {guestCount} {label}. <br/><br/>
                </Typography>

            </Box>

        </>
    )
}