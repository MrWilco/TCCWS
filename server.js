import { WebSocketServer } from "ws"

const ws = new WebSocketServer({port: 8000})
ws.on('connection', socket => {
  socket.on('message', packet => {
    const res = JSON.parse(packet)
    const message = res.message
    console.log(message)
  })
})
