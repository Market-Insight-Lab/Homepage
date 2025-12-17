FROM node:20-slim AS builder
WORKDIR /app

# yarn 설치
RUN corepack enable

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build


FROM node:20-slim
WORKDIR /app

COPY --from=builder /app/dist ./dist

RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
