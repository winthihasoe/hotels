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
import { Menu as MenuIcon, Close, Hotel } from "@mui/icons-material";
import { router } from "@inertiajs/react";

function NavbarOne() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const menuItems = [
        { label: "Home", link: "homeOne", type: "route" },
        { label: "Rooms", link: "rooms", type: "section" },
        { label: "Amenities", link: "amenities", type: "section" },
        { label: "About", link: "aboutOne", type: "route" },
        { label: "Contact", link: "contactOne", type: "route" },
    ];
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleNavigation = (item) => {
        if (item.type === "section") {
            const element = document.getElementById(item.link);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                router.visit(route("homeOne"), {
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
                position="sticky"
                sx={{
                    bgcolor: "rgba(0, 0, 0, 0.9)",
                    backdropFilter: "blur(10px)",
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Hotel sx={{ color: "#d4af37", fontSize: 32 }} />
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={{ color: "#d4af37" }}
                        >
                            Grand Royale
                        </Typography>
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
                                gap: 3,
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
                                    bgcolor: "#d4af37",
                                    color: "white",
                                    "&:hover": { bgcolor: "#b8941f" },
                                }}
                            >
                                Book Now
                            </Button>
                        </Box>
                    )}
                </Toolbar>
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

export default NavbarOne;
