function isPdf(url) {
  return (url.toLowerCase().match(/\.(pdf)$/) != null)
}

export default isPdf
