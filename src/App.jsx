import { useCallback, useEffect, useMemo, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { ColorModeContext } from "./colorMode";
import { getTheme } from "./theme";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const STORAGE_KEY = "portfolio-color-mode";

function getInitialMode() {
  if (typeof window === "undefined") {
    return "dark";
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch {
    // Storage can be blocked; fall through to the system preference.
  }

  return window.matchMedia?.("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function App() {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // Nothing to do if the browser refuses to persist the choice.
    }
  }, [mode]);

  const toggle = useCallback(() => {
    setMode((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const colorMode = useMemo(() => ({ mode, toggle }), [mode, toggle]);
  const theme = useMemo(() => getTheme(mode), [mode]);
  // Nav, hero, contact and footer stay dark in both modes; the toggle only
  // flips the body sections between them.
  const ink = useMemo(() => (mode === "dark" ? theme : getTheme("dark")), [mode, theme]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <ThemeProvider theme={ink}>
          <Navbar />
        </ThemeProvider>

        <main>
          <ThemeProvider theme={ink}>
            <Hero />
          </ThemeProvider>

          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />

          <ThemeProvider theme={ink}>
            <Contact />
          </ThemeProvider>
        </main>

        <ThemeProvider theme={ink}>
          <Footer />
        </ThemeProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
