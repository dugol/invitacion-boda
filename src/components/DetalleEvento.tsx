import { Box } from "@mui/material";
import Countdown from "./Countdown";

// src/components/DetallesEvento.tsx
export default function DetallesEvento() {
  return (
        <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/detalle.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textShadow: "0 2px 5px rgba(0,0,0,0.6)",
        px: 2,
        textAlign: "center",
      }}
    >
        <Box>
            <Countdown />
        </Box>
    </Box>
  );
}
