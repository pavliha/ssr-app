import { number, shape, string } from 'prop-types'
import roomShape from 'shapes/room'

export default shape({
  id: number.isRequired,
  headline: string.isRequired,
  preposition: string.isRequired,
  title: string.isRequired,
  address: string,
  background_url: string.isRequired,
  created_at: string.isRequired,
  updated_at: string.isRequired,
  room: roomShape,
})
