import { createContext, useContext } from "react";

export const ColorModeContext = createContext({
  mode: "dark",
  toggle: () => {},
});

export function useColorMode() {
  return useContext(ColorModeContext);
}
