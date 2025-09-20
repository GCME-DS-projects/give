FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json nx.json tsconfig.base.json ./
COPY apps/api ./apps/api
COPY packages ./packages

RUN npm install --legacy-peer-deps
RUN npx nx build api

FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app/dist/apps/api ./api
EXPOSE 4000

CMD ["node", "api/main.js"]
