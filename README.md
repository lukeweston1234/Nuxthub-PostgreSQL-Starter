# Nuxt Starter

This is a starter, based on the [Atidone Nuxt](https://github.com/atinux/atidone) application.

This simply adds:

- A PostgreSQL database with a minimal user schema
- Docker compose files for the database

### Getting Started

Launch the PSQL database like so:

```sh
docker-compose -f docker-compose.dev.yml up
```

To start the Nuxt server:

```sh
pnpm i
pnpm run dev
```

### Documentation

For more information, check out the [NuxtHub docs.](https://hub.nuxt.com/)
