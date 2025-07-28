import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../api/axios'
import type { Event } from '../types/Event'
import LoadingSpinner from '../components/LoadingSpinner'

const EventPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await api.get(`/events/${id}`)
        setEvent(res.data)
      } catch {
        setError('Failed to load event.')
      } finally {
        setLoading(false)
      }
    }

    fetchEvent()
  }, [id])

  if (loading) return <LoadingSpinner />

  if (error || !event) {
    return (
      <div className="px-4 py-12 text-center text-red-600">
        <p>{error || 'Event not found.'}</p>
        <button
          onClick={() => navigate('/dashboard')}
          className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md"
        >
          ← Back to Dashboard
        </button>
      </div>
    )
  }

  return (
    <div className="px-4 py-12 text-[#4338CA] max-w-2xl mx-auto">
      <button
        onClick={() => navigate('/dashboard')}
        className="mb-6 text-indigo-600 hover:text-indigo-800 text-sm font-semibold"
      >
        ← Back to Dashboard
      </button>
      <div className="bg-white rounded-xl shadow p-6 border border-[#6366F1]">
        <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
        {event.description && <p className="text-gray-700 mb-2">{event.description}</p>}
        <p className="text-sm text-gray-500">
          {new Date(event.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}

export default EventPage
