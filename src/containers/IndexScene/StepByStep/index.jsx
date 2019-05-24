import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import chat from './chat.png'
import Steps from './Steps'
import Step from './Steps/Step'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400,
  },
  headline: {
    padding: '30px 0 30px 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  appPicture: {
    marginTop: 130,
  }
}

const Screenshots = ({ classes }) =>
  <section className={classes.root}>
    <div className={classes.container}>
      <div>
        <Typography className={classes.headline} variant="h4">Шаг за шагом</Typography>
        <Steps>
          <Step number={1} title="Создай вечеринку">
            Придумай тему вечеринки
            и нажми создать
          </Step>
          <Step number={2} title="Пригласи друзей">
            Вышли пригласительные в
            свою вечеринку
          </Step>
          <Step number={3} title="Выбери время и место">
            Прямо с чате вы вместе можете
            утвердить время и место
          </Step>
        </Steps>
      </div>
      <img alt="app picture" className={classes.appPicture} src={chat} />
    </div>
  </section>

Screenshots.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Screenshots)
