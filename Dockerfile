FROM node:18-alpine as client-build

WORKDIR /app
COPY ./client/package*.json ./
RUN npm ci
COPY ./client ./
RUN npm run build

FROM node:18-alpine as server-build

WORKDIR /app
COPY ./server/package*.json ./
RUN npm ci
COPY ./server ./
RUN npm run build

FROM node:18-alpine as final-build
COPY --from=ghcr.io/ufoscout/docker-compose-wait:latest /wait /wait

WORKDIR /app/server
COPY --from=server-build /app ./
WORKDIR /app/client
COPY --from=client-build /app ./

EXPOSE 8000

WORKDIR /app/server
CMD /wait && npm start
