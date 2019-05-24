import { number, shape, string } from 'prop-types'

export default shape({
  id: number.isRequired,
  title: string.isRequired,
  address: string.isRequired,
  created_at: string.isRequired,
  updated_at: string.isRequired,
})
