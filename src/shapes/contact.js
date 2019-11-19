import { shape, string } from 'prop-types'

const contactShape = shape({
  address: string,
  email: string,
  phone: string,
  instagram_url: string,
  website_url: string,
  directions: string,
})

export default contactShape
