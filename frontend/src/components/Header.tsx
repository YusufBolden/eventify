import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wide">
          Eventify
        </Link>
        <nav className="space-x-4">
          <Link to="/login" className="hover:underline">
            Login
          </Link>
          <Link to="/register" className="hover:underline">
            Register
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
