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

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
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
  const host = hostOf(project.url);

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
          src={project.image}
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

function Projects() {
  const theme = useTheme();

  return (
    <Box component="section" id="projects" sx={{ py: { xs: 9, md: 14 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          overline="Selected work"
          title="Projects I have built"
          subtitle="Live products in real estate, e-commerce and AI — each card opens the site."
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {projects.map((project, index) => {
            const isLastOdd =
              projects.length % 2 === 1 && index === projects.length - 1;

            return (
              <Reveal
                key={project.url}
                delay={index * 80}
                sx={{
                  height: "100%",
                  gridColumn: isLastOdd ? { md: "1 / -1" } : "auto",
                }}
              >
                <Card
                  className="project-card"
                  component="a"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer noopener"
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
                        alignItems: "center",
                        gap: 1.5,
                        mb: 1.5,
                      }}
                    >
                      <Typography variant="h4" sx={{ color: "text.primary" }}>
                        {project.title}
                      </Typography>

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

                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 3 }}
                    >
                      {project.description}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mt: "auto",
                      }}
                    >
                      {project.tags.map((tag) => (
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
