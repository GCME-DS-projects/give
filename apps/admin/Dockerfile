FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json nx.json tsconfig.base.json ./
COPY apps/admin ./apps/admin
COPY packages ./packages

RUN npm install --legacy-peer-deps
RUN npx nx build admin

FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app/dist/apps/admin ./admin
EXPOSE 3001

CMD ["node", "admin/server.js"]
