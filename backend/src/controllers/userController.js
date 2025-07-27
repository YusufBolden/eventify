export const getUserProfile = (req, res) => {
  res.send(`Get user profile for ${req.user.name}`)
}

export const updateUserProfile = (req, res) => {
  res.send(`Update user profile for ${req.user.name}`)
}
