import * as React from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import { makeStyles } from '@mui/styles'
import { Button, Typography, TextField } from '@mui/material'
import CottageIcon from '@mui/icons-material/Cottage'
import axios from 'axios'

const initialValue = {
  email: '',
  password: '',
}

function Header() {
  const useStyles = makeStyles((theme) => ({
    header: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #ebeef0',
      padding: '1rem',
      background: '#fff'
    },
    email: {
      '&.MuiFormControl-root': {
        marginLeft: 'auto',
      },
      '& .MuiOutlinedInput-root': {
        marginRight: '20px',
      },
    },
    loginButton: {
      '&.MuiButton-root': {
        marginLeft: '20px',
      }
    },
    loginForm: {
      marginLeft: 'auto'
    }
  }))
  const classes = useStyles()
  const [value, setValue] = React.useState(initialValue)
  const [errors, setErrors] = React.useState(initialValue)

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.id]: event.target.value
    })
  }

  const handleLogin = () => {
    console.log('handleLogin -> handleLogin')
    axios.post('http://localhost:5035/register', { value })
      .then(res => {
        console.log('handleLogin -> res', res)
      })
      .catch(error => console.log(error))
  }

  const validateForm = () => {
    const data = {}
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    data.email = !value.email
      ? 'This field is required.'
      : regexEmail.test(value.email)
        ? ''
        : 'Email is not valid.'
    data.password = value.password ? '' : 'This field is required.'
    setErrors({...data})

    return Object.values(data).every((e) => e === '')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const canSubmit = validateForm()
    canSubmit && handleLogin()
  }

  return (
    <div className={classes.header}>
      <CottageIcon sx={{ fontSize: "80px", marginRight: '20px' }} />
      <Typography variant="h2">Funny Movies</Typography>
      <form className={classes.loginForm} noValidate autoComplete="off" onSubmit={onSubmit}>
        <TextField
          id="email"
          className={classes.email}
          label="Email"
          value={value.email}
          error={!!errors.email}
          helperText={errors.email}
          onChange={handleChange}
        />
        <TextField
          id="password"
          label="Password"
          value={value.password}
          error={!!errors.password}
          helperText={errors.password}
          onChange={handleChange}
        />
        <Button variant="contained" className={classes.loginButton} type='submit'>Login/Register</Button>
      </form>
    </div>
  )
}

export default Header
