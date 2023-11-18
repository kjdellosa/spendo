import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import qs from 'qs'

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const dotEnv = dotenv.config()
  if (dotEnv.error) {
    throw dotEnv.error
  }
}

const app = express()
const port = process.env.PORT || 8080

app.use(helmet())
app.use(cors())

app.use((req, res, next) => {
  req.query = qs.parse(req.url.split('?')[1], {
    depth: 10
  })
  next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})