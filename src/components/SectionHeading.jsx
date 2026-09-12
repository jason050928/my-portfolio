import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Reveal from "./Reveal";

/**
 * Section intro: small blue overline and a bold title on the left, with the
 * supporting sentence sitting to the right on wide screens. `align="center"`
 * stacks everything centred instead. `action` renders a link/button on the
 * right edge (e.g. "View all projects").
 */
function SectionHeading({ overline, title, subtitle, action, align = "left" }) {
  const centered = align === "center";

  return (
    <Reveal>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: centered ? "column" : "row" },
          alignItems: { xs: "flex-start", md: centered ? "center" : "flex-end" },
          justifyContent: "space-between",
          gap: { xs: 1.5, md: 6 },
          maxWidth: centered ? 720 : "none",
          mx: centered ? "auto" : 0,
          mb: { xs: 4, md: 5.5 },
          textAlign: centered ? "center" : "left",
        }}
      >
        <Box sx={{ maxWidth: 640 }}>
          <Typography
            variant="overline"
            sx={{ color: "primary.main", display: "block", mb: 1 }}
          >
            {overline}
          </Typography>

          <Typography variant="h2">{title}</Typography>
        </Box>

        {subtitle ? (
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              maxWidth: centered ? "none" : 420,
              flexShrink: 0,
              pb: { md: centered ? 0 : 0.5 },
            }}
          >
            {subtitle}
          </Typography>
        ) : null}

        {action ? <Box sx={{ flexShrink: 0 }}>{action}</Box> : null}
      </Box>
    </Reveal>
  );
}

export default SectionHeading;
