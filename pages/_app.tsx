import { useMemo } from "react";
import type { AppProps } from "next/app";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@material-ui/core";
import Header from "components/Header";
import "styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({ palette: { type: prefersDarkMode ? "dark" : "light" } }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="🥘 Recipes 👩‍🍳" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default App;
