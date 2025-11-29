import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    IconButton,
    Divider,
} from "@mui/material";
import {
    Facebook,
    Twitter,
    Instagram,
    YouTube,
    Send,
    Phone,
    Email,
    Room,
} from "@mui/icons-material";

function FooterTwo() {
    return (
        <Box sx={{ bgcolor: "#0d47a1", color: "white" }}>
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            Seaside Paradise Resort
                        </Typography>
                        <Typography
                            variant="body2"
                            paragraph
                            sx={{ color: "#b3d9ff" }}
                        >
                            Your gateway to oceanfront luxury. Experience
                            unforgettable moments where the sea meets
                            sophistication.
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            sx={{ mt: 3 }}
                        >
                            Follow Us
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <IconButton
                                size="small"
                                sx={{
                                    bgcolor: "rgba(255,255,255,0.1)",
                                    color: "white",
                                    "&:hover": {
                                        bgcolor: "rgba(255,255,255,0.2)",
                                    },
                                }}
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{
                                    bgcolor: "rgba(255,255,255,0.1)",
                                    color: "white",
                                    "&:hover": {
                                        bgcolor: "rgba(255,255,255,0.2)",
                                    },
                                }}
                            >
                                <Twitter />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{
                                    bgcolor: "rgba(255,255,255,0.1)",
                                    color: "white",
                                    "&:hover": {
                                        bgcolor: "rgba(255,255,255,0.2)",
                                    },
                                }}
                            >
                                <Instagram />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{
                                    bgcolor: "rgba(255,255,255,0.1)",
                                    color: "white",
                                    "&:hover": {
                                        bgcolor: "rgba(255,255,255,0.2)",
                                    },
                                }}
                            >
                                <YouTube />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid item size={{ xs: 12, sm: 6, md: 2 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Explore
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1.5,
                            }}
                        >
                            {[
                                "Home",
                                "Rooms & Suites",
                                "Dining",
                                "Spa",
                                "Activities",
                                "Events",
                            ].map((link) => (
                                <Typography
                                    key={link}
                                    variant="body2"
                                    sx={{
                                        color: "#b3d9ff",
                                        cursor: "pointer",
                                        "&:hover": { color: "white" },
                                    }}
                                >
                                    {link}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Contact Us
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
                                    sx={{ fontSize: 20, color: "#b3d9ff" }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#b3d9ff" }}
                                >
                                    +1 (555) 987-6543
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
                                    sx={{ fontSize: 20, color: "#b3d9ff" }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#b3d9ff" }}
                                >
                                    hello@seasideparadise.com
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: 1,
                                }}
                            >
                                <Room sx={{ fontSize: 20, color: "#b3d9ff" }} />
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#b3d9ff" }}
                                >
                                    456 Ocean Drive, Coastal City, CA 90210
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Newsletter
                        </Typography>
                        <Typography
                            variant="body2"
                            paragraph
                            sx={{ color: "#b3d9ff" }}
                        >
                            Subscribe to get special offers and updates
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <TextField
                                size="small"
                                placeholder="Your email"
                                variant="outlined"
                                sx={{
                                    flexGrow: 1,
                                    bgcolor: "white",
                                    borderRadius: 1,
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": { border: "none" },
                                    },
                                }}
                            />
                            <IconButton
                                sx={{
                                    bgcolor: "white",
                                    color: "#1976d2",
                                    "&:hover": { bgcolor: "#f0f0f0" },
                                }}
                            >
                                <Send />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, bgcolor: "rgba(255,255,255,0.1)" }} />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 2,
                    }}
                >
                    <Typography variant="body2" sx={{ color: "#b3d9ff" }}>
                        © 2024 Seaside Paradise Resort. All rights reserved.
                    </Typography>
                    <Box sx={{ display: "flex", gap: 3 }}>
                        {["Privacy Policy", "Terms of Service", "Sitemap"].map(
                            (link) => (
                                <Typography
                                    key={link}
                                    variant="body2"
                                    sx={{
                                        color: "#b3d9ff",
                                        cursor: "pointer",
                                        "&:hover": { color: "white" },
                                    }}
                                >
                                    {link}
                                </Typography>
                            )
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default FooterTwo;
