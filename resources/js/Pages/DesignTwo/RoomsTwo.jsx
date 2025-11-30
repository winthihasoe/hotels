import React, { useState } from "react";
import NavbarTwo from "../../Components/NavbarTwo";
import FooterTwo from "../../Components/FooterTwo";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Button,
    Chip,
    Rating,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Paper,
    Divider,
    IconButton,
} from "@mui/material";
import {
    Wifi,
    Restaurant,
    Pool,
    Spa,
    FitnessCenter,
    LocalParking,
    AcUnit,
    Tv,
    KingBed,
    Balcony,
    People,
    Straighten,
    ArrowForward,
    FilterList,
} from "@mui/icons-material";
import { router } from "@inertiajs/react";

function RoomsTwo() {
    const [priceRange, setPriceRange] = useState("");
    const [roomType, setRoomType] = useState("");
    const [guests, setGuests] = useState("");

    const rooms = [
        {
            id: 1,
            title: "Ocean View Suite",
            category: "Premium",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
            price: "$350",
            rating: 4.9,
            reviews: 128,
            size: "45 m²",
            guests: "2-3",
            beds: "1 King Bed",
            amenities: [
                "Ocean View",
                "Private Balcony",
                "Mini Bar",
                "Smart TV",
            ],
            description:
                "Wake up to breathtaking ocean views in our luxurious suite with modern amenities.",
        },
        {
            id: 2,
            title: "Deluxe Garden Room",
            category: "Standard",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
            price: "$250",
            rating: 4.7,
            reviews: 95,
            size: "35 m²",
            guests: "2",
            beds: "1 Queen Bed",
            amenities: ["Garden View", "Free WiFi", "AC", "Smart TV"],
            description:
                "Peaceful garden views with comfortable accommodations perfect for couples.",
        },
        {
            id: 3,
            title: "Presidential Suite",
            category: "Luxury",
            image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
            price: "$550",
            rating: 5.0,
            reviews: 67,
            size: "75 m²",
            guests: "4",
            beds: "1 King + 1 Queen",
            amenities: [
                "Panoramic View",
                "Jacuzzi",
                "Butler Service",
                "Premium Bar",
            ],
            description:
                "Ultimate luxury with spacious living areas and premium services.",
        },
        {
            id: 4,
            title: "Family Ocean Suite",
            category: "Family",
            image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
            price: "$425",
            rating: 4.8,
            reviews: 103,
            size: "60 m²",
            guests: "4-5",
            beds: "2 Queen Beds",
            amenities: [
                "Ocean View",
                "Connecting Rooms",
                "Kids Area",
                "Kitchen",
            ],
            description:
                "Perfect for families with separate sleeping areas and ocean views.",
        },
        {
            id: 5,
            title: "Beachfront Villa",
            category: "Luxury",
            image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
            price: "$750",
            rating: 5.0,
            reviews: 89,
            size: "100 m²",
            guests: "6",
            beds: "2 King Beds",
            amenities: [
                "Private Beach",
                "Infinity Pool",
                "Chef Service",
                "Spa Room",
            ],
            description:
                "Exclusive beachfront villa with private pool and personalized services.",
        },
        {
            id: 6,
            title: "Cozy Studio Room",
            category: "Economy",
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
            price: "$180",
            rating: 4.5,
            reviews: 142,
            size: "28 m²",
            guests: "2",
            beds: "1 Double Bed",
            amenities: ["City View", "Free WiFi", "AC", "Work Desk"],
            description:
                "Comfortable and affordable option perfect for solo travelers or couples.",
        },
    ];

    const features = [
        { icon: <Wifi fontSize="small" />, text: "Free WiFi" },
        { icon: <Restaurant fontSize="small" />, text: "Breakfast" },
        { icon: <Pool fontSize="small" />, text: "Swimming Pool" },
        { icon: <Spa fontSize="small" />, text: "Spa Access" },
        { icon: <FitnessCenter fontSize="small" />, text: "Fitness Center" },
        { icon: <LocalParking fontSize="small" />, text: "Free Parking" },
    ];

    const handleRoomClick = (room) => {
        router.visit(
            route("roomDetailsTwo", {
                room: JSON.stringify(room),
            })
        );
    };

    return (
        <Box>
            <NavbarTwo />

            {/* Hero Section */}
            <Box
                sx={{
                    height: "50vh",
                    background:
                        "linear-gradient(135deg, rgba(20,67,118,0.9), rgba(38,198,218,0.7)), url('https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200') center/cover",
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ fontSize: { xs: "2rem", md: "3em" } }}
                    >
                        Our Rooms & Suites
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                        Discover your perfect accommodation
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                        {features.map((feature, index) => (
                            <Chip
                                key={index}
                                icon={feature.icon}
                                label={feature.text}
                                sx={{
                                    bgcolor: "rgba(255,255,255,0.2)",
                                    color: "white",
                                    backdropFilter: "blur(10px)",
                                    "& .MuiChip-icon": { color: "white" },
                                    fontSize: { xs: "0.75rem", md: "0.9rem" },
                                }}
                            />
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Filter Section */}
            <Box sx={{ bgcolor: "#f8f9fa", py: 4 }}>
                <Container maxWidth="lg">
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                mb: 2,
                            }}
                        >
                            <FilterList sx={{ color: "#1976d2" }} />
                            <Typography variant="h6" fontWeight="bold">
                                Filter Rooms
                            </Typography>
                        </Box>
                        <Grid container spacing={3}>
                            <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Price Range</InputLabel>
                                    <Select
                                        value={priceRange}
                                        label="Price Range"
                                        onChange={(e) =>
                                            setPriceRange(e.target.value)
                                        }
                                    >
                                        <MenuItem value="">All</MenuItem>
                                        <MenuItem value="budget">
                                            Under $200
                                        </MenuItem>
                                        <MenuItem value="mid">
                                            $200 - $400
                                        </MenuItem>
                                        <MenuItem value="luxury">
                                            $400+
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Room Type</InputLabel>
                                    <Select
                                        value={roomType}
                                        label="Room Type"
                                        onChange={(e) =>
                                            setRoomType(e.target.value)
                                        }
                                    >
                                        <MenuItem value="">All</MenuItem>
                                        <MenuItem value="standard">
                                            Standard
                                        </MenuItem>
                                        <MenuItem value="premium">
                                            Premium
                                        </MenuItem>
                                        <MenuItem value="luxury">
                                            Luxury
                                        </MenuItem>
                                        <MenuItem value="family">
                                            Family
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Guests</InputLabel>
                                    <Select
                                        value={guests}
                                        label="Guests"
                                        onChange={(e) =>
                                            setGuests(e.target.value)
                                        }
                                    >
                                        <MenuItem value="">Any</MenuItem>
                                        <MenuItem value="1-2">1-2</MenuItem>
                                        <MenuItem value="3-4">3-4</MenuItem>
                                        <MenuItem value="5+">5+</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        bgcolor: "#1976d2",
                                        fontSize: "0.8rem",
                                    }}
                                >
                                    Apply Filters
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>

            {/* Rooms Grid */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Available Rooms
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Choose from our collection of beautifully designed rooms
                        and suites
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {rooms.map((room, index) => (
                        <Grid item size={{ xs: 12, sm: 8, md: 6 }} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: {
                                        xs: "column",
                                        sm: "column",
                                    },
                                    transition: "all 0.3s",
                                    cursor: "pointer",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: 6,
                                    },
                                }}
                                onClick={() => handleRoomClick(room)}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: {
                                            xs: "100%",
                                            sm: "100%",
                                        },
                                        height: {
                                            xs: 220,
                                            sm: 220,
                                        },
                                        objectFit: "cover",
                                    }}
                                    image={room.image}
                                    alt={room.title}
                                />
                                <CardContent sx={{ flex: 1, p: 3 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "start",
                                            mb: 1,
                                        }}
                                    >
                                        <Box>
                                            <Chip
                                                label={room.category}
                                                size="small"
                                                sx={{
                                                    bgcolor: "#1976d2",
                                                    color: "white",
                                                    mb: 1,
                                                }}
                                            />
                                            <Typography
                                                variant="h6"
                                                fontWeight="bold"
                                            >
                                                {room.title}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            color="#1976d2"
                                            fontWeight="bold"
                                        >
                                            {room.price}
                                            <Typography
                                                component="span"
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                /night
                                            </Typography>
                                        </Typography>
                                    </Box>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                            mb: 2,
                                        }}
                                    >
                                        <Rating
                                            value={room.rating}
                                            readOnly
                                            precision={0.1}
                                            size="small"
                                        />
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {room.rating} ({room.reviews}{" "}
                                            reviews)
                                        </Typography>
                                    </Box>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 2 }}
                                    >
                                        {room.description}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 2,
                                            mb: 2,
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 0.5,
                                            }}
                                        >
                                            <Straighten fontSize="small" />
                                            <Typography variant="body2">
                                                {room.size}
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 0.5,
                                            }}
                                        >
                                            <People fontSize="small" />
                                            <Typography variant="body2">
                                                {room.guests} guests
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 0.5,
                                            }}
                                        >
                                            <KingBed fontSize="small" />
                                            <Typography variant="body2">
                                                {room.beds}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            flexWrap: "wrap",
                                            mb: 2,
                                        }}
                                    >
                                        {room.amenities.map(
                                            (amenity, aIndex) => (
                                                <Chip
                                                    key={aIndex}
                                                    label={amenity}
                                                    size="small"
                                                    variant="outlined"
                                                />
                                            )
                                        )}
                                    </Box>

                                    <Button
                                        variant="contained"
                                        fullWidth
                                        endIcon={<ArrowForward />}
                                        sx={{
                                            bgcolor: "#1976d2",
                                            "&:hover": { bgcolor: "#1565c0" },
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleRoomClick(room);
                                        }}
                                    >
                                        View Details & Book
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Special Offers Banner */}
            <Box
                sx={{
                    bgcolor: "#1976d2",
                    color: "white",
                    py: 8,
                    textAlign: "center",
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h5" fontFamily={"Inter"} gutterBottom>
                        Special Offer:
                    </Typography>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        fontFamily={"Inter"}
                        gutterBottom
                    >
                        Book 3 Nights, Get 1 Free!
                    </Typography>
                    <Typography
                        variant="body2"
                        fontFamily={"Inter"}
                        sx={{ mb: 3 }}
                    >
                        Limited time offer. Terms and conditions apply.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "white",
                            color: "#1976d2",
                            px: 4,
                            "&:hover": { bgcolor: "#f0f0f0" },
                        }}
                        onClick={() => router.visit(route("aboutTwo"))}
                    >
                        Learn More
                    </Button>
                </Container>
            </Box>

            <FooterTwo />
        </Box>
    );
}

export default RoomsTwo;
