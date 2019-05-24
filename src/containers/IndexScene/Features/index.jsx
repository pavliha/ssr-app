import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import Feature from './Feature'
import FocusingIcon from './focusing.svg'
import LightningIcon from './lightning.svg'
import ChartIcon from './chart.svg'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 500,
  },
  headline: {
    padding: '30px 0 0 0',
  },
  features: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 50,
  }
}

const Features = ({ classes }) =>
  <section className={classes.root}>
    <Typography className={classes.headline} variant="h4">Организация вечеринок</Typography>
    <div className={classes.features}>
      <Feature icon={<FocusingIcon />} title="Найди место">
        Мы знаем насколько
        сложно выбрать
        место что бы всем
        понравилось
      </Feature>
      <Feature icon={<LightningIcon />} title="Пригласи гостей">
        Больше не нужно
        спрашивать каждого
        Просто вышли
        приглашение
      </Feature>
      <Feature icon={<ChartIcon />} title="Начни вечеринку">
        Все становится просто
        Когда все твои друзья
        вместе
      </Feature>
    </div>
  </section>

Features.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Features)
