import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeBackground {
    neutral: string;
  }
}

export default function Table(theme: Theme) {
  return {
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
  };
}
