import express from 'express'
import dotenv from 'dotenv'
import initDB from './models'
import router from './routers'
import { Server } from 'socket.io'
import { createServer } from 'http'

dotenv.config()
const app = express()
const server = createServer(app)

// Socket Server
const io = new Server(server)

const port = process.env.PORT || 4000

initDB()
  .then(() => console.log('Database connection established'))
  .catch(() => console.log('Database connection failed'))

// middlewares
app.use(express.json())

// routes
app.use('/api/v1', router)

server.listen(port, () => console.log(`Backend Started at port: ${port}`))

export { io }