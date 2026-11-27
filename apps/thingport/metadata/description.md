# Thingport

Your personal 3D print model library — self-hosted, organized, and never lost. Upload
or import models from 23 sites (MakerWorld, Printables, Thingiverse, MyMiniFactory and
more), keep collections in sync, add tags/print profiles, preview everything in 3D,
and normalize MakerWorld 3MF files for Cura, PrusaSlicer and other slicers.

**OpenSCAD script customizer:** models that include an `.scad` script can be
regenerated in the browser with sliders, dropdowns and text inputs — Thingport's
self-hosted answer to MakerWorld's Customizer — and the result saves straight back
into your library.

Built-in tools (Multiboard planner, generators, print cost estimator), optional AI
helpers (local model or Claude, off by default), and instance-to-instance collection
sharing included.

## First run

1. Open the app and register — **the first account becomes the admin**.
2. Administration → Connections: add provider keys/sign-ins for MakerWorld,
   Thingiverse, etc. (Printables works out of the box). FlareSolverr is pre-wired.
3. Administration → Overview → **System Health** → *Run full test* and fix anything
   marked Required/Recommended.

## Notes

- amd64 only.
- Images pinned to upstream release 1.8.0 (`ghcr.io/tautvydasderzinskas/thingport-*`),
  FlareSolverr v3.5.2, Postgres 16. Updates follow upstream releases.
- Model files and uploads persist in the app's `storage` folder; the database in `db`.
- A **consume folder** is mounted at `${APP_DATA_DIR}/consume`: anything copied in is
  auto-imported and then removed ("copy, don't move") — ideal feeding ground for a git
  sync of an OpenSCAD designs repo. Configure rules in Administration → Storage →
  Consume Folder. The folder's host owner must match the backend's UID (1000).
- SMTP is not configured by default — email verification/password-reset links are not
  sent until you add SMTP settings to the backend environment.
- Docs: https://www.thingport.net/docs
