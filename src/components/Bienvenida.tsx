import { Box, Container } from "@mui/material";
import ScrollDownIndicator from "./ScrollDownIndicator";

export default function Bienvenida() {
    return (
        <>
            <Container maxWidth="lg" sx={{ padding: 0, margin: 0 }}>
                <Box
                    sx={{ position: 'relative', width: '100%' }}>
                    <Box component="img" src="/portada.jpg" sx={{
                        width: "100%",
                        height: "auto",
                        display: 'block',
                        objectFit: "contain",
                        cursor: "pointer"
                    }}>
                    </Box>
                    <ScrollDownIndicator/>
                </Box>
            </Container>
        </>
    )

}