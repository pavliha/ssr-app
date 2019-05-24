import React from 'react'
import { object, string } from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, withStyles } from '@material-ui/core'
import AuthCard from 'src/containers/@auth/AuthCard'
import AndDevider from 'src/containers/@auth/AndDevider'
import connector from './connector'

const styles = {
  link: {
    margin: 16,
    textAlign: 'center',
  },
}

const ConfirmScene = ({ classes, email }) =>
  <AuthCard
    images="forgot.jpg"
    title={`Спасибо! Проверьте почту ${email}. Мы отправили вам ссылку для сброса пароля.`}
    documentTitle="Подтверждение пароля - Partymaker"
  >
    <AndDevider />
    <div className={classes.link}>
      <Link to="/auth/login"><Button variant="raised" color="primary">Войти</Button></Link>
    </div>
  </AuthCard>

ConfirmScene.propTypes = {
  classes: object.isRequired,
  email: string.isRequired,
}

export default withStyles(styles)(connector(ConfirmScene))
