import { Box, Typography } from "@mui/material";
import LensIcon from '@mui/icons-material/Lens';

export default function DressCode() {
    return (
        <>
            <Box sx={{
                backgroundColor: "#E0D2C2",
                marginBottom: 2,
            }}>
                <Typography variant="h4" component="h2"
                    sx={{
                        marginTop: 2,
                        fontSize: '1.75rem',
                        fontFamily: 'Poiret One',
                        color: 'black',
                        fontWeight: 'bold',
                        backgroundColor: 'white',
                    }}>
                    CÓDIGO DE
                </Typography>
                <Typography variant="body1"
                    component="p"
                    sx={{
                        fontSize: '1.75rem',
                        fontFamily: 'Poiret One',
                        color: 'black',
                        backgroundColor: 'white',
                    }}>
                    VESTUARIO
                </Typography>
                <Typography
                    variant="h5"
                    component="p"
                    sx={{
                        marginTop: 4,
                        fontWeight: 'bold',
                        fontSize: '1.75rem',
                        fontFamily: 'Poiret One',
                        color: 'black',
                        marginBottom: 0
                    }}
                >
                    FORMAL

                </Typography>
                <Box
                    sx={{
                        width: "100%",
                    }}>
                    <Box
                        component="img"
                        src="/dressCode.png"
                        sx={{
                            width: "60%",
                            height: "60%",
                            objectFit: "contain",
                        }}>

                    </Box>

                </Box>
                <Typography
                    variant="subtitle1"
                    component="p"
                    sx={{
                        fontSize: '1.25rem',
                        fontFamily: 'Poiret One',
                        color: 'black',
                        marginTop: 2
                    }}
                >
                    HOMBRES BLAZER <br></br>
                    MUJERES VESTIDO LARGO
                </Typography>
                <Typography
                    variant="h5"
                    component="p"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '1.75rem',
                        fontFamily: 'Poiret One',
                        color: 'black',
                        marginTop: 2
                    }}
                >
                    COLORES PROHIBIDOS
                </Typography>
                <Typography variant="body1"
                    component="p"
                    sx={{
                        fontSize: '1.75rem',
                        fontFamily: 'Poiret One',
                        color: 'black',
                    }}>
                    PARA MUJERES:
                </Typography>
                <Box sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <LensIcon sx={{ paddingBottom: 2, color: 'white', fontSize: '4rem', marginTop: 1 }} />
                    <LensIcon sx={{ paddingBottom: 2, color: '#F5F0E8', fontSize: '4rem', marginTop: 1 }} />
                    <LensIcon sx={{ paddingBottom: 2, color: '#EBE1CE', fontSize: '4rem', marginTop: 1 }} />
                    <LensIcon sx={{ paddingBottom: 2, color: '#FAF9F5', fontSize: '4rem', marginTop: 1 }} />
                    <LensIcon sx={{ paddingBottom: 2, color: '#FDF5E6', fontSize: '4rem', marginTop: 1 }} />
                </Box>

                
            </Box>
        </>
    )
}