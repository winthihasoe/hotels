import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    LinearProgress,
    Chip,
    Avatar,
    Paper,
} from "@mui/material";
import {
    Waves,
    BeachAccess,
    Sailing,
    People,
    Favorite,
    LocalDining,
    EmojiEvents,
    VerifiedUser,
    Star,
    Pool,
    Spa,
    FitnessCenter,
    Restaurant,
    Facebook,
    Twitter,
    Instagram,
} from "@mui/icons-material";
import NavbarTwo from "../../Components/NavbarTwo";
import FooterTwo from "../../Components/FooterTwo";

function AboutTwo() {
    const stats = [
        { number: "20+", label: "Years of Excellence" },
        { number: "300+", label: "Beachfront Rooms" },
        { number: "100K+", label: "Happy Guests" },
        { number: "97%", label: "Guest Satisfaction" },
    ];

    const values = [
        {
            icon: <Waves sx={{ fontSize: 50 }} />,
            title: "Ocean Connection",
            desc: "We celebrate the beauty and majesty of the ocean, creating experiences that connect you with the sea.",
        },
        {
            icon: <People sx={{ fontSize: 50 }} />,
            title: "Guest-Centric",
            desc: "Your happiness is our priority. We go above and beyond to ensure every stay is memorable.",
        },
        {
            icon: <Favorite sx={{ fontSize: 50 }} />,
            title: "Relaxation",
            desc: "Creating a peaceful sanctuary where guests can unwind and rejuvenate by the sea.",
        },
        {
            icon: <LocalDining sx={{ fontSize: 50 }} />,
            title: "Culinary Excellence",
            desc: "Fresh seafood and coastal cuisine that celebrates the flavors of the ocean.",
        },
    ];

    const team = [
        {
            name: "David Martinez",
            position: "Resort Director",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
            description: "30 years in luxury hospitality",
        },
        {
            name: "Lisa Thompson",
            position: "Executive Chef",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300",
            description: "Award-winning seafood specialist",
        },
        {
            name: "Robert Chen",
            position: "Guest Experience Manager",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300",
            description: "Passionate about exceptional service",
        },
        {
            name: "Maria Santos",
            position: "Spa & Wellness Director",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300",
            description: "Marine therapy & wellness expert",
        },
    ];

    const services = [
        {
            icon: <Pool sx={{ fontSize: 40 }} />,
            title: "Infinity Pools",
            desc: "Stunning oceanfront pools with breathtaking views",
        },
        {
            icon: <Restaurant sx={{ fontSize: 40 }} />,
            title: "Beachfront Dining",
            desc: "Fresh seafood and coastal cuisine experiences",
        },
        {
            icon: <Spa sx={{ fontSize: 40 }} />,
            title: "Ocean Spa",
            desc: "Marine-inspired treatments and therapies",
        },
        {
            icon: <FitnessCenter sx={{ fontSize: 40 }} />,
            title: "Water Activities",
            desc: "Surfing, diving, sailing, and beach sports",
        },
    ];

    const achievements = [
        { skill: "Guest Satisfaction", value: 97 },
        { skill: "Service Quality", value: 96 },
        { skill: "Facility Excellence", value: 98 },
        { skill: "Dining Experience", value: 95 },
    ];

    const awards = [
        {
            icon: <EmojiEvents />,
            label: "Best Beach Resort 2024",
            color: "#ffd700",
        },
        {
            icon: <Star />,
            label: "5-Star Rating",
            color: "#1976d2",
        },
        {
            icon: <VerifiedUser />,
            label: "Safety Certified",
            color: "#4caf50",
        },
        {
            icon: <Waves />,
            label: "Eco Beach Certified",
            color: "#00acc1",
        },
    ];

    const milestones = [
        { year: "2004", event: "Seaside Paradise Resort Opened" },
        { year: "2008", event: "Expanded to 300 Rooms" },
        { year: "2012", event: "Awarded 5-Star Rating" },
        { year: "2018", event: "Launched Marine Conservation Program" },
        { year: "2024", event: "Best Beach Resort Award" },
    ];

    const features = [
        "Private Beach Access",
        "Infinity Pool",
        "Water Sports Center",
        "Beachfront Restaurant",
        "Ocean Spa",
        "Kids Club",
        "Sunset Bar",
        "Wedding Pavilion",
    ];

    return (
        <Box>
            <NavbarTwo />

            {/* Hero Section */}
            <Box
                sx={{
                    height: "60vh",
                    background:
                        "linear-gradient(rgba(25, 118, 210, 0.7), rgba(25, 118, 210, 0.7)), url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200') center/cover",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <Container>
                    <Chip
                        icon={<Waves />}
                        label="OUR STORY"
                        sx={{
                            bgcolor: "white",
                            color: "#1976d2",
                            mb: 2,
                            fontWeight: "bold",
                            fontSize: "1rem",
                            py: 2.5,
                        }}
                    />
                    <Typography
                        variant="h2"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
                    >
                        About Seaside Paradise
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ maxWidth: 700, mx: "auto", lineHeight: 1.8 }}
                    >
                        Where luxury meets the ocean, creating unforgettable
                        beachfront experiences since 2004
                    </Typography>
                </Container>
            </Box>

            {/* Stats Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    {stats.map((stat, index) => (
                        <Grid item size={{ xs: 6, md: 3 }} key={index}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography
                                    variant="h3"
                                    fontWeight="bold"
                                    sx={{
                                        background:
                                            "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                    gutterBottom
                                >
                                    {stat.number}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                    {stat.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Our Story Section */}
            <Box
                sx={{
                    background:
                        "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                    py: 8,
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600"
                                alt="Seaside Paradise Resort"
                                sx={{
                                    width: "100%",
                                    borderRadius: 3,
                                    boxShadow:
                                        "0 12px 24px rgba(25, 118, 210, 0.3)",
                                }}
                            />
                        </Grid>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Chip
                                label="SINCE 2004"
                                sx={{
                                    bgcolor: "#1976d2",
                                    color: "white",
                                    mb: 2,
                                    fontWeight: "bold",
                                }}
                            />
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                gutterBottom
                                sx={{ color: "#1976d2" }}
                            >
                                Our Journey
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                paragraph
                                sx={{ lineHeight: 1.8 }}
                            >
                                Seaside Paradise Resort began as a dream to
                                create the perfect beachfront escape. Founded in
                                2004, we've transformed a pristine stretch of
                                coastline into a world-class luxury resort that
                                celebrates the beauty of the ocean.
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                paragraph
                                sx={{ lineHeight: 1.8 }}
                            >
                                Our commitment to exceptional service and
                                sustainable practices has made us a leading
                                destination for travelers seeking both
                                relaxation and adventure by the sea. We've
                                earned numerous accolades, including the
                                prestigious Best Beach Resort award.
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ lineHeight: 1.8 }}
                            >
                                Today, we welcome guests from around the globe,
                                offering them not just a vacation, but a
                                transformative ocean experience that reconnects
                                them with the natural beauty of the sea.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Core Values */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Chip
                        icon={<Waves />}
                        label="OUR VALUES"
                        sx={{
                            bgcolor: "#1976d2",
                            color: "white",
                            mb: 2,
                            fontWeight: "bold",
                            fontSize: "1rem",
                            py: 2.5,
                        }}
                    />
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: "#1976d2" }}
                    >
                        What Drives Us
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        The principles that guide our oceanfront hospitality
                    </Typography>
                </Box>
                <Grid container spacing={4}>
                    {values.map((value, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    textAlign: "center",
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                        boxShadow:
                                            "0 12px 24px rgba(25, 118, 210, 0.3)",
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Box
                                        sx={{
                                            color: "#1976d2",
                                            mb: 2,
                                        }}
                                    >
                                        {value.icon}
                                    </Box>
                                    <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                        gutterBottom
                                        color="#1976d2"
                                    >
                                        {value.title}
                                    </Typography>
                                    <Typography color="text.secondary">
                                        {value.desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Services Section */}
            <Box
                sx={{
                    background:
                        "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                    py: 8,
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: "center", mb: 6 }}>
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ color: "#1976d2" }}
                        >
                            Resort Amenities
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            Everything you need for a perfect beach vacation
                        </Typography>
                    </Box>
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
                                        height: "100%",
                                        textAlign: "center",
                                        p: 4,
                                        bgcolor: "white",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            bgcolor: "#1976d2",
                                            color: "white",
                                            "& .MuiSvgIcon-root": {
                                                color: "white",
                                            },
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: "#1976d2",
                                            mb: 2,
                                        }}
                                    >
                                        {service.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {service.desc}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Achievements & Awards */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={6}>
                    {/* Achievements */}
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ color: "#1976d2" }}
                        >
                            Our Performance
                        </Typography>
                        <Typography
                            color="text.secondary"
                            paragraph
                            sx={{ mb: 4 }}
                        >
                            Delivering excellence in every aspect of your stay
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
                                    <Typography fontWeight="bold">
                                        {achievement.skill}
                                    </Typography>
                                    <Typography
                                        fontWeight="bold"
                                        color="#1976d2"
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
                                        bgcolor: "#e0e0e0",
                                        "& .MuiLinearProgress-bar": {
                                            background:
                                                "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
                                            borderRadius: 5,
                                        },
                                    }}
                                />
                            </Box>
                        ))}
                    </Grid>

                    {/* Awards */}
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ color: "#1976d2" }}
                        >
                            Awards & Recognition
                        </Typography>
                        <Typography
                            color="text.secondary"
                            paragraph
                            sx={{ mb: 4 }}
                        >
                            Honored for excellence in hospitality
                        </Typography>
                        <Grid container spacing={3}>
                            {awards.map((award, index) => (
                                <Grid item size={{ xs: 6 }} key={index}>
                                    <Card
                                        sx={{
                                            textAlign: "center",
                                            p: 3,
                                            transition: "all 0.3s",
                                            "&:hover": {
                                                transform: "scale(1.05)",
                                                boxShadow:
                                                    "0 8px 16px rgba(25, 118, 210, 0.3)",
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                fontSize: 50,
                                                color: award.color,
                                                mb: 2,
                                            }}
                                        >
                                            {award.icon}
                                        </Box>
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight="bold"
                                        >
                                            {award.label}
                                        </Typography>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            {/* Timeline */}
            <Box
                sx={{
                    background:
                        "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                    py: 8,
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: "center", mb: 6 }}>
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ color: "#1976d2" }}
                        >
                            Our Milestones
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            Two decades of beachfront excellence
                        </Typography>
                    </Box>
                    <Box sx={{ position: "relative" }}>
                        {milestones.map((milestone, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 4,
                                    flexDirection: { xs: "column", md: "row" },
                                    textAlign: { xs: "center", md: "left" },
                                }}
                            >
                                <Box
                                    sx={{
                                        minWidth: { xs: "auto", md: 100 },
                                        mr: { xs: 0, md: 4 },
                                        mb: { xs: 2, md: 0 },
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                        color="#1976d2"
                                    >
                                        {milestone.year}
                                    </Typography>
                                </Box>
                                <Avatar
                                    sx={{
                                        bgcolor: "#1976d2",
                                        width: 50,
                                        height: 50,
                                        mr: { xs: 0, md: 3 },
                                        mb: { xs: 2, md: 0 },
                                    }}
                                >
                                    <Waves />
                                </Avatar>
                                <Paper
                                    elevation={3}
                                    sx={{ flexGrow: 1, p: 3, width: "100%" }}
                                >
                                    <Typography variant="h6" fontWeight="bold">
                                        {milestone.event}
                                    </Typography>
                                </Paper>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Features Grid */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: "#1976d2" }}
                    >
                        Resort Features
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        World-class facilities at your fingertips
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    {features.map((feature, index) => (
                        <Grid item size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                            <Chip
                                icon={<BeachAccess />}
                                label={feature}
                                sx={{
                                    width: "100%",
                                    py: 3,
                                    fontSize: "1rem",
                                    bgcolor: "#e3f2fd",
                                    color: "#1976d2",
                                    fontWeight: "bold",
                                    "&:hover": {
                                        bgcolor: "#1976d2",
                                        color: "white",
                                    },
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Team Section */}
            <Box
                sx={{
                    background:
                        "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                    py: 8,
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: "center", mb: 6 }}>
                        <Chip
                            icon={<People />}
                            label="MEET THE TEAM"
                            sx={{
                                bgcolor: "#1976d2",
                                color: "white",
                                mb: 2,
                                fontWeight: "bold",
                                fontSize: "1rem",
                                py: 2.5,
                            }}
                        />
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ color: "#1976d2" }}
                        >
                            Our Leadership
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            Dedicated professionals creating memorable
                            experiences
                        </Typography>
                    </Box>
                    <Grid container spacing={4}>
                        {team.map((member, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={index}
                            >
                                <Card
                                    sx={{
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            transform: "translateY(-10px)",
                                            boxShadow:
                                                "0 12px 24px rgba(25, 118, 210, 0.3)",
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={member.image}
                                        alt={member.name}
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold"
                                            gutterBottom
                                        >
                                            {member.name}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            color="#1976d2"
                                            fontWeight="bold"
                                            gutterBottom
                                        >
                                            {member.position}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
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
                    background:
                        "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                    py: 8,
                    textAlign: "center",
                    color: "white",
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Experience Paradise Today
                    </Typography>
                    <Typography variant="h6" paragraph sx={{ mb: 4 }}>
                        Join over 100,000 guests who have discovered the magic
                        of Seaside Paradise Resort
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <Chip
                            icon={<Star />}
                            label="5-Star Rated"
                            sx={{
                                bgcolor: "white",
                                color: "#1976d2",
                                fontWeight: "bold",
                                py: 2.5,
                                fontSize: "1rem",
                            }}
                        />
                        <Chip
                            icon={<BeachAccess />}
                            label="Private Beach"
                            sx={{
                                bgcolor: "white",
                                color: "#1976d2",
                                fontWeight: "bold",
                                py: 2.5,
                                fontSize: "1rem",
                            }}
                        />
                        <Chip
                            icon={<VerifiedUser />}
                            label="Safety Certified"
                            sx={{
                                bgcolor: "white",
                                color: "#1976d2",
                                fontWeight: "bold",
                                py: 2.5,
                                fontSize: "1rem",
                            }}
                        />
                    </Box>
                </Container>
            </Box>

            <FooterTwo />
        </Box>
    );
}

export default AboutTwo;
