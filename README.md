# Nuxt Starter

This is a starter, based on the (Atidone Nuxt)[https://github.com/atinux/atidone] application.

This adds a few things:

- A PostgreSQL database with a minimal user schema
- Docker compose files for the database

### Getting Started

Launch the PSQL database like so:

```sh
docker-compose -f docker-compose.dev.yml up
```

### Drizzle

This repo uses database first migrations. In general, I find them easier to reason with and stronger when more complex behavior is required down the line.

You can use Drizzle kit to update your schema like so:

```sh

```