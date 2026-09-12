import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Reveal from "./Reveal";

function SectionHeading({ overline, title, subtitle, align = "center" }) {
  const centered = align === "center";

  return (
    <Reveal>
      <Box
        sx={{
          maxWidth: centered ? 720 : "none",
          mx: centered ? "auto" : 0,
          mb: { xs: 5, md: 7 },
          textAlign: centered ? "center" : "left",
        }}
      >
        <Typography
          variant="overline"
          sx={{ color: "primary.main", display: "block", mb: 1.5 }}
        >
          {overline}
        </Typography>

        <Typography variant="h2" sx={{ mb: subtitle ? 2 : 0 }}>
          {title}
        </Typography>

        {subtitle ? (
          <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
            {subtitle}
          </Typography>
        ) : null}

        <Box
          sx={{
            width: 64,
            height: 4,
            mt: 3,
            mx: centered ? "auto" : 0,
            borderRadius: 999,
            background: (theme) => theme.custom.accentGradient,
          }}
        />
      </Box>
    </Reveal>
  );
}

export default SectionHeading;
