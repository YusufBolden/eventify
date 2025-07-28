import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api/axios'
import type { Event } from '../types/Event'
import LoadingSpinner from '../components/LoadingSpinner'

const EventPage = () => {
  const { id } = useParams()
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
  if (error) return <p className="text-red-600 text-center mt-6">{error}</p>
  if (!event) return null

  return (
    <div className="min-h-screen py-10 px-4 bg-[#E9D5FF] text-[#4338CA]">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
        <p className="text-sm text-gray-500 mb-2">
          Date: {new Date(event.date).toLocaleDateString()}
        </p>
        {event.description && (
          <p className="text-gray-700 whitespace-pre-line">{event.description}</p>
        )}
        <p className="text-xs text-gray-400 mt-6">
          Created at: {new Date(event.createdAt || '').toLocaleString()}
        </p>
      </div>
    </div>
  )
}

export default EventPage
