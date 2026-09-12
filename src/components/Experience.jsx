import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experiences, profile } from "../data/profile";

function Experience() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: { xs: 9, md: 14 },
        bgcolor: alpha(
          theme.palette.background.paper,
          theme.palette.mode === "dark" ? 0.4 : 0.7,
        ),
        borderBlock: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="md">
        <SectionHeading
          overline="Career"
          title="Work experience"
          subtitle="Fifteen years of shipping, mostly in teams that were not in the same room."
        />

        <Box sx={{ position: "relative", pl: { xs: 4, sm: 5 } }}>
          {/* The timeline rail. */}
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              left: { xs: 11, sm: 15 },
              top: 8,
              bottom: 8,
              width: 2,
              borderRadius: 1,
              background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${alpha(
                theme.palette.secondary.main,
                0.15,
              )})`,
            }}
          />

          {experiences.map((item, index) => (
            <Reveal
              key={`${item.company}-${item.role}`}
              delay={index * 110}
              sx={{ position: "relative", mb: index === experiences.length - 1 ? 0 : 3.5 }}
            >
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  left: { xs: -29, sm: -35 },
                  top: 26,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  border: "3px solid",
                  borderColor: "background.default",
                  boxShadow: (t) => `0 0 0 4px ${alpha(t.palette.primary.main, 0.16)}`,
                }}
              />

              <Card
                sx={{
                  transition: theme.transitions.create(["border-color", "transform"]),
                  "&:hover": {
                    borderColor: alpha(theme.palette.primary.main, 0.5),
                    transform: "translateX(4px)",
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, sm: 3.5 } }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 1.5,
                    }}
                  >
                    <Chip
                      icon={<WorkOutlineRoundedIcon />}
                      label={item.period}
                      size="small"
                      sx={{
                        fontFamily: theme.custom.mono,
                        fontSize: 11,
                        color: "primary.main",
                        bgcolor: alpha(theme.palette.primary.main, 0.12),
                        "& .MuiChip-icon": { color: "primary.main" },
                      }}
                    />
                  </Box>

                  <Typography variant="h4" sx={{ mb: 0.5 }}>
                    {item.role}
                  </Typography>

                  <Typography
                    sx={{ color: "secondary.main", fontWeight: 600, mb: 1.75 }}
                  >
                    {item.company}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 2.5 }}>
                    {item.description}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {item.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                        sx={{ color: "text.secondary" }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </Box>

        <Reveal delay={120}>
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              href={profile.resume}
              variant="outlined"
              size="large"
              startIcon={<DownloadRoundedIcon />}
              sx={{ borderColor: "divider", color: "text.primary" }}
            >
              Download full CV
            </Button>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}

export default Experience;
