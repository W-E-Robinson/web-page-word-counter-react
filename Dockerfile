FROM node:22-alpine

WORKDIR /app

COPY ./package.json ./package-lock.json ./

RUN npm i --omit=dev

COPY ./public ./public
COPY ./src ./src
COPY ./tsconfig.json ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
