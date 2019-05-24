import { number, oneOfType, shape, string, bool } from 'prop-types'

export default shape({
  id: oneOfType([number, string]).isRequired,
  text: string.isRequired,
  asset_id: number,
  place_id: number,
  is_read: oneOfType([number, bool]),
  token: string,
  isLoading: bool,
  isMine: bool,
  created_at: string.isRequired,
  updated_at: string.isRequired,
})
