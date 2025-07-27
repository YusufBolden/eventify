import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Welcome to Eventify</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your all-in-one event planning dashboard.
      </p>
      <div className="space-x-4">
        <Link
          to="/login"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          Register
        </Link>
      </div>
    </div>
  )
}

export default HomePage
