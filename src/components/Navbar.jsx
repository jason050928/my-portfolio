import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { alpha, useTheme } from "@mui/material/styles";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import { navLinks, profile } from "../data/profile";
import { useColorMode } from "../colorMode";

function Navbar() {
  const theme = useTheme();
  const { mode, toggle } = useColorMode();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 16 });

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Highlight the link for whichever section is currently on screen.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    navLinks.forEach(({ id }) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

  const modeLabel = mode === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        color="transparent"
        sx={{
          backgroundColor: scrolled
            ? alpha(theme.palette.background.default, 0.8)
            : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: "1px solid",
          borderColor: scrolled ? "divider" : "transparent",
          transition: theme.transitions.create([
            "background-color",
            "border-color",
            "backdrop-filter",
          ]),
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 66, md: 76 }, gap: 2 }}>
            <Box
              component="a"
              href="#home"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.25,
                textDecoration: "none",
                mr: "auto",
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  placeItems: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  color: "#04121f",
                  fontWeight: 800,
                  fontSize: 15,
                  letterSpacing: "-0.02em",
                  background: theme.custom.accentGradient,
                }}
              >
                {profile.initials}
              </Box>

              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Typography
                  sx={{ fontWeight: 700, lineHeight: 1.2, color: "text.primary" }}
                >
                  {profile.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: theme.custom.mono,
                    fontSize: 11,
                    color: "text.secondary",
                  }}
                >
                  {profile.role}
                </Typography>
              </Box>
            </Box>

            {isDesktop ? (
              <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
                {navLinks.map((link) => {
                  const isActive = active === link.id;

                  return (
                    <Button
                      key={link.id}
                      href={`#${link.id}`}
                      size="small"
                      sx={{
                        px: 1.75,
                        color: isActive ? "primary.main" : "text.secondary",
                        backgroundColor: isActive
                          ? alpha(theme.palette.primary.main, 0.1)
                          : "transparent",
                        "&:hover": { color: "text.primary" },
                      }}
                    >
                      {link.label}
                    </Button>
                  );
                })}
              </Stack>
            ) : null}

            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Tooltip title={modeLabel}>
                <IconButton
                  onClick={toggle}
                  aria-label={modeLabel}
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    color: "text.secondary",
                  }}
                >
                  {mode === "dark" ? (
                    <LightModeRoundedIcon fontSize="small" />
                  ) : (
                    <DarkModeRoundedIcon fontSize="small" />
                  )}
                </IconButton>
              </Tooltip>

              {isDesktop ? (
                <Button href="#contact" variant="contained">
                  Hire me
                </Button>
              ) : (
                <IconButton
                  onClick={() => setOpen(true)}
                  aria-label="Open navigation"
                  sx={{ border: "1px solid", borderColor: "divider" }}
                >
                  <MenuRoundedIcon />
                </IconButton>
              )}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { width: 280, backgroundImage: "none" } } }}
      >
        <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <Typography variant="overline" sx={{ color: "primary.main", mr: "auto" }}>
            Menu
          </Typography>

          <IconButton onClick={() => setOpen(false)} aria-label="Close navigation">
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        <Divider />

        <List sx={{ py: 1 }}>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              selected={active === link.id}
              sx={{ borderRadius: 2, mx: 1 }}
            >
              <ListItemText
                primary={link.label}
                slotProps={{ primary: { fontWeight: 600 } }}
              />
            </ListItemButton>
          ))}
        </List>

        <Box sx={{ p: 2, mt: "auto" }}>
          <Button
            href="#contact"
            variant="contained"
            fullWidth
            onClick={() => setOpen(false)}
          >
            Hire me
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
