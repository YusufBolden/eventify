import { useState } from 'react'
import api from '../api/axios'
import type { EventModalProps } from '../types/Event'

const EventModal = ({ isOpen, onClose, onEventCreated }: EventModalProps) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const userInfo = localStorage.getItem('userInfo')
      const token = userInfo ? JSON.parse(userInfo).token : ''

      const res = await api.post(
        '/events',
        { title, date, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      onEventCreated(res.data)
      onClose()
      setTitle('')
      setDate('')
      setDescription('')
    } catch {
      setError('Failed to create event. Please try again.')
    }
  }

  return (
    <div className="fixed inset-0 bg-[#E9D5FF] bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">Create Event</h2>
        {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full px-4 py-2 border rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <textarea
            placeholder="Description (optional)"
            className="w-full px-4 py-2 border rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="flex justify-between gap-4">
            <button
              type="button"
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-md font-semibold"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EventModal
