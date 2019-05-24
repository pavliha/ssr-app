import React from 'react'
import { Form, Field } from 'formik'
import { object, shape, string } from 'prop-types'
import { Typography, IconButton, withStyles } from '@material-ui/core'
import FormikMessageField from './controls/FormikMessageField'
import AssetField from './controls/FormikAssetField'
import PlaceField from './controls/FormikPlaceField'
import DateField from './controls/FormikDateField'
import formik from './formik'
import SendIcon from 'mdi-react/SendIcon'

const styles = {
  root: {
    borderTop: 'solid 1px rgba(0, 0, 0, 0.12)'
  },
  send: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 5px'
  },
  sendField: {
    flexGrow: 1,
  },
  actions: {
    borderTop: 'solid 1px rgba(0, 0, 0, 0.12)',
    display: 'flex',
    alignItems: 'center',
    padding: 5,
  },
  action: {
    margin: '0 5px'
  },
  actionLabel: {
    paddingLeft: 5,
    marginTop: 4,
  }
}

const ChatForm = ({ classes, values }) =>
  <Form className={classes.root}>
    <div className={classes.send}>
      <Field name="text" className={classes.sendField} component={FormikMessageField} />
      {values.text
        ? <IconButton type="submit" color="primary"><SendIcon /></IconButton>
        : <Field name="asset_id" component={AssetField} />
      }
    </div>
    <div className={classes.actions}>
      <Typography
        color="textSecondary"
        className={classes.actionLabel}
        variant="subtitle1"
        gutterBottom
      >
        Предложить:
      </Typography>
      <Field name="place_id" className={classes.action} component={PlaceField} />
      <Field name="date" className={classes.action} component={DateField} />
    </div>
  </Form>

ChatForm.propTypes = {
  classes: object.isRequired,
  values: shape({
    text: string.isRequired,
  })
}

export default withStyles(styles)(formik(ChatForm))
