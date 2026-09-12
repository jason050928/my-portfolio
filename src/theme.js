import { createTheme, alpha } from "@mui/material/styles";

const sans =
  '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
const mono =
  '"JetBrains Mono", ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace';

// One electric blue, used flat. The dark palette doubles as the "ink" theme
// for the surfaces that stay dark in both modes (nav, hero, contact, footer).
const palettes = {
  dark: {
    mode: "dark",
    primary: {
      main: "#3b82f6",
      light: "#60a5fa",
      dark: "#2563eb",
      contrastText: "#ffffff",
    },
    secondary: { main: "#60a5fa", light: "#93c5fd", contrastText: "#0b1220" },
    background: { default: "#0b0f1a", paper: "#111827" },
    text: { primary: "#f8fafc", secondary: "#9aa5b8" },
    divider: "rgba(255, 255, 255, 0.1)",
    success: { main: "#22c55e" },
  },
  light: {
    mode: "light",
    primary: {
      main: "#2563eb",
      light: "#3b82f6",
      dark: "#1d4ed8",
      contrastText: "#ffffff",
    },
    secondary: { main: "#3b82f6", light: "#60a5fa", contrastText: "#ffffff" },
    background: { default: "#f4f6fb", paper: "#ffffff" },
    text: { primary: "#0b1220", secondary: "#5b6577" },
    divider: "rgba(15, 23, 42, 0.1)",
    success: { main: "#16a34a" },
  },
};

export function getTheme(mode) {
  const base = createTheme({ palette: palettes[mode] });
  const { palette } = base;

  return createTheme(base, {
    custom: {
      mono,
      // Kept as a gradient key so existing call sites work; visually flat.
      accentGradient: `linear-gradient(120deg, ${palette.primary.main}, ${palette.primary.light})`,
      glow: `radial-gradient(60% 60% at 70% 30%, ${alpha(palette.primary.main, 0.18)}, transparent 70%)`,
      cardHoverShadow:
        mode === "dark"
          ? `0 20px 50px ${alpha("#000000", 0.5)}`
          : `0 20px 40px ${alpha("#0f172a", 0.1)}`,
    },

    typography: {
      fontFamily: sans,
      h1: {
        fontFamily: sans,
        fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
        fontWeight: 800,
        lineHeight: 1.08,
        letterSpacing: "-0.03em",
      },
      h2: {
        fontSize: "clamp(1.7rem, 3vw, 2.25rem)",
        fontWeight: 800,
        lineHeight: 1.2,
        letterSpacing: "-0.025em",
      },
      h3: {
        fontSize: "clamp(1.3rem, 2.2vw, 1.6rem)",
        fontWeight: 700,
        letterSpacing: "-0.02em",
      },
      h4: { fontSize: "1.15rem", fontWeight: 700, letterSpacing: "-0.01em" },
      h5: { fontSize: "1.05rem", fontWeight: 700 },
      h6: { fontSize: "1rem", fontWeight: 700 },
      subtitle1: { fontSize: "1.05rem", lineHeight: 1.7 },
      body1: { fontSize: "1rem", lineHeight: 1.75 },
      body2: { fontSize: "0.925rem", lineHeight: 1.7 },
      button: { textTransform: "none", fontWeight: 600, letterSpacing: 0 },
      overline: {
        fontFamily: sans,
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        lineHeight: 1.6,
      },
    },

    shape: { borderRadius: 10 },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            scrollBehavior: "smooth",
            "@media (prefers-reduced-motion: reduce)": {
              scrollBehavior: "auto",
            },
          },
          body: { backgroundColor: palette.background.default },
          "section[id]": { scrollMarginTop: "72px" },
          "::selection": {
            background: alpha(palette.primary.main, 0.28),
          },
        },
      },

      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { borderRadius: 8, paddingInline: 20, paddingBlock: 9 },
          sizeLarge: { paddingInline: 26, paddingBlock: 12, fontSize: "0.95rem" },
          containedPrimary: {
            boxShadow: `0 8px 24px ${alpha(palette.primary.main, 0.35)}`,
            "&:hover": {
              backgroundColor: palette.primary.dark,
              boxShadow: `0 10px 28px ${alpha(palette.primary.main, 0.45)}`,
            },
          },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: { borderRadius: 6, fontWeight: 500 },
          outlined: { borderColor: palette.divider },
        },
      },

      MuiCard: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: {
            borderRadius: 14,
            border: `1px solid ${palette.divider}`,
            backgroundImage: "none",
            backgroundColor: palette.background.paper,
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            backgroundColor:
              mode === "dark" ? alpha("#ffffff", 0.04) : palette.background.paper,
          },
        },
      },

      MuiTooltip: {
        styleOverrides: {
          tooltip: { fontSize: "0.78rem", borderRadius: 6 },
        },
      },
    },
  });
}
