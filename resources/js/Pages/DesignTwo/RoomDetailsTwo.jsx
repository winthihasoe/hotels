import React, { useState } from "react";
import NavbarTwo from "../../Components/NavbarTwo";
import FooterTwo from "../../Components/FooterTwo";
import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
    Chip,
    Rating,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    TextField,
    Card,
    CardContent,
    Avatar,
    Tab,
    Tabs,
} from "@mui/material";
import {
    CheckCircle,
    Wifi,
    Tv,
    AcUnit,
    LocalBar,
    Balcony,
    Bathtub,
    Restaurant,
    Pool,
    Spa,
    FitnessCenter,
    LocalParking,
    Room,
    People,
    Straighten,
    KingBed,
    LocationOn,
    Phone,
    Email,
    CalendarToday,
    StarRate,
    ArrowBack,
} from "@mui/icons-material";
import { router } from "@inertiajs/react";

function RoomDetailsTwo({ room: roomProp }) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [tabValue, setTabValue] = useState(0);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guestCount, setGuestCount] = useState(2);

    // Parse room data from props
    const room = roomProp
        ? typeof roomProp === "string"
            ? JSON.parse(roomProp)
            : roomProp
        : null;

    const images = [
        room?.image ||
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200",
    ];

    const amenities = [
        { icon: <Wifi />, text: "High-Speed WiFi", desc: "Complimentary" },
        { icon: <Tv />, text: "Smart TV", desc: "55-inch 4K" },
        { icon: <AcUnit />, text: "Climate Control", desc: "Individual AC" },
        { icon: <LocalBar />, text: "Mini Bar", desc: "Premium selection" },
        {
            icon: <Balcony />,
            text: "Private Balcony",
            desc: "Ocean/Garden view",
        },
        {
            icon: <Bathtub />,
            text: "Luxury Bathroom",
            desc: "Rain shower & tub",
        },
        { icon: <Restaurant />, text: "Room Service", desc: "24/7 available" },
        { icon: <Pool />, text: "Pool Access", desc: "Complimentary" },
    ];

    const features = [
        "Daily housekeeping",
        "Turndown service",
        "Premium toiletries",
        "Bathrobes & slippers",
        "Coffee/tea maker",
        "Safe deposit box",
        "Iron & ironing board",
        "Work desk",
    ];

    const reviews = [
        {
            name: "Sarah Johnson",
            avatar: "SJ",
            rating: 5,
            date: "2 weeks ago",
            comment:
                "Absolutely stunning room with breathtaking ocean views! The service was impeccable and the amenities exceeded our expectations.",
        },
        {
            name: "Michael Chen",
            avatar: "MC",
            rating: 5,
            date: "1 month ago",
            comment:
                "Perfect for our honeymoon. Spacious, clean, and beautifully decorated. The private balcony was our favorite spot.",
        },
        {
            name: "Emma Davis",
            avatar: "ED",
            rating: 4,
            date: "2 months ago",
            comment:
                "Great room with excellent facilities. Staff was very attentive and helpful throughout our stay.",
        },
    ];

    const policies = [
        { title: "Check-in", value: "3:00 PM" },
        { title: "Check-out", value: "11:00 AM" },
        {
            title: "Cancellation",
            value: "Free cancellation up to 24 hours before check-in",
        },
        { title: "Pets", value: "Not allowed" },
        { title: "Smoking", value: "Non-smoking room" },
        { title: "Children", value: "Children of all ages welcome" },
    ];

    return (
        <Box>
            <NavbarTwo />

            {/* Back Button */}
            <Container maxWidth="lg" sx={{ pt: 3 }}>
                <Button
                    startIcon={<ArrowBack />}
                    onClick={() => router.visit(route("roomsTwo"))}
                    sx={{ color: "#1976d2", mb: 2 }}
                >
                    Back to Rooms
                </Button>
            </Container>

            {/* Image Gallery */}
            <Container maxWidth="lg" sx={{ py: 3 }}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 8 }}>
                        <Box
                            component="img"
                            src={images[selectedImage]}
                            sx={{
                                width: "100%",
                                height: { xs: 300, md: 500 },
                                objectFit: "cover",
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        />
                    </Grid>
                    <Grid item size={{ xs: 12, md: 4 }}>
                        <Grid container spacing={2}>
                            {images.slice(0, 4).map((img, index) => (
                                <Grid item size={{ xs: 3, md: 6 }} key={index}>
                                    <Box
                                        component="img"
                                        src={img}
                                        onClick={() => setSelectedImage(index)}
                                        sx={{
                                            width: "100%",
                                            height: { xs: 80, md: 120 },
                                            objectFit: "cover",
                                            borderRadius: 2,
                                            cursor: "pointer",
                                            border:
                                                selectedImage === index
                                                    ? "3px solid #1976d2"
                                                    : "none",
                                            opacity:
                                                selectedImage === index
                                                    ? 1
                                                    : 0.7,
                                            transition: "all 0.3s",
                                            "&:hover": { opacity: 1 },
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            {/* Room Details */}
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Grid container spacing={4}>
                    {/* Left Column */}
                    <Grid item size={{ xs: 12, md: 8 }}>
                        {/* Header */}
                        <Box sx={{ mb: 4 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 2,
                                    mb: 2,
                                    flexWrap: "wrap",
                                }}
                            >
                                <Chip
                                    label={room?.category || "Premium"}
                                    sx={{
                                        bgcolor: "#1976d2",
                                        color: "white",
                                        fontWeight: "bold",
                                    }}
                                />
                                <Chip
                                    icon={<LocationOn />}
                                    label="Ocean View"
                                    variant="outlined"
                                />
                            </Box>
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                gutterBottom
                            >
                                {room?.title || "Ocean View Suite"}
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    mb: 2,
                                }}
                            >
                                <Rating
                                    value={room?.rating || 4.9}
                                    readOnly
                                    precision={0.1}
                                />
                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                >
                                    {room?.rating || 4.9} (
                                    {room?.reviews || 128} reviews)
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 3,
                                    flexWrap: "wrap",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                    }}
                                >
                                    <Straighten sx={{ color: "#1976d2" }} />
                                    <Typography variant="body2">
                                        {room?.size || "45 m²"}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                    }}
                                >
                                    <People sx={{ color: "#1976d2" }} />
                                    <Typography variant="body2">
                                        {room?.guests || "2-3"} guests
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                    }}
                                >
                                    <KingBed sx={{ color: "#1976d2" }} />
                                    <Typography variant="body2">
                                        {room?.beds || "1 King Bed"}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 4 }} />

                        {/* Tabs */}
                        <Box sx={{ mb: 4 }}>
                            <Tabs
                                value={tabValue}
                                onChange={(e, newValue) =>
                                    setTabValue(newValue)
                                }
                                sx={{ borderBottom: 1, borderColor: "divider" }}
                            >
                                <Tab label="Overview" />
                                <Tab label="Amenities" />
                                <Tab label="Reviews" />
                                <Tab label="Policies" />
                            </Tabs>

                            {/* Overview Tab */}
                            {tabValue === 0 && (
                                <Box sx={{ py: 3 }}>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                    >
                                        About This Room
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        paragraph
                                        color="text.secondary"
                                    >
                                        {room?.description ||
                                            "Experience ultimate luxury in our spacious suite featuring modern amenities and breathtaking ocean views. Perfect for both business and leisure travelers seeking comfort and elegance."}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        paragraph
                                        color="text.secondary"
                                    >
                                        Our Ocean View Suite offers a perfect
                                        blend of sophistication and comfort.
                                        Wake up to stunning sunrise views over
                                        the ocean, enjoy your morning coffee on
                                        your private balcony, and unwind in the
                                        evening with our premium entertainment
                                        system.
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                        sx={{ mt: 3 }}
                                    >
                                        Room Highlights
                                    </Typography>
                                    <Grid container spacing={2}>
                                        {features.map((feature, index) => (
                                            <Grid
                                                item
                                                size={{ xs: 6, sm: 4 }}
                                                key={index}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 1,
                                                    }}
                                                >
                                                    <CheckCircle
                                                        sx={{
                                                            color: "green",
                                                            fontSize: 20,
                                                        }}
                                                    />
                                                    <Typography
                                                        variant="body2"
                                                        fontSize={"0.8rem"}
                                                    >
                                                        {feature}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            )}

                            {/* Amenities Tab */}
                            {tabValue === 1 && (
                                <Box sx={{ py: 3 }}>
                                    <Grid container spacing={3}>
                                        {amenities.map((amenity, index) => (
                                            <Grid
                                                item
                                                size={{ xs: 12, sm: 6 }}
                                                key={index}
                                            >
                                                <Paper
                                                    elevation={2}
                                                    sx={{
                                                        p: 3,
                                                        height: "100%",
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            gap: 2,
                                                            alignItems: "start",
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                color: "#1976d2",
                                                                fontSize: 40,
                                                            }}
                                                        >
                                                            {amenity.icon}
                                                        </Box>
                                                        <Box>
                                                            <Typography
                                                                variant="subtitle2"
                                                                fontWeight="bold"
                                                            >
                                                                {amenity.text}
                                                            </Typography>
                                                            <Typography
                                                                variant="body2"
                                                                fontSize={
                                                                    "0.8rem"
                                                                }
                                                                color="text.secondary"
                                                            >
                                                                {amenity.desc}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Paper>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            )}

                            {/* Reviews Tab */}
                            {tabValue === 2 && (
                                <Box sx={{ py: 3 }}>
                                    {reviews.map((review, index) => (
                                        <Paper
                                            key={index}
                                            elevation={2}
                                            sx={{ p: 3, mb: 2 }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    gap: 2,
                                                    mb: 2,
                                                }}
                                            >
                                                <Avatar
                                                    sx={{
                                                        bgcolor: "#1976d2",
                                                        width: 56,
                                                        height: 56,
                                                    }}
                                                >
                                                    {review.avatar}
                                                </Avatar>
                                                <Box sx={{ flex: 1 }}>
                                                    <Typography
                                                        variant="subtitle1"
                                                        fontWeight="bold"
                                                    >
                                                        {review.name}
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            gap: 1,
                                                        }}
                                                    >
                                                        <Rating
                                                            value={
                                                                review.rating
                                                            }
                                                            readOnly
                                                            size="small"
                                                        />
                                                        <Typography
                                                            variant="caption"
                                                            color="text.secondary"
                                                        >
                                                            {review.date}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Typography
                                                variant="body2"
                                                fontSize={"0.8rem"}
                                                color="text.secondary"
                                            >
                                                {review.comment}
                                            </Typography>
                                        </Paper>
                                    ))}
                                </Box>
                            )}

                            {/* Policies Tab */}
                            {tabValue === 3 && (
                                <Box sx={{ py: 3 }}>
                                    <List>
                                        {policies.map((policy, index) => (
                                            <React.Fragment key={index}>
                                                <ListItem sx={{ py: 2 }}>
                                                    <ListItemText
                                                        primary={
                                                            <Typography
                                                                variant="subtitle1"
                                                                fontWeight="bold"
                                                            >
                                                                {policy.title}
                                                            </Typography>
                                                        }
                                                        secondary={
                                                            <Typography
                                                                variant="body2"
                                                                color="text.secondary"
                                                            >
                                                                {policy.value}
                                                            </Typography>
                                                        }
                                                    />
                                                </ListItem>
                                                {index <
                                                    policies.length - 1 && (
                                                    <Divider />
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </List>
                                </Box>
                            )}
                        </Box>
                    </Grid>

                    {/* Right Column - Booking Card */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                        <Paper
                            elevation={3}
                            sx={{
                                position: { md: "sticky" },
                                top: 20,
                                p: 3,
                                borderRadius: 2,
                            }}
                        >
                            <Typography
                                variant="h3"
                                color="#1976d2"
                                fontWeight="bold"
                                gutterBottom
                            >
                                {room?.price || "$350"}
                                <Typography
                                    component="span"
                                    variant="h6"
                                    color="text.secondary"
                                >
                                    /night
                                </Typography>
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 3 }}
                            >
                                + taxes and fees
                            </Typography>

                            <Divider sx={{ my: 3 }} />

                            {/* Booking Form */}
                            <Box sx={{ mb: 3 }}>
                                <TextField
                                    fullWidth
                                    label="Check-in"
                                    type="date"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    InputLabelProps={{ shrink: true }}
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="Check-out"
                                    type="date"
                                    value={checkOut}
                                    onChange={(e) =>
                                        setCheckOut(e.target.value)
                                    }
                                    InputLabelProps={{ shrink: true }}
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="Guests"
                                    type="number"
                                    value={guestCount}
                                    onChange={(e) =>
                                        setGuestCount(e.target.value)
                                    }
                                    inputProps={{ min: 1, max: 6 }}
                                />
                            </Box>

                            <Divider sx={{ my: 3 }} />

                            {/* Benefits */}
                            <List dense sx={{ mb: 2 }}>
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
                                    <ListItemText primary="No prepayment needed" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircle sx={{ color: "green" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Breakfast included" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircle sx={{ color: "green" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Free WiFi" />
                                </ListItem>
                            </List>

                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    mb: 2,
                                    py: 1.5,
                                    bgcolor: "#1976d2",
                                    fontFamily: "Inter",
                                    "&:hover": { bgcolor: "#1565c0" },
                                }}
                            >
                                Book Now
                            </Button>
                            <Button
                                variant="outlined"
                                fullWidth
                                sx={{
                                    borderColor: "#1976d2",
                                    color: "#1976d2",
                                    fontFamily: "Inter",
                                }}
                            >
                                Contact Us
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            {/* Contact Banner */}
            <Box sx={{ bgcolor: "#f8f9fa", py: 6, mt: 6 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        textAlign="center"
                        gutterBottom
                    >
                        Need Help Booking?
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        textAlign="center"
                        color="text.secondary"
                        sx={{ mb: 4 }}
                    >
                        Our team is here to assist you 24/7
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item size={{ xs: 12, sm: 4 }}>
                            <Paper
                                elevation={2}
                                sx={{ p: 3, textAlign: "center" }}
                            >
                                <Phone
                                    sx={{
                                        fontSize: 40,
                                        color: "#1976d2",
                                        mb: 2,
                                    }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    fontWeight="bold"
                                >
                                    Call Us
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                >
                                    +1 (555) 123-4567
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 4 }}>
                            <Paper
                                elevation={2}
                                sx={{ p: 3, textAlign: "center" }}
                            >
                                <Email
                                    sx={{
                                        fontSize: 40,
                                        color: "#1976d2",
                                        mb: 2,
                                    }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    fontWeight="bold"
                                >
                                    Email Us
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    info@seasideparadise.com
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <FooterTwo />
        </Box>
    );
}

export default RoomDetailsTwo;
