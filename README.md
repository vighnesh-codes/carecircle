# CareCircle — Connected Care. Independent Living.

> A production-grade healthcare technology platform connecting elderly individuals, family members, and professional caregivers into a synchronized, permission-governed care circle.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, **PostgreSQL**, **Resend/SMTP**, and **Google Calendar API v3** under the **Impeccable Design Standard** and **WCAG 2.1 AAA Geriatric Accessibility**.

---

## Quick Demo Logins (For Evaluators)

On the `/login` page, you can use the **Quick Persona Switcher** buttons to test any role with one click:

1. **Senior / Primary User:** Arthur Pendleton (`arthur.pendleton@carecircle.demo` / `ArthurPassword2026!`)
   - Large typography, 60px primary action buttons, one-tap "Mark Taken", appointment timeline, and Care Circle manager.
2. **Family Member / Daughter:** Sarah Pendleton (`sarah.pendleton@carecircle.demo` / `SarahPassword2026!`)
   - Real-time adherence ring, urgent missed-dose red escalation banner, 7-day adherence trends, and direct phone contact.
3. **Professional Caregiver (CNA):** Elena Rostova (`elena.caregiver@carecircle.demo` / `ElenaPassword2026!`)
   - Multi-patient shift checklist, chronological administration timeline, and CNA signature attribution.

---

## Key Capabilities

- **Ground-Truth Adherence Engine:** No simulated statistics. All percentages, streaks, and trends calculate dynamically from verified records in `scheduled_doses` with optimistic locking (`version`).
- **Proactive Notification Engine:** 60-second automated adherence evaluator that sends upcoming dose reminders, and automatically escalates missed doses to family guardians via email.
- **Google Calendar API v3:** Bidirectional synchronization for clinical appointments with doctor notes, facility locations, and one-click add to Google Calendar.
- **Geriatric Accessibility (WCAG 2.1 AAA):** Minimum 7:1 contrast ratios, 60px primary touch targets, interactive text-scaling toggle (Standard, Large, Extra Large), and high-contrast mode.
- **Zero-Trust Security:** Server-side RBAC, Bcrypt work factor 12 password and 4-digit profile PIN hashing, cryptographic SHA-256 invitation tokens, and full activity audit logging.

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Execute Test Suite
Runs all 17 unit tests, integration tests, and 8 catastrophic failure simulations:
```bash
npm test
```

### 5. Production Build
```bash
npm run build
npm start
```

---

## Technical Documentation
- [PRD.md](file:///PRD.md) — Product Requirements Document (36 screens, 3 user roles, adherence logic).
- [DESIGN.md](file:///DESIGN.md) — UI/UX specification, color tokens, and 60px touch targets.
- [ARCHITECTURE.md](file:///ARCHITECTURE.md) — System topology, state machines, and notification pipelines.
- [DATABASE.md](file:///DATABASE.md) — Normalized 11-table PostgreSQL schema.
- [API.md](file:///API.md) — REST API endpoints and Server Actions.
- [AGENTS.md](file:///AGENTS.md) — Multi-agent engineering governance and quality invariants.
- [IMPLEMENTATION_STATUS.md](file:///IMPLEMENTATION_STATUS.md) — 11-phase verification ledger.
- [TESTING_STRATEGY.md](file:///TESTING_STRATEGY.md) — Test pyramid and 8-scenario failure audit.

