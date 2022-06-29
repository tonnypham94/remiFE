import * as React from 'react'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import { TextField } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { shareMoviesSlice } from '../redux/movies'
import { getMovieDetails } from '../api'
import { youtubeParserID } from '../utils/actions'

function ShareMovieDialog({isOpen, handleClose, handleSubmit}) {
  const dispatch = useDispatch()
  const userData = useSelector(state => state.user.data)
  const useStyles = makeStyles((theme) => ({
    shareMovieInput: {
      width: '500px',
      padding: '20px',
    },
  }))
  const classes = useStyles()
  const [value, setValue] = React.useState('')
  const [errors, setErrors] = React.useState()

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const validateForm = () => {
    let data = ''
    const regexUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/

    data = !value
      ? 'This field is required.'
      : regexUrl.test(value)
        ? ''
        : 'Url is not valid.'
    setErrors(data)

    return !data
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const canSubmit = validateForm()
    if (canSubmit) {
      const idUrl = youtubeParserID(value)
      const result = {
        email: userData?.email,
        sharedMovieId: idUrl
      }
      await getMovieDetails(idUrl).then(res => {
        result.title = res?.data?.items?.[0]?.snippet?.title
        result.description = res?.data?.items?.[0]?.snippet?.description
      })
      dispatch(shareMoviesSlice(result))
      handleSubmit()
    }
    setValue('')
  }

  const onClose = () => {
    setValue('')
    setErrors()
    handleClose()
  }

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
          Share a Youtube movie
        </DialogTitle>
        <div className={classes.shareMovieInput}>
          <TextField
            id="url"
            label="Youtube URL"
            value={value}
            error={!!errors}
            helperText={errors}
            onChange={handleChange}
            className={classes.shareMovieInput}
          />
        </div>
        <DialogActions>
          <Button onClick={onClose} variant="contained" color='neutral'>Disagree</Button>
          <Button onClick={onSubmit} autoFocus variant="contained">
            Share
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

ShareMovieDialog.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func,
}

ShareMovieDialog.defaultProps = {
  isOpen: false,
  handleClose: () => {},
  handleSubmit: () => {},
}

export default ShareMovieDialog
