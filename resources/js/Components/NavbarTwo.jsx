import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery,
    useTheme,
    Link,
} from "@mui/material";
import { Menu as MenuIcon, Close, Waves } from "@mui/icons-material";
import { router } from "@inertiajs/react";

function NavbarTwo() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const menuItems = [
        { label: "Home", link: "homeTwo", type: "route" },
        { label: "About", link: "aboutTwo", type: "route" },
        { label: "Services", link: "services", type: "section" },
        { label: "Gallery", link: "gallery", type: "section" },
        { label: "Testimonials", link: "testimonials", type: "section" },
        { label: "Contact", link: "contactTwo", type: "route" },
    ];
    const handleNavigation = (item) => {
        if (item.type === "section") {
            const element = document.getElementById(item.link);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                router.visit(route("homeTwo"), {
                    onSuccess: () => {
                        setTimeout(() => {
                            const el = document.getElementById(item.link);
                            if (el) {
                                el.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }
                        }, 100);
                    },
                });
            }
        }
        if (isMobile) {
            handleDrawerToggle();
        }
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ width: 250 }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 2,
                }}
            >
                <IconButton onClick={handleDrawerToggle}>
                    <Close />
                </IconButton>
            </Box>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        {item.type === "route" ? (
                            <Link
                                href={route(item.link)}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    width: "100%",
                                }}
                            >
                                <ListItemButton onClick={handleDrawerToggle}>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                fontFamily={"Poppins"}
                                                variant="subtitle1"
                                            >
                                                {item.label}
                                            </Typography>
                                        }
                                    />
                                </ListItemButton>
                            </Link>
                        ) : (
                            <ListItemButton
                                onClick={() => handleNavigation(item)}
                            >
                                <ListItemText
                                    primary={
                                        <Typography
                                            fontFamily={"Poppins"}
                                            variant="subtitle1"
                                        >
                                            {item.label}
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                        )}
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: "rgba(25, 118, 210, 0.95)",
                    backdropFilter: "blur(10px)",
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Waves sx={{ fontSize: 36 }} />
                        <Box>
                            <Typography variant="h5" fontWeight="bold">
                                Seaside Paradise
                            </Typography>
                            <Typography variant="caption">
                                Resort & Spa
                            </Typography>
                        </Box>
                    </Box>

                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                            }}
                        >
                            {menuItems.map((item) =>
                                item.type === "route" ? (
                                    <Link
                                        key={item.label}
                                        href={route(item.link)}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <Button
                                            sx={{
                                                color: "white",
                                                "&:hover": {
                                                    color: "#d4af37",
                                                },
                                            }}
                                        >
                                            <Typography
                                                fontFamily={"Poppins"}
                                                variant="subtitle1"
                                            >
                                                {item.label}
                                            </Typography>
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button
                                        key={item.label}
                                        onClick={() => handleNavigation(item)}
                                        sx={{
                                            color: "white",
                                            "&:hover": { color: "#d4af37" },
                                        }}
                                    >
                                        <Typography
                                            fontFamily={"Poppins"}
                                            variant="subtitle1"
                                        >
                                            {item.label}
                                        </Typography>
                                    </Button>
                                )
                            )}
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: "white",
                                    color: "#1976d2",
                                    ml: 2,
                                    "&:hover": { bgcolor: "#f0f0f0" },
                                }}
                            >
                                Reserve Now
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
            <Toolbar /> {/* Spacer for fixed AppBar */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
            >
                {drawer}
            </Drawer>
        </>
    );
}

export default NavbarTwo;
