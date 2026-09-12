import { createTheme, alpha } from "@mui/material/styles";

const sans =
  '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
const mono =
  '"JetBrains Mono", ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace';

const palettes = {
  dark: {
    mode: "dark",
    primary: {
      main: "#38bdf8",
      light: "#7dd3fc",
      dark: "#0284c7",
      contrastText: "#041220",
    },
    secondary: { main: "#a78bfa", light: "#c4b5fd", contrastText: "#140a26" },
    background: { default: "#070b14", paper: "#0e1626" },
    text: { primary: "#e6edf7", secondary: "#94a6c0" },
    divider: "rgba(148, 163, 184, 0.16)",
  },
  light: {
    mode: "light",
    primary: {
      main: "#0284c7",
      light: "#38bdf8",
      dark: "#075985",
      contrastText: "#ffffff",
    },
    secondary: { main: "#7c3aed", light: "#a78bfa", contrastText: "#ffffff" },
    background: { default: "#f5f8fd", paper: "#ffffff" },
    text: { primary: "#0b1220", secondary: "#55637a" },
    divider: "rgba(15, 23, 42, 0.1)",
  },
};

export function getTheme(mode) {
  const base = createTheme({ palette: palettes[mode] });
  const { palette } = base;

  return createTheme(base, {
    custom: {
      mono,
      accentGradient: `linear-gradient(120deg, ${palette.primary.main}, ${palette.secondary.main})`,
      glow:
        mode === "dark"
          ? `radial-gradient(60% 60% at 50% 40%, ${alpha(palette.primary.main, 0.22)}, transparent 70%)`
          : `radial-gradient(60% 60% at 50% 40%, ${alpha(palette.primary.main, 0.14)}, transparent 70%)`,
      cardHoverShadow:
        mode === "dark"
          ? `0 24px 60px ${alpha("#000000", 0.55)}`
          : `0 24px 50px ${alpha("#0f172a", 0.14)}`,
    },

    typography: {
      fontFamily: sans,
      h1: {
        fontFamily: sans,
        fontSize: "clamp(2.6rem, 6vw, 4.4rem)",
        fontWeight: 800,
        lineHeight: 1.05,
        letterSpacing: "-0.03em",
      },
      h2: {
        fontSize: "clamp(2rem, 4.2vw, 3rem)",
        fontWeight: 800,
        lineHeight: 1.15,
        letterSpacing: "-0.025em",
      },
      h3: {
        fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)",
        fontWeight: 700,
        letterSpacing: "-0.02em",
      },
      h4: { fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.01em" },
      h5: { fontSize: "1.1rem", fontWeight: 700 },
      h6: { fontSize: "1rem", fontWeight: 700 },
      subtitle1: { fontSize: "1.05rem", lineHeight: 1.7 },
      body1: { fontSize: "1rem", lineHeight: 1.75 },
      body2: { fontSize: "0.925rem", lineHeight: 1.7 },
      button: { textTransform: "none", fontWeight: 600, letterSpacing: 0 },
      overline: {
        fontFamily: mono,
        fontSize: "0.78rem",
        fontWeight: 500,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
      },
    },

    shape: { borderRadius: 14 },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            scrollBehavior: "smooth",
            "@media (prefers-reduced-motion: reduce)": {
              scrollBehavior: "auto",
            },
          },
          body: {
            backgroundColor: palette.background.default,
            // Soft ambient wash behind the whole page.
            backgroundImage:
              mode === "dark"
                ? `radial-gradient(900px 500px at 12% -8%, ${alpha(palette.primary.main, 0.13)}, transparent 60%),
                   radial-gradient(760px 460px at 92% 4%, ${alpha(palette.secondary.main, 0.12)}, transparent 62%)`
                : `radial-gradient(900px 500px at 12% -8%, ${alpha(palette.primary.main, 0.1)}, transparent 60%),
                   radial-gradient(760px 460px at 92% 4%, ${alpha(palette.secondary.main, 0.09)}, transparent 62%)`,
            backgroundAttachment: "fixed",
          },
          "section[id]": { scrollMarginTop: "84px" },
          "::selection": {
            background: alpha(palette.primary.main, 0.28),
          },
        },
      },

      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { borderRadius: 999, paddingInline: 22, paddingBlock: 10 },
          sizeLarge: { paddingInline: 30, paddingBlock: 13, fontSize: "1rem" },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: { borderRadius: 8, fontWeight: 500 },
          outlined: { borderColor: palette.divider },
        },
      },

      MuiCard: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: {
            borderRadius: 20,
            border: `1px solid ${palette.divider}`,
            backgroundImage: "none",
            backgroundColor:
              mode === "dark"
                ? alpha(palette.background.paper, 0.72)
                : palette.background.paper,
            backdropFilter: "blur(10px)",
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundColor:
              mode === "dark"
                ? alpha("#ffffff", 0.03)
                : alpha(palette.primary.main, 0.02),
          },
        },
      },

      MuiTooltip: {
        styleOverrides: {
          tooltip: { fontSize: "0.78rem", borderRadius: 8 },
        },
      },
    },
  });
}
