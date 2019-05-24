import { arrayOf, number, shape, string, bool } from 'prop-types'
import userShape from './user'
import messageShape from './message'
import placeShape from './place'
import inviteShape from './invite'

export default shape({
  id: number.isRequired,
  title: string,
  admin: userShape,
  admin_id: number.isRequired,
  place: placeShape,
  place_id: number,
  invite: inviteShape,
  guests: arrayOf(userShape),
  guests_ids: arrayOf(number).isRequired,
  messages: arrayOf(messageShape),
  date: string,
  time: string,
  totalMessages: number,
  isMeAdmin: bool,
  created_at: string.isRequired,
  updated_at: string.isRequired,
})
