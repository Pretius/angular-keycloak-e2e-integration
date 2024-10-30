FROM node:20-alpine as builder

RUN mkdir -p /opt/app cd /opt/app
WORKDIR /opt/app
COPY . .
RUN npm install && npx ng build

FROM nginx:1.27-alpine

COPY --from=builder /opt/app/dist/angular-keycloak-e2e-integration/browser/ /usr/share/nginx/html
COPY .docker/default.conf /etc/nginx/conf.d
