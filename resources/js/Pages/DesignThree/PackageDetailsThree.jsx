import React, { useState } from "react";
import NavbarThree from "../../Components/NavbarThree";
import FooterThree from "../../Components/FooterThree";
import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    TextField,
    Avatar,
    Rating,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import {
    CheckCircle,
    Schedule,
    People,
    Flight,
    Hotel,
    Restaurant,
    DirectionsCar,
    Camera,
    LocalActivity,
    Spa,
    ExpandMore,
    CalendarToday,
    Phone,
    Email,
    ArrowBack,
    Star,
} from "@mui/icons-material";
import { router } from "@inertiajs/react";

function PackageDetailsThree({ package: packageProp }) {
    const [selectedDate, setSelectedDate] = useState("");
    const [guestCount, setGuestCount] = useState(2);
    const [activeDay, setActiveDay] = useState(0);

    // Parse package data from props
    const pkg = packageProp
        ? typeof packageProp === "string"
            ? JSON.parse(packageProp)
            : packageProp
        : null;

    const packageImages = [
        pkg?.image ||
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200",
    ];

    const itinerary = [
        {
            day: "Day 1",
            title: "Arrival & Welcome",
            activities: [
                "Airport pickup and transfer to resort",
                "Welcome drink and check-in",
                "Resort orientation tour",
                "Welcome dinner at beachfront restaurant",
            ],
            meals: "Dinner included",
        },
        {
            day: "Day 2",
            title: "Beach & Water Activities",
            activities: [
                "Sunrise yoga session on the beach",
                "Snorkeling adventure at coral reef",
                "Beach volleyball and water sports",
                "Sunset cruise with drinks",
            ],
            meals: "Breakfast, Lunch, Dinner",
        },
        {
            day: "Day 3",
            title: "Island Exploration",
            activities: [
                "Guided island tour and sightseeing",
                "Visit local markets and cultural sites",
                "Traditional lunch experience",
                "Spa treatment and relaxation",
            ],
            meals: "Breakfast, Lunch, Dinner",
        },
        {
            day: "Day 4",
            title: "Adventure Day",
            activities: [
                "Hiking to scenic viewpoints",
                "Zip-lining through tropical forest",
                "Cliff diving and swimming",
                "BBQ dinner on the beach",
            ],
            meals: "Breakfast, Lunch, Dinner",
        },
        {
            day: "Day 5",
            title: "Departure",
            activities: [
                "Leisure breakfast at resort",
                "Final beach time and photos",
                "Check-out and airport transfer",
                "Complimentary souvenir gift",
            ],
            meals: "Breakfast included",
        },
    ];

    const inclusions = [
        {
            icon: <Flight />,
            text: "Round-trip airfare",
            desc: "Economy class tickets",
        },
        {
            icon: <Hotel />,
            text: "Accommodation",
            desc: "5 nights in premium room",
        },
        {
            icon: <Restaurant />,
            text: "Meals",
            desc: "All meals as per itinerary",
        },
        {
            icon: <DirectionsCar />,
            text: "Transportation",
            desc: "Airport transfers & tours",
        },
        {
            icon: <LocalActivity />,
            text: "Activities",
            desc: "All listed activities included",
        },
        { icon: <Camera />, text: "Tours", desc: "Guided sightseeing tours" },
        {
            icon: <Spa />,
            text: "Spa Treatment",
            desc: "One complimentary session",
        },
        {
            icon: <People />,
            text: "Tour Guide",
            desc: "Professional English guide",
        },
    ];

    const exclusions = [
        "Personal expenses and shopping",
        "Travel insurance",
        "Additional meals not mentioned",
        "Alcoholic beverages (except welcome drinks)",
        "Tips and gratuities",
        "Optional activities",
    ];

    const reviews = [
        {
            name: "Jennifer Martinez",
            avatar: "JM",
            rating: 5,
            date: "3 weeks ago",
            comment:
                "The best vacation package ever! Everything was perfectly organized, and the activities were amazing. Our guide was knowledgeable and friendly. Highly recommended!",
        },
        {
            name: "Robert Williams",
            avatar: "RW",
            rating: 5,
            date: "1 month ago",
            comment:
                "Exceeded all expectations! The accommodations were luxurious, food was delicious, and the itinerary was well-balanced. Worth every penny!",
        },
        {
            name: "Lisa Anderson",
            avatar: "LA",
            rating: 4,
            date: "2 months ago",
            comment:
                "Great experience overall. The beach activities were fantastic and the staff was very attentive. Would definitely book again!",
        },
    ];

    const faqs = [
        {
            question: "What is the best time to book this package?",
            answer: "The best time is 2-3 months in advance to secure the best rates and availability. However, we offer flexible booking options year-round.",
        },
        {
            question: "Is this package suitable for families with children?",
            answer: "Yes! We offer family-friendly versions of this package with age-appropriate activities and child-safe accommodations.",
        },
        {
            question: "What should I pack for this trip?",
            answer: "Light, breathable clothing, swimwear, sunscreen, comfortable walking shoes, and a camera. We'll provide a detailed packing list upon booking.",
        },
        {
            question: "Can I customize the itinerary?",
            answer: "Absolutely! We can tailor the package to your preferences. Contact us to discuss customization options.",
        },
        {
            question: "What is the cancellation policy?",
            answer: "Free cancellation up to 30 days before departure. 50% refund for 15-29 days, and no refund within 14 days of departure.",
        },
    ];

    return (
        <Box>
            <Box sx={{ bgcolor: "rgba(79, 79, 79, 1)", py: 5 }}>
                <NavbarThree />
            </Box>
            {/* Back Button */}
            <Container maxWidth="lg" sx={{ pt: 3 }}>
                <Button
                    startIcon={<ArrowBack />}
                    onClick={() => router.visit(route("homeThree"))}
                    sx={{ color: "#4caf50", fontSize: "0.7rem" }}
                >
                    Back to Packages
                </Button>
            </Container>

            {/* Hero Image Gallery */}
            <Container maxWidth="lg" sx={{ py: 3 }}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 8 }}>
                        <Box
                            component="img"
                            src={packageImages[0]}
                            sx={{
                                width: "100%",
                                height: { xs: 300, md: 450 },
                                objectFit: "cover",
                                borderRadius: 2,
                            }}
                        />
                    </Grid>
                    <Grid item size={{ xs: 12, md: 4 }}>
                        <Grid container spacing={2}>
                            {packageImages.slice(1, 4).map((img, index) => (
                                <Grid item size={{ xs: 4, md: 12 }} key={index}>
                                    <Box
                                        component="img"
                                        src={img}
                                        sx={{
                                            width: "100%",
                                            height: { xs: 100, md: 140 },
                                            objectFit: "cover",
                                            borderRadius: 2,
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            {/* Package Details */}
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Grid container spacing={4}>
                    {/* Left Column */}
                    <Grid item size={{ xs: 12, md: 8 }}>
                        {/* Header */}
                        <Box sx={{ mb: 4 }}>
                            {pkg?.popular && (
                                <Chip
                                    label="MOST POPULAR"
                                    sx={{
                                        bgcolor: "#4caf50",
                                        color: "white",
                                        fontWeight: "bold",
                                        mb: 2,
                                        fontSize: "0.7rem",
                                    }}
                                />
                            )}
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                gutterBottom
                            >
                                {pkg?.title || "Tropical Paradise Escape"}
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 2,
                                    flexWrap: "wrap",
                                    mb: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 0.5,
                                    }}
                                >
                                    <Schedule
                                        sx={{ fontSize: 20, color: "#4caf50" }}
                                    />
                                    <Typography variant="body2">
                                        {pkg?.duration || "5 Days / 4 Nights"}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 0.5,
                                    }}
                                >
                                    <People
                                        sx={{ fontSize: 20, color: "#4caf50" }}
                                    />
                                    <Typography variant="body2">
                                        2-6 People
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 0.5,
                                    }}
                                >
                                    <Star
                                        sx={{ fontSize: 20, color: "#4caf50" }}
                                    />
                                    <Typography variant="body2">
                                        4.9 Rating
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 3 }} />

                        {/* Overview */}
                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Package Overview
                            </Typography>
                            <Typography
                                variant="body2"
                                paragraph
                                color="text.secondary"
                            >
                                Embark on an unforgettable journey to paradise
                                with our carefully curated vacation package.
                                Experience pristine beaches, crystal-clear
                                waters, and thrilling adventures in one of the
                                world's most beautiful destinations.
                            </Typography>
                            <Typography
                                variant="body2"
                                paragraph
                                color="text.secondary"
                            >
                                This all-inclusive package combines luxury
                                accommodation, exciting activities, delicious
                                cuisine, and personalized service to create the
                                perfect tropical getaway. Whether you're seeking
                                adventure, relaxation, or a bit of both, this
                                package has something for everyone.
                            </Typography>
                        </Box>

                        {/* Itinerary */}
                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Day-by-Day Itinerary
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 3 }}
                            >
                                Your adventure unfolds day by day
                            </Typography>
                            {itinerary.map((item, index) => (
                                <Accordion
                                    key={index}
                                    expanded={activeDay === index}
                                    onChange={() =>
                                        setActiveDay(
                                            activeDay === index ? -1 : index
                                        )
                                    }
                                    sx={{ mb: 2 }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMore />}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2,
                                                width: "100%",
                                            }}
                                        >
                                            <Chip
                                                label={item.day}
                                                sx={{
                                                    bgcolor: "#4caf50",
                                                    color: "white",
                                                    fontWeight: "bold",
                                                    fontSize: "0.7rem",
                                                }}
                                            />
                                            <Typography
                                                variant="subtitle1"
                                                fontWeight="bold"
                                            >
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <List>
                                            {item.activities.map(
                                                (activity, idx) => (
                                                    <ListItem key={idx}>
                                                        <ListItemIcon>
                                                            <CheckCircle
                                                                sx={{
                                                                    color: "#4caf50",
                                                                }}
                                                            />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={
                                                                <Typography variant="body2">
                                                                    {activity}
                                                                </Typography>
                                                            }
                                                        />
                                                    </ListItem>
                                                )
                                            )}
                                        </List>
                                        <Chip
                                            icon={<Restaurant />}
                                            label={item.meals}
                                            variant="outlined"
                                            size="small"
                                            sx={{ mt: 2, fontSize: "0.7rem" }}
                                        />
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>

                        {/* Inclusions & Exclusions */}
                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                gutterBottom
                            >
                                What's Included
                            </Typography>
                            <Grid container spacing={2} sx={{ mb: 4 }}>
                                {inclusions.map((item, index) => (
                                    <Grid
                                        item
                                        size={{ xs: 12, sm: 6 }}
                                        key={index}
                                    >
                                        <Paper elevation={2} sx={{ p: 2 }}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    gap: 2,
                                                    alignItems: "start",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        color: "#4caf50",
                                                        fontSize: 32,
                                                    }}
                                                >
                                                    {item.icon}
                                                </Box>
                                                <Box>
                                                    <Typography
                                                        variant="subtitle1"
                                                        fontWeight="bold"
                                                    >
                                                        {item.text}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                        sx={{
                                                            fontSize: "0.7rem",
                                                        }}
                                                    >
                                                        {item.desc}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>

                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                            >
                                What's Not Included
                            </Typography>
                            <List>
                                {exclusions.map((item, index) => (
                                    <ListItem key={index}>
                                        <ListItemText
                                            primary={
                                                <Typography variant="body2">
                                                    • {item}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>

                        {/* Reviews */}
                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Guest Reviews
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 3, fontSize: "0.7rem" }}
                            >
                                What our travelers say about this package
                            </Typography>
                            {reviews.map((review, index) => (
                                <Paper
                                    key={index}
                                    elevation={2}
                                    sx={{ p: 3, mb: 2 }}
                                >
                                    <Box
                                        sx={{ display: "flex", gap: 2, mb: 2 }}
                                    >
                                        <Avatar
                                            sx={{
                                                bgcolor: "#4caf50",
                                                width: 48,
                                                height: 48,
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
                                                    alignItems: "center",
                                                    gap: 1,
                                                }}
                                            >
                                                <Rating
                                                    value={review.rating}
                                                    readOnly
                                                    size="small"
                                                />
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ fontSize: "0.7rem" }}
                                                >
                                                    {review.date}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ fontSize: "0.8rem" }}
                                    >
                                        {review.comment}
                                    </Typography>
                                </Paper>
                            ))}
                        </Box>

                        {/* FAQs */}
                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Frequently Asked Questions
                            </Typography>
                            {faqs.map((faq, index) => (
                                <Accordion key={index} sx={{ mb: 1 }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMore />}
                                    >
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight="bold"
                                        >
                                            {faq.question}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ fontSize: "0.8rem" }}
                                        >
                                            {faq.answer}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
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
                                border: "2px solid #4caf50",
                            }}
                        >
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Book This Package
                            </Typography>
                            <Typography
                                variant="h4"
                                color="#4caf50"
                                fontWeight="bold"
                                gutterBottom
                            >
                                {pkg?.price || "$1,299"}
                                <Typography
                                    component="span"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    /person
                                </Typography>
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 3, fontSize: "0.7rem" }}
                            >
                                Based on double occupancy
                            </Typography>

                            <Divider sx={{ my: 3 }} />

                            {/* Booking Form */}
                            <Box sx={{ mb: 3 }}>
                                <TextField
                                    fullWidth
                                    label="Select Date"
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) =>
                                        setSelectedDate(e.target.value)
                                    }
                                    InputLabelProps={{ shrink: true }}
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="Number of Guests"
                                    type="number"
                                    value={guestCount}
                                    onChange={(e) =>
                                        setGuestCount(e.target.value)
                                    }
                                    inputProps={{ min: 1, max: 6 }}
                                />
                            </Box>

                            <Divider sx={{ my: 3 }} />

                            {/* Quick Info */}
                            <List dense sx={{ mb: 2 }}>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircle
                                            sx={{ color: "#4caf50" }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                variant="body2"
                                                sx={{ fontSize: "0.7rem" }}
                                            >
                                                Instant confirmation
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircle
                                            sx={{ color: "#4caf50" }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                variant="body2"
                                                sx={{ fontSize: "0.7rem" }}
                                            >
                                                Free cancellation (30 days)
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircle
                                            sx={{ color: "#4caf50" }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                variant="body2"
                                                sx={{ fontSize: "0.7rem" }}
                                            >
                                                Flexible payment options
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircle
                                            sx={{ color: "#4caf50" }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                variant="body2"
                                                sx={{ fontSize: "0.7rem" }}
                                            >
                                                24/7 customer support
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </List>

                            <Button
                                variant="contained"
                                fullWidth
                                size="large"
                                sx={{
                                    mb: 2,
                                    py: 1.5,
                                    bgcolor: "#4caf50",
                                    "&:hover": { bgcolor: "#45a049" },
                                    fontSize: "0.8rem",
                                }}
                            >
                                Book Now
                            </Button>
                            <Button
                                variant="outlined"
                                fullWidth
                                sx={{
                                    borderColor: "#4caf50",
                                    color: "#4caf50",
                                    fontSize: "0.7rem",
                                }}
                            >
                                Inquire About This Package
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            {/* Contact Section */}
            <Box sx={{ bgcolor: "#f5f5f5", py: 6 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        textAlign="center"
                        gutterBottom
                    >
                        Need Assistance?
                    </Typography>
                    <Typography
                        variant="body2"
                        textAlign="center"
                        color="text.secondary"
                        sx={{ mb: 4 }}
                    >
                        Our travel experts are here to help
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item size={{ xs: 12, sm: 4 }}>
                            <Paper
                                elevation={2}
                                sx={{ p: 3, textAlign: "center" }}
                            >
                                <Phone
                                    sx={{
                                        fontSize: 36,
                                        color: "#4caf50",
                                        mb: 2,
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    Call Us
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ fontSize: "0.7rem" }}
                                >
                                    +1 (555) 987-6543
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
                                        fontSize: 36,
                                        color: "#4caf50",
                                        mb: 2,
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    Email Us
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ fontSize: "0.7rem" }}
                                >
                                    packages@adventure.com
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <FooterThree />
        </Box>
    );
}

export default PackageDetailsThree;
