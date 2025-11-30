import React from "react";
import NavbarOne from "../../Components/NavbarOne";
import FooterOne from "../../Components/FooterOne";
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Rating,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {
    CheckCircle,
    Wifi,
    Tv,
    AcUnit,
    LocalBar,
    Balcony,
    Bathtub,
} from "@mui/icons-material";

function RoomDetailsOne({ room }) {
    const amenities = [
        { icon: <Wifi />, text: "Free WiFi" },
        { icon: <Tv />, text: "Smart TV" },
        { icon: <AcUnit />, text: "Air Conditioning" },
        { icon: <LocalBar />, text: "Mini Bar" },
        { icon: <Balcony />, text: "Private Balcony" },
        { icon: <Bathtub />, text: "Luxury Bathroom" },
    ];

    const images = [
        room?.image ||
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
    ];

    return (
        <Box>
            <NavbarOne />

            {/* Hero Image */}
            <Box
                sx={{
                    height: "60vh",
                    background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${images[0]}') center/cover`,
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                }}
            >
                <Container maxWidth="lg">
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        {room?.title || "Deluxe Suite"}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={2}>
                        <Rating
                            value={room?.rating || 4.8}
                            readOnly
                            precision={0.1}
                            sx={{ color: "#d4af37" }}
                        />
                        <Typography variant="h5">
                            ({room?.rating || 4.8})
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Room Details */}
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Grid container spacing={4}>
                    {/* Left Column */}
                    <Grid item size={{ xs: 12, md: 8 }}>
                        {/* Image Gallery */}
                        <Box sx={{ mb: 4 }}>
                            <Grid container spacing={2}>
                                {images.map((img, index) => (
                                    <Grid
                                        item
                                        size={{ xs: 12, sm: 4 }}
                                        key={index}
                                    >
                                        <Box
                                            component="img"
                                            src={img}
                                            sx={{
                                                width: "100%",
                                                height: 200,
                                                objectFit: "cover",
                                                borderRadius: 2,
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                        {/* Description */}
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            About This Room
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            paragraph
                        >
                            Experience ultimate luxury in our spacious suite
                            featuring modern amenities and breathtaking views.
                            Perfect for both business and leisure travelers
                            seeking comfort and elegance.
                        </Typography>

                        {/* Room Features */}
                        <Box sx={{ my: 4 }}>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Room Features
                            </Typography>
                            <Box display="flex" gap={1} flexWrap="wrap">
                                <Chip label="45 m²" />
                                <Chip label="King Size Bed" />
                                <Chip label="Ocean View" />
                                <Chip label="Non-Smoking" />
                            </Box>
                        </Box>

                        {/* Amenities */}
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Amenities
                        </Typography>
                        <List>
                            {amenities.map((amenity, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon sx={{ color: "#d4af37" }}>
                                        {amenity.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={amenity.text} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    {/* Right Column - Booking Card */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                        <Box
                            sx={{
                                position: "sticky",
                                top: 80,
                                border: "1px solid #e0e0e0",
                                borderRadius: 2,
                                p: 3,
                            }}
                        >
                            <Typography
                                variant="h4"
                                color="#d4af37"
                                fontWeight="bold"
                                gutterBottom
                            >
                                {room?.price || "$299/night"}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 3 }}
                            >
                                + taxes and fees
                            </Typography>

                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircle sx={{ color: "green" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Free cancellation" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircle sx={{ color: "green" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="No prepayment" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircle sx={{ color: "green" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Breakfast included" />
                                </ListItem>
                            </List>

                            <Button
                                variant="contained"
                                fullWidth
                                size="large"
                                sx={{
                                    mt: 3,
                                    bgcolor: "#d4af37",
                                    "&:hover": { bgcolor: "#b8941f" },
                                }}
                            >
                                Book Now
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <FooterOne />
        </Box>
    );
}

export default RoomDetailsOne;
