# 🎯 Events & Activities Platform

**Events & Activities Platform** is a social hub designed to bridge the gap between online discovery and offline participation. It helps individuals find companions for local events, sports, or hobbies, ensuring no one misses out on an activity simply because they don't have someone to go with.

---

## 🚀 Core Features

### 🔐 Authentication & Role-Based Access
- **Multi-Role System**: Specific dashboards for **Users**, **Hosts**, and **Admins**.
- **Secure Auth**: JWT-based authentication with password hashing.
- **Dynamic Navbar**: Navigation items adapt based on the user's role.

### 📅 Event Management (CRUD)
- **Hosts**: Create, edit, and manage event details (Date, Location, Fee, Capacity).
- **Participants**: Real-time tracking of joined participants.
- **Search & Filter**: Advanced filtering by category, date, and location.

### 💳 Payment & Review System
- **Payments**: Integrated payment processing for event joining fees (SSLCommerz/Stripe).
- **Reviews**: Attendees can rate and review hosts (1–5 stars) to build community trust.

### 👤 Profile Management
- **Personalized Profiles**: Bio, interest tags, and activity history.
- **Public View**: Ability to view other users' hobbies to find compatible partners.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS, Shadcn UI.
- **Backend**: Node.js, Express.js, Mongoose.
- **Database**: MongoDB Atlas.
- **Storage**: Cloudinary (for image uploads).

---

## 📂 Folder Structure



```bash
events-platform/
├── frontend/ (Next.js)
│   ├── app/                # Auth, Dashboard, Events pages
│   ├── components/         # Reusable UI (Navbar, Cards, Modals)
│   ├── services/           # API calling functions
│   └── types/              # TypeScript interfaces/enums
└── backend/ (Express)
    ├── src/
    │   ├── modules/        # Scalable module-based architecture
    │   ├── middlewares/    # Auth, Validation, Error Handling
    │   └── server.ts       # Entry point