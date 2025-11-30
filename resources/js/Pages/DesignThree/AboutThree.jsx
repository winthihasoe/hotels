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
} from "@mui/material";
import {
    Nature,
    EmojiEvents,
    VerifiedUser,
    Groups,
    Favorite,
    TrendingUp,
    Star,
    Hiking,
    Restaurant,
    Spa,
    LocalActivity,
} from "@mui/icons-material";
import NavbarThree from "../../Components/NavbarThree";
import FooterThree from "../../Components/FooterThree";

function AboutThree() {
    const stats = [
        { number: "15+", label: "Years in Business" },
        { number: "10K+", label: "Happy Adventurers" },
        { number: "50+", label: "Activities Offered" },
        { number: "99%", label: "Guest Satisfaction" },
    ];

    const values = [
        {
            icon: <Nature sx={{ fontSize: 50 }} />,
            title: "Sustainability",
            desc: "We're committed to preserving the natural beauty around us through eco-friendly practices.",
        },
        {
            icon: <Groups sx={{ fontSize: 50 }} />,
            title: "Community",
            desc: "Building lasting relationships with guests and supporting local mountain communities.",
        },
        {
            icon: <Favorite sx={{ fontSize: 50 }} />,
            title: "Wellness",
            desc: "Promoting physical and mental well-being through nature-based experiences.",
        },
        {
            icon: <TrendingUp sx={{ fontSize: 50 }} />,
            title: "Innovation",
            desc: "Continuously improving our services while respecting traditional mountain hospitality.",
        },
    ];

    const team = [
        {
            name: "James Patterson",
            position: "Lodge Director",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
            description: "25 years mountain hospitality expert",
        },
        {
            name: "Sarah Williams",
            position: "Head Chef",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
            description: "Farm-to-table culinary specialist",
        },
        {
            name: "Michael Torres",
            position: "Adventure Guide Lead",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
            description: "Certified mountaineering instructor",
        },
        {
            name: "Emma Davis",
            position: "Wellness Director",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
            description: "Yoga & holistic health expert",
        },
    ];

    const services = [
        {
            icon: <Hiking sx={{ fontSize: 40 }} />,
            title: "Guided Adventures",
            desc: "Expert-led hiking, climbing, and exploration tours",
        },
        {
            icon: <Restaurant sx={{ fontSize: 40 }} />,
            title: "Farm-to-Table Dining",
            desc: "Organic cuisine from local mountain farms",
        },
        {
            icon: <Spa sx={{ fontSize: 40 }} />,
            title: "Wellness Retreat",
            desc: "Spa, yoga, and meditation in nature",
        },
        {
            icon: <LocalActivity sx={{ fontSize: 40 }} />,
            title: "Seasonal Activities",
            desc: "Year-round outdoor adventures and workshops",
        },
    ];

    const achievements = [
        { skill: "Guest Experience", value: 98 },
        { skill: "Sustainability Score", value: 95 },
        { skill: "Safety Standards", value: 100 },
        { skill: "Local Impact", value: 92 },
    ];

    const certifications = [
        { icon: <Nature />, label: "Green Certified", color: "#4caf50" },
        { icon: <EmojiEvents />, label: "Best Lodge 2024", color: "#ffd700" },
        {
            icon: <VerifiedUser />,
            label: "Safety Certified",
            color: "#2196f3",
        },
        { icon: <Groups />, label: "Carbon Neutral", color: "#66bb6a" },
    ];

    const milestones = [
        { year: "2009", event: "Mountain Haven Lodge Founded" },
        { year: "2012", event: "Eco-Certification Achieved" },
        { year: "2016", event: "Expanded to 50 Guest Rooms" },
        { year: "2020", event: "Carbon Neutral Operations" },
        { year: "2024", event: "Best Mountain Lodge Award" },
    ];

    return (
        <Box>
            <NavbarThree />

            {/* Hero Section */}
            <Box
                sx={{
                    height: "60vh",
                    background:
                        "linear-gradient(rgba(46, 125, 50, 0.7), rgba(46, 125, 50, 0.7)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200') center/cover",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <Container>
                    <Chip
                        label="OUR STORY"
                        sx={{
                            bgcolor: "white",
                            color: "#4caf50",
                            mb: 2,
                            fontWeight: "bold",
                        }}
                    />
                    <Typography
                        variant="h2"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
                    >
                        About Mountain Haven
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{ maxWidth: 700, mx: "auto", lineHeight: 1.8 }}
                    >
                        A sanctuary where adventure meets tranquility, nestled
                        in the heart of the Rocky Mountains
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
                                    variant="h4"
                                    fontWeight="bold"
                                    color="#4caf50"
                                    gutterBottom
                                    fontSize={{ xs: "2rem", sm: "3rem" }}
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
            <Box sx={{ bgcolor: "#f5f5f5", py: 8 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Chip
                                label="SINCE 2009"
                                sx={{
                                    bgcolor: "#4caf50",
                                    color: "white",
                                    mb: 2,
                                }}
                            />
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                gutterBottom
                                sx={{ color: "#2e7d32" }}
                            >
                                Our Journey
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                paragraph
                                sx={{ lineHeight: 1.8 }}
                            >
                                Mountain Haven Lodge was born from a simple
                                vision: to create a place where people could
                                reconnect with nature while enjoying modern
                                comforts. Founded in 2009 by a group of outdoor
                                enthusiasts, we've grown from a small 10-room
                                cabin into a premier mountain retreat.
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                paragraph
                                sx={{ lineHeight: 1.8 }}
                            >
                                Our commitment to sustainability and authentic
                                mountain experiences has earned us recognition
                                as one of the top eco-friendly lodges in North
                                America. We believe in preserving the natural
                                beauty that surrounds us for future generations.
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ lineHeight: 1.8 }}
                            >
                                Today, we welcome adventurers from around the
                                world, offering them not just a place to stay,
                                but a transformative experience that reconnects
                                them with the wild beauty of the mountains.
                            </Typography>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=600"
                                alt="Mountain Haven Lodge"
                                sx={{
                                    width: "100%",
                                    borderRadius: 2,
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Core Values */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Chip
                        label="OUR VALUES"
                        sx={{
                            bgcolor: "#4caf50",
                            color: "white",
                            mb: 2,
                        }}
                    />
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: "#2e7d32" }}
                    >
                        What We Stand For
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        The principles that guide everything we do
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
                                            "0 12px 24px rgba(76, 175, 80, 0.3)",
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Box
                                        sx={{
                                            color: "#4caf50",
                                            mb: 2,
                                        }}
                                    >
                                        {value.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                    >
                                        {value.title}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
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

            {/* Services Section */}
            <Box sx={{ bgcolor: "#f5f5f5", py: 8 }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: "center", mb: 6 }}>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ color: "#2e7d32" }}
                        >
                            Our Services
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            Everything you need for an unforgettable mountain
                            experience
                        </Typography>
                    </Box>
                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={index}
                            >
                                <Card
                                    sx={{
                                        height: "100%",
                                        textAlign: "center",
                                        bgcolor: "white",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            bgcolor: "#4caf50",
                                            color: "white",
                                            "& .MuiSvgIcon-root": {
                                                color: "white",
                                            },
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Box
                                            sx={{
                                                color: "#4caf50",
                                                mb: 2,
                                            }}
                                        >
                                            {service.icon}
                                        </Box>
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight="bold"
                                            gutterBottom
                                        >
                                            {service.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            fontSize={"0.8rem"}
                                        >
                                            {service.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Achievements & Certifications */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={6}>
                    {/* Achievements */}
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ color: "#2e7d32" }}
                        >
                            Our Excellence
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                            paragraph
                            sx={{ mb: 4 }}
                        >
                            We measure our success by the experiences we create
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
                                        fontWeight="bold"
                                        variant="subtitle2"
                                    >
                                        {achievement.skill}
                                    </Typography>
                                    <Typography
                                        fontWeight="bold"
                                        color="#4caf50"
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
                                            bgcolor: "#4caf50",
                                            borderRadius: 5,
                                        },
                                    }}
                                />
                            </Box>
                        ))}
                    </Grid>

                    {/* Certifications */}
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ color: "#2e7d32" }}
                        >
                            Certifications & Awards
                        </Typography>
                        <Typography
                            color="text.secondary"
                            paragraph
                            variant="body2"
                            sx={{ mb: 4 }}
                        >
                            Recognized for excellence and sustainability
                        </Typography>
                        <Grid container spacing={3}>
                            {certifications.map((cert, index) => (
                                <Grid item size={{ xs: 6 }} key={index}>
                                    <Card
                                        sx={{
                                            textAlign: "center",
                                            p: 3,
                                            boxShadow: 0,
                                            transition: "all 0.3s",
                                            "&:hover": {
                                                transform: "scale(1.05)",
                                                boxShadow:
                                                    "0 8px 16px rgba(0,0,0,0.2)",
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                fontSize: 50,
                                                color: cert.color,
                                                mb: 2,
                                            }}
                                        >
                                            {cert.icon}
                                        </Box>
                                        <Typography
                                            variant="subtitle2"
                                            fontWeight="bold"
                                        >
                                            {cert.label}
                                        </Typography>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            {/* Timeline */}
            <Box sx={{ bgcolor: "#f5f5f5", py: 8 }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: "center", mb: 6 }}>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ color: "#2e7d32" }}
                        >
                            Our Journey
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            Key milestones in our story
                        </Typography>
                    </Box>
                    <Box sx={{ position: "relative", pl: { xs: 2, md: 0 } }}>
                        {milestones.map((milestone, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    rowGap: 2,
                                    alignItems: "center",
                                    mb: 4,
                                    position: "relative",
                                }}
                            >
                                <Box
                                    sx={{
                                        minWidth: 100,
                                        mr: 4,
                                        textAlign: { xs: "left", md: "right" },
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="#4caf50"
                                    >
                                        {milestone.year}
                                    </Typography>
                                </Box>
                                <Avatar
                                    sx={{
                                        bgcolor: "#4caf50",
                                        width: 50,
                                        height: 50,
                                        mr: 3,
                                        display: {
                                            xs: "none",
                                            sm: "none",
                                            md: "flex",
                                        },
                                    }}
                                >
                                    <Star />
                                </Avatar>
                                <Card sx={{ flexGrow: 1, p: 2, boxShadow: 0 }}>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight="bold"
                                    >
                                        {milestone.event}
                                    </Typography>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Team Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Chip
                        label="MEET THE TEAM"
                        sx={{
                            bgcolor: "#4caf50",
                            color: "white",
                            mb: 2,
                        }}
                    />
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: "#2e7d32" }}
                    >
                        Our Leadership
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Passionate experts dedicated to your mountain experience
                    </Typography>
                </Box>
                <Grid container spacing={4}>
                    {team.map((member, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Card
                                sx={{
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                        boxShadow:
                                            "0 12px 24px rgba(76, 175, 80, 0.3)",
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{ height: 300 }}
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
                                        color="#4caf50"
                                        fontWeight="bold"
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

            {/* CTA Section */}
            <Box
                sx={{
                    background:
                        "linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)",
                    py: 8,
                    textAlign: "center",
                    color: "white",
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Ready for Your Mountain Adventure?
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 4 }}>
                        Join thousands of adventurers who have discovered the
                        magic of Mountain Haven Lodge
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
                            icon={<Groups color="green" />}
                            label="100% Eco-Friendly"
                            sx={{
                                bgcolor: "white",
                                color: "#2e7d32",
                                fontWeight: "bold",
                                fontSize: "0.7rem",
                            }}
                        />
                        <Chip
                            icon={<Star color="green" />}
                            label="5-Star Rated"
                            sx={{
                                bgcolor: "white",
                                color: "#2e7d32",
                                fontWeight: "bold",
                                fontSize: "0.7rem",
                            }}
                        />
                        <Chip
                            icon={<VerifiedUser color="green" />}
                            label="Safety Certified"
                            sx={{
                                bgcolor: "white",
                                color: "#2e7d32",
                                fontWeight: "bold",
                                fontSize: "0.7rem",
                            }}
                        />
                    </Box>
                </Container>
            </Box>

            <FooterThree />
        </Box>
    );
}

export default AboutThree;
