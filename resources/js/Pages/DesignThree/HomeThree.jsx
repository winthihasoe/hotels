import React from "react";
import NavbarThree from "../../Components/NavbarThree";
import FooterThree from "../../Components/FooterThree";
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Chip,
    IconButton,
} from "@mui/material";
import {
    Nature,
    DirectionsBike,
    Restaurant,
    Bedtime,
    ArrowForward,
    Phone,
    Email,
    LocationOn,
} from "@mui/icons-material";

function HomeThree() {
    const highlights = [
        {
            icon: <Nature sx={{ fontSize: 60 }} />,
            title: "Mountain Views",
            desc: "Breathtaking panoramic vistas",
        },
        {
            icon: <DirectionsBike sx={{ fontSize: 60 }} />,
            title: "Adventure Activities",
            desc: "Hiking, biking, and more",
        },
        {
            icon: <Restaurant sx={{ fontSize: 60 }} />,
            title: "Farm-to-Table",
            desc: "Organic local cuisine",
        },
        {
            icon: <Bedtime sx={{ fontSize: 60 }} />,
            title: "Peaceful Retreat",
            desc: "Escape the city noise",
        },
    ];

    const packages = [
        {
            title: "Weekend Getaway",
            duration: "2 Days / 1 Night",
            price: "$299",
            image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400",
            features: ["Breakfast included", "Mountain tour", "Welcome drink"],
            popular: false,
        },
        {
            title: "Adventure Package",
            duration: "4 Days / 3 Nights",
            price: "$799",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
            features: [
                "All meals included",
                "Guided hiking",
                "Spa session",
                "Adventure gear",
            ],
            popular: true,
        },
        {
            title: "Luxury Escape",
            duration: "7 Days / 6 Nights",
            price: "$1,499",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
            features: [
                "Premium suite",
                "Private chef",
                "All activities",
                "Airport transfer",
            ],
            popular: false,
        },
    ];

    const experiences = [
        {
            title: "Sunrise Yoga",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400",
        },
        {
            title: "Wine Tasting",
            image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400",
        },
        {
            title: "Nature Walks",
            image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400",
        },
        {
            title: "Star Gazing",
            image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400",
        },
    ];

    const galleryImages = [
        {
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
            title: "Mountain Peak Views",
            category: "Landscape",
        },
        {
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
            title: "Cozy Lodge Interiors",
            category: "Accommodation",
        },
        {
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
            title: "Hiking Adventures",
            category: "Activities",
        },
        {
            image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600",
            title: "Forest Trails",
            category: "Nature",
        },
        {
            image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600",
            title: "Sunset Views",
            category: "Landscape",
        },
        {
            image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600",
            title: "Farm Fresh Dining",
            category: "Dining",
        },
    ];

    return (
        <Box>
            <NavbarThree />

            {/* Hero Section */}
            <Box
                sx={{
                    height: "95vh",
                    background:
                        "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200') center/cover",
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    position: "relative",
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ maxWidth: 700 }}>
                        <Chip
                            label="ECO-FRIENDLY RESORT"
                            sx={{
                                bgcolor: "#4caf50",
                                color: "white",
                                mb: 2,
                                fontWeight: "bold",
                            }}
                        />
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ fontSize: { xs: "2.5rem", md: "4rem" } }}
                        >
                            Mountain Haven Lodge
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ mb: 4, lineHeight: 1.6 }}
                        >
                            Reconnect with nature in our sustainable mountain
                            retreat
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<ArrowForward />}
                                sx={{
                                    bgcolor: "#4caf50",
                                    px: 4,
                                    py: 1.5,
                                    fontSize: "1.1rem",
                                    "&:hover": { bgcolor: "#45a049" },
                                }}
                            >
                                Book Your Stay
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: "white",
                                    color: "white",
                                    px: 4,
                                    borderWidth: 2,
                                    "&:hover": {
                                        borderColor: "white",
                                        borderWidth: 2,
                                        bgcolor: "rgba(255,255,255,0.1)",
                                    },
                                }}
                            >
                                Virtual Tour
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Highlights Section */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    textAlign="center"
                    gutterBottom
                    fontFamily={"Inter"}
                >
                    Why Choose Mountain Haven
                </Typography>
                <Typography
                    variant="body1"
                    textAlign="center"
                    color="text.secondary"
                    sx={{ mb: 8 }}
                    fontFamily={"Inter"}
                >
                    Experience the perfect blend of adventure and relaxation
                </Typography>
                <Grid container spacing={5}>
                    {highlights.map((highlight, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Box
                                sx={{
                                    textAlign: "center",
                                    transition: "transform 0.3s",
                                    "&:hover": { transform: "scale(1.05)" },
                                }}
                            >
                                <Box sx={{ color: "#4caf50", mb: 2 }}>
                                    {highlight.icon}
                                </Box>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    fontWeight="bold"
                                    fontFamily={"Inter"}
                                >
                                    {highlight.title}
                                </Typography>
                                <Typography color="text.secondary">
                                    {highlight.desc}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Packages Section */}
            <Box id="packages" sx={{ bgcolor: "#f5f5f5", py: 10 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        textAlign="center"
                        gutterBottom
                    >
                        Vacation Packages
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        color="text.secondary"
                        sx={{ mb: 8 }}
                    >
                        Tailored experiences for every adventurer
                    </Typography>
                    <Grid container spacing={4}>
                        {packages.map((pkg, index) => (
                            <Grid item size={{ xs: 12, md: 4 }} key={index}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        position: "relative",
                                        border: pkg.popular
                                            ? "3px solid #4caf50"
                                            : "none",
                                        transform: pkg.popular
                                            ? "scale(1.05)"
                                            : "none",
                                    }}
                                >
                                    {pkg.popular && (
                                        <Chip
                                            label="MOST POPULAR"
                                            sx={{
                                                position: "absolute",
                                                top: 16,
                                                right: 16,
                                                bgcolor: "#4caf50",
                                                color: "white",
                                                fontWeight: "bold",
                                                zIndex: 1,
                                            }}
                                        />
                                    )}
                                    <CardMedia
                                        component="img"
                                        height="220"
                                        image={pkg.image}
                                        alt={pkg.title}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography
                                            variant="h5"
                                            gutterBottom
                                            fontWeight="bold"
                                        >
                                            {pkg.title}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            gutterBottom
                                            sx={{ mb: 2 }}
                                        >
                                            {pkg.duration}
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            color="#4caf50"
                                            fontWeight="bold"
                                            gutterBottom
                                        >
                                            {pkg.price}
                                        </Typography>
                                        <Box sx={{ my: 2 }}>
                                            {pkg.features.map(
                                                (feature, idx) => (
                                                    <Typography
                                                        key={idx}
                                                        variant="body2"
                                                        sx={{ mb: 1 }}
                                                    >
                                                        ✓ {feature}
                                                    </Typography>
                                                )
                                            )}
                                        </Box>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                mt: 2,
                                                bgcolor: "#4caf50",
                                                "&:hover": {
                                                    bgcolor: "#45a049",
                                                },
                                            }}
                                        >
                                            Select Package
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Experiences Section */}
            <Container id="experiences" maxWidth="lg" sx={{ py: 10 }}>
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    textAlign="center"
                    gutterBottom
                >
                    Unique Experiences
                </Typography>
                <Typography
                    variant="body1"
                    textAlign="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    Create unforgettable memories
                </Typography>
                <Grid container spacing={3}>
                    {experiences.map((exp, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                            <Box
                                sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: 2,
                                    height: 250,
                                    cursor: "pointer",
                                    "&:hover img": {
                                        transform: "scale(1.1)",
                                    },
                                    "&:hover .overlay": {
                                        opacity: 1,
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={exp.image}
                                    alt={exp.title}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transition: "transform 0.3s",
                                    }}
                                />
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        bgcolor: "rgba(0,0,0,0.5)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        opacity: 0,
                                        transition: "opacity 0.3s",
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        color="white"
                                        fontWeight="bold"
                                    >
                                        {exp.title}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Gallery Section */}
            <Box id="gallery" sx={{ bgcolor: "#f5f5f5", py: 10 }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: "center", mb: 6 }}>
                        <Chip
                            label="GALLERY"
                            sx={{
                                bgcolor: "#4caf50",
                                color: "white",
                                mb: 2,
                                fontWeight: "bold",
                                fontSize: "1rem",
                                py: 2.5,
                            }}
                        />
                        <Typography variant="h3" fontWeight="bold" gutterBottom>
                            Capture the Moments
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            Explore the beauty of Mountain Haven through our
                            lens
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        {galleryImages.map((item, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 4 }}
                                key={index}
                            >
                                <Card
                                    sx={{
                                        position: "relative",
                                        overflow: "hidden",
                                        height: 300,
                                        cursor: "pointer",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            transform: "translateY(-10px)",
                                            boxShadow:
                                                "0 12px 24px rgba(76, 175, 80, 0.3)",
                                        },
                                        "&:hover img": {
                                            transform: "scale(1.1)",
                                        },
                                        "&:hover .overlay": {
                                            opacity: 1,
                                        },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={item.image}
                                        alt={item.title}
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            transition: "transform 0.3s",
                                        }}
                                    />
                                    <Box
                                        className="overlay"
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background:
                                                "linear-gradient(to top, rgba(46, 125, 50, 0.9) 0%, rgba(46, 125, 50, 0.3) 50%, transparent 100%)",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-end",
                                            alignItems: "flex-start",
                                            p: 3,
                                            opacity: 0,
                                            transition: "opacity 0.3s",
                                        }}
                                    >
                                        <Chip
                                            label={item.category}
                                            size="small"
                                            sx={{
                                                bgcolor: "#4caf50",
                                                color: "white",
                                                fontWeight: "bold",
                                                mb: 1,
                                            }}
                                        />
                                        <Typography
                                            variant="h6"
                                            color="white"
                                            fontWeight="bold"
                                        >
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ textAlign: "center", mt: 6 }}>
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForward />}
                            sx={{
                                bgcolor: "#4caf50",
                                px: 5,
                                py: 1.5,
                                fontSize: "1.1rem",
                                "&:hover": { bgcolor: "#45a049" },
                            }}
                        >
                            View Full Gallery
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Contact CTA Section */}
            <Box
                sx={{
                    bgcolor: "#2e7d32",
                    color: "white",
                    py: 8,
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Ready for Your Adventure?
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 3 }}>
                                Contact us today to plan your perfect mountain
                                escape
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
                                        gap: 2,
                                    }}
                                >
                                    <Phone />
                                    <Typography>+1 (555) 123-4567</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                    }}
                                >
                                    <Email />
                                    <Typography>
                                        info@mountainhaven.com
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                    }}
                                >
                                    <LocationOn />
                                    <Typography>
                                        Mountain View Road, Rocky Mountains
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Button
                                variant="contained"
                                size="large"
                                fullWidth
                                sx={{
                                    bgcolor: "white",
                                    color: "#2e7d32",
                                    py: 2,
                                    fontSize: "1.2rem",
                                    "&:hover": { bgcolor: "#f0f0f0" },
                                }}
                            >
                                Request a Quote
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <FooterThree />
        </Box>
    );
}

export default HomeThree;
