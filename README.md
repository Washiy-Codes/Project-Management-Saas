
# Project Management SaaS

A modern, full-stack project management application built with Next.js, React, TypeScript, and Tailwind CSS. Designed to help teams organize tasks, manage projects, collaborate, and track productivity in one centralized workspace.

## Features

- Task creation and management
- Task status tracking (Pending, In Progress, Done)
- Individual task details
- User authentication (GitHub, Google, and Credentials)
- Organization and team management
- Organization invitations and memberships
- Task comments and collaboration
- Responsive user interface
- Reusable UI components

## Tech Stack

- **Framework:** Next.js
- **Frontend:** React, TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Authentication:** NextAuth.js
- **ORM:** Prisma
- **Database:** PostgreSQL
- **Database Hosting:** Supabase
- **Version Control:** Git and GitHub

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/Washiy-Codes/Project-Management-Saas.git
```

Navigate to the project directory:

```bash
cd Project-Management-Saas
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=""
DIRECT_URL=""

AUTH_SECRET=""

AUTH_GITHUB_ID=""
AUTH_GITHUB_SECRET=""

AUTH_GOOGLE_ID=""
AUTH_GOOGLE_SECRET=""

RESEND_API_KEY=""
```

Configure the required credentials for your database, authentication providers, and email service.

**Never commit your `.env` file or expose secret credentials.**

## Database Setup

Run Prisma migrations:

```bash
npx prisma migrate dev
```

Generate the Prisma Client:

```bash
npx prisma generate
```

## Run the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

You can start editing the application by modifying files inside the `app` directory. The page automatically updates as you make changes.

## Project Structure

```text
project-management-saas/
├── app/
│   ├── tasks/
│   │   └── [id]/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   ├── header.tsx
│   └── heading.tsx
├── features/
├── lib/
├── prisma/
├── public/
├── initial-data.tsx
├── paths.tsx
├── package.json
└── README.md
```

## Development Roadmap

- [x] Application setup
- [x] Task listing
- [x] Individual task pages
- [x] Task status indicators
- [x] Reusable UI components
- [x] User authentication
- [x] Organization management
- [x] Team memberships and invitations
- [x] Task comments
- [ ] Advanced project dashboards
- [ ] Task priorities and deadlines
- [ ] Real-time collaboration
- [ ] Notifications and reminders
- [ ] Analytics and productivity reports

## Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "feat: add new feature"
   ```

4. Push your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a Pull Request.

## Author

**Joseph Wachira**

Junior Full-Stack Developer | React | Next.js | TypeScript

- GitHub: [@Washiy-Codes](https://github.com/Washiy-Codes)

## License

This project is currently developed as a personal software development project. Licensing terms will be specified separately.

---

If you find this project interesting, consider giving it a ⭐ on GitHub.

**Built with  ❤️ by Joseph Wachira**

