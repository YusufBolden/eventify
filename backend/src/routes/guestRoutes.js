import express from 'express'
const router = express.Router()

// Temporary test route
router.get('/', (req, res) => {
  res.send('Guest routes connected')
})

export default router
