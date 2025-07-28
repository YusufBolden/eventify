import { useEffect, useState } from 'react'
import api from '../api/axios'

interface Event {
  _id: string
  title: string
  date: string
  description?: string
}

const DashboardPage = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get('/events')
        setEvents(res.data)
      } catch (err) {
        console.error(err)
        setError('Failed to load events.')
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return (
    <div className="px-4 py-8 bg-[#E9D5FF] text-[#4338CA]">
      <h1 className="text-3xl font-bold mb-6 text-center">My Events</h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {!loading && events.length === 0 && (
        <p className="text-center text-gray-700">You have no events yet.</p>
      )}

      <ul className="space-y-4 max-w-2xl mx-auto">
        {events.map((event) => (
          <li
            key={event._id}
            className="bg-white shadow p-4 rounded-xl border border-[#6366F1]"
          >
            <h2 className="text-xl font-semibold">{event.title}</h2>
            {event.description && (
              <p className="text-sm text-gray-700">{event.description}</p>
            )}
            <p className="text-sm text-gray-500 mt-2">
              {new Date(event.date).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DashboardPage
