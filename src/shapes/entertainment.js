import { arrayOf, number, shape, string } from 'prop-types'
import place from './place'

const entertainmentShape = shape({
  id: number.isRequired,
  title: string.isRequired,
  places: arrayOf(place),
})

export default entertainmentShape
