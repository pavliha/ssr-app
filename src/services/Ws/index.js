import Auth from 'services/Auth'

class Ws {

  ws = null

  socket = null

  isConnected = false

  connect = async () => {
    if (typeof window === 'undefined') return
    const WebSocket = await import('@adonisjs/websocket-client')
    this.ws = WebSocket.default('ws://localhost:3333')
      .withJwtToken(Auth.token)
      .connect()

    return new Promise((resolve, reject) => {
      this.ws.on('open', () => {
        this.isConnected = true
        resolve()
      })
      this.ws.on('error', (error) => {
        this.isConnected = false
        reject(error)
      })
      this.ws.on('close', () => {
        this.isConnected = false
      })
    })
  }

  constructor(ws) {
    this.ws = ws
  }

  async subscribe(topic) {
    await this.connect()
    this.socket = this.ws.subscribe(topic)
    return this.socket
  }

  close() {
    this.ws.close()
  }
}

const ws = new Ws()

export default ws
