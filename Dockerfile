FROM node:12 as builder

WORKDIR /app

COPY . .

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

RUN yarn build

RUN yarn generate

FROM node:12

WORKDIR /app

COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "start" ]