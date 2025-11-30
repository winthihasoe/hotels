import React from "react";
import NavbarOne from "../../Components/NavbarOne";
import FooterOne from "../../Components/FooterOne";
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Rating,
} from "@mui/material";
import {
    Hotel,
    Restaurant,
    Pool,
    FitnessCenter,
    Wifi,
    LocalParking,
} from "@mui/icons-material";
import { router } from "@inertiajs/react";

function HomeOne() {
    const features = [
        {
            icon: <Hotel />,
            title: "Luxury Rooms",
            desc: "5-star accommodation",
        },
        {
            icon: <Restaurant />,
            title: "Fine Dining",
            desc: "Gourmet restaurant",
        },
        {
            icon: <Pool />,
            title: "Swimming Pool",
            desc: "Outdoor & indoor pools",
        },
        {
            icon: <FitnessCenter />,
            title: "Fitness Center",
            desc: "24/7 gym access",
        },
        { icon: <Wifi />, title: "Free WiFi", desc: "High-speed internet" },
        {
            icon: <LocalParking />,
            title: "Free Parking",
            desc: "Secure parking space",
        },
    ];

    const rooms = [
        {
            title: "Deluxe Suite",
            price: "$299/night",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500",
            rating: 4.8,
        },
        {
            title: "Superior Room",
            price: "$199/night",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400",
            rating: 4.6,
        },
        {
            title: "Executive Room",
            price: "$599/night",
            image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=400",
            rating: 5.0,
        },
    ];

    return (
        <Box>
            <NavbarOne />

            {/* Hero Section */}
            <Box
                id="home"
                sx={{
                    height: "90vh",
                    background:
                        "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200') center/cover",
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        fontWeight="bold"
                        sx={{ fontSize: { xs: "2.8rem", md: "3.5rem" } }}
                        gutterBottom
                    >
                        Welcome to Grand Royale Hotel
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4 }}>
                        Experience luxury and comfort in the heart of the city
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: "#d4af37",
                            color: "white",
                            px: 4,
                            py: 1.5,
                            "&:hover": { bgcolor: "#b8941f" },
                        }}
                        onClick={() => router.visit(route("contactOne"))}
                    >
                        Contact Us
                    </Button>
                </Container>
            </Box>

            {/* Features Section */}
            <Container id="amenities" maxWidth="lg" sx={{ py: 8 }}>
                <Typography
                    variant="h4"
                    textAlign="center"
                    gutterBottom
                    fontWeight="bold"
                >
                    Our Amenities
                </Typography>
                <Typography
                    variant="body1"
                    textAlign="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    Everything you need for a perfect stay
                </Typography>
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Box textAlign="center">
                                <Box
                                    sx={{
                                        fontSize: 48,
                                        color: "#d4af37",
                                        mb: 2,
                                    }}
                                >
                                    {feature.icon}
                                </Box>
                                <Typography
                                    fontFamily={"Poppins"}
                                    variant="h6"
                                    gutterBottom
                                >
                                    {feature.title}
                                </Typography>
                                <Typography color="text.secondary">
                                    {feature.desc}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Rooms Section */}
            <Box id="rooms" sx={{ bgcolor: "#f5f5f5", py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h4"
                        textAlign="center"
                        gutterBottom
                        fontWeight="bold"
                    >
                        Our Rooms
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        color="text.secondary"
                        sx={{ mb: 6 }}
                    >
                        Choose from our selection of luxury accommodations
                    </Typography>
                    <Grid container spacing={4} justifyContent={"center"}>
                        {rooms.map((room, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 4 }}
                                key={index}
                            >
                                <Card sx={{ height: "100%" }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ height: 250 }}
                                        image={room.image}
                                        alt={room.title}
                                    />
                                    <CardContent>
                                        <Typography
                                            fontFamily={"Poppins"}
                                            variant="h6"
                                            gutterBottom
                                        >
                                            {room.title}
                                        </Typography>
                                        <Rating
                                            value={room.rating}
                                            readOnly
                                            precision={0.1}
                                        />
                                        <Typography
                                            fontFamily={"Poppins"}
                                            variant="subtitle1"
                                            color="#d4af37"
                                            sx={{ mt: 2 }}
                                        >
                                            {room.price}
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            sx={{
                                                mt: 2,
                                                borderColor: "#d4af37",
                                                color: "#d4af37",
                                                "&:hover": {
                                                    borderColor: "#b8941f",
                                                    bgcolor: "#d4af37",
                                                    color: "white",
                                                },
                                            }}
                                            onClick={() =>
                                                router.visit(
                                                    route("roomDetailsOne", {
                                                        room: JSON.stringify(
                                                            room
                                                        ),
                                                    })
                                                )
                                            }
                                        >
                                            View Details
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <FooterOne />
        </Box>
    );
}

export default HomeOne;
