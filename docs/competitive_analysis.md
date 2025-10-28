# International Benchmark: Competitive Analysis (Occupational Therapy & Allied Health Platforms)

Summary: concise, side-by-side review of SimplePractice, Coviu, TheraPlatform, Physitrack/Rehab Guru, and Cliniko. Use to guide feature selection and prioritization for the Iran product.

1) SimplePractice
- Target users and market segments:
  - Private practice behavioral health, occupational therapists, small clinics, solo practitioners.
- Key features and workflow:
  - Scheduling, client portal, billing and claims management (US insurance), SOAP notes/EMR, telehealth, secure messaging, client intake forms, document storage, recurring appointments.
- Revenue/pricing models:
  - Tiered SaaS subscription (per clinician), add-ons (telehealth).
- AI/automation usage:
  - Mostly automation for scheduling, reminders, templates; limited advanced AI (workflow automation).
- Data compliance:
  - HIPAA-compliant, BAAs available.
- GTM and partnerships:
  - Channel partnerships with associations, focused content marketing, free trials, onboarding support.

2) Coviu
- Target users:
  - Allied health professionals needing embedded telehealth video for therapy sessions.
- Key features and workflow:
  - Browser-based secure video; whiteboard, screen share, shared resources (exercise libraries), session recording, API/integrations.
- Revenue:
  - Per-user subscription + usage tiers; add-ons for advanced features.
- AI:
  - Limited; may include session analytics or integrations.
- Compliance:
  - Focus on regional compliance (HIPAA, GDPR depending on deployment).
- GTM:
  - Embeds in local health services; partners with payors and clinics.

3) TheraPlatform
- Target users:
  - Therapists (OT/PT/SLP), larger therapy practices, clinics.
- Features:
  - EMR, telehealth, documentation automation, billing, outcome measures, therapy-specific templates.
- Revenue:
  - Tiered subscription + per-clinic pricing; add-ons for billing/telehealth.
- AI:
  - Documentation automation and templates; some automation for outcomes tracking.
- Compliance:
  - HIPAA, regional compliance.
- GTM:
  - Direct sales to clinics, demos, and training.

4) Physitrack / Rehab Guru
- Target users:
  - PT/OTs who prescribe exercises to patients; corporate wellness and clinics.
- Features:
  - Exercise prescription libraries, patient apps, adherence tracking, outcome measures, remote monitoring.
- Revenue:
  - SaaS subscriptions per clinician and enterprise licensing.
- AI:
  - Recommendations for exercises, personalization algorithms.
- Compliance:
  - HIPAA/GDPR where needed.
- GTM:
  - Partnerships with clinics, device manufacturers, insurers.

5) Cliniko
- Target users:
  - Small clinics, private practices (massage, physio, OT).
- Features:
  - Scheduling, patient records, invoicing, reminders, reporting.
- Revenue:
  - Simple per-practitioner monthly pricing.
- AI:
  - Minimal.
- Compliance:
  - Focus on business compliance rather than strict medical regulation; region-specific adaptions.
- GTM:
  - Simple UX-focused marketing to SMEs.

Actionable takeaways for Iran
- Core features to prioritize: scheduling, patient records (SOAP), consent & intake forms (Farsi), secure messaging, appointment reminders, exercise prescription module, basic telehealth (video) as an add-on.
- High-value differentiators locally: Persian-language clinical templates, locally-hosted telehealth (Jitsi or self-hosted WebRTC), built-in Persian exercise library, automatic Farsi speech-to-text and note summarization.
- Avoid early investment in complex insurance billing unless you secure insurance partnerships — build modular billing architecture.
- Emulate HIPAA-level controls (audit logs, encryption) but validate against Iran’s specific medical data rules and Ministry of Health requirements before launch.