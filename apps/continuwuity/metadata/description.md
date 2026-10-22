# Continuwuity

### A community-maintained Matrix homeserver written in Rust

Continuwuity is the community-driven continuation of conduwuit and Conduit — a
simple, fast and reliable Matrix homeserver. Single Rust binary with an embedded
RocksDB database, light enough to run on a Raspberry Pi, and actively maintained
by the community after the upstream projects were archived.

#### What is Matrix?

[Matrix](https://matrix.org) is an open network for secure and decentralized
communication. Users from every Matrix homeserver can chat with users from all
other Matrix servers.

#### No web UI

This app is a **homeserver only**. Connect with any Matrix client — for example
[Element](https://app.element.io) or [Cinny](https://cinny.in) — and set the
homeserver to the domain you chose for this app.

#### Notes

- The **server name (your domain) is permanent** — all user and room IDs will
  use it. It cannot be changed later without wiping the database.
- The **first registered user becomes the server admin**.
- Set a **Registration Token** when allowing registration, so only people you
  hand the token to can sign up.
- Continuwuity serves the `.well-known/matrix` endpoints on the main port, so
  federation discovery works out of the box when the app is exposed.

Docs: <https://continuwuity.org> · Source: <https://github.com/continuwuity/continuwuity>
