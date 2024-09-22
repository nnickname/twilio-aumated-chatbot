"use client";
import {ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2b2d42',
      light: '#fff'
    },
    secondary: {
      main: '#8d99ae',
      light: '#fff'
    },
  },
});
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme} >
      {children}
    </ThemeProvider>
  );
}
