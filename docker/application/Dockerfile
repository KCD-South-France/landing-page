FROM node:lts AS base
WORKDIR /app

FROM base AS deps
COPY application/package*.json ./
RUN npm install

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY application/ ./
RUN npm run build

FROM nginx:stable-alpine AS deploy
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./docker/application/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
