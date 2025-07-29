import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../api/axios'
import type { Event } from '../types/Event'

const EventPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState<Event | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
  document.body.classList.add('overflow-hidden')
  return () => {
    document.body.classList.remove('overflow-hidden')
  }
}, [])

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await api.get(`/events/${id}`)
        setEvent(res.data)
      } catch {
        setError('You must be logged in to view this event.')
      }
    }

    fetchEvent()
  }, [id])

  return (
    <div className="min-h-screen overflow-hidden bg-[#E9D5FF] px-4 py-12 text-center text-[#4338CA]">
      <div className="max-w-2xl mx-auto">
        {error ? (
          <>
            <h1 className="text-4xl font-bold mb-6">{error}</h1>
            <div className="space-x-4">
              <button
                onClick={() => navigate('/login')}
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/register')}
                className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded transition"
              >
                Register
              </button>
            </div>
          </>
        ) : event ? (
          <>
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            <p className="text-lg text-gray-700">{event.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              {new Date(event.date).toLocaleDateString()}
            </p>
            <button
              onClick={() => navigate('/dashboard')}
              className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              ← Back to Dashboard
            </button>
          </>
        ) : (
          <p className="text-lg text-gray-600">Loading event...</p>
        )}
      </div>
    </div>
  )
}

export default EventPage
