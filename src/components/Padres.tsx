import { Box, Container, Typography } from "@mui/material";

export default function Padres() {
  return (
    <>
      <Container maxWidth="lg" sx={{ padding: 0, margin: 0 }}>
        <Box sx={{ width: "100%", backgroundColor: '#E0D2C2' }}>
          <Typography
            padding={2}
            component="h1"
            sx={{ fontSize: '1.75rem', fontWeight: 'bold', fontFamily: 'Poiret One', color: 'black', textAlign: 'center' }}
            variant="h4"
          >COMPARTE CON NOSOTROS ESTE MOMENTO ÚNICO
          </Typography>
          <Box
            sx={{
              height: "70vh",
              width: "100%",
            }}
          >
            <Box component="img"
              src="/padres.jpg"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }}>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 2,
              paddingBottom: 2,
            }}>
            <Box sx={{
              width: "86%",
              padding: 2,
              backgroundColor:'white'
            }}>
              <Typography
                sx={{ fontSize: '1.75rem', fontWeight: 'bold', fontFamily: 'Poiret One', color: 'black', textAlign: 'center' }}
                variant="h5"
              >
                CON LA BENDICIÓN DE DIOS Y NUESTROS PADRES.
              </Typography>
              <Typography
                sx={{ paddingTop: 2, fontSize: '1.75rem', fontWeight: 'bold', fontFamily: 'Poiret One', color: 'black', textAlign: 'center' }}
                variant="h5"
              >
                Padres de la novia
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 'bold', fontFamily: 'Poiret One', color: 'black', textAlign: 'center' }}
              >
                Juan Diego Pérez y Maricelly Urrego.
              </Typography>
              <Typography
                sx={{ paddingTop: 2, fontSize: '1.75rem', fontWeight: 'bold', fontFamily: 'Poiret One', color: 'black', textAlign: 'center' }}
                variant="h5"
              >
                Padres del novio
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 'bold', fontFamily: 'Poiret One', color: 'black', textAlign: 'center' }}
              >
                Hernán Uribe y Claudia Giraldo.
              </Typography>

            </Box>
          </Box>

        </Box>



      </Container>

    </>
  );
}
