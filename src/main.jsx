import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import App from './App.jsx'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#73508e',
    },
    background: {
      default: '#faf8f5',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
})

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </HashRouter>,
)
