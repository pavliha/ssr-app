import React from 'react'
import { object } from 'prop-types'
import { CardContent, Card, Typography, withStyles } from '@material-ui/core'
import ContactForm from './ContactForm'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: 400,
    marginTop: 150,
  },
  headline: {
    padding: '30px 100px 30px 0',
  },
  card: {
    maxWidth: 430,
  },
  article: {
    marginTop: 50,
    maxWidth: 350,
  }
}

const ContactUs = ({ classes }) =>
  <section className={classes.root}>
    <div className={classes.headline}>
      <Typography gutterBottom variant="h4">Написать нам</Typography>
      <Typography
        color="textSecondary"
        variant="subtitle1"
      >
        Нам нравятся открытки
      </Typography>
      <Typography
        color="textSecondary"
        component="article"
        className={classes.article}
      >
        Мы всегда можем помочь если у тебя возникли трудности с использованием нашего сервиса. Или у тебя есть отличная
        идея которую можно добавить на наш сайт. Пиши нам. Мы всегда отвечаем
      </Typography>
    </div>
    <Card className={classes.card}>
      <CardContent>
        <ContactForm />
      </CardContent>
    </Card>
  </section>

ContactUs.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(ContactUs)
