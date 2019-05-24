/* eslint-disable no-restricted-globals */
const initialsFromUserName = username => {
  const initials = username.charAt(0).toUpperCase()
  if (username.split(' ').length > 1) {
    return username.split(' ')[0].charAt(0).toUpperCase() + username.split(' ')[1].charAt(0).toUpperCase()
  }
  if (username.length === 1) return initials
  const numbers = parseInt(username.replace(/\D+/g, ''), 10)
  if (!isNaN(numbers)) {
    return initials + numbers.toString()[1].toUpperCase()
  }

  return initials + username.charAt(1).toUpperCase()
}

export default initialsFromUserName
