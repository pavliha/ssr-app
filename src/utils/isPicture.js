function isPicture(url) {
  if (!url) return false

  return (url.toLowerCase().match(/\.(jpeg|jpg|gif|png)$/) != null)
}

export default isPicture
