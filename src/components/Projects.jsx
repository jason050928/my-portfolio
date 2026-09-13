import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import LanguageRounded from "@mui/icons-material/LanguageRounded";
import TrendingUpRounded from "@mui/icons-material/TrendingUpRounded";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { asset } from "../asset";
import { projects } from "../data/profile";

function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/** Screenshot when we have one, otherwise a branded placeholder. */
function ProjectPreview({ project }) {
  const theme = useTheme();
  const host = project.url ? hostOf(project.url) : project.title.toLowerCase();

  return (
    <Box
      sx={{
        position: "relative",
        aspectRatio: "12 / 5",
        overflow: "hidden",
        borderBottom: "1px solid",
        borderColor: "divider",
        backgroundColor: alpha(theme.palette.background.default, 0.6),
      }}
    >
      {project.image ? (
        <Box
          component="img"
          src={asset(project.image)}
          alt={`${project.title} homepage`}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
            transition: theme.transitions.create("transform", { duration: 600 }),
            ".project-card:hover &": { transform: "scale(1.04)" },
          }}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            background: `linear-gradient(135deg, ${alpha(
              theme.palette.primary.main,
              0.2,
            )}, ${alpha(theme.palette.secondary.main, 0.2)})`,
          }}
        >
          <LanguageRounded sx={{ fontSize: 34, color: "primary.main" }} />
          <Typography
            sx={{
              fontFamily: theme.custom.mono,
              fontSize: 13,
              color: "text.secondary",
            }}
          >
            {host}
          </Typography>
        </Box>
      )}

      {/* Browser-style address bar over the preview. */}
      <Stack
        direction="row"
        spacing={0.75}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          alignItems: "center",
          px: 1.5,
          py: 1,
          backgroundColor: alpha(theme.palette.background.default, 0.82),
          backdropFilter: "blur(6px)",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        {["#ff5f57", "#febc2e", "#28c840"].map((dot) => (
          <Box
            key={dot}
            sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: dot }}
          />
        ))}

        <Typography
          sx={{
            ml: 1,
            fontFamily: theme.custom.mono,
            fontSize: 11,
            color: "text.secondary",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {host}
        </Typography>
      </Stack>
    </Box>
  );
}

/** One labelled line of the case study: "Problem", "Built", "Result". */
function CaseRow({ label, children, sx }) {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", ...sx }}>
      <Typography
        component="span"
        sx={{
          flexShrink: 0,
          width: 58,
          pt: "3px",
          fontFamily: theme.custom.mono,
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "primary.main",
        }}
      >
        {label}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {children}
      </Typography>
    </Box>
  );
}

function Projects() {
  const theme = useTheme();

  return (
    <Box component="section" id="projects" sx={{ py: { xs: 9, md: 14 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          overline="Case studies"
          title="Work that shipped"
          subtitle="For each one: the problem, what I built, the stack, and what changed. Cards with an arrow open the live product."
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 3.5 },
          }}
        >
          {projects.map((project, index) => {
            return (
              <Reveal key={project.title} delay={index * 80} sx={{ height: "100%" }}>
                <Card
                  className="project-card"
                  {...(project.url
                    ? {
                        component: "a",
                        href: project.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                      }
                    : {})}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    textDecoration: "none",
                    transition: theme.transitions.create([
                      "transform",
                      "border-color",
                      "box-shadow",
                    ]),
                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: alpha(theme.palette.primary.main, 0.55),
                      boxShadow: theme.custom.cardHoverShadow,
                    },
                  }}
                >
                  <ProjectPreview project={project} />

                  <CardContent
                    sx={{
                      p: 3.5,
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: 1.5,
                        mb: 1.5,
                      }}
                    >
                      <Typography variant="h4" sx={{ color: "text.primary" }}>
                        {project.title}
                      </Typography>

                      {project.url ? (
                      <ArrowOutwardRounded
                        sx={{
                          fontSize: 18,
                          color: "primary.main",
                          transition: theme.transitions.create("transform"),
                          ".project-card:hover &": {
                            transform: "translate(3px, -3px)",
                          },
                        }}
                      />
                      ) : null}

                      <Chip
                        label={project.context}
                        size="small"
                        sx={{
                          ml: "auto",
                          fontFamily: theme.custom.mono,
                          fontSize: 11,
                          color: "text.secondary",
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                        }}
                      />
                    </Box>

                    {project.role ? (
                      <Typography
                        variant="body2"
                        sx={{ color: "primary.main", fontWeight: 600, mt: -0.5, mb: 2 }}
                      >
                        {project.role}
                      </Typography>
                    ) : null}

                    <Stack spacing={1.5} sx={{ mb: 2.5 }}>
                      <CaseRow label="Problem">{project.problem}</CaseRow>
                      <CaseRow label="Built">{project.built}</CaseRow>
                      <CaseRow label="Result">{project.result}</CaseRow>
                    </Stack>

                    {project.metrics?.length ? (
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1.5,
                          mb: 2.5,
                        }}
                      >
                        {project.metrics.map((metric) => (
                          <Box
                            key={metric.label}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.25,
                              px: 1.75,
                              py: 1.25,
                              borderRadius: 2,
                              border: "1px solid",
                              borderColor: alpha(theme.palette.secondary.main, 0.35),
                              bgcolor: alpha(theme.palette.secondary.main, 0.08),
                            }}
                          >
                            <TrendingUpRounded
                              sx={{ fontSize: 20, color: "secondary.main" }}
                            />
                            <Typography
                              component="span"
                              sx={{
                                fontWeight: 800,
                                fontSize: 20,
                                lineHeight: 1,
                                color: "secondary.main",
                              }}
                            >
                              {metric.value}
                            </Typography>
                            <Typography
                              component="span"
                              variant="body2"
                              sx={{ color: "text.primary", fontWeight: 600 }}
                            >
                              {metric.label}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    ) : null}

                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mt: "auto",
                      }}
                    >
                      {project.stack.map((tag) => (
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
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;
