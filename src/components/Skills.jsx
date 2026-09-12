import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import ApiRounded from "@mui/icons-material/ApiRounded";
import CloudQueueRounded from "@mui/icons-material/CloudQueueRounded";
import LayersRounded from "@mui/icons-material/LayersRounded";
import SmartToyRounded from "@mui/icons-material/SmartToyRounded";
import WorkspacePremiumRounded from "@mui/icons-material/WorkspacePremiumRounded";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TechIcon from "./TechIcon";

import { techIcons } from "./techIcons";
import { capabilities } from "../data/profile";

const capabilityIcons = {
  fullstack: LayersRounded,
  backend: ApiRounded,
  data: CloudQueueRounded,
  leadership: WorkspacePremiumRounded,
  ai: SmartToyRounded,
};

/** A technology tag; gets its brand mark when techIcons has one. */
function TechTag({ name }) {
  const theme = useTheme();
  const hasMark = Boolean(techIcons[name]);

  return (
    <Stack
      direction="row"
      spacing={0.75}
      sx={{
        alignItems: "center",
        px: 1.25,
        py: 0.6,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: alpha(theme.palette.text.primary, 0.03),
        fontSize: 13,
        fontWeight: 500,
        color: "text.primary",
        whiteSpace: "nowrap",
      }}
    >
      {hasMark ? <TechIcon name={name} size={15} /> : null}
      <Box component="span">{name}</Box>
    </Stack>
  );
}

function CapabilityCard({ capability, index }) {
  const theme = useTheme();
  const Icon = capabilityIcons[capability.icon] ?? LayersRounded;
  const number = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={index * 80} sx={{ height: "100%" }}>
      <Card
        sx={{
          height: "100%",
          position: "relative",
          overflow: "hidden",
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
          "&:hover .capability-number": { opacity: 0.16 },
        }}
      >
        {/* Oversized numeral, watermark-style, top right. */}
        <Typography
          aria-hidden
          className="capability-number"
          sx={{
            position: "absolute",
            top: 8,
            right: 20,
            fontFamily: theme.custom.mono,
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.06em",
            color: "primary.main",
            opacity: 0.08,
            transition: theme.transitions.create("opacity"),
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {number}
        </Typography>

        <CardContent
          sx={{
            p: { xs: 3, sm: 4 },
            position: "relative",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 2.5 }}>
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                width: 48,
                height: 48,
                borderRadius: 2.5,
                color: "primary.main",
                bgcolor: alpha(theme.palette.primary.main, 0.12),
              }}
            >
              <Icon fontSize="small" />
            </Box>

            <Typography
              sx={{
                fontFamily: theme.custom.mono,
                fontSize: 12,
                letterSpacing: "0.18em",
                color: "text.secondary",
              }}
            >
              {number}
            </Typography>
          </Stack>

          <Typography variant="h4" sx={{ mb: 1.25 }}>
            {capability.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "text.secondary", mb: 3, maxWidth: 420 }}
          >
            {capability.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              mt: "auto",
            }}
          >
            {capability.tags.map((tag) => (
              <TechTag key={tag} name={tag} />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Reveal>
  );
}

function Skills() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="skills"
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
      <Container maxWidth="lg">
        <SectionHeading
          overline="Technical expertise"
          title="What I use to build and ship products"
          subtitle="A focused stack for building reliable web applications, APIs and cloud systems."
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: { xs: 2.5, md: 3 },
            alignItems: "stretch",
          }}
        >
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={capability.title}
              capability={capability}
              index={index}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Skills;
