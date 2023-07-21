import express from 'express'
import dotenv from 'dotenv'
import initDB from './models'

const main = async () => {
  dotenv.config()
  const app = express()
  const port = process.env.PORT || 4000

  initDB()
    .then(() => console.log('Database connection established'))
    .catch(() => console.log('Database connection failed'))

  app.get('/', (req, res) => {
    return res.status(200).send({ message: 'hello' })
  })

  app.listen(port, () => console.log(`Backend Started at port: ${port}`))
}

main()