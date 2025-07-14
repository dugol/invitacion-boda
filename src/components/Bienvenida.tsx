import { Box } from "@mui/material";
import ScrollDownIndicator from "./ScrollDownIndicator";

export default function Bienvenida() {
    return (
        <>
            <Box sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'flex-start',
                paddingTop: '25vh',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundImage: "url('/portada.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflowX: 'hidden',
                position: 'relative'
            }}>
                <ScrollDownIndicator />
            </Box>
        </>
    )

}