import Box from "@mui/material/Box";
import { techIcons } from "./techIcons";

/**
 * Renders a brand mark from techIcons. Entries carry either a single `path`
 * (the generated Simple Icons glyphs) or a hand-drawn `body` fragment.
 */
function TechIcon({ name, size = 30 }) {
  const icon = techIcons[name];

  if (!icon) {
    return null;
  }

  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      sx={{ width: size, height: size, display: "block", color: icon.color }}
    >
      {icon.body ?? <path d={icon.path} />}
    </Box>
  );
}

export default TechIcon;
