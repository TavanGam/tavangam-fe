# MVP Roadmap & Milestones (Aligned to your Phase 1/2/3 timelines)

Assumptions:
- Team: Rasoul (frontend/product), Saba (clinical), + 1 backend, 1 devops, 1 UX, part-time legal consultant.
- Timeline target: Phase 1 = 3 months, Phase 2 = 6 months, Phase 3 = 12 months.

Phase 1 (0–3 months): Research, Prototype, and Therapist Pilot
- Goals:
  - Validate product-market fit with independent OTs.
  - Deliver Farsi-first patient-therapist portal prototype.
- Deliverables:
  - Research & compliance checklist.
  - Clickable Figma prototype (therapist & patient flows).
  - MVP backend: user auth, therapist profile, patient records (SOAP), scheduling & calendar sync (ICS), Farsi intake forms, SMS/email reminders (local provider).
  - Basic reporting (appointments, active patients).
  - Minimal secure messaging (in-app).
  - Pilot protocol & 5–10 therapist pilot onboarding plan.
- Metrics to track:
  - Time-to-first-appointment, therapist activation rate, NPS of pilot therapists, weekly appointments per therapist.

Phase 2 (3–9 months): AI features + Scheduling Optimization + Payment
- Goals:
  - Automate administrative tasks and launch local payment flow.
- Deliverables:
  - Persian STT (server-side Whisper or equivalent) → note-drafts + auto-SOAP generation.
  - Smart scheduling: no-show prediction + optimized slot suggestions.
  - Telehealth basic prototype integrated (self-hosted Jitsi for pilot) — limited usage.
  - Subscription billing: integrate local PSP; automated invoicing in IRR.
  - Exercise library (Persian) + patient app for exercise adherence tracking.
- Metrics:
  - Reduction in admin time per session, pay-conversion rate, telehealth session stability metrics.

Phase 3 (9–21 months): Teleconsultation Scale + Analytics Dashboard + B2B
- Goals:
  - Full telehealth, analytics, and beginning clinic/B2B sales.
- Deliverables:
  - Scaled, production-grade telehealth with TURN redundancy inside Iran.
  - Analytics dashboard for therapist outcomes, patient adherence, revenue.
  - Clinic admin features: multi-seat, role permissions, bulk invoicing.
  - Integrations: PMS export, CSV, possible connection to local EMR or hospital systems.
  - Marketing & sales playbook for B2B.
- Metrics:
  - Monthly recurring revenue (MRR), churn, clinic conversion rate, average revenue per user.

Minimum success criteria to proceed from Phase 1 → Phase 2:
- 5–10 active therapists in pilot with minimum 20 patient sessions and positive NPS (>7/10).
- Technical baseline: secure hosting, stable DB backups, basic legal sign-offs or counsel engagement.

Suggested 90-day tasks (hey-you-can-start-now checklist)
- Finalize legal/counsel engagement for telemedicine & data law mapping.
- Recruit 5 pilot therapists (Saba to lead).
- Build Figma flows and a simple web-based prototype.
- Provision Iran-hosted dev infra and TURN server for telehealth testing.