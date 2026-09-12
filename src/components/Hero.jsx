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

import Reveal from "./Reveal";
import { credentials, profile } from "../data/profile";

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

const codeLines = [
  { indent: 0, text: "const engineer = {" },
  { indent: 1, text: 'name: "Jason Gundayao",', accent: true },
  { indent: 1, text: 'builds: ["SaaS", "APIs", "AI features"],', accent: true },
  { indent: 1, text: "years: 15," },
  { indent: 1, text: "remote: true," },
  { indent: 1, text: "shipsOnFriday: false," },
  { indent: 0, text: "};" },
];

/** Dark backdrop: the photo from profile.heroImage when set, else a gradient. */
function Backdrop({ image }) {
  const theme = useTheme();

  return (
    <Box aria-hidden sx={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {image ? (
        <Box
          component="img"
          src={image}
          alt=""
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center right",
            display: "block",
          }}
        />
      ) : null}

      {/* Left-heavy scrim so the copy always sits on solid dark. */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: image
            ? `linear-gradient(90deg, ${theme.palette.background.default} 30%, ${alpha(
                theme.palette.background.default,
                0.55,
              )} 70%, ${alpha(theme.palette.background.default, 0.3)} 100%)`
            : `radial-gradient(70% 80% at 80% 20%, ${alpha(
                theme.palette.primary.main,
                0.22,
              )}, transparent 60%), linear-gradient(180deg, #0d1424 0%, ${
                theme.palette.background.default
              } 100%)`,
        }}
      />

      {/* Faint dot grid, fading toward the copy. */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(${alpha("#ffffff", 0.14)} 1px, transparent 1px)`,
          backgroundSize: "26px 26px",
          maskImage: "linear-gradient(90deg, transparent 20%, black 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 20%, black 100%)",
          opacity: 0.5,
        }}
      />
    </Box>
  );
}

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
        minHeight: { xs: "auto", md: "92vh" },
        pt: { xs: 14, md: 16 },
        pb: { xs: 8, md: 10 },
        overflow: "hidden",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Backdrop image={profile.heroImage} />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
            gap: { xs: 6, md: 7 },
            alignItems: "center",
          }}
        >
          <Box>
            <Reveal>
              <Typography
                variant="overline"
                component="p"
                sx={{ color: "primary.light", mb: 2 }}
              >
                {profile.role}
              </Typography>
            </Reveal>

            <Reveal delay={80}>
              <Typography variant="h1" sx={{ mb: 2.5, maxWidth: 640 }}>
                {/* Non-breaking hyphens so "AI-powered" never splits across lines. */}
                {profile.headline.replace(/-/g, "‑")}
              </Typography>
            </Reveal>

            <Reveal delay={160}>
              <Typography
                variant="subtitle1"
                sx={{ color: "text.secondary", maxWidth: 560, mb: 4 }}
              >
                {profile.tagline}
              </Typography>
            </Reveal>

            <Reveal delay={240}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mb: 5 }}>
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
                  sx={{
                    borderColor: alpha("#ffffff", 0.25),
                    color: "text.primary",
                    "&:hover": {
                      borderColor: "#ffffff",
                      bgcolor: alpha("#ffffff", 0.06),
                    },
                  }}
                >
                  View my work
                </Button>
              </Stack>
            </Reveal>

            <Reveal delay={320}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  columnGap: { xs: 3.5, sm: 4 },
                  rowGap: 2.5,
                  mb: 5,
                }}
              >
                {credentials.map((item) => (
                  <Box key={item.label} sx={{ whiteSpace: "nowrap" }}>
                    <Typography
                      sx={{
                        fontSize: { xs: 22, sm: 24 },
                        fontWeight: 800,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        mb: 0.5,
                      }}
                    >
                      {item.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Reveal>

            <Reveal delay={380}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center", mr: 1 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: "success.main",
                      boxShadow: `0 0 0 4px ${alpha(theme.palette.success.main, 0.2)}`,
                    }}
                  />
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {profile.availability}
                  </Typography>
                </Stack>

                {profile.socials.map((social) => {
                  const Icon = socialIcons[social.icon];

                  return (
                    <IconButton
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      size="small"
                      sx={{
                        border: "1px solid",
                        borderColor: "divider",
                        color: "text.secondary",
                        "&:hover": { color: "#ffffff", borderColor: "primary.main" },
                      }}
                    >
                      {Icon ? <Icon fontSize="small" /> : null}
                    </IconButton>
                  );
                })}

                <IconButton
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  size="small"
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    color: "text.secondary",
                    "&:hover": { color: "#ffffff", borderColor: "primary.main" },
                  }}
                >
                  <MailOutlineRoundedIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Reveal>
          </Box>

          <Reveal delay={200} direction="right">
            <Box
              sx={{
                borderRadius: 3,
                border: "1px solid",
                borderColor: alpha("#ffffff", 0.12),
                bgcolor: alpha("#0f172a", 0.85),
                backdropFilter: "blur(8px)",
                boxShadow: `0 30px 80px ${alpha("#000000", 0.55)}`,
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
                  borderColor: alpha("#ffffff", 0.08),
                  bgcolor: alpha("#ffffff", 0.03),
                }}
              >
                {["#ff5f57", "#febc2e", "#28c840"].map((dot) => (
                  <Box
                    key={dot}
                    sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: dot }}
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
                      color: line.accent ? "primary.light" : "inherit",
                    }}
                  >
                    {line.text}
                  </Box>
                ))}
              </Box>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
