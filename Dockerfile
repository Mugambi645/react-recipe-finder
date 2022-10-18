FROM node:latest as builder

WORKDIR /app
COPY package.json . 

RUN npm install
COPY . .
COPY .env .
RUN npm run build

FROM nginx:1.15-alpine

COPY --from=builder /app/build /usr/share/nginx/html