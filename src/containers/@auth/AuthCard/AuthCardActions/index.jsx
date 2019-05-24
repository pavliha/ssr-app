import React from 'react'
import { connect, } from 'formik'
import { string, object, bool, shape } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 15px',
    marginBottom: 20,
  },
  button: {
    minWidth: 130,
    marginRight: 40,
  }
}

const AuthCardActions = ({ formik, classes, textButton, linkTo, textLink }) => {
  return (
    <div className={classes.root}>
      <Button
        disabled={formik.isSubmitting}
        className={classes.button}
        type="submit"
        size="large"
        variant="outlined"
        color="primary"
      >
        {formik.isSubmitting ? 'Загрузка...' : textButton}
      </Button>
      {linkTo && (
        <Link to={linkTo}>
          <Typography color="inherit">{textLink}</Typography>
        </Link>
      )}
    </div>
  )
}

AuthCardActions.propTypes = {
  formik: shape({
    isSubmitting: bool.isRequired
  }),
  classes: object.isRequired,
  textButton: string.isRequired,
  linkTo: string,
  textLink: string,
}

export default withStyles(styles)(connect(AuthCardActions))
