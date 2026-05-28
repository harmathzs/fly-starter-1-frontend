# Build stage: install deps and compile Vite app into static files
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./

# Accept backend URL from Fly build args and expose it to Vite at build time.
# Vite reads import.meta.env during build, not at Nginx runtime.
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN npm run build

# Runtime stage: serve compiled files with Nginx
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80