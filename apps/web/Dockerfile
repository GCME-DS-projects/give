FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json nx.json tsconfig.base.json ./
COPY apps/web ./apps/web
COPY packages ./packages

RUN npm install --legacy-peer-deps
RUN npx nx build web

FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app/dist/apps/web ./web
EXPOSE 3000

CMD ["node", "web/server.js"]
