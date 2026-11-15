# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Next.js (App Router), React 19, TypeScript, Tailwind CSS, PostgreSQL / Supabase, Resend / Nodemailer, Google Calendar API v3, Google OAuth

## Users

- **Primary:** Elderly individuals living independently managing chronic conditions, daily prescriptions, and clinical visits.
- **Secondary:** Family members and guardians seeking transparent adherence visibility, missed-dose escalation alerts, and appointment coordination.
- **Tertiary:** Professional caregivers and home health aides managing medication administration rosters across assigned seniors.

## Product Purpose

CareCircle is an interconnected healthcare management platform that enables elderly individuals to manage their daily medication routines and medical appointments while keeping authorized family members and caregivers in a synchronized, permission-governed care circle.

## Positioning

Unlike basic medication reminder apps that serve as easily ignored alarms or invasive clinical surveillance tools, CareCircle delivers a shared care ecosystem with double-entry dose verification, automated multi-channel escalation, Google Calendar synchronization, and biometric-grade geriatric ergonomics.

## Operating Context

- Domestic living spaces: seniors operating tablets, desktops, or smartphones with presbyopia, reduced contrast sensitivity, or mild tremors.
- Remote workplaces / travel: family members receiving timely alerts on missed medications.
- Home-visit healthcare: caregivers logging administered doses with audit timestamps.

## Capabilities and Constraints

- **Capabilities:**
  - Timezone-aware medication schedule planner (Daily, BID, TID, QID, weekly, custom intervals).
  - Strict dose state machine (`UPCOMING`, `DUE`, `TAKEN`, `MISSED`, `SKIPPED`, `TAKEN_LATE`).
  - Automated email notification engine for upcoming doses, due notifications, and missed dose escalations.
  - Appointment management with Google Calendar API integration.
  - Granular invitation system with bcrypt-hashed profile passcodes.
  - Role-specific dashboards (Elderly, Family, Caregiver).
  - Descriptive adherence analytics and trend reports (strictly non-diagnostic).
  - Immutable activity audit logging (`activity_logs`).
- **Constraints:**
  - Strictly no AI-generated prescription dosages or medical diagnostic advice.
  - No automated assumption that a dose is taken merely because a reminder was delivered.
  - Strict server-side RBAC and database row-level security.
  - Passcodes and passwords never stored in plaintext.

## Brand Commitments

- **Name:** CareCircle
- **Tagline:** Connected Care. Independent Living.
- **Palette & Aesthetics:** Deep navy structure, soft clinical teal accents, warm neutral canvas, accessible emerald greens for taken status, amber for upcoming, and high-visibility red for missed doses.

## Product Principles

1. **Dignity & Sovereignty First:** The elderly individual remains at the center of their healthcare profile; family and caregivers participate through granted permissions.
2. **Ground-Truth Adherence:** Adherence metrics reflect verified, actor-attributed dose logs.
3. **Geriatric Accessibility by Default:** High-contrast, large touch targets, clear cognitive chunking, and screen-reader accessibility.
4. **Proactive Escalation:** Prevent adverse health emergencies by alerting trusted family members when doses are overlooked past grace periods.

## Accessibility & Inclusion

- WCAG 2.1 AA/AAA compliance: minimum 7:1 contrast for core actions, minimum 48x48px touch targets (56px+ for elderly primary actions), 16px+ base font size, complete keyboard navigation, visible focus indicators, and screen reader semantic landmarks.

