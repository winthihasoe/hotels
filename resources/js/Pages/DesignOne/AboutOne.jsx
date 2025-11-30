import React from "react";
import NavbarOne from "../../Components/NavbarOne";
import FooterOne from "../../Components/FooterOne";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Avatar,
    LinearProgress,
    Button,
    Paper,
} from "@mui/material";
import {
    EmojiEvents,
    People,
    Star,
    Verified,
    Hotel,
    RestaurantMenu,
    Spa,
    BusinessCenter,
} from "@mui/icons-material";

function AboutOne() {
    const stats = [
        { number: "25+", label: "Years of Excellence" },
        { number: "500+", label: "Luxury Rooms" },
        { number: "50K+", label: "Happy Guests" },
        { number: "98%", label: "Satisfaction Rate" },
    ];

    const team = [
        {
            name: "Jonathan Mitchell",
            position: "General Manager",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300",
            description: "30+ years in luxury hospitality",
        },
        {
            name: "Sophia Anderson",
            position: "Head Chef",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300",
            description: "Michelin-starred culinary expert",
        },
        {
            name: "Michael Chen",
            position: "Guest Relations Director",
            image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300",
            description: "Dedicated to exceptional service",
        },
        {
            name: "Isabella Rodriguez",
            position: "Spa & Wellness Manager",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300",
            description: "Expert in holistic wellness",
        },
    ];

    const values = [
        {
            icon: <Star sx={{ fontSize: 50 }} />,
            title: "Excellence",
            desc: "We strive for perfection in every detail, ensuring unforgettable experiences.",
        },
        {
            icon: <People sx={{ fontSize: 50 }} />,
            title: "Hospitality",
            desc: "Our guests are family, treated with warmth, respect, and genuine care.",
        },
        {
            icon: <Verified sx={{ fontSize: 50 }} />,
            title: "Integrity",
            desc: "We uphold the highest standards of honesty and ethical practices.",
        },
        {
            icon: <EmojiEvents sx={{ fontSize: 50 }} />,
            title: "Innovation",
            desc: "Continuously evolving to exceed expectations and set new standards.",
        },
    ];

    const services = [
        {
            icon: <Hotel sx={{ fontSize: 40 }} />,
            title: "Luxury Accommodation",
            desc: "500+ elegantly designed rooms and suites",
        },
        {
            icon: <RestaurantMenu sx={{ fontSize: 40 }} />,
            title: "Fine Dining",
            desc: "5 world-class restaurants and bars",
        },
        {
            icon: <Spa sx={{ fontSize: 40 }} />,
            title: "Spa & Wellness",
            desc: "Full-service spa and fitness center",
        },
        {
            icon: <BusinessCenter sx={{ fontSize: 40 }} />,
            title: "Business Facilities",
            desc: "State-of-the-art meeting and event spaces",
        },
    ];

    const achievements = [
        { skill: "Guest Satisfaction", value: 98 },
        { skill: "Staff Excellence", value: 95 },
        { skill: "Facility Quality", value: 97 },
        { skill: "Service Innovation", value: 92 },
    ];

    return (
        <Box>
            <NavbarOne />

            {/* Hero Section */}
            <Box
                sx={{
                    height: "70vh",
                    background:
                        "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200') center/cover",
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
                    >
                        About Grand Royale Hotel
                    </Typography>
                    <Typography variant="subtitle1" sx={{ maxWidth: 700 }}>
                        A legacy of luxury, service, and unforgettable
                        experiences since 1999
                    </Typography>
                </Container>
            </Box>

            {/* Stats Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    {stats.map((stat, index) => (
                        <Grid item size={{ xs: 6, md: 3 }} key={index}>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    fontSize={{ xs: "2rem", sm: "3rem" }}
                                    fontWeight="bold"
                                    color="#d4af37"
                                    gutterBottom
                                >
                                    {stat.number}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    fontSize={{ xs: "1rem", sm: "1.1rem" }}
                                    color="text.secondary"
                                >
                                    {stat.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Our Story Section */}
            <Box sx={{ bgcolor: "#f5f5f5", py: 10 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600"
                                alt="Hotel History"
                                sx={{
                                    width: "100%",
                                    borderRadius: 2,
                                    boxShadow: 3,
                                }}
                            />
                        </Grid>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography
                                variant="overline"
                                sx={{ color: "#d4af37", fontWeight: "bold" }}
                            >
                                Our Story
                            </Typography>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                            >
                                A Legacy of Excellence
                            </Typography>
                            <Typography
                                variant="body2"
                                paragraph
                                color="text.secondary"
                            >
                                Founded in 1999, Grand Royale Hotel has been at
                                the forefront of luxury hospitality for over two
                                decades. What began as a vision to create an
                                unparalleled guest experience has evolved into a
                                world-renowned destination.
                            </Typography>
                            <Typography
                                variant="body2"
                                paragraph
                                color="text.secondary"
                            >
                                Our commitment to excellence, attention to
                                detail, and dedication to personalized service
                                have earned us numerous accolades and the
                                loyalty of guests from around the globe.
                            </Typography>
                            <Typography
                                variant="body2"
                                paragraph
                                color="text.secondary"
                            >
                                Today, we continue to set the standard for
                                luxury accommodation, combining timeless
                                elegance with modern amenities to create
                                experiences that exceed expectations.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Values Section */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Typography
                    variant="h3"
                    sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
                    textAlign="center"
                    fontWeight="bold"
                    gutterBottom
                >
                    Our Core Values
                </Typography>
                <Typography
                    variant="body2"
                    textAlign="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    The principles that guide everything we do
                </Typography>
                <Grid container spacing={4}>
                    {values.map((value, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    textAlign: "center",
                                    p: 3,
                                    transition:
                                        "transform 0.3s, box-shadow 0.3s",
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <CardContent>
                                    <Box sx={{ color: "#d4af37", mb: 2 }}>
                                        {value.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        fontWeight="bold"
                                    >
                                        {value.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {value.desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Services Overview */}
            <Box sx={{ bgcolor: "#1a1a1a", color: "white", py: 10 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        textAlign="center"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
                    >
                        World-Class Services
                    </Typography>
                    <Typography
                        variant="body2"
                        textAlign="center"
                        sx={{ mb: 6, color: "#b0b0b0" }}
                    >
                        Everything you need for an exceptional stay
                    </Typography>
                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={index}
                            >
                                <Paper
                                    sx={{
                                        bgcolor: "#2a2a2a",
                                        color: "white",
                                        p: 4,
                                        textAlign: "center",
                                        height: "100%",
                                    }}
                                >
                                    <Box sx={{ color: "#d4af37", mb: 2 }}>
                                        {service.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        fontWeight="bold"
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "#b0b0b0" }}
                                    >
                                        {service.desc}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Achievements Section */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="overline"
                            sx={{ color: "#d4af37", fontWeight: "bold" }}
                        >
                            Our Achievements
                        </Typography>
                        <Typography
                            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
                            variant="h3"
                            fontWeight="bold"
                            gutterBottom
                        >
                            Recognized Excellence
                        </Typography>
                        <Typography
                            variant="body2"
                            paragraph
                            color="text.secondary"
                        >
                            Our dedication to providing exceptional experiences
                            has been recognized with numerous awards and
                            certifications from leading hospitality
                            organizations worldwide.
                        </Typography>
                        {achievements.map((achievement, index) => (
                            <Box key={index} sx={{ mb: 3 }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mb: 1,
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        fontWeight="bold"
                                    >
                                        {achievement.skill}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        fontWeight="bold"
                                        color="#d4af37"
                                    >
                                        {achievement.value}%
                                    </Typography>
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={achievement.value}
                                    sx={{
                                        height: 10,
                                        borderRadius: 5,
                                        bgcolor: "#f0f0f0",
                                        "& .MuiLinearProgress-bar": {
                                            bgcolor: "#d4af37",
                                        },
                                    }}
                                />
                            </Box>
                        ))}
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600"
                            alt="Awards"
                            sx={{
                                width: "100%",
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* Team Section */}
            <Box sx={{ bgcolor: "#f5f5f5", py: 10 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        textAlign="center"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
                    >
                        Meet Our Leadership Team
                    </Typography>
                    <Typography
                        variant="body2"
                        textAlign="center"
                        color="text.secondary"
                        sx={{ mb: 6 }}
                    >
                        Experienced professionals dedicated to your comfort
                    </Typography>
                    <Grid container spacing={4} justifyContent={"center"}>
                        {team.map((member, index) => (
                            <Grid
                                item
                                size={{ xs: 10, sm: 6, md: 3 }}
                                key={index}
                            >
                                <Card
                                    sx={{
                                        textAlign: "center",
                                        transition: "transform 0.3s",
                                        "&:hover": { transform: "scale(1.05)" },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={member.image}
                                        alt={member.name}
                                        sx={{
                                            width: "100%",
                                            height: 300,
                                            objectFit: "cover",
                                        }}
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold"
                                            gutterBottom
                                            fontFamily={"Poppins"}
                                        >
                                            {member.name}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            color="#d4af37"
                                            fontFamily={"Poppins"}
                                        >
                                            {member.position}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                            fontFamily={"Poppins"}
                                        >
                                            {member.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box
                sx={{
                    bgcolor: "#d4af37",
                    color: "white",
                    py: 8,
                    textAlign: "center",
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        variant="h3"
                        fontSize={{ xs: "2rem", sm: "3rem" }}
                        fontWeight="bold"
                        gutterBottom
                    >
                        Experience Grand Royale Hotel
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 4 }}>
                        Join thousands of satisfied guests who have made us
                        their preferred destination
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
                                color: "#d4af37",
                                px: 4,
                                py: 1.5,
                                fontSize: { xs: "0.8rem", md: "0.9rem" },
                                fontFamily: "Poppins",
                                "&:hover": { bgcolor: "#f0f0f0" },
                            }}
                        >
                            Contact Us
                        </Button>
                    </Box>
                </Container>
            </Box>

            <FooterOne />
        </Box>
    );
}

export default AboutOne;
