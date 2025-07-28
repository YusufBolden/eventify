import { useEffect, useState } from 'react'
import api from '../api/axios'
import EventModal from '../modals/EventModal'
import type { Event } from '../types/Event'

const DashboardPage = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get('/events')
        setEvents(res.data)
      } catch {
        setError('Failed to load events.')
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const handleEventCreated = (newEvent: Event) => {
    setEvents((prev) => [...prev, newEvent])
  }

  return (
    <div className="px-4 py-8 text-[#4338CA]">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Events</h1>
         <button
  onClick={() => setShowModal(true)}
  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md"
>
  + Create Event
</button>

        </div>

        {loading && <p className="text-center">Loading...</p>}
{error && events.length === 0 && (
  <p className="text-red-600 text-center mb-2">{error}</p>
)}
        {!loading && events.length === 0 && (
          <p className="text-center text-gray-700">You have no events yet.</p>
        )}

        <ul className="space-y-4">
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

      <EventModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onEventCreated={handleEventCreated}
      />
    </div>
  )
}

export default DashboardPage
