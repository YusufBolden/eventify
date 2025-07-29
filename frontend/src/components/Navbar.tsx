import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import AdminLoginButton from './AdminLoginButton'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const isActive = (path: string) => location.pathname === path

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="bg-indigo-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-bold">
          Eventify
        </Link>
        <div className="space-x-4">
          <Link
            to="/"
            className={`py-2 px-4 font-semibold rounded ${
              isActive('/') ? 'bg-white text-indigo-600' : 'text-white hover:bg-indigo-500'
            }`}
          >
            Home
          </Link>

          {user && (
            <Link
              to="/dashboard"
              className={`py-2 px-4 font-semibold rounded ${
                isActive('/dashboard') ? 'bg-white text-indigo-600' : 'text-white hover:bg-indigo-500'
              }`}
            >
              Dashboard
            </Link>
          )}

          {!user && (
            <>
              <Link
                to="/login"
                className={`py-2 px-4 font-semibold rounded ${
                  isActive('/login') ? 'bg-white text-indigo-600' : 'text-white hover:bg-indigo-500'
                }`}
              >
                Login
              </Link>
              <Link
                to="/register"
                className={`py-2 px-4 font-semibold rounded ${
                  isActive('/register') ? 'bg-white text-indigo-600' : 'text-white hover:bg-indigo-500'
                }`}
              >
                Register
              </Link>
              <AdminLoginButton />
            </>
          )}

          {user && (
            <button
              onClick={handleLogout}
              className="py-2 px-4 font-semibold text-white bg-red-500 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
