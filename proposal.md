# 🎓 Capstone Project Proposal: Eventify

## 📌 Project Title
**Eventify** – A Modern Collaborative Event Planning App

## 📄 Description
Eventify is a full-stack MERN application that helps users create, manage, and collaborate on events like weddings, conferences, and parties. Users can create events, send guest invites, collect RSVPs, assign planning tasks, and share event details with co-hosts.

The app will be developed using a **mobile-first approach** to ensure usability across all screen sizes and will include **accessibility best practices** (ARIA roles, semantic HTML, keyboard navigation) to support all users.

## 👤 Target Users
- Individuals planning personal or professional events
- Event planners and teams managing logistics
- Guests invited to RSVP and view event info

## 🧠 Features & User Stories

### 🔐 User Management
- Register/login/logout securely
- Session stored via JWT
- Auth middleware to protect routes

### 🎉 Event Management
- Create/edit/delete events
- Set title, date, description, location
- Add collaborators (stretch)

### 🧾 Guest Management
- Invite guests via email/name
- Collect RSVP responses (yes/no/maybe)
- Track meal choices, personal notes

### ✅ Task Coordination (Stretch)
- Event-specific to-do lists
- Assign to co-hosts
- Set due dates, mark complete

## 📱 Accessibility & Mobile-First Focus
- Fully mobile-optimized UI using Tailwind CSS breakpoints
- Semantic HTML and ARIA attributes for screen readers
- WCAG-compliant color contrast
- Full keyboard support and visible focus states
- Passes Lighthouse accessibility audit

## 🛠️ Technologies

### Frontend
- React (Vite), Tailwind CSS (mobile-first)
- React Router DOM, Context API, Axios

### Backend
- Node.js, Express, MongoDB Atlas
- Mongoose, bcrypt, JWT
- Middleware (auth, validation, error handling)

### Deployment
- Backend: Render Web Service
- Frontend: Render Static Site
- Live links included in submission

## 🧱 Models

### User
- name, email, password
- eventsCreated[], eventsInvitedTo[]

### Event
- title, description, date, location
- owner (ref), collaborators[], guests[], tasks[]

### Guest
- name, email, RSVP status, mealChoice, message

### Task
- title, assignedTo, completed, dueDate, event (ref)

## 📆 Condensed Timeline (7 Days)

| Day | Milestone |
|-----|-----------|
| 1 | Submit proposal, scaffold backend/frontend, install deps |
| 2 | Auth system (JWT + bcrypt), test with Postman |
| 3 | Create models & routes for Events + Guests |
| 4 | Scaffold frontend, implement login/register UI |
| 5 | Build event dashboard, connect API, RSVP UI |
| 6 | Style with Tailwind (mobile-first), add accessibility features |
| 7 | Deploy frontend/backend, submit URLs, prep presentation |

## ✅ Capstone Compliance
- Completes full-stack CRUD (Events, Guests, RSVP)
- Auth, protected routes, and user ownership
- Mobile-first, responsive design
- Accessibility baked in (ARIA, WCAG, keyboard nav)
- Live deployment with polished UX
