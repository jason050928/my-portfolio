import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "../data/profile";

function Education() {
  const theme = useTheme();

  return (
    <Box component="section" id="education" sx={{ py: { xs: 9, md: 14 } }}>
      <Container maxWidth="md">
        <SectionHeading
          overline="Background"
          title="Education"
          subtitle="Where the fundamentals came from, before the years of shipping."
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: education.length > 1 ? "repeat(2, 1fr)" : "1fr",
            },
            gap: 3,
          }}
        >
          {education.map((item, index) => (
            <Reveal key={`${item.school}-${item.degree}`} delay={index * 110}>
              <Card
                sx={{
                  height: "100%",
                  transition: theme.transitions.create(["border-color", "transform"]),
                  "&:hover": {
                    borderColor: alpha(theme.palette.secondary.main, 0.5),
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: 3, sm: 3.5 },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 1.5,
                      mb: 2.5,
                    }}
                  >
                    <Box
                      aria-hidden
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2,
                        display: "grid",
                        placeItems: "center",
                        color: "secondary.main",
                        bgcolor: alpha(theme.palette.secondary.main, 0.12),
                      }}
                    >
                      <SchoolRoundedIcon fontSize="small" />
                    </Box>

                    <Chip
                      label={item.period}
                      size="small"
                      sx={{
                        fontFamily: theme.custom.mono,
                        fontSize: 11,
                        color: "secondary.main",
                        bgcolor: alpha(theme.palette.secondary.main, 0.12),
                      }}
                    />
                  </Box>

                  <Typography variant="h4" sx={{ mb: 0.5 }}>
                    {item.degree}
                  </Typography>

                  <Typography sx={{ color: "primary.main", fontWeight: 600, mb: 0.75 }}>
                    {item.school}
                  </Typography>

                  {item.location ? (
                    <Typography
                      variant="body2"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        color: "text.secondary",
                        mb: 1.75,
                      }}
                    >
                      <PlaceOutlinedIcon sx={{ fontSize: 16 }} />
                      {item.location}
                    </Typography>
                  ) : null}

                  {item.description ? (
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: item.tags?.length ? 2.5 : 0 }}
                    >
                      {item.description}
                    </Typography>
                  ) : null}

                  {item.tags?.length ? (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: "auto" }}>
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
                  ) : null}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Education;
