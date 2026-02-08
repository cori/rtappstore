# FPV Training Tracker

A self-hosted Progressive Web App for tracking FPV freestyle drone training progress. Built with Hono and SQLite for a lightweight, portable deployment.

## Features

- **Session Logging** - Record training sessions with auto-saving forms, crash logging taxonomy, and notes
- **Trick Mastery** - Track 29 tricks across 5 skill levels with attempt-based mastery computation
- **Phase Progression** - Follow a 20-week training schedule with 26 phase gate checkpoints
- **Indoor Drills** - 8 drills verified for indoor spaces (10x20ft)
- **Equipment Tracking** - Monitor gear status and maintenance
- **Trip Preparation** - Checklists for travel and event readiness
- **Reference Library** - 26 curated resources and links

## User Interface

- 5-tab mobile SPA: Today, Sessions, Progress, Tricks, Denver
- Dark theme with large touch targets (48px+)
- PWA with offline support via service worker
- JSON import/export for data portability

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| TZ | Timezone | UTC |

## Data Persistence

All data is stored in a SQLite database at `/app/data/fpv-tracker.db`. The data directory is mounted as a volume to ensure persistence across container restarts.

## Resources

- [Source Code](https://github.com/cori/flowchart)
