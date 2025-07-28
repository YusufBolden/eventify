import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../api/axios'
import EventModal from '../modals/EventModal'
import type { Event } from '../types/Event'
import { FaArrowLeft, FaPen, FaTrash } from 'react-icons/fa'

const EventPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)

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

  const handleEventUpdated = (updated: Event) => {
    setEvent(updated)
    setShowModal(false)
  }

  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete this event?')
    if (!confirm) return
    try {
      await api.delete(`/events/${id}`)
      navigate('/dashboard')
    } catch {
      alert('Failed to delete event.')
    }
  }

  if (loading) {
    return <p className="text-center mt-8">Loading...</p>
  }

  if (error || !event) {
    return <p className="text-center mt-8 text-red-600">{error || 'Event not found.'}</p>
  }

  return (
    <div className="px-4 py-8 text-[#4338CA] max-w-xl mx-auto">
      <button
        onClick={() => navigate('/dashboard')}
        className="mb-4 flex items-center text-indigo-600 hover:underline font-semibold"
      >
        <FaArrowLeft className="mr-2" /> Back to Dashboard
      </button>

      <div className="bg-white shadow p-6 rounded-xl border border-[#6366F1] relative">
        <div className="absolute top-3 right-3 flex gap-3">
          <button
            onClick={() => setShowModal(true)}
            className="text-indigo-500 hover:text-indigo-700"
            title="Edit"
          >
            <FaPen />
          </button>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700"
            title="Delete"
          >
            <FaTrash />
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
        {event.description && (
          <p className="text-gray-700 mb-2">{event.description}</p>
        )}
        <p className="text-gray-500">
          {new Date(event.date).toLocaleDateString()}
        </p>
      </div>

      <EventModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onEventCreated={() => {}}
        onEventUpdated={handleEventUpdated}
        editMode={true}
        existingEvent={event}
      />
    </div>
  )
}

export default EventPage
