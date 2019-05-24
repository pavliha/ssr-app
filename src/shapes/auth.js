import { number, shape, string } from 'prop-types'
import userShape from 'shapes/user'

export default shape({
  user_id: number.isRequired,
  user: userShape,
  email: string,
})
