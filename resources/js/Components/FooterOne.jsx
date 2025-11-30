import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    IconButton,
    Divider,
} from "@mui/material";
import {
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
    Phone,
    Email,
    LocationOn,
} from "@mui/icons-material";

function FooterOne() {
    return (
        <Box sx={{ bgcolor: "#1a1a1a", color: "white", pt: 8, pb: 4 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ color: "#d4af37" }}
                        >
                            Grand Royale Hotel
                        </Typography>
                        <Typography
                            variant="body2"
                            paragraph
                            sx={{ color: "#b0b0b0" }}
                        >
                            Experience unparalleled luxury and service in the
                            heart of the city. Your comfort is our priority.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                            <IconButton
                                sx={{
                                    color: "#d4af37",
                                    "&:hover": { color: "#b8941f" },
                                }}
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                sx={{
                                    color: "#d4af37",
                                    "&:hover": { color: "#b8941f" },
                                }}
                            >
                                <Twitter />
                            </IconButton>
                            <IconButton
                                sx={{
                                    color: "#d4af37",
                                    "&:hover": { color: "#b8941f" },
                                }}
                            >
                                <Instagram />
                            </IconButton>
                            <IconButton
                                sx={{
                                    color: "#d4af37",
                                    "&:hover": { color: "#b8941f" },
                                }}
                            >
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid item size={{ xs: 12, sm: 6, md: 2 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                            }}
                        >
                            {[
                                "About Us",
                                "Rooms",
                                "Services",
                                "Gallery",
                                "Blog",
                            ].map((link) => (
                                <Typography
                                    key={link}
                                    variant="body2"
                                    sx={{
                                        color: "#b0b0b0",
                                        cursor: "pointer",
                                        "&:hover": { color: "#d4af37" },
                                    }}
                                >
                                    {link}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Services
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                            }}
                        >
                            {[
                                "Room Service",
                                "Restaurant",
                                "Spa & Wellness",
                                "Event Hosting",
                                "Airport Transfer",
                            ].map((service) => (
                                <Typography
                                    key={service}
                                    variant="body2"
                                    sx={{
                                        color: "#b0b0b0",
                                        cursor: "pointer",
                                        "&:hover": { color: "#d4af37" },
                                    }}
                                >
                                    {service}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Contact Info
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                }}
                            >
                                <Phone
                                    sx={{ color: "#d4af37", fontSize: 20 }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#b0b0b0" }}
                                >
                                    +1 (555) 123-4567
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                }}
                            >
                                <Email
                                    sx={{ color: "#d4af37", fontSize: 20 }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#b0b0b0" }}
                                >
                                    info@grandroyale.com
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: 1,
                                }}
                            >
                                <LocationOn
                                    sx={{ color: "#d4af37", fontSize: 20 }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#b0b0b0" }}
                                >
                                    123 Luxury Avenue, Downtown, NY 10001
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, bgcolor: "#333" }} />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 2,
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{ fontSize: "0.7rem", color: "#b0b0b0" }}
                    >
                        © 2024 Grand Royale Hotel. All rights reserved.
                    </Typography>
                    <Box sx={{ display: "flex", gap: 3 }}>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#b0b0b0",
                                cursor: "pointer",
                                fontSize: "0.7rem",
                                "&:hover": { color: "#d4af37" },
                            }}
                        >
                            Privacy Policy
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "0.7rem",
                                color: "#b0b0b0",
                                cursor: "pointer",
                                "&:hover": { color: "#d4af37" },
                            }}
                        >
                            Terms & Conditions
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default FooterOne;
