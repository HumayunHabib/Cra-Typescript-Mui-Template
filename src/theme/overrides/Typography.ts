// ----------------------------------------------------------------------

export default function Typography(theme: { spacing: (arg0: number) => any; }) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}
