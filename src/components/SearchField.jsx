import React from 'react'
import { InputAdornment, SvgIcon, TextField, withStyles } from '@material-ui/core'
import { object } from 'prop-types'
import SearchIcon from 'mdi-react/SearchIcon'

const styles = theme => ({
  root: {
  },
  searchIcon: {
    paddingTop: 3,
    fontSize: 20,
    fontWeight: 'normal',
    color: 'black',
  },
  formControl: {
  },
})

const SearchField = ({ classes, ...props }) =>
  <TextField
    type="search"
    fullWidth
    InputProps={{
      classes: {
        formControl: classes.formControl,
        root: classes.root,
      },
      startAdornment: (
        <InputAdornment position="start">
          <SvgIcon className={classes.searchIcon}><SearchIcon /></SvgIcon>
        </InputAdornment>
      ),
    }}
    placeholder="Поиск"
    {...props}
  />

SearchField.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(SearchField)
