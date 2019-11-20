import React from 'react'
import { object, string, shape } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { PlaceContact } from 'components'
import GlobeIcon from 'mdi-react/GlobeIcon'
import InstagramIcon from 'mdi-react/InstagramIcon'
import PhoneIcon from 'mdi-react/PhoneIcon'
import MailIcon from 'mdi-react/MailIcon'
import LocationOnIcon from 'mdi-react/LocationOnIcon'
import SignDirectionIcon from 'mdi-react/SignDirectionIcon'

const styles = {
  root: {},
}

const PlaceContacts = ({ classes, contacts: { website_url, email, instagram_url, phone, address, directions } }) =>
  <div className={classes.root}>
    {website_url && <PlaceContact link={website_url} icon={GlobeIcon} label="Website" />}
    {email && <PlaceContact icon={MailIcon} label={email} />}
    {instagram_url && <PlaceContact link={website_url} icon={InstagramIcon} label={instagram_url} />}
    {phone && <PlaceContact icon={PhoneIcon} label={phone} />}
    {address && <PlaceContact icon={LocationOnIcon} label={address} />}
    {directions && <PlaceContact icon={SignDirectionIcon} label={directions} />}
  </div>

PlaceContacts.propTypes = {
  classes: object.isRequired,
  contacts: shape({
    website_url: string,
    email: string,
    instagram_url: string,
    phone: string,
    address: string,
    directions: string,
  })
}

export default withStyles(styles)(PlaceContacts)
