import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import type { Product } from "../models/product";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [products, setProduct] = useState<Product[]>([]);
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

  useEffect(() => {
    fetch('http://localhost:5010/api/products')
      .then(response => response.json())
      .then(data => setProduct(data))
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Box sx={{ minHeight: '100vh', background: (paletteType === 'light') ? 'radial-gradient(circle, #baecf9, #f0f9ff)' : 'radial-gradient(circle, #1e3aBa, #111B27)' }}>
        <Container maxWidth='xl' sx={{ mt: 14 }}>
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App