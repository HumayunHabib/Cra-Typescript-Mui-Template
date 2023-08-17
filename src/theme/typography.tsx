// ----------------------------------------------------------------------

import palette from "./palette";

export function remToPx(value: string): number {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

interface ResponsiveFontSizesOptions {
  xs: number; // New option
  sm: number;
  md: number;
  lg: number;
  xl: number; // New option
}

export function responsiveFontSizes(options: ResponsiveFontSizesOptions): {
  [key: string]: any;
} {
  const { xs, sm, md, lg, xl } = options;
  return {
    "@media (min-width:400px)": {
      // Adjust breakpoints as needed
      fontSize: pxToRem(xs),
    },
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
    "@media (min-width:1600px)": {
      // Adjust breakpoints as needed
      fontSize: pxToRem(xl),
    },
  };
}

// ----------------------------------------------------------------------

const FONT_FAMILY = "Roboto";

const typography = {
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  h1: {
    fontFamily: FONT_FAMILY,
    fontWeight: 900,
    lineHeight: 1.25,
    fontSize: pxToRem(38),
    color: "#0d0735",
    // ...responsiveFontSizes({ sm: 35, md: 45, lg: 48 }),
    ...responsiveFontSizes({ xs: 18, sm: 28, md: 34, lg: 42, xl: 54 }),
  },
  h2: {
    fontFamily: FONT_FAMILY,
    fontWeight: 700,
    lineHeight: 1.25,
    fontSize: pxToRem(34),
    color: "#0d0735",
    ...responsiveFontSizes({ xs: 16, sm: 24, md: 30, lg: 38, xl: 48 }),
    // ...responsiveFontSizes({ sm: 20, md: 24, lg: 34 }),
  },
  h3: {
    fontFamily: FONT_FAMILY,
    fontWeight: 600,
    lineHeight: 1.25,
    fontSize: pxToRem(28),
    color: "#0d0735",
    ...responsiveFontSizes({ xs: 14, sm: 20, md: 26, lg: 34, xl: 44 }),
    // ...responsiveFontSizes({ sm: 26, md: 30, lg: 28 }),
  },
  h4: {
    fontFamily: FONT_FAMILY,
    fontWeight: 500,
    lineHeight: 1.25,
    fontSize: pxToRem(24),
    color: "#0d0735",
    ...responsiveFontSizes({ xs: 13, sm: 18, md: 22, lg: 30, xl: 40 }),
    // ...responsiveFontSizes({ sm: 25, md: 28, lg: 25 }),
  },
  h5: {
    fontFamily: FONT_FAMILY,
    fontWeight: 400,
    lineHeight: 1.25,
    fontSize: pxToRem(20),
    color: "#0d0735",
    ...responsiveFontSizes({ xs: 12, sm: 20, md: 20, lg: 28, xl: 36 }),
    // ...responsiveFontSizes({ sm: 25, md: 28, lg: 25 }),
  },
  h6: {
    fontFamily: FONT_FAMILY,
    fontWeight: 300,
    lineHeight: 1.25,
    fontSize: pxToRem(18),
    color: "#0d0735",
    ...responsiveFontSizes({ xs: 11, sm: 14, md: 18, lg: 24, xl: 32 }),
    // ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontFamily: FONT_FAMILY,
    fontWeight: 400,
    lineHeight: 1.25,
    fontSize: pxToRem(16),
    color: "#0d0735",
  },
  subtitle2: {
    fontFamily: FONT_FAMILY,
    fontWeight: 400,
    lineHeight: 1.25,
    fontSize: pxToRem(16),
    color: "#0d0735",
  },
  body1: {
    fontFamily: FONT_FAMILY,
    fontWeight: 400,
    lineHeight: 1.25,
    fontSize: pxToRem(16),
    color: palette.common.lightBlack,
  },
  body2: {
    lineHeight: 1.25,
    fontSize: pxToRem(14),
  },
  caption: {
    fontFamily: FONT_FAMILY,
    lineHeight: 1.25,
    fontSize: pxToRem(12),
  },
  overline: {
    fontFamily: FONT_FAMILY,
    fontWeight: 700,
    lineHeight: 1.25,
    fontSize: pxToRem(12),
    textTransform: "uppercase",
  },
  button: {
    fontFamily: FONT_FAMILY,
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
};

export default typography;
