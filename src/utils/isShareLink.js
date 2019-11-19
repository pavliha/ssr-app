import { detect } from 'detect-browser'

const browser = detect()

export default browser.name !== 'chrome' &&
browser.name !== 'opera' &&
browser.name !== 'firefox' &&
browser.name !== 'ie' &&
browser.name !== 'edge'
