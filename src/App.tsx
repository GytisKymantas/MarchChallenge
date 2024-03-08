import { createTheme, ThemeProvider } from '@mui/material/styles';
import OrderCard from './components/OrderCard/OrderCard';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    gray: Palette['primary'];
    gray2: Palette['primary'];
    red: Palette['primary'];
    purple: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
    gray: PaletteOptions['primary'];
    gray2: PaletteOptions['primary'];
    red: PaletteOptions['primary'];
    purple: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    tertiary: {
      main: '#FFE666',
      dark: '#000000',
      light: '#FFFFFF',
    },
    gray: {
      main: '#747079',
      dark: '#332f36',
      light: '#fbf4fa',
    },
    gray2: {
      main: '#6f6f6f',
      dark: '#818181',
    },
    red: {
      main: '#d3302f',
      dark: '#24202c',
    },
    purple: {
      main: '#d9bef7',
    },
  },
});
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <OrderCard />
      </ThemeProvider>
    </>
  );
};

export default App;
