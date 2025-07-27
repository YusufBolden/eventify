import User from '../models/User.js'
import jwt from 'jsonwebtoken'

// Token generator
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' })
}

// Register new user (supports admin flag)
export const registerUser = async (req, res) => {
  const { name, email, password, isAdmin } = req.body
  const normalizedEmail = email.toLowerCase().trim()

  try {
    const userExists = await User.findOne({ email: normalizedEmail })

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const user = await User.create({
      name,
      email: normalizedEmail,
      password,
      isAdmin,
    })

    if (user) {
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      return res.status(400).json({ message: 'Invalid user data' })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body
  const normalizedEmail = email.toLowerCase().trim()

  try {
    const user = await User.findOne({ email: normalizedEmail })

    if (user && (await user.matchPassword(password))) {
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      return res.status(401).json({ message: 'Invalid email or password' })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Get user profile
export const getUserProfile = (req, res) => {
  res.json({
    message: `Get user profile for ${req.user.name}`,
    user: req.user,
  })
}

// Update user profile
export const updateUserProfile = (req, res) => {
  res.json({
    message: `Update user profile for ${req.user.name}`,
  })
}
