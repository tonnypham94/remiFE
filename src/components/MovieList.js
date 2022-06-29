import * as React from 'react'
import { makeStyles } from '@mui/styles'
import { useSelector, useDispatch } from 'react-redux'
import { getMoviesSlice } from '../redux/movies'
import { Typography } from '@mui/material'


function MovieList() {
  const dispatch = useDispatch()
  const useStyles = makeStyles((theme) => ({
    videoBlock: {
      display: 'flex',
      width: '853px',
      maxWidth: '100%',
      padding: '20px',
      margin: 'auto'
    },
    iframe: {
      width: '50%',
      height: '350px',
      marginRight: '20px'
    },
    videoDetail: {
      width: '50%',
    },
    description: {
      fontWeight: 'bold'
    }
  }))
  const classes = useStyles()
  const movies = useSelector(state => state.movies.items)

  React.useEffect(() => {
    dispatch(getMoviesSlice())
  }, [])

  return (
    <div className={classes.header}>
      {movies.map((movie, index) => {
        return (
          <div className={classes.videoBlock} key={index}>
            <iframe
              className={classes.iframe}
              src={`https://www.youtube.com/embed/${movie.sharedMovieId}`}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title='Embedded youtube'
            />
            <div className={classes.videoDetail}>
              <Typography variant='subtitle1'>{movie.title}</Typography>
              <Typography variant='subtitle2'>Shared by: {movie.email}</Typography>
              <Typography><span className={classes.description}>Description: </span><br />{movie.description}</Typography>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MovieList
