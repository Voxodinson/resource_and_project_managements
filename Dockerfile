FROM node:18-alpine as build

# Exact same steps as before
WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

FROM node:18-alpine as prod

WORKDIR /app

COPY --from=build /app/.output /app/.output

CMD ["node", ".output/server/index.mjs"]