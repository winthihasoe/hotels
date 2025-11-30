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
    Avatar,
} from "@mui/material";
import {
    Phone,
    Email,
    LocationOn,
    AccessTime,
    Send,
    Waves,
    BeachAccess,
    Sailing,
    Facebook,
    Twitter,
    Instagram,
    YouTube,
    WhatsApp,
    Chat,
} from "@mui/icons-material";
import NavbarTwo from "../../Components/NavbarTwo";
import FooterTwo from "../../Components/FooterTwo";

function ContactTwo() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        checkin: "",
        checkout: "",
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
            icon: <Phone sx={{ fontSize: 50 }} />,
            title: "Call Us",
            details: ["+1 (555) 234-5678", "+1 (555) 876-5432"],
            subtitle: "24/7 Guest Services",
            color: "#1976d2",
        },
        {
            icon: <Email sx={{ fontSize: 50 }} />,
            title: "Email Us",
            details: [
                "info@seasideparadise.com",
                "reservations@seasideparadise.com",
            ],
            subtitle: "Quick Response Guaranteed",
            color: "#42a5f5",
        },
        {
            icon: <LocationOn sx={{ fontSize: 50 }} />,
            title: "Visit Us",
            details: ["123 Ocean Drive", "Miami Beach, FL 33139"],
            subtitle: "Beachfront Location",
            color: "#1976d2",
        },
        {
            icon: <AccessTime sx={{ fontSize: 50 }} />,
            title: "Reception Hours",
            details: ["Check-in: 2:00 PM", "Check-out: 12:00 PM"],
            subtitle: "Front Desk 24/7",
            color: "#42a5f5",
        },
    ];

    const quickContacts = [
        {
            icon: <WhatsApp />,
            label: "WhatsApp",
            value: "+1 (555) 234-5678",
            color: "#25d366",
        },
        {
            icon: <Chat />,
            label: "Live Chat",
            value: "Available Now",
            color: "#1976d2",
        },
        {
            icon: <Phone />,
            label: "Emergency",
            value: "+1 (555) 911-0000",
            color: "#f44336",
        },
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

    const departments = [
        { name: "Reservations", phone: "+1 (555) 234-5678", ext: "101" },
        { name: "Concierge", phone: "+1 (555) 234-5678", ext: "102" },
        { name: "Spa & Wellness", phone: "+1 (555) 234-5678", ext: "103" },
        { name: "Dining", phone: "+1 (555) 234-5678", ext: "104" },
    ];

    return (
        <Box>
            <NavbarTwo />

            {/* Hero Section */}
            <Box
                sx={{
                    height: "55vh",
                    background:
                        "linear-gradient(rgba(25, 118, 210, 0.7), rgba(66, 165, 245, 0.7)), url('https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200') center/cover",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <Container>
                    <Chip
                        icon={<Waves color="white" />}
                        label="GET IN TOUCH"
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
                        sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
                    >
                        Contact Seaside Paradise
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{ maxWidth: 700, mx: "auto", lineHeight: 1.6 }}
                    >
                        Your dream beach vacation starts with a conversation.
                        Let's plan your perfect oceanfront escape.
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
                                    border: "2px solid transparent",
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                        borderColor: info.color,
                                        boxShadow: `0 12px 24px ${info.color}40`,
                                    },
                                }}
                            >
                                <CardContent sx={{ py: 4 }}>
                                    <Avatar
                                        sx={{
                                            bgcolor: `${info.color}20`,
                                            width: 80,
                                            height: 80,
                                            mx: "auto",
                                            mb: 2,
                                        }}
                                    >
                                        <Box sx={{ color: info.color }}>
                                            {info.icon}
                                        </Box>
                                    </Avatar>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                    >
                                        {info.title}
                                    </Typography>
                                    <Chip
                                        label={info.subtitle}
                                        size="small"
                                        sx={{
                                            bgcolor: `${info.color}20`,
                                            color: info.color,
                                            fontWeight: "bold",
                                            fontSize: "0.75rem",
                                            mb: 2,
                                        }}
                                    />
                                    {info.details.map((detail, idx) => (
                                        <Typography
                                            key={idx}
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mt: 1, fontSize: "0.8rem" }}
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

            {/* Quick Contact Options */}
            <Box
                sx={{
                    background:
                        "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                    py: 6,
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        textAlign="center"
                        gutterBottom
                        sx={{ color: "#1976d2" }}
                    >
                        Quick Contact Options
                    </Typography>
                    <Grid container spacing={3} sx={{ mt: 2 }}>
                        {quickContacts.map((contact, index) => (
                            <Grid item size={{ xs: 12, md: 4 }} key={index}>
                                <Paper
                                    sx={{
                                        p: 3,
                                        textAlign: "center",
                                        transition: "all 0.3s",
                                        cursor: "pointer",
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                            boxShadow: `0 8px 16px ${contact.color}40`,
                                        },
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            bgcolor: contact.color,
                                            width: 60,
                                            height: 60,
                                            mx: "auto",
                                            mb: 2,
                                        }}
                                    >
                                        {contact.icon}
                                    </Avatar>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight="bold"
                                        gutterBottom
                                    >
                                        {contact.label}
                                    </Typography>
                                    <Typography
                                        sx={{ fontSize: "0.75rem" }}
                                        color="text.secondary"
                                    >
                                        {contact.value}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Main Contact Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={5}>
                    {/* Contact Form */}
                    <Grid item size={{ xs: 12, md: 7 }}>
                        <Paper elevation={3} sx={{ p: 4 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    mb: 3,
                                }}
                            >
                                <Avatar
                                    sx={{
                                        bgcolor: "#1976d2",
                                        width: 50,
                                        height: 50,
                                    }}
                                >
                                    <Send />
                                </Avatar>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        sx={{
                                            color: "#1976d2",
                                            fontFamily: "Inter",
                                        }}
                                    >
                                        Send Us Message
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        We'll respond within 1 hour
                                    </Typography>
                                </Box>
                            </Box>
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
                                            label="Subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Check-in Date"
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
                                    <Grid item size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Check-out Date"
                                            name="checkout"
                                            type="date"
                                            value={formData.checkout}
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
                                                background:
                                                    "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                                                color: "white",
                                                py: 1.5,
                                                fontFamily: "Inter",
                                                fontSize: "0.9rem",
                                                "&:hover": {
                                                    background:
                                                        "linear-gradient(135deg, #1565c0 0%, #1976d2 100%)",
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

                    {/* Right Sidebar */}
                    <Grid item size={{ xs: 12, md: 5 }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 3,
                            }}
                        >
                            {/* Map */}
                            <Paper elevation={3} sx={{ overflow: "hidden" }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925916665!2d-80.29949920401854!3d25.78238162594148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Seaside Paradise Resort Location"
                                ></iframe>
                            </Paper>

                            {/* Departments */}
                            <Paper elevation={3} sx={{ p: 3 }}>
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    gutterBottom
                                    sx={{ color: "#1976d2" }}
                                >
                                    <Phone
                                        sx={{ mr: 1, verticalAlign: "middle" }}
                                    />
                                    Department Extensions
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    {departments.map((dept, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                py: 1.5,
                                                borderBottom:
                                                    index <
                                                    departments.length - 1
                                                        ? "1px solid #e0e0e0"
                                                        : "none",
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle2"
                                                fontWeight="bold"
                                            >
                                                {dept.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ fontSize: "0.75rem" }}
                                            >
                                                {dept.phone} ext. {dept.ext}
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
                                    sx={{
                                        color: "#1976d2",
                                        fontFamily: "Inter",
                                    }}
                                >
                                    Follow Our Beach Life
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
                                                    transform: "scale(1.15)",
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

                            {/* Beach Activities */}
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 3,
                                    background:
                                        "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                                }}
                            >
                                <Box sx={{ textAlign: "center" }}>
                                    <BeachAccess
                                        sx={{
                                            fontSize: 50,
                                            color: "#1976d2",
                                            mb: 2,
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                        sx={{ color: "#1976d2" }}
                                    >
                                        Plan Your Beach Day
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ fontSize: "0.75rem" }}
                                        paragraph
                                    >
                                        Ask about our water sports, beach yoga,
                                        and sunset cruises
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        startIcon={<Sailing />}
                                        sx={{
                                            bgcolor: "#1976d2",
                                            "&:hover": { bgcolor: "#1565c0" },
                                            fontSize: "0.75rem",
                                            fontFamily: "Inter",
                                        }}
                                    >
                                        View Activities
                                    </Button>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Bottom CTA Section */}
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
                    <Waves sx={{ fontSize: 60, mb: 2 }} />
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ fontFamily: "Inter" }}
                    >
                        Ready to Experience Paradise?
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{ mb: 4, fontFamily: "Inter" }}
                    >
                        Our oceanfront concierge team is available 24/7 to
                        assist you
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 3,
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<Phone />}
                            sx={{
                                bgcolor: "white",
                                color: "#1976d2",
                                px: 4,
                                py: 1.5,
                                fontSize: "0.75rem",
                                "&:hover": {
                                    bgcolor: "#f5f5f5",
                                },
                            }}
                        >
                            +1 (555) 234-5678
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<Email />}
                            sx={{
                                borderColor: "white",
                                color: "white",
                                px: 4,
                                py: 1.5,
                                fontSize: "0.75rem",
                                "&:hover": {
                                    borderColor: "white",
                                    bgcolor: "rgba(255,255,255,0.1)",
                                },
                            }}
                        >
                            Email Us
                        </Button>
                    </Box>
                </Container>
            </Box>

            <FooterTwo />
        </Box>
    );
}

export default ContactTwo;
