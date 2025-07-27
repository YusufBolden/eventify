import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { data } = await axios.post('/api/users/register', {
        name,
        email,
        password,
      })

      localStorage.setItem('token', data.token)
      navigate('/dashboard')
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        alert(err.response.data.message || 'Registration failed. Try again.')
      } else {
        alert('An unexpected error occurred.')
      }
    }
  }

  return (
    <div className="flex justify-center py-12">
      <div className="bg-white shadow-md rounded-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
          Register for Eventify
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-md font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
