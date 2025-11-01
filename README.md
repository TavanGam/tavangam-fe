# TavanGam — Frontend (Angular + PrimeNG)

TavanGam is a Farsi-first occupational therapy and telehealth platform. This repository hosts the web frontend built with Angular 20 and PrimeNG, customized from the Sakai dashboard to deliver therapist and patient portals for Iran-first deployment.

## Vision

Build a world-class, Iran-hosted platform that streamlines scheduling, documentation (SOAP), telehealth, and exercise prescription for occupational therapists, with Persian-language UX and templates.

## MVP Scope (Phase 1)

- Therapist dashboard (Sakai-based) with Farsi RTL support
- Patient records with SOAP notes and Farsi intake/consent forms
- Scheduling and calendar (ICS export)
- Notifications and SMS/email reminders (stubs in frontend)
- Minimal in-app messaging UI

## Planned Features (Next Phases)

- Telehealth module (self-hosted Jitsi integration)
- Exercise prescription library with Persian content
- Persian STT for note drafting and summarization
- Local PSP integration for subscriptions and invoicing
- Analytics dashboard for appointments, adherence, outcomes

## Roadmap (High-Level)

- Phase 1 (0–3 months): MVP dashboard, auth, patients, SOAP, scheduling, reminders
- Phase 2 (3–9 months): AI note assist (Persian STT), smart scheduling, payments, basic telehealth
- Phase 3 (9–21 months): Scaled telehealth, analytics, multi-therapist clinic admin, integrations

## Development

### Prerequisites
- Node.js 20+, PNPM/NPM

### Install
```bash
npm install
```

### Start dev server
```bash
npm start
```
Open `http://localhost:4200/`.

### Build
```bash
npm run build
```

## Theming and Layout
- PrimeNG + `@primeuix/themes`
- Global styles in `src/assets/layout` and `src/assets/styles.scss`

## Project Structure
- `src/app/pages` — feature pages (dashboard, auth, uikit demos)
- `src/app/layout` — layout components (topbar, sidebar, menu)
- `src/app/pages/service` — demo data services (to be replaced by real API)

## Docs and Planning
Business, localization, and roadmap materials live in `docs/`:
- `docs/competitive_analysis.md`
- `docs/iran_strategy.md`
- `docs/mvp_roadmap.md`
- `docs/investor_pitch_outline.md`
- `docs/questions.md`

These inform frontend prioritization and copy (Farsi UX, templates, telehealth choices). Future README updates will link API specs and deployment guides.

## License
MIT © Rasoul Veisi
