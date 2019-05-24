function isAudio(url) {
  return (url.toLowerCase().match(/\.(mp3|m4a|aac|oga|ogg|wav)$/) != null)
}

export default isAudio
