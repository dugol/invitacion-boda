// src/components/Countdown.tsx
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import { useEffect, useState } from "react";

const targetDate = new Date("2025-10-26T15:00:00"); // 26 de Octubre 2025 - 3:00 p.m

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

function calculateTimeLeft(): TimeLeft {
    const difference = targetDate.getTime() - new Date().getTime();

    const timeLeft: TimeLeft = {
        days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
        seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };

    return timeLeft;
}

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Container maxWidth="lg" sx={{ padding: 0, margin: 0 }}>
                <Box sx={{ position: 'relative', width: "100%" }}>
                    <Box component="img" src="/countDown.jpg" sx={{
                        width: "100%",
                        height: "auto",
                        display: 'block',
                        objectFit: "contain",
                        cursor: 'pointer',
                    }}></Box>
                    <Box sx={{
                        position: 'absolute',
                        top: '8%', left: '10%',
                        textAlign: 'center',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#E0D2C2', fontFamily: 'Poiret One', fontSize: '2.5rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                            26 OCTUBRE 2025
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#E0D2C2', fontFamily: 'Poiret One', fontSize: '2.5rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                            4:00 PM
                        </Typography>

                        <Grid container spacing={2} justifyContent="center">
                            {[
                                { label: "Días", value: timeLeft.days },
                                { label: "Horas", value: timeLeft.hours },
                                { label: "Minutos", value: timeLeft.minutes },
                                { label: "Segundos", value: timeLeft.seconds },
                            ].map((item) => (
                                <Grid key={item.label} sx={{ paddingTop: '1rem' }}>
                                    <Paper
                                        elevation={4}
                                        sx={{
                                            width: 70,
                                            height: 70,
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            backgroundColor: "#E0D2C280",
                                            borderRadius: 2,
                                        }}
                                    >
                                        <Typography variant="h4" color="black" sx={{ fontFamily: 'Poiret One', fontWeight: 'bold', fontSize: '1.75rem' }}>
                                            {item.value.toString().padStart(2, "0")}
                                        </Typography>
                                        <Typography variant="caption" fontWeight='bold' color="black" sx={{ fontFamily: 'Poiret One' }}>
                                            {item.label}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>

                    </Box>

                </Box>

            </Container>
        </>
    );
}
