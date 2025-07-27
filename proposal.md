# Eventify – Capstone Project Proposal

## 🧠 Project Summary

**Eventify** is a full-stack event planning platform designed to help individuals and small teams coordinate events efficiently. It offers features like event creation, guest list management, task delegation, and customizable settings — all accessible via a modern dashboard UI.

## 🎯 Goals

- Build a secure, scalable MERN stack application.
- Provide authentication and authorization (admin vs. user).
- Enable users to create and manage events, guests, and tasks.
- Give admins the ability to control system-wide settings.
- Ensure accessibility, mobile-first design, and intuitive UX.

## 🛠️ Tech Stack

- **Frontend:** Vite + React + TypeScript + Tailwind CSS (using Vite plugin)
- **Backend:** Node.js + Express + MongoDB + Mongoose
- **Auth:** JWT-based authentication
- **Deployment:** Render (frontend + backend)
- **Version Control:** Git & GitHub

## 🧩 Key Features

- User registration, login, and protected routes
- Admin dashboard with dynamic system settings
- Create, read, update, delete (CRUD) for:
  - Events
  - Guests
  - Tasks
- Customizable settings (e.g., meal options)
- Responsive design
- Date and time picker modal
- Modular frontend and backend structure
- Scalability for future integration with Cognia

## ✅ Completion Strategy

Following this testable, feature-based commit structure to ensure modular development:

1. Set up and lock down project structure (frontend & backend)
2. Complete backend with models, routes, controllers, middleware
3. Begin frontend with routing, context, and shared components
4. Add pages, modals, and hooks
5. Connect frontend to backend via API
6. Final testing, cleanup, and deployment