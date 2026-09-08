# zer0ne-barber

Barbershop appointment management system. Monorepo with pnpm workspaces.

## Stack

- Backend: Node.js, Express, TypeScript, Prisma 7, PostgreSQL (Docker)
- Frontend: Next.js, TypeScript
- Tooling: pnpm workspaces, Vitest, Pino

## Structure

- `backend/` — API and business logic
- `frontend/` — Next.js app

## Commands

- `pnpm install` — install dependencies
- `docker compose up -d` — start PostgreSQL

## Agent skills

### Issue tracker

GitHub Issues. See `docs/agents/issue-tracker.md`.

### Triage labels

Default labels: needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context. See `docs/agents/domain.md`.
