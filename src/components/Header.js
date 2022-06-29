import * as React from 'react'
import { makeStyles } from '@mui/styles'
import { Button, Typography, TextField } from '@mui/material'
import CottageIcon from '@mui/icons-material/Cottage'
import ConfirmationDialog from './ConfirmationDialog'
import { useSelector, useDispatch } from 'react-redux'
import { createUserSlice, checkUserSlice, logoutUserSlice } from '../redux/user'

const initialValue = {
  email: '',
  password: '',
}

function Header() {
  const dispatch = useDispatch()
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
    },
    logout: {
      display: 'flex',
      marginLeft: 'auto',
      alignItems: 'center'
    }
  }))
  const classes = useStyles()
  const [value, setValue] = React.useState(initialValue)
  const [errors, setErrors] = React.useState(initialValue)
  const [isNewAccount, setIsNewAccount] = React.useState(false)
  const userData = useSelector(state => state.user.data)
  console.log('Header -> userData', userData)

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.id]: event.target.value
    })
  }

  const handleLogin = () => {
    dispatch(checkUserSlice(value)).then(setIsNewAccount(true))
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

  const handleOpenConfirmation = (value) => () => {
    setIsNewAccount(value)
  }

  const handleSubmitConfirmation = () => {
    userData?.email
      // ? localStorage.removeItem('userData')
      ? window.onload = function () {
          localStorage.removeItem('userData')
        }
      : dispatch(createUserSlice(value))
    setIsNewAccount(false)
  }

  return (
    <div className={classes.header}>
      <CottageIcon sx={{ fontSize: "80px", marginRight: '20px' }} />
      <Typography variant="h2">Funny Movies</Typography>
      {userData?.email
        ? <div className={classes.logout}>
            <div>Welcome: {userData?.email}</div>
            <Button variant="contained" className={classes.loginButton} type='submit' color='secondary'>Share a movie</Button>
            <Button variant="contained" className={classes.loginButton} type='submit' color='neutral' onClick={handleOpenConfirmation(true)}>Logout</Button>
          </div>
        : <form className={classes.loginForm} noValidate autoComplete="off" onSubmit={onSubmit}>
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
      }
      <ConfirmationDialog
        title={userData?.email ? 'Logout' : 'Register'}
        content={userData?.email ? 'Do you wish to logout this account?' : 'This is new email, do you wish to create a new account?'}
        isOpen={isNewAccount}
        handleClose={handleOpenConfirmation(false)}
        handleSubmit={handleSubmitConfirmation}
      />
    </div>
  )
}

export default Header
