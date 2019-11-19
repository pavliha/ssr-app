class Storage {

  get(item) {
    if (typeof window === 'undefined') return null

    return JSON.parse(localStorage.getItem(item))
  }

  put(items) {
    if (typeof window === 'undefined') return

    const entries = Object.entries(items)

    entries.forEach(([key, value]) => {
      localStorage.setItem(key, JSON.stringify(value))
    })
  }

  clear() {
    localStorage.clear()
  }

}

const storage = new Storage()

export default storage
