# Iran Implementation Strategy: Localization, Compliance, Technical Architecture, GTM

1) Localization barriers (and mitigations)
- Sanctions & international services:
  - Risk: International cloud providers, payment processors, or SaaS may restrict service to Iran.
  - Mitigation: Host primary patient data in Iran (local cloud providers or on-premises). Use open-source or self-hosted alternatives (Jitsi, Matrix/Element) for comms.
- Payments:
  - Risk: No access to Stripe/PayPal; currency fluctuations and inflation.
  - Mitigation: Integrate with local PSPs (Shetab/Shaparak-compliant gateways, ZarinPal-like or local bank APIs). Support invoice + bank transfer and subscription via recurring local card payments.
- Hosting & data residency:
  - Prefer 100% Iran-hosted patient-identifiable data to avoid cross-border legal risk; optional encrypted backups offsite under strict consent if needed.
- Language & cultural UX:
  - Farsi-first UI; right-to-left UI; culturally adapted communications; therapist templates localized to Iran clinical practice patterns.
- Legal & regulatory:
  - Unknowns: telemedicine licensing, mandatory data retention rules, and patient consent norms. Action: retain local healthcare legal counsel and consult Ministry of Health regulations.

2) Technical adaptation — recommended architecture (high level)
- Core principles: data residency, modularity, resilience, and low reliance on blocked services.
- Components:
  - API & Business Logic: Hosted in Iran (Kubernetes on local cloud / dedicated servers).
  - Database: Encrypted PostgreSQL or MongoDB in Iran region; automated encrypted backups.
  - File storage: Object storage inside Iran (S3-compatible local provider).
  - Telehealth/Video: Self-hosted Jitsi or Kurento stack, or a hosted local WebRTC provider. Option: hybrid — media relay in Iran, signaling optionally proxied.
  - Authentication: OAuth2 + JWT with optional 2FA (SMS via local provider).
  - Payments: Local PSP integrations and manual invoicing; recurring card tokenization via sanctioned-supporting PSPs (if available).
  - AI services: Host models in Iran or run locally; sensitive model inference inside Iran.
  - Logging & audit: Immutable audit logs for clinical actions, available for export to regulators.
  - Monitoring & backups: Local monitoring dashboards; DR plan includes cold backups stored offline.
- Open-source stack options:
  - Telehealth: Jitsi, Janus, Mediasoup.
  - Messaging: Matrix (Synapse).
  - STT: Whisper (offline), or local Persian STT if available.
  - ML infra: ONNX, PyTorch on local servers or private GPU providers.

3) Data privacy & compliance approach (minimum viable baseline)
- Technical controls:
  - TLS everywhere, encryption at rest (AES-256), database field-level encryption for PHI, per-user access control.
  - Audit trails for CRUD on patient data.
  - Role-based access control (therapist, assistant, admin).
- Operational controls:
  - Written patient consent forms (Farsi), retention policies, breach response playbook.
  - Employee background checks and least-privilege policy.
- Legal:
  - Emulate international best-practices (HIPAA-ish controls and ISO 27001) while mapping to Iranian law — consult local counsel for required data residency and medical record retention periods.

4) Telehealth practical choices
- Minimum viable telehealth:
  - Browser-first video via self-hosted Jitsi; mobile apps can use WebRTC wrappers.
  - Low-bandwidth fallback: audio-only or adaptive bitrate.
  - Session recording: disabled by default; allowed only with explicit consent and secure storage policy.
  - Latency/quality: use TURN servers hosted in Iran to avoid cross-border bottlenecks.

5) AI implementation (gradual, phased)
- Phase 1 (non-sensitive): scheduling optimization, automated appointment reminders, template-based auto-fill for notes, Persian-language spellcheck.
- Phase 2 (clinical support): Persian STT → note summarization; adaptive exercise recommendations (rule-based + ML).
- Phase 3 (advanced): outcome trend analysis, predictive no-show scoring, visual movement analysis (if you later integrate video analytics — requires stronger legal review).
- Data governance:
  - Keep training/inference inside Iran when using PHI; obtain explicit consent if you plan to use anonymized clinical data to train models.

6) Monetization and pricing (guidelines)
- Core model: subscription per therapist per month, in IRR.
- Tier suggestions (illustrative):
  - Freemium/Intro: Free or low-cost trial — limited appointments and patient records.
  - Basic (300–600k IRR/month): Scheduling, SOAP notes, patient portal, SMS reminders.
  - Pro (800k–1.5M IRR/month): Telehealth add-on, exercise prescription, templates, analytics.
  - Clinic (per clinic seat or bundle): Custom pricing + onboarding, multi-therapist admin.
  - Transactional: Pay-as-you-go for video minutes, priority support, marketplace commissions.
- Note: exact IRR amounts should be validated against current inflation and therapists’ average incomes — see Qs.

7) GTM and partnerships (early traction)
- Early pilots: Tehran independent OTs and university clinics (occupational therapy departments in major medical universities).
- Associations: Iranian Occupational Therapy Association, local rehab societies.
- Universities: co-development for clinical templates and pilot sites.
- Clinics: offer pilot discounts for multi-seat adoption and case studies.
- CPD/Education: integrate content and CPD credits for therapists to encourage adoption.
- Referral & viral: therapist referral credits; patient referral discounts.

8) Risks & mitigations
- Regulatory enforcement or rule changes: mitigate with legal counsel and modular export of data.
- Payment or hosting interruptions: multi-vendor backups with SLAs and offline invoicing.
- Adoption resistance: run clinician co-design sessions, build species of templates, and provide onboarding & content.