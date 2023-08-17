// ----------------------------------------------------------------------

import { Theme } from '@mui/material';
import palette from '../palette';

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 48,
        },
        contained: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          boxShadow: theme.shadows[2],

          '&:hover': {
            backgroundColor: palette.primary.lighter,
            boxShadow: theme.shadows[4],
            color: theme.palette.common.white,
          },
          '&:disabled': {
            backgroundColor: '#013eb796',
            color: theme.palette.common.white,
            // boxShadow: theme.shadows[8],
          },
          '&:hover:disabled': {
            backgroundColor: palette.primary.lighter,
            color: theme.palette.common.white,
            boxShadow: theme.shadows[8],
          },
        },
      },
    },
  };
}
