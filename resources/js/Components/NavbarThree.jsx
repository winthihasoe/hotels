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
    Container,
    Link,
} from "@mui/material";
import { Menu as MenuIcon, Close, Terrain } from "@mui/icons-material";
import { router } from "@inertiajs/react";

function NavbarThree() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const menuItems = [
        { label: "Home", link: "homeThree", type: "route" },
        { label: "Packages", link: "packages", type: "section" },
        { label: "Experiences", link: "experiences", type: "section" },
        { label: "Gallery", link: "gallery", type: "section" },
        { label: "About", link: "aboutThree", type: "route" },
        { label: "Contact", link: "contactThree", type: "route" },
    ];

    const handleNavigation = (item) => {
        if (item.type === "section") {
            const element = document.getElementById(item.link);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                router.visit(route("homeThree"), {
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
                <ListItem disablePadding>
                    <ListItemButton
                        sx={{ bgcolor: "#4caf50", color: "white", m: 2 }}
                    >
                        <ListItemText primary="Book Adventure" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="absolute"
                elevation={0}
                sx={{
                    bgcolor: "transparent",
                    transition: "background-color 0.3s",
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ justifyContent: "space-between", py: 2 }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.5,
                            }}
                            onClick={() => router.visit(route("homeThree"))}
                        >
                            <Terrain sx={{ fontSize: 40, color: "#4caf50" }} />
                            <Box>
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    sx={{ lineHeight: 1 }}
                                >
                                    Mountain Haven
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{ color: "#b0b0b0" }}
                                >
                                    LODGE & RESORT
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
                                    gap: 1,
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
                                            onClick={() =>
                                                handleNavigation(item)
                                            }
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
                                        bgcolor: "#4caf50",
                                        color: "white",
                                        ml: 2,
                                        px: 3,
                                        "&:hover": { bgcolor: "#45a049" },
                                    }}
                                >
                                    Book Adventure
                                </Button>
                            </Box>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

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

export default NavbarThree;
