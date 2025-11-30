import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    IconButton,
    Divider,
    Button,
} from "@mui/material";
import {
    Facebook,
    Twitter,
    Instagram,
    Pinterest,
    Phone,
    Email,
    LocationOn,
    AccessTime,
} from "@mui/icons-material";

function FooterThree() {
    const currentYear = new Date().getFullYear();

    return (
        <Box>
            {/* Main Footer */}
            <Box sx={{ bgcolor: "#1b5e20", color: "white", pt: 8, pb: 4 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Mountain Haven Lodge
                            </Typography>
                            <Typography
                                variant="body2"
                                paragraph
                                sx={{ color: "#a5d6a7" }}
                            >
                                Reconnect with nature in our sustainable
                                mountain retreat. Experience adventure,
                                relaxation, and eco-friendly luxury.
                            </Typography>
                            <Box sx={{ mt: 3 }}>
                                <Typography variant="subtitle2" gutterBottom>
                                    Connect With Us
                                </Typography>
                                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                                    <IconButton
                                        size="small"
                                        sx={{
                                            bgcolor: "#2e7d32",
                                            color: "white",
                                            "&:hover": { bgcolor: "#1b5e20" },
                                        }}
                                    >
                                        <Facebook />
                                    </IconButton>
                                    <IconButton
                                        size="small"
                                        sx={{
                                            bgcolor: "#2e7d32",
                                            color: "white",
                                            "&:hover": { bgcolor: "#1b5e20" },
                                        }}
                                    >
                                        <Twitter />
                                    </IconButton>
                                    <IconButton
                                        size="small"
                                        sx={{
                                            bgcolor: "#2e7d32",
                                            color: "white",
                                            "&:hover": { bgcolor: "#1b5e20" },
                                        }}
                                    >
                                        <Instagram />
                                    </IconButton>
                                    <IconButton
                                        size="small"
                                        sx={{
                                            bgcolor: "#2e7d32",
                                            color: "white",
                                            "&:hover": { bgcolor: "#1b5e20" },
                                        }}
                                    >
                                        <Pinterest />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item size={{ xs: 12, sm: 6, md: 2 }}>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Quick Links
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 1.5,
                                }}
                            >
                                {[
                                    "About Us",
                                    "Our Story",
                                    "Sustainability",
                                    "Careers",
                                    "Press",
                                    "Blog",
                                ].map((link) => (
                                    <Typography
                                        key={link}
                                        variant="body2"
                                        sx={{
                                            color: "#a5d6a7",
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
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Guest Services
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 1.5,
                                }}
                            >
                                {[
                                    "Book a Stay",
                                    "Gift Certificates",
                                    "Group Bookings",
                                    "FAQs",
                                    "Cancellation Policy",
                                    "Guest Reviews",
                                ].map((link) => (
                                    <Typography
                                        key={link}
                                        variant="body2"
                                        sx={{
                                            color: "#a5d6a7",
                                            cursor: "pointer",
                                            "&:hover": { color: "white" },
                                        }}
                                    >
                                        {link}
                                    </Typography>
                                ))}
                            </Box>
                        </Grid>

                        <Grid item size={{ xs: 12, md: 3 }}>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Contact Information
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
                                        sx={{ fontSize: 20, color: "#4caf50" }}
                                    />
                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "#a5d6a7" }}
                                        >
                                            +1 (555) 123-4567
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            sx={{ color: "#81c784" }}
                                        >
                                            24/7 Support
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                    }}
                                >
                                    <Email
                                        sx={{ fontSize: 20, color: "#4caf50" }}
                                    />
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "#a5d6a7" }}
                                    >
                                        info@mountainhaven.com
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
                                        sx={{ fontSize: 20, color: "#4caf50" }}
                                    />
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "#a5d6a7" }}
                                    >
                                        Mountain View Road, Rocky Mountains, CO
                                        80401
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                    }}
                                >
                                    <AccessTime
                                        sx={{ fontSize: 20, color: "#4caf50" }}
                                    />
                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "#a5d6a7" }}
                                        >
                                            Check-in: 3:00 PM
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "#a5d6a7" }}
                                        >
                                            Check-out: 11:00 AM
                                        </Typography>
                                    </Box>
                                </Box>
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
                        <Typography
                            variant="body2"
                            sx={{ color: "#a5d6a7", fontSize: "0.7rem" }}
                        >
                            © {currentYear} Mountain Haven Lodge. All rights
                            reserved. | Eco-Certified Resort
                        </Typography>
                        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                            {[
                                "Privacy Policy",
                                "Terms & Conditions",
                                "Cookie Policy",
                                "Accessibility",
                            ].map((link) => (
                                <Typography
                                    key={link}
                                    variant="body2"
                                    sx={{
                                        color: "#a5d6a7",
                                        fontSize: "0.7rem",
                                        cursor: "pointer",
                                        "&:hover": { color: "white" },
                                    }}
                                >
                                    {link}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Bottom Bar */}
            <Box sx={{ bgcolor: "#0d3d0d", color: "white", py: 2 }}>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: 2,
                        }}
                    >
                        <Typography variant="caption" sx={{ color: "#a5d6a7" }}>
                            🌱 Committed to sustainable tourism and
                            environmental conservation
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{ color: "#a5d6a7", fontSize: "0.6rem" }}
                            >
                                We accept:
                            </Typography>
                            <Box sx={{ display: "flex", gap: 1 }}>
                                {["Visa", "Mastercard", "Amex", "PayPal"].map(
                                    (payment) => (
                                        <Typography
                                            key={payment}
                                            variant="caption"
                                            sx={{
                                                bgcolor:
                                                    "rgba(255,255,255,0.1)",
                                                px: 1,
                                                py: 0.5,
                                                borderRadius: 0.5,
                                                color: "#a5d6a7",
                                            }}
                                        >
                                            {payment}
                                        </Typography>
                                    )
                                )}
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default FooterThree;
