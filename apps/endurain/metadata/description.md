# Endurain

**A self-hosted fitness tracking service**

Endurain is a self-hosted fitness tracking service designed to give users full control over their data and hosting environment. Built for amateur athletes who want to track activities, gear, and progress without vendor lock-in.

## Features

### 🏃 Activity Tracking
- Import GPX, TCX, FIT files (manual or bulk)
- Strava integration (sync activities & gear)
- Garmin Connect integration (sync activities, gear, body composition)
- Activity feeds and statistics (week/month)
- Privacy settings per activity

### 🚴 Gear Management
- Track gear: wetsuits, bicycles, shoes, racquets, skis, snowboards
- Component tracking (e.g., bike chain wear, replacement schedules)
- Default gear per activity type

### 👥 Social & Multi-user
- Admin and user profiles
- Follower system (view activities)
- User pages with stats and history

### ⚙️ Core Features
- Multi-language support (10+ languages)
- Metric & imperial units
- Dark/light theme
- MFA (TOTP)
- SSO (OIDC/SAML)
- Email notifications via Apprise
- Goals, weight/steps/sleep logging
- Password reset via email link

## Quick Start

1. Install via Runtipi app store
2. Configure form fields (especially `POSTGRES_PASSWORD`, `REDIS_PASSWORD`, `SECRET_KEY`, `SITE_URL`)
3. Deploy the app
4. Access at your configured `SITE_URL` (default port 8080)
5. Default demo login: `admin` / `admin` — change immediately

## Architecture

Three services:
- **PostgreSQL 18** - primary database
- **Redis 8** - rate limiting, auth storage
- **Endurain** (FastAPI + Vue 3) - main app on port 8080

All data persists in `${APP_DATA_DIR}/data/`.

## Links

- **Website**: https://docs.endurain.com
- **Source**: https://github.com/endurain-project/endurain
- **Demo**: https://demo.endurain.com (resets daily)
- **Discord**: https://discord.gg/6VUjUq2uZR
- **Mastodon**: https://fosstodon.org/@endurain
- **License**: AGPL-3.0