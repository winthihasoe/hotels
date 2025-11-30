import React from "react";
import NavbarTwo from "../../Components/NavbarTwo";
import FooterTwo from "../../Components/FooterTwo";
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Paper,
    Avatar,
    TextField,
    Chip,
    Card,
} from "@mui/material";
import {
    BeachAccess,
    Spa,
    LocalBar,
    EventAvailable,
    StarRate,
    ArrowForward,
} from "@mui/icons-material";
import { router } from "@inertiajs/react";

function HomeTwo() {
    const services = [
        {
            icon: <BeachAccess sx={{ fontSize: 50 }} />,
            title: "Beach Access",
            desc: "Private beach for our guests",
        },
        {
            icon: <Spa sx={{ fontSize: 50 }} />,
            title: "Spa & Wellness",
            desc: "Rejuvenate your body and mind",
        },
        {
            icon: <LocalBar sx={{ fontSize: 50 }} />,
            title: "Rooftop Bar",
            desc: "Enjoy cocktails with a view",
        },
        {
            icon: <EventAvailable sx={{ fontSize: 50 }} />,
            title: "Event Spaces",
            desc: "Perfect for meetings & weddings",
        },
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            review: "Absolutely stunning hotel! The service was impeccable and the views were breathtaking.",
            avatar: "SJ",
            rating: 5,
        },
        {
            name: "Michael Chen",
            review: "Best hotel experience I've ever had. The staff went above and beyond.",
            avatar: "MC",
            rating: 5,
        },
        {
            name: "Emma Williams",
            review: "Beautiful rooms, amazing food, and perfect location. Highly recommend!",
            avatar: "EW",
            rating: 5,
        },
    ];

    const galleryImages = [
        {
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600",
            title: "Oceanfront Luxury",
            category: "Exterior",
        },
        {
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
            title: "Elegant Suites",
            category: "Rooms",
        },
        {
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            title: "Beachside Pools",
            category: "Amenities",
        },
        {
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            title: "Gourmet Dining",
            category: "Restaurant",
        },
        {
            image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600",
            title: "Sunset Views",
            category: "Beach",
        },
        {
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600",
            title: "Spa Sanctuary",
            category: "Wellness",
        },
    ];

    return (
        <Box>
            <NavbarTwo />

            {/* Hero Section */}
            <Box
                sx={{
                    height: "100vh",
                    background:
                        "linear-gradient(135deg, rgba(20,67,118,0.9), rgba(38,198,218,0.7)), url('https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200') center/cover",
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                }}
            >
                <Container maxWidth="md">
                    <Box textAlign="center">
                        <Typography
                            variant="h1"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ fontSize: { xs: "2.5rem", md: "4rem" } }}
                        >
                            Seaside Paradise Resort
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4 }}>
                            Where luxury meets the ocean
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    bgcolor: "white",
                                    fontFamily: "Inter",
                                    color: "#1976d2",
                                    px: 4,
                                    "&:hover": { bgcolor: "#f0f0f0" },
                                }}
                                onClick={() => {
                                    router.visit(route("roomsTwo"));
                                }}
                            >
                                Explore Rooms
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: "white",
                                    color: "white",
                                    px: 4,
                                    fontFamily: "Inter",
                                    "&:hover": {
                                        borderColor: "white",
                                        bgcolor: "rgba(255,255,255,0.1)",
                                    },
                                }}
                                onClick={() => {
                                    router.visit(route("roomsTwo"));
                                }}
                            >
                                Special Offers
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* About Section */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Your Dream Vacation Awaits
                        </Typography>
                        <Typography
                            variant="body2"
                            paragraph
                            color="text.secondary"
                        >
                            Nestled along the pristine coastline, Seaside
                            Paradise Resort offers an unparalleled escape from
                            the everyday. Our resort combines modern luxury with
                            natural beauty to create an unforgettable
                            experience.
                        </Typography>
                        <Typography
                            variant="body2"
                            paragraph
                            color="text.secondary"
                        >
                            With world-class amenities, exquisite dining
                            options, and breathtaking ocean views, every moment
                            at our resort is designed to exceed your
                            expectations.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                mt: 2,
                                bgcolor: "#1976d2",
                                fontFamily: "Inter",
                            }}
                            onClick={() => {
                                router.visit(route("aboutTwo"));
                            }}
                        >
                            Learn More
                        </Button>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600"
                            alt="Resort"
                            sx={{
                                width: "100%",
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* Services Section */}
            <Box id="services" sx={{ bgcolor: "#f8f9fa", py: 10 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h4"
                        fontFamily={"Inter"}
                        textAlign="center"
                        fontWeight="bold"
                        gutterBottom
                    >
                        Premium Services
                    </Typography>
                    <Typography
                        variant="body2"
                        fontFamily={"Inter"}
                        textAlign="center"
                        color="text.secondary"
                        sx={{ mb: 6 }}
                    >
                        Indulge in our exclusive offerings
                    </Typography>
                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={index}
                            >
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 4,
                                        textAlign: "center",
                                        height: "100%",
                                        transition: "transform 0.3s",
                                        "&:hover": {
                                            transform: "translateY(-10px)",
                                        },
                                    }}
                                >
                                    <Box sx={{ color: "#1976d2", mb: 2 }}>
                                        {service.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        fontFamily={"Inter"}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        color="text.secondary"
                                        fontFamily={"Inter"}
                                        variant="caption"
                                    >
                                        {service.desc}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Gallery Section */}
            <Container id="gallery" maxWidth="lg" sx={{ py: 10 }}>
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Chip
                        icon={<BeachAccess color="white" />}
                        label="GALLERY"
                        sx={{
                            bgcolor: "#1976d2",
                            color: "white",
                            mb: 2,
                            fontWeight: "bold",
                            fontSize: "1rem",
                            py: 2.5,
                        }}
                    />
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Discover Paradise
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        Explore the stunning beauty of Seaside Paradise Resort
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    {galleryImages.map((item, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                    height: 320,
                                    cursor: "pointer",
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                        boxShadow:
                                            "0 12px 24px rgba(25, 118, 210, 0.3)",
                                    },
                                    "&:hover img": {
                                        transform: "scale(1.15)",
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
                                        transition: "transform 0.5s ease",
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
                                            "linear-gradient(to top, rgba(25, 118, 210, 0.95) 0%, rgba(25, 118, 210, 0.4) 50%, transparent 100%)",
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
                                            bgcolor: "white",
                                            color: "#1976d2",
                                            fontWeight: "bold",
                                            mb: 1,
                                        }}
                                    />
                                    <Typography
                                        variant="h5"
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
                            background:
                                "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                            px: 5,
                            py: 1.5,
                            fontSize: "0.8rem",
                            fontFamily: "Inter",
                            "&:hover": {
                                background:
                                    "linear-gradient(135deg, #1565c0 0%, #1976d2 100%)",
                            },
                        }}
                    >
                        View Full Gallery
                    </Button>
                </Box>
            </Container>

            {/* Testimonials Section */}
            <Container id="testimonials" maxWidth="lg" sx={{ py: 10 }}>
                <Typography
                    variant="h4"
                    textAlign="center"
                    fontWeight="bold"
                    gutterBottom
                >
                    What Our Guests Say
                </Typography>
                <Typography
                    variant="body2"
                    textAlign="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    Real experiences from our valued guests
                </Typography>
                <Grid container spacing={4}>
                    {testimonials.map((testimonial, index) => (
                        <Grid item size={{ xs: 12, md: 4 }} key={index}>
                            <Paper elevation={2} sx={{ p: 4 }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: 2,
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            bgcolor: "#1976d2",
                                            mr: 2,
                                            width: 56,
                                            height: 56,
                                        }}
                                    >
                                        {testimonial.avatar}
                                    </Avatar>
                                    <Box>
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight={"bold"}
                                            fontFamily={"Inter"}
                                        >
                                            {testimonial.name}
                                        </Typography>
                                        <Box sx={{ display: "flex" }}>
                                            {[...Array(testimonial.rating)].map(
                                                (_, i) => (
                                                    <StarRate
                                                        key={i}
                                                        sx={{
                                                            color: "#ffc107",
                                                            fontSize: 20,
                                                        }}
                                                    />
                                                )
                                            )}
                                        </Box>
                                    </Box>
                                </Box>
                                <Typography
                                    color="text.secondary"
                                    fontFamily={"Inter"}
                                    variant="caption"
                                >
                                    "{testimonial.review}"
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Newsletter Section */}
            <Box sx={{ bgcolor: "#1976d2", color: "white", py: 8 }}>
                <Container maxWidth="md">
                    <Typography
                        variant="h4"
                        fontFamily={"Inter"}
                        textAlign="center"
                        gutterBottom
                        fontWeight={200}
                    >
                        Subscribe to Our Newsletter
                    </Typography>
                    <Typography
                        variant="body2"
                        fontFamily={"Inter"}
                        textAlign="center"
                        sx={{ mb: 4 }}
                    >
                        Get exclusive offers and updates delivered to your inbox
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            flexDirection: { xs: "column", sm: "row" },
                        }}
                    >
                        <TextField
                            fullWidth
                            placeholder="Enter your email"
                            variant="outlined"
                            sx={{
                                bgcolor: "white",
                                borderRadius: 1,
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { border: "none" },
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: "white",
                                color: "#1976d2",
                                px: 4,
                                "&:hover": { bgcolor: "#f0f0f0" },
                                whiteSpace: "nowrap",
                                fontFamily: "Inter",
                            }}
                        >
                            Subscribe
                        </Button>
                    </Box>
                </Container>
            </Box>

            <FooterTwo />
        </Box>
    );
}

export default HomeTwo;
