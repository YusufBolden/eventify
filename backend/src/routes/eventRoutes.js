import express from 'express'
const router = express.Router()

// Temporary test route
router.get('/', (req, res) => {
  res.send('Event routes connected')
})

export default router
