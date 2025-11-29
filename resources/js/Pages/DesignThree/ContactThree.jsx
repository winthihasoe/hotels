import React, { useState } from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    Paper,
    Chip,
} from "@mui/material";
import {
    Phone,
    Email,
    LocationOn,
    AccessTime,
    Send,
    Nature,
    EmojiEvents,
    VerifiedUser,
    Facebook,
    Twitter,
    Instagram,
    YouTube,
} from "@mui/icons-material";
import NavbarThree from "../../Components/NavbarThree";
import FooterThree from "../../Components/FooterThree";

function ContactThree() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        guests: "",
        checkin: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission logic here
    };

    const contactInfo = [
        {
            icon: <Phone sx={{ fontSize: 50, color: "#4caf50" }} />,
            title: "Call Us",
            details: ["+1 (555) 123-4567", "+1 (555) 890-1234"],
            subtitle: "Available 24/7",
        },
        {
            icon: <Email sx={{ fontSize: 50, color: "#4caf50" }} />,
            title: "Email Us",
            details: ["info@mountainhaven.com", "bookings@mountainhaven.com"],
            subtitle: "Response within 2 hours",
        },
        {
            icon: <LocationOn sx={{ fontSize: 50, color: "#4caf50" }} />,
            title: "Visit Us",
            details: ["Mountain View Road", "Rocky Mountains, CO 80000"],
            subtitle: "GPS Coordinates Available",
        },
        {
            icon: <AccessTime sx={{ fontSize: 50, color: "#4caf50" }} />,
            title: "Check-in Hours",
            details: ["Check-in: 3:00 PM", "Check-out: 11:00 AM"],
            subtitle: "Flexible timing available",
        },
    ];

    const certifications = [
        { icon: <Nature />, label: "Eco-Certified" },
        { icon: <EmojiEvents />, label: "Award Winner 2024" },
        { icon: <VerifiedUser />, label: "Safety Certified" },
    ];

    const socialLinks = [
        { icon: <Facebook />, label: "Facebook", url: "#", color: "#1877f2" },
        { icon: <Twitter />, label: "Twitter", url: "#", color: "#1da1f2" },
        {
            icon: <Instagram />,
            label: "Instagram",
            url: "#",
            color: "#e4405f",
        },
        { icon: <YouTube />, label: "YouTube", url: "#", color: "#ff0000" },
    ];

    return (
        <Box>
            <NavbarThree />

            {/* Hero Section */}
            <Box
                sx={{
                    height: "55vh",
                    background:
                        "linear-gradient(rgba(46, 125, 50, 0.7), rgba(46, 125, 50, 0.7)), url('https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200') center/cover",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <Container>
                    <Chip
                        label="GET IN TOUCH"
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
                        sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
                    >
                        Contact Mountain Haven
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ maxWidth: 700, mx: "auto", lineHeight: 1.6 }}
                    >
                        Your adventure begins with a conversation. Let's plan
                        your perfect mountain escape together.
                    </Typography>
                </Container>
            </Box>

            {/* Contact Info Cards */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    {contactInfo.map((info, index) => (
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
                                <CardContent sx={{ py: 4 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            mb: 2,
                                        }}
                                    >
                                        {info.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                    >
                                        {info.title}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color="#4caf50"
                                        fontWeight="bold"
                                        display="block"
                                        sx={{ mb: 2 }}
                                    >
                                        {info.subtitle}
                                    </Typography>
                                    {info.details.map((detail, idx) => (
                                        <Typography
                                            key={idx}
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mt: 1 }}
                                        >
                                            {detail}
                                        </Typography>
                                    ))}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Main Contact Section */}
            <Box sx={{ bgcolor: "#f5f5f5", py: 8 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        {/* Contact Form */}
                        <Grid item size={{ xs: 12, md: 7 }}>
                            <Paper elevation={3} sx={{ p: 4 }}>
                                <Typography
                                    variant="h4"
                                    fontWeight="bold"
                                    gutterBottom
                                    sx={{ color: "#2e7d32" }}
                                >
                                    Send Us a Message
                                </Typography>
                                <Typography
                                    color="text.secondary"
                                    paragraph
                                    sx={{ mb: 4 }}
                                >
                                    Planning your mountain adventure? Fill out
                                    the form below and our team will respond
                                    within 2 hours during business hours.
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Full Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Phone Number"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Number of Guests"
                                                name="guests"
                                                type="number"
                                                value={formData.guests}
                                                onChange={handleChange}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item size={{ xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                label="Preferred Check-in Date"
                                                name="checkin"
                                                type="date"
                                                value={formData.checkin}
                                                onChange={handleChange}
                                                variant="outlined"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                        <Grid item size={{ xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                label="Your Message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                multiline
                                                rows={5}
                                                variant="outlined"
                                                placeholder="Tell us about your plans, special requests, or any questions..."
                                            />
                                        </Grid>
                                        <Grid item size={{ xs: 12 }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                endIcon={<Send />}
                                                fullWidth
                                                sx={{
                                                    bgcolor: "#4caf50",
                                                    color: "white",
                                                    py: 1.5,
                                                    fontSize: "1.1rem",
                                                    "&:hover": {
                                                        bgcolor: "#45a049",
                                                    },
                                                }}
                                            >
                                                Send Message
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>

                        {/* Map & Additional Info */}
                        <Grid item size={{ xs: 12, md: 5 }}>
                            <Box
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 3,
                                }}
                            >
                                {/* Map */}
                                <Paper
                                    elevation={3}
                                    sx={{
                                        overflow: "hidden",
                                        flexGrow: 1,
                                        minHeight: 350,
                                    }}
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-105.02058455000001!3d39.76420845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                                        width="100%"
                                        height="350"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        title="Mountain Haven Lodge Location"
                                    ></iframe>
                                </Paper>

                                {/* Certifications */}
                                <Paper elevation={3} sx={{ p: 3 }}>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                        textAlign="center"
                                    >
                                        Our Certifications
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-around",
                                            mt: 2,
                                        }}
                                    >
                                        {certifications.map((cert, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    textAlign: "center",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        color: "#4caf50",
                                                        mb: 1,
                                                    }}
                                                >
                                                    {cert.icon}
                                                </Box>
                                                <Typography
                                                    variant="caption"
                                                    fontWeight="bold"
                                                >
                                                    {cert.label}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Paper>

                                {/* Social Media */}
                                <Paper elevation={3} sx={{ p: 3 }}>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                        textAlign="center"
                                    >
                                        Follow Our Journey
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            gap: 2,
                                            mt: 2,
                                        }}
                                    >
                                        {socialLinks.map((social, index) => (
                                            <Box
                                                key={index}
                                                component="a"
                                                href={social.url}
                                                sx={{
                                                    width: 50,
                                                    height: 50,
                                                    borderRadius: "50%",
                                                    bgcolor: social.color,
                                                    color: "white",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    textDecoration: "none",
                                                    transition: "all 0.3s",
                                                    "&:hover": {
                                                        transform:
                                                            "scale(1.15)",
                                                        boxShadow:
                                                            "0 4px 12px rgba(0,0,0,0.3)",
                                                    },
                                                }}
                                            >
                                                {social.icon}
                                            </Box>
                                        ))}
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Emergency & FAQ Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Card
                            sx={{
                                background:
                                    "linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)",
                                color: "white",
                                p: 4,
                                height: "100%",
                            }}
                        >
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Need Immediate Help?
                            </Typography>
                            <Typography variant="h6" paragraph>
                                Our 24/7 adventure concierge is always ready to
                                assist
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<Phone />}
                                sx={{
                                    bgcolor: "white",
                                    color: "#2e7d32",
                                    px: 4,
                                    py: 1.5,
                                    mt: 2,
                                    "&:hover": { bgcolor: "#f0f0f0" },
                                }}
                            >
                                Call +1 (555) 123-4567
                            </Button>
                        </Card>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Card sx={{ p: 4, height: "100%" }}>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                                color="#2e7d32"
                            >
                                Getting Here
                            </Typography>
                            <Box sx={{ mt: 3 }}>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    By Car:
                                </Typography>
                                <Typography color="text.secondary" paragraph>
                                    2.5 hours from Denver Airport via I-70 West
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    By Shuttle:
                                </Typography>
                                <Typography color="text.secondary" paragraph>
                                    Complimentary shuttle from Denver Airport
                                    (advance booking required)
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    GPS Coordinates:
                                </Typography>
                                <Typography color="text.secondary">
                                    39.7642° N, 105.0208° W
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            <FooterThree />
        </Box>
    );
}

export default ContactThree;
