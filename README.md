🧾 CodeShare — Pastebin Clone

A modern code-sharing web application built with Next.js, React, and MongoDB, allowing users to quickly create, share, and manage code snippets.

🚀 Features
🔐 Authentication using Kinde SDK
📝 Create and share code snippets instantly
🌐 Unique shareable links for each paste
🧑‍💻 Syntax-friendly code display
📂 Store and manage snippets in MongoDB
⚡ Fast and responsive UI
🛡️ Type-safe development with TypeScript

🛠️ Tech Stack
Frontend: Next.js, React, Tailwind CSS
Backend: Next.js API Routes
Database: MongoDB
Authentication: Kinde SDK
Language: TypeScript

📁 Project Structure
├── app/                # Next.js app directory
├── components/         # Reusable UI components
├── lib/                # Utility functions & configs
├── models/             # MongoDB schemas
├── pages/api/          # API routes
├── public/             # Static assets
└── types/              # TypeScript types

⚙️ Installation & Setup
1. Clone the repository
-> git clone https://github.com/your-username/codeshare.git
-> cd codeshare

2. Install dependencies
-> npm install

3. Setup environment variables

Create a .env.local file in the root:

MONGODB_URI=your_mongodb_connection_string

KINDE_CLIENT_ID=your_kinde_client_id
KINDE_CLIENT_SECRET=your_kinde_client_secret
KINDE_ISSUER_URL=your_kinde_issuer_url
KINDE_REDIRECT_URL=http://localhost:3000/api/auth/callback
KINDE_LOGOUT_REDIRECT_URL=http://localhost:3000

4. Run the development server
-> npm run dev

5. App will be running at:

-> http://localhost:3000

🚀 Future Improvements
🔍 Search functionality
🌙 Dark mode
📋 Copy-to-clipboard button
🏷️ Tags & categories
📊 Paste analytics (views, likes)
