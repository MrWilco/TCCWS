import { WebSocket } from "ws"

const ws = new WebSocket('ws://localhost:8000')
const packet = {
    message: "Hello World"
}
