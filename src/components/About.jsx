import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { credentials, highlights, profile, services } from "../data/profile";

const serviceIcons = {
  code: CodeRoundedIcon,
  storage: StorageRoundedIcon,
  psychology: PsychologyRoundedIcon,
  rocket: RocketLaunchRoundedIcon,
  cloud: CloudQueueRoundedIcon,
};

function About() {
  const theme = useTheme();

  return (
    <Box component="section" id="about" sx={{ py: { xs: 9, md: 14 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          overline="About"
          title="Engineering that holds up in production"
          subtitle={profile.summary}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
            gap: { xs: 5, md: 7 },
            alignItems: "start",
            mb: { xs: 7, md: 10 },
          }}
        >
          <Reveal direction="left">
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 2.5 }}>
              I enjoy solving difficult technical problems, improving existing
              systems and helping teams deliver products that are fast,
              maintainable and easy to use. Most of my work sits where the
              front-end meets real infrastructure — the place where design
              decisions become somebody's on-call pager.
            </Typography>

            <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
              I have spent the last several years working remotely with
              distributed teams, which has made me deliberate about
              documentation, review, and leaving code that the next person can
              actually pick up.
            </Typography>

            <Stack spacing={1.75}>
              {highlights.map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "flex-start" }}
                >
                  <CheckCircleRoundedIcon
                    fontSize="small"
                    sx={{ color: "primary.main", mt: "3px" }}
                  />
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 2.5,
              }}
            >
              {credentials.map((item) => (
                <Card key={item.label} sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      sx={{
                        fontSize: 26,
                        fontWeight: 800,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        color: "primary.main",
                        mb: 0.75,
                      }}
                    >
                      {item.value}
                    </Typography>

                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {item.label}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Reveal>
        </Box>

        <Reveal>
          <Box sx={{ mb: { xs: 4, md: 5 } }}>
            <Typography
              variant="overline"
              sx={{ color: "primary.main", display: "block", mb: 1 }}
            >
              Services
            </Typography>
            <Typography variant="h3" sx={{ mb: 1.5 }}>
              What you can hire me for
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", maxWidth: 640 }}
            >
              Three things I do end to end — scoped, built, shipped and
              supported — for teams that need a senior engineer, not a
              handoff.
            </Typography>
          </Box>
        </Reveal>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];

            return (
              <Reveal key={service.title} delay={index * 90}>
                <Card
                  sx={{
                    height: "100%",
                    transition: theme.transitions.create([
                      "transform",
                      "border-color",
                      "box-shadow",
                    ]),
                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: alpha(theme.palette.primary.main, 0.5),
                      boxShadow: theme.custom.cardHoverShadow,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3.5 }}>
                    <Box
                      sx={{
                        display: "grid",
                        placeItems: "center",
                        width: 52,
                        height: 52,
                        mb: 2.5,
                        borderRadius: 3,
                        color: "primary.main",
                        bgcolor: alpha(theme.palette.primary.main, 0.12),
                      }}
                    >
                      {Icon ? <Icon /> : null}
                    </Box>

                    <Typography variant="h5" sx={{ mb: 1.25 }}>
                      {service.title}
                    </Typography>

                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default About;
