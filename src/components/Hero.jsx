import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import Reveal from "./Reveal";
import { profile, stats } from "../data/profile";

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

const codeLines = [
  { indent: 0, text: "const engineer = {" },
  { indent: 1, text: 'name: "Jason Gundayao",', accent: true },
  { indent: 1, text: 'builds: ["SaaS", "AI features", "APIs"],', accent: true },
  { indent: 1, text: "years: 15," },
  { indent: 1, text: "remote: true," },
  { indent: 1, text: "shipsOnFriday: false," },
  { indent: 0, text: "};" },
];

function Hero() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        minHeight: { xs: "auto", md: "100vh" },
        pt: { xs: 14, md: 12 },
        pb: { xs: 10, md: 12 },
        overflow: "hidden",
      }}
    >
      {/* Ambient glow behind the copy. */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: theme.custom.glow,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
            gap: { xs: 6, md: 8 },
            alignItems: "center",
          }}
        >
          <Box>
            <Reveal>
              <Stack
                direction="row"
                spacing={1.5}
                sx={{ alignItems: "center", mb: 2.5 }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "success.main",
                    boxShadow: (t) => `0 0 0 4px ${alpha(t.palette.success.main, 0.18)}`,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: theme.custom.mono,
                    fontSize: 13,
                    color: "text.secondary",
                  }}
                >
                  {profile.availability}
                </Typography>
              </Stack>
            </Reveal>

            <Reveal delay={80}>
              <Typography variant="overline" sx={{ color: "primary.main" }}>
                {profile.kicker}
              </Typography>
            </Reveal>

            <Reveal delay={140}>
              <Typography variant="h1" sx={{ mt: 1.5, mb: 1.5 }}>
                {profile.name}
              </Typography>
            </Reveal>

            <Reveal delay={200}>
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  background: theme.custom.accentGradient,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                }}
              >
                {profile.role}
              </Typography>
            </Reveal>

            <Reveal delay={260}>
              <Typography
                variant="subtitle1"
                sx={{ color: "text.secondary", maxWidth: 560, mb: 4 }}
              >
                {profile.tagline}
              </Typography>
            </Reveal>

            <Reveal delay={320}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 4 }}>
                <Button
                  href="#contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardRoundedIcon />}
                >
                  Start a project
                </Button>

                <Button
                  href="#projects"
                  variant="outlined"
                  size="large"
                  sx={{ borderColor: "divider", color: "text.primary" }}
                >
                  See case studies
                </Button>
              </Stack>
            </Reveal>

            <Reveal delay={380}>
              <Stack direction="row" spacing={1.5}>
                {profile.socials.map((social) => {
                  const Icon = socialIcons[social.icon];

                  return (
                    <IconButton
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      sx={{
                        border: "1px solid",
                        borderColor: "divider",
                        color: "text.secondary",
                        "&:hover": { color: "primary.main", borderColor: "primary.main" },
                      }}
                    >
                      {Icon ? <Icon fontSize="small" /> : null}
                    </IconButton>
                  );
                })}

                <IconButton
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    color: "text.secondary",
                    "&:hover": { color: "primary.main", borderColor: "primary.main" },
                  }}
                >
                  <MailOutlineRoundedIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Reveal>
          </Box>

          <Reveal delay={220} direction="right">
            <Box
              sx={{
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: (t) => alpha(t.palette.background.paper, 0.72),
                backdropFilter: "blur(12px)",
                boxShadow: theme.custom.cardHoverShadow,
                overflow: "hidden",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                  px: 2,
                  py: 1.5,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              >
                {["#ff5f57", "#febc2e", "#28c840"].map((dot) => (
                  <Box
                    key={dot}
                    sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: dot }}
                  />
                ))}

                <Typography
                  sx={{
                    ml: 1,
                    fontFamily: theme.custom.mono,
                    fontSize: 12,
                    color: "text.secondary",
                  }}
                >
                  profile.js
                </Typography>
              </Stack>

              <Box
                component="pre"
                sx={{
                  m: 0,
                  p: { xs: 2.5, sm: 3 },
                  fontFamily: theme.custom.mono,
                  fontSize: { xs: 12.5, sm: 13.5 },
                  lineHeight: 2,
                  overflowX: "auto",
                  color: "text.secondary",
                }}
              >
                {codeLines.map((line) => (
                  <Box
                    key={line.text}
                    component="div"
                    sx={{
                      pl: line.indent * 2.5,
                      color: line.accent ? "primary.main" : "inherit",
                    }}
                  >
                    {line.text}
                  </Box>
                ))}
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  borderTop: "1px solid",
                  borderColor: "divider",
                }}
              >
                {stats.map((stat, index) => (
                  <Box
                    key={stat.label}
                    sx={{
                      p: 2.5,
                      borderRight: index % 2 === 0 ? "1px solid" : "none",
                      borderBottom: index < 2 ? "1px solid" : "none",
                      borderColor: "divider",
                    }}
                  >
                    <Typography sx={{ fontWeight: 800, fontSize: 20 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Reveal>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            mt: 8,
          }}
        >
          <IconButton
            href="#about"
            aria-label="Scroll to about"
            sx={{
              color: "text.secondary",
              animation: "heroBounce 2.2s ease-in-out infinite",
              "@keyframes heroBounce": {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(8px)" },
              },
              "@media (prefers-reduced-motion: reduce)": { animation: "none" },
            }}
          >
            <KeyboardArrowDownRoundedIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
