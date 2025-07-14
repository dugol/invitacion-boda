import { Box, Container, Typography } from "@mui/material";

// src/components/Versiculo.tsx
export default function Versiculo() {
  return (
    <>
      <Container maxWidth="lg" sx={{ padding: 0, margin: 0 }}>
        <Box sx={{ position: 'relative', height: "100vh", width: "100%" }}>
          <Box component="img" src="/1000359356.jpg" sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            cursor: 'pointer',
          }}>
          </Box>
          <Box sx={{
            width: "100%",
            position: 'absolute',
            top: '20%', left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#E0D2C280',
            pointerEvents: 'none',
          }}>
            <Typography
              sx={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                fontFamily: 'Poiret One',
                color: 'black',
                textAlign: 'center'
              }}
              variant="h5"
            >
              El amor todo lo sufre, todo lo cree, todo lo espera, todo lo soporta. El amor nunca deja de ser.<br />
              <span style={{ fontStyle: 'italic' }}>1 Corintios 13:7</span>
            </Typography>
          </Box>
        </Box>
      </Container>

    </>

  );
}
