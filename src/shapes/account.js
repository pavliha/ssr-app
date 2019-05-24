import { number, shape, string } from 'prop-types'

export default shape({
  id: number.isRequired,
  user_id: string.isRequired,
  instagram: string,
  telegram: string,
  skype: string,
  facebook: string,
  created_at: string.isRequired,
  updated_at: string.isRequired,
})
