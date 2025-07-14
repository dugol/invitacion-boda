import { Box, Button, Container, Typography } from "@mui/material";
import LocationPinIcon from '@mui/icons-material/LocationPin';

export default function Lugar() {
    return (
        <>
            <Container maxWidth="lg" sx={{ padding: 0, margin: 0, backgroundColor: "#E0D2C2" }}>
                <Box sx={{ alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", width: "100%", backgroundColor: '#E0D2C2' }}>
                    <Box
                        sx={{
                            width: "100%",
                        }}>
                        <Box
                            component="img"
                            src="/montana.webp"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}>

                        </Box>

                    </Box>
                    <Box sx={{
                        marginTop: 1,
                        width: "86%",
                        backgroundColor: 'white',
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 2

                    }}>
                        <Typography
                            marginTop={2}
                            component="h4"
                            sx={{ fontSize: '1.75rem', fontWeight: 'bold', fontFamily: 'Poiret One', color: 'black', textAlign: 'center' }}
                        >
                            MONTANA
                        </Typography>
                        <Typography
                            component="p"
                            sx={{ fontSize: '1.75rem', fontFamily: 'Poiret One', color: 'black', textAlign: 'center' }}
                        >
                            CENTRO DE EVENTOS
                        </Typography>
                        <LocationPinIcon sx={{ fontSize: '5rem', color: 'black', textAlign: 'center', marginTop: 1 }} />
                        <Button
                            variant="outlined"
                            sx={{
                                marginTop: 2,
                                color: 'black',
                                borderColor: 'black',
                                fontFamily: 'Poiret One',
                                fontSize: '1rem',
                                marginBottom: 5
                            }}
                            href="https://www.google.com.co/maps/dir//6.235970,+-75+%23441694,+Guarne,+Antioquia/@6.1150558,-75.5196263,12.56z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8e4427cac4c3cfef:0x8d661b1ea4efc2fd!2m2!1d-75.4417587!2d6.2358912?hl=es&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank" rel="noopener noreferrer">
                            Ver en Google Maps
                        </Button>

                    </Box>

                </Box>
            </Container >
        </>
    )
}