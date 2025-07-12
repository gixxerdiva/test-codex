<!-- README.md -->
<!-- Describes the simple full-stack template for an AI Android Mobile class. -->
<!-- Not a place for detailed business logic or secrets. -->

# AI Android Mobile Class Template

This repository contains a small Next.js frontend and a Python backend. The
backend connects to Supabase. The goal is to give you a clean starting point for
mobile AI coursework without extra complexity.

## Tech Stack

- **Frontend:** [Next.js](https://nextjs.org) with React and
  [Lucide React](https://lucide.dev) for icons.
- **Backend:** [FastAPI](https://fastapi.tiangolo.com).
- **Database:** [Supabase](https://supabase.com).
- **Auth, Payments, Hosting, CI/CD:** not implemented to keep the template
  minimal.

## Folder Structure

```
frontend/
  components/
  pages/
backend/
  app/
```

The `frontend` folder holds the Next.js app. The `backend/app` folder contains
FastAPI code. Add more modules here as you build your class projects.

## Running Locally

1. Install Node.js and Python.
2. In `frontend`, run `npm install` then `npm run dev`.
3. In `backend`, create a virtual environment, install packages from
   `requirements.txt`, and run `uvicorn app.main:app --reload`.

You will need a Supabase project and credentials to connect to the database.
Replace the placeholder values in `backend/app/main.py`.

## UI Design Principles

- Simple sans-serif font (default system fonts).
- Minimal color palette to keep the interface calm.
- Lucide icons for clarity.

## File Structure Listing

The tree command was not available in this environment, so the file listing was
created manually:

```
.
├── AGENTS.md
├── README.md
├── backend
│   ├── app
│   │   ├── __init__.py
│   │   └── main.py
│   └── requirements.txt
└── frontend
    ├── components
    │   └── IconExample.tsx
    ├── next.config.js
    ├── package.json
    └── pages
        └── index.tsx
```
