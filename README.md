Helpline is a full-stack web application built with Next.js App Router, Prisma, and TailwindCSS, designed to provide information about support organizations in multiple languages.

🛠️ Local Setup
Clone the repository




git clone https://github.com/your-username/helpline.git
cd helpline
Install dependencies




npm install
Configure environment variables

Create a .env.local file based on .env.example:

env


DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<db_name>

NEXT_PUBLIC_API_BASE_URL=http://localhost:3000

IP_FIND="**************"

API_URL="https://api.ipinfo.io/lite/me?token="


Generate the Prisma client




npx prisma generate
Run migrations




npx prisma migrate dev
Run seed (if needed)




npx prisma db seed
Start the development server




npm run dev
🌍 Localization
The project supports multiple languages using next-intl, with translated routes:




/en, /pt, /de, etc.
Full support for routes like /faq, /privacy, /contact, /terms, and more.

🔌 APIs
Available API routes:

GET /api/helplines – Lists all helplines

GET /api/helplines/[name] – Fetches a specific helpline by name (slug)

🧱 Technologies Used
Next.js 14 (App Router)

React 18

TypeScript

TailwindCSS

Prisma ORM

Radix UI + Lucide Icons

Framer Motion

Vercel Hosting
