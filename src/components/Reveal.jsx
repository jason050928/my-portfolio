import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";

const offsets = {
  up: "translate3d(0, 32px, 0)",
  down: "translate3d(0, -32px, 0)",
  left: "translate3d(-32px, 0, 0)",
  right: "translate3d(32px, 0, 0)",
  none: "none",
};

/**
 * Fades and slides its children in the first time they scroll into view.
 * Falls back to plain visible content when IntersectionObserver is missing
 * or the visitor asked for reduced motion.
 */
function Reveal({ children, delay = 0, direction = "up", sx, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : offsets[direction],
        transition: (theme) =>
          theme.transitions.create(["opacity", "transform"], {
            duration: 650,
            delay,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          }),
        willChange: "opacity, transform",
        "@media (prefers-reduced-motion: reduce)": {
          opacity: 1,
          transform: "none",
          transition: "none",
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default Reveal;
