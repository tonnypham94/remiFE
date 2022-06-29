import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import FunnyVideo from './page/FunnyVideo'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider theme={theme}>
    <FunnyVideo />
  </ThemeProvider>
)
