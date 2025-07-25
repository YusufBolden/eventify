import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoutes from './routes/user.routes.js'
import eventRoutes from './routes/event.routes.js'
import guestRoutes from './routes/guest.routes.js'
import { notFound, errorHandler } from './middleware/errorHandler.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/events', eventRoutes)
app.use('/api/guests', guestRoutes)

app.get('api/test', (req, res) => {
    res.json({message: 'API is working'})
})

app.use(notFound)
app.use(errorHandler)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`)
    })
  })
  .catch(err => console.error(err))
