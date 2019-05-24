import { shape, string } from 'prop-types'

export default shape({
  params: shape({
    id: string.isRequired,
  }),
})
