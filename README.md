
# WorkSphere

A multi-role project and organization management platform built using Next.js.

## Overview

WorkSphere is a responsive web application designed to support four user roles:

- Platform Administrator
- Organization Owner
- Project Manager
- Member

Each role has its own navigation and dashboard experience.

## Technology Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React
- next-themes
- PostgreSQL (planned)
- Prisma (planned)
- Authentication and authorization (planned)

## Features

### Implemented

- Responsive dashboard layout
- Role-specific navigation configuration
- Four role-specific dashboard pages
- Reusable sidebar and header
- Dark and light theme switching
- Persistent theme preference

### Planned

- User authentication
- Server-side role-based authorization
- Organization management
- Project management
- Task management
- Database integration
- Input validation
- Automated testing

## Project Structure

```text
src/
├── app/
│   ├── (auth)/
│   ├── (platform)/
│   ├── (organization)/
│   ├── (manager)/
│   └── (member)/
├── components/
│   ├── layout/
│   ├── forms/
│   └── ui/
├── features/
│   ├── auth/
│   ├── platform-admin/
│   ├── organization/
│   ├── project-manager/
│   └── member/
├── config/
├── constants/
├── hooks/
├── lib/
├── services/
└── types/
```

## Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
cd worksphere
```

Install dependencies:

```bash
npm install
```

Create your local environment file:

```bash
cp .env.example .env.local
```

Configure the required environment variables.

Start development:

```bash
npm run dev
```

Open http://localhost:3000.

## Development Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
npx tsc --noEmit
```

## Current Status

Stage 1: Frontend architecture and foundation.

Backend integration, authentication, authorization, and automated testing are planned for subsequent development stages.
