# payload-astro-localapi

## how to use it ?

### requirements

* install and start a postgresql db
* install project dependencies: `npm i`, `pnpm i` or `bun i`
* create a `.env` file:
```bash
PAYLOAD_SECRET=your_secret_key
DATABASE_URI=postgresql://postgres:postgres@pg:5432/postgres
DEV=true
POSTGRES_PASSWORD=postgres
ASTRO_TELEMETRY_DISABLED=1
```

## run with docker

### requirements

* have [docker](https://docs.docker.com/engine/install/) installed
* have [docker-compose](https://docs.docker.com/compose/install/) installed
* create a `.env` file:
```bash
PAYLOAD_SECRET=your_secret_key
DATABASE_URI=postgresql://postgres:postgres@pg:5432/postgres
DEV=true
POSTGRES_PASSWORD=postgres
ASTRO_TELEMETRY_DISABLED=1
```

### start

1. start and build the containers
```bash
docker compose up
```

2. go to `http://localhost:8080/` to access the front

3. go to `http://localhost:3000/admin` to access the payload admin
