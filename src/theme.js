import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#8be9d3',
    },
    secondary: {
      main: '#7a70f0',
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
      "fontSize": '1.2rem',
      "fontWeight": 600,
      "color": '#ec631f'
    },
    subtitle2: {
      "fontSize": '1rem',
      "fontWeight": 'bold',
    },
    subtitle3: {
      "fontSize": '1.2rem',
      "fontWeight": 600,
      "color": '#ad5eed'
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
