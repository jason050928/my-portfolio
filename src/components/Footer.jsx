import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

import { navLinks, profile } from "../data/profile";

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ borderTop: "1px solid", borderColor: "divider", py: { xs: 5, md: 6 } }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
            mb: 4,
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 700 }}>{profile.name}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {profile.role}
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
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
                  sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
                >
                  {Icon ? <Icon fontSize="small" /> : null}
                </IconButton>
              );
            })}

            <IconButton
              href={`mailto:${profile.email}`}
              aria-label="Email"
              size="small"
              sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
            >
              <MailOutlineRoundedIcon fontSize="small" />
            </IconButton>

            <Tooltip title="Back to top">
              <IconButton
                href="#home"
                aria-label="Back to top"
                size="small"
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  color: "text.secondary",
                  "&:hover": { color: "primary.main", borderColor: "primary.main" },
                }}
              >
                <KeyboardArrowUpRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            pt: 3,
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            © {new Date().getFullYear()} {profile.name}. Built with React and
            Material UI.
          </Typography>

          <Stack direction="row" spacing={2.5} sx={{ flexWrap: "wrap" }}>
            {navLinks.map((link) => (
              <Box
                key={link.id}
                component="a"
                href={`#${link.id}`}
                sx={{
                  fontSize: 14,
                  color: "text.secondary",
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {link.label}
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
