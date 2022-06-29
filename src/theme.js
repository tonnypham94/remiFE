import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#7a70f0',
    },
    secondary: {
      main: '#586674',
      light: '#bcc3cc',
    },
    neutral: {
      main: '#96a5b7',
    },
    info: {
      main: '#3ab599',
    }
  },
  spacing: 8,
  typography: {
    h6: {
      "fontWeight": 600,
    },
    subtitle1: {
      "fontSize": '1rem',
      "fontWeight": 600,
    },
    subtitle2: {
      "fontSize": '0.75rem',
      "fontWeight": 'bold',
    },
    paragraph1: {
      "fontSize": '0.75rem',
    },
    button: {
      textTransform: 'none'
    }
  },
})

export default theme
