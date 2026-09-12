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
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { highlights, profile, services, stats } from "../data/profile";

const serviceIcons = {
  code: CodeRoundedIcon,
  storage: StorageRoundedIcon,
  psychology: PsychologyRoundedIcon,
  cloud: CloudQueueRoundedIcon,
};

function About() {
  const theme = useTheme();

  return (
    <Box component="section" id="about" sx={{ py: { xs: 9, md: 14 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          overline="A few words about me"
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
              {stats.map((stat) => (
                <Card key={stat.label} sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      sx={{
                        fontWeight: 800,
                        fontSize: 26,
                        lineHeight: 1.2,
                        mb: 0.75,
                        background: theme.custom.accentGradient,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {stat.value}
                    </Typography>

                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Reveal>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
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
