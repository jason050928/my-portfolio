import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import AccountTreeRounded from "@mui/icons-material/AccountTreeRounded";
import ApiRounded from "@mui/icons-material/ApiRounded";
import AutoAwesomeRounded from "@mui/icons-material/AutoAwesomeRounded";
import BugReportRounded from "@mui/icons-material/BugReportRounded";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import CloudQueueRounded from "@mui/icons-material/CloudQueueRounded";
import CodeRounded from "@mui/icons-material/CodeRounded";
import ExtensionRounded from "@mui/icons-material/ExtensionRounded";
import FactCheckRounded from "@mui/icons-material/FactCheckRounded";
import HubRounded from "@mui/icons-material/HubRounded";
import InputRounded from "@mui/icons-material/InputRounded";
import LockRounded from "@mui/icons-material/LockRounded";
import MonitorHeartRounded from "@mui/icons-material/MonitorHeartRounded";
import PsychologyRounded from "@mui/icons-material/PsychologyRounded";
import ReceiptLongRounded from "@mui/icons-material/ReceiptLongRounded";
import RocketLaunchRounded from "@mui/icons-material/RocketLaunchRounded";
import SchemaRounded from "@mui/icons-material/SchemaRounded";
import ScienceRounded from "@mui/icons-material/ScienceRounded";
import SmartToyRounded from "@mui/icons-material/SmartToyRounded";
import StorageRounded from "@mui/icons-material/StorageRounded";
import SyncRounded from "@mui/icons-material/SyncRounded";
import TransformRounded from "@mui/icons-material/TransformRounded";
import TroubleshootRounded from "@mui/icons-material/TroubleshootRounded";
import TuneRounded from "@mui/icons-material/TuneRounded";
import VerifiedRounded from "@mui/icons-material/VerifiedRounded";
import VpnKeyRounded from "@mui/icons-material/VpnKeyRounded";
import WebhookRounded from "@mui/icons-material/WebhookRounded";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TechIcon from "./TechIcon";
import { techIcons } from "./techIcons";
import { programmingLanguages, skillGroups } from "../data/profile";

// Skills without a brand mark get a Material icon. `color` is optional and
// falls back to the theme accent.
const conceptIcons = {
  SQL: { icon: StorageRounded, color: "#00758F" },
  "RESTful APIs": { icon: ApiRounded },
  OAuth: { icon: VpnKeyRounded },
  Authentication: { icon: LockRounded },
  Webhooks: { icon: WebhookRounded },
  "Third-party integrations": { icon: ExtensionRounded },
  "Background processing": { icon: SyncRounded },
  Validation: { icon: FactCheckRounded },
  "Error handling": { icon: BugReportRounded },
  "AI-integrated workflows": { icon: SmartToyRounded },
  "LLM APIs": { icon: PsychologyRounded },
  // Simple Icons dropped the OpenAI mark, so this is a stand-in glyph.
  OpenAI: { icon: AutoAwesomeRounded, color: "#10A37F" },
  "Workflow automation": { icon: AccountTreeRounded },
  "Prompt configuration": { icon: TuneRounded },
  "Data modeling": { icon: SchemaRounded },
  Ingestion: { icon: InputRounded },
  Transformation: { icon: TransformRounded },
  "Data validation": { icon: FactCheckRounded },
  "CI/CD": { icon: RocketLaunchRounded },
  "Deployment automation": { icon: RocketLaunchRounded },
  "Automated testing": { icon: ScienceRounded },
  "Unit testing": { icon: CheckCircleRounded },
  "Integration testing": { icon: HubRounded },
  Monitoring: { icon: MonitorHeartRounded },
  Logging: { icon: ReceiptLongRounded },
  "Production debugging": { icon: BugReportRounded },
  "Root-cause analysis": { icon: TroubleshootRounded },
};

const groupIcons = {
  languages: CodeRounded,
  backend: ApiRounded,
  ai: SmartToyRounded,
  data: StorageRounded,
  cloud: CloudQueueRounded,
  quality: VerifiedRounded,
};

// Languages lead, then the rest of the CV's groupings.
const panels = [
  {
    title: "Programming & Web",
    icon: "languages",
    skills: programmingLanguages,
    wide: true,
  },
  ...skillGroups,
];

function skillColor(name, fallback) {
  return techIcons[name]?.color ?? conceptIcons[name]?.color ?? fallback;
}

function SkillGlyph({ name, size }) {
  if (techIcons[name]) {
    return <TechIcon name={name} size={size} />;
  }

  const entry = conceptIcons[name];
  const Icon = entry?.icon ?? CodeRounded;

  return (
    <Icon
      sx={{ fontSize: size, color: entry?.color ?? "primary.main", display: "block" }}
    />
  );
}

function SkillTile({ name }) {
  const theme = useTheme();
  const brand = skillColor(name, theme.palette.primary.main);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.25,
        "&:hover .skill-tile-icon": {
          transform: "translateY(-4px)",
          borderColor: alpha(brand, 0.65),
          backgroundColor: alpha(brand, 0.14),
        },
        "&:hover .skill-tile-label": { color: "text.primary" },
      }}
    >
      <Box
        className="skill-tile-icon"
        sx={{
          display: "grid",
          placeItems: "center",
          width: 58,
          height: 58,
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: alpha(brand, 0.08),
          transition: theme.transitions.create([
            "transform",
            "border-color",
            "background-color",
          ]),
        }}
      >
        <SkillGlyph name={name} size={28} />
      </Box>

      <Typography
        className="skill-tile-label"
        sx={{
          fontSize: 12,
          fontWeight: 500,
          lineHeight: 1.35,
          textAlign: "center",
          color: "text.secondary",
          transition: theme.transitions.create("color"),
          // Two lines of headroom so tiles in a row stay aligned.
          minHeight: 32,
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}

function SkillPanel({ panel, delay }) {
  const theme = useTheme();
  const GroupIcon = groupIcons[panel.icon] ?? CodeRounded;

  return (
    <Reveal
      delay={delay}
      sx={{ height: "100%", gridColumn: panel.wide ? { md: "1 / -1" } : "auto" }}
    >
      <Card
        sx={{
          height: "100%",
          transition: theme.transitions.create(["border-color", "box-shadow"]),
          "&:hover": {
            borderColor: alpha(theme.palette.primary.main, 0.4),
            boxShadow: theme.custom.cardHoverShadow,
          },
        }}
      >
        <CardContent sx={{ p: { xs: 3, sm: 3.5 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
            <GroupIcon sx={{ color: "primary.main", fontSize: 20 }} />

            <Typography variant="h5" sx={{ mr: "auto" }}>
              {panel.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: theme.custom.mono,
                fontSize: 12,
                color: "text.secondary",
              }}
            >
              {panel.skills.length}
            </Typography>
          </Box>

          {/* Rule with a short accent lead-in. */}
          <Box
            sx={{
              position: "relative",
              height: "1px",
              mb: 3.5,
              backgroundColor: "divider",
              "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                top: -1,
                height: 3,
                width: 56,
                borderRadius: 999,
                background: theme.custom.accentGradient,
              },
            }}
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(auto-fill, minmax(76px, 1fr))",
                sm: "repeat(auto-fill, minmax(88px, 1fr))",
              },
              gap: { xs: 2, sm: 2.5 },
            }}
          >
            {panel.skills.map((skill) => (
              <SkillTile key={skill} name={skill} />
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
          overline="Technical skills"
          title="Languages and the stack around them"
          subtitle="Fifteen years of tools, grouped the way I actually use them."
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: { xs: 2.5, md: 3 },
            alignItems: "stretch",
          }}
        >
          {panels.map((panel, index) => (
            <SkillPanel key={panel.title} panel={panel} delay={index * 70} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Skills;
