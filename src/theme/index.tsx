import React from "react";
import PropTypes from "prop-types";
import { useMemo, ReactElement, ReactNode } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
  Theme,
} from "@mui/material/styles";
//
import palette from "./palette";
import typography from "./typography";
import GlobalStyles from "./globalStyles";
import customShadows from "./customShadows";
import componentsOverride from "./overrides";

// ----------------------------------------------------------------------

interface ThemeProviderProps {
  children: ReactNode;
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({
  children,
}: ThemeProviderProps): ReactElement {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      customShadows: customShadows(),
    }),
    []
  );

  const theme: Theme = createTheme(themeOptions as any);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
