export interface Event {
  _id: string
  title: string
  date: string
  description?: string
  createdAt?: string
  updatedAt?: string
  user?: string
}


export interface EventModalProps {
  isOpen: boolean
  onClose: () => void
  onEventCreated: (event: Event) => void
}
