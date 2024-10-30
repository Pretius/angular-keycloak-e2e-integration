# Angular Keycloak Integration with E2E tests in Cypress

## Introduction
This repository consists of several elements
- Frontend application written in Angular
- Keycloak configuration
- E2E tests written in Cypress
- Docker configuration for whole stack

The point of this tech stack is to allow user work with Angular/Keycloak/Cypress locally and also in Docker containers.

### Keycloak
Keycloak is the crucial part of both configurations. It is run inside docker container and exposed at `http://localhost:8080`. Keycloak has predefined configurations, including users, realm and client ID, to allow minimum setup of this project.

#### Normal user
- User: `test`
- Password: `sIjKqg73MTf9uTU`
#### Keycloak administrator
- User: `admin`
- Password: `admin`


### Local configuration
This configuration allows to work locally with Angular application in dev mode along with E2E tests. It requires keycloak to be run and available on `http://localhost:8080`. This is set in docker configuration which is partially used here.

To run configuration locally, run:
- `npm install` in main project directory
- `npm install` in `/e2e` directory
- `npm run start` in main directory for frontend application development
- `npm run cy:run` in `/e2e` directory
- `docker-compose up -d keycloak` in main project directory


### Docker configuration
Running entire docker configuration does several things:
- Runs `keycloak` and does import of predefined realm along with users
- Builds and exposes Angular application on `http://localhost:4200` via nginx on separate docker container
- Runs `e2e` container to allow run tests via Cypress

To run dockerized configuration, run: 
```shell
  docker-compose up -d
```
To run Cypress tests inside container, run:
```shell
  docker container exec -ti e2e bash
```
and then inside container
```shell
  npm run cy:run
```

Test artifacts are connected with host machine via volume, so tests reports along with screenshots and videos will be available immediately on path `/e2e/cypress/` in following folders: `reports`, `screenshots` and `videos`.
