import { useState } from "react";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: (paletteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  })

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Box sx={{ minHeight: '100vh', background: (paletteType === 'light') ? 'radial-gradient(circle, #baecf9, #f0f9ff)' : 'radial-gradient(circle, #1e3aBa, #111B27)' }}>
        <Container maxWidth='xl' sx={{ mt: 14 }}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App