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
} from "@mui/material";
import {
    Phone,
    Email,
    LocationOn,
    AccessTime,
    Send,
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
} from "@mui/icons-material";
import NavbarOne from "../../Components/NavbarOne";
import FooterOne from "../../Components/FooterOne";

function ContactOne() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
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
            icon: <Phone sx={{ fontSize: 40, color: "#d4af37" }} />,
            title: "Phone",
            details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
        },
        {
            icon: <Email sx={{ fontSize: 40, color: "#d4af37" }} />,
            title: "Email",
            details: ["info@grandroyale.com", "reservations@grandroyale.com"],
        },
        {
            icon: <LocationOn sx={{ fontSize: 40, color: "#d4af37" }} />,
            title: "Address",
            details: ["123 Luxury Avenue", "Manhattan, New York, NY 10001"],
        },
        {
            icon: <AccessTime sx={{ fontSize: 40, color: "#d4af37" }} />,
            title: "Hours",
            details: ["24/7 Front Desk", "Reception Always Open"],
        },
    ];

    const socialLinks = [
        { icon: <Facebook />, label: "Facebook", url: "#" },
        { icon: <Twitter />, label: "Twitter", url: "#" },
        { icon: <Instagram />, label: "Instagram", url: "#" },
        { icon: <LinkedIn />, label: "LinkedIn", url: "#" },
    ];

    return (
        <Box>
            <NavbarOne />

            {/* Hero Section */}
            <Box
                sx={{
                    height: "50vh",
                    background:
                        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200') center/cover",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <Container>
                    <Typography
                        variant="h2"
                        fontWeight="bold"
                        gutterBottom
                        sx={{
                            fontFamily: "Poppins, serif",
                            color: "#d4af37",
                        }}
                    >
                        Contact Us
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: 600,
                            mx: "auto",
                            fontFamily: "Poppins",
                        }}
                    >
                        We're here to make your stay extraordinary. Reach out to
                        us anytime.
                    </Typography>
                </Container>
            </Box>

            {/* Contact Info Cards */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    {contactInfo.map((info, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    textAlign: "center",
                                    transition: "transform 0.3s",
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                        boxShadow:
                                            "0 8px 24px rgba(212,175,55,0.3)",
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
                                    {info.details.map((detail, idx) => (
                                        <Typography
                                            key={idx}
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

            {/* Contact Form & Map */}
            <Box sx={{ bgcolor: "#f5f5f5", py: 8 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* Contact Form */}
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Paper elevation={3} sx={{ p: 4 }}>
                                <Typography
                                    variant="h4"
                                    fontWeight="bold"
                                    gutterBottom
                                    sx={{
                                        fontFamily: "Playfair Display, serif",
                                        color: "#d4af37",
                                    }}
                                >
                                    Send Us a Message
                                </Typography>
                                <Typography
                                    color="text.secondary"
                                    paragraph
                                    sx={{ mb: 3 }}
                                >
                                    Have a question or special request? Fill out
                                    the form below and we'll get back to you
                                    within 24 hours.
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Your Name"
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
                                        <Grid item size={{ xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                label="Phone Number"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item size={{ xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                label="Subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                variant="outlined"
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
                                            />
                                        </Grid>
                                        <Grid item size={{ xs: 12 }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                endIcon={<Send />}
                                                sx={{
                                                    bgcolor: "#d4af37",
                                                    color: "white",
                                                    py: 1.5,
                                                    "&:hover": {
                                                        bgcolor: "#b8941f",
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

                        {/* Map & Social */}
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Paper
                                elevation={3}
                                sx={{
                                    height: "100%",
                                    overflow: "hidden",
                                    position: "relative",
                                }}
                            >
                                {/* Google Map Embed */}
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "400px",
                                        bgcolor: "#ddd",
                                    }}
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894606!2d-74.11976373946229!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                                        width="100%"
                                        height="400"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        title="Grand Royale Hotel Location"
                                    ></iframe>
                                </Box>

                                {/* Social Media */}
                                <Box sx={{ p: 3, textAlign: "center" }}>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                    >
                                        Follow Us
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
                                                    width: 45,
                                                    height: 45,
                                                    borderRadius: "50%",
                                                    bgcolor: "#d4af37",
                                                    color: "white",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    textDecoration: "none",
                                                    transition: "all 0.3s",
                                                    "&:hover": {
                                                        bgcolor: "#b8941f",
                                                        transform: "scale(1.1)",
                                                    },
                                                }}
                                            >
                                                {social.icon}
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Emergency Contact */}
            <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
                <Card
                    sx={{
                        background:
                            "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
                        color: "white",
                        p: 4,
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        gutterBottom
                        sx={{
                            fontFamily: "Playfair Display, serif",
                            color: "#d4af37",
                        }}
                    >
                        Need Immediate Assistance?
                    </Typography>
                    <Typography variant="h6" paragraph>
                        Our 24/7 concierge team is always here to help
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<Phone />}
                        sx={{
                            bgcolor: "#d4af37",
                            color: "white",
                            px: 4,
                            py: 1.5,
                            "&:hover": { bgcolor: "#b8941f" },
                        }}
                    >
                        Call Now: +1 (555) 123-4567
                    </Button>
                </Card>
            </Container>

            <FooterOne />
        </Box>
    );
}

export default ContactOne;
