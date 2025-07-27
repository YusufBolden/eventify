import express from 'express'
import {
  getSettings,
  getSettingByKey,
  upsertSetting,
} from '../controllers/settingsController.js'
import protect from '../middleware/authMiddleware.js'
import adminMiddleware from '../middleware/adminMiddleware.js'

const router = express.Router()

// Admin-only routes
router.route('/')
  .get(protect, adminMiddleware, getSettings)
  .post(protect, adminMiddleware, upsertSetting)

router.route('/:key')
  .get(protect, adminMiddleware, getSettingByKey)

export default router
