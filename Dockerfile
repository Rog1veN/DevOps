FROM node:20-alpine AS builder
WORKDIR /app

COPY projeto/package*.json ./
RUN npm install

COPY projeto/ .
RUN npx next build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]