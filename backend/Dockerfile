FROM node:18-alpine
WORKDIR /usr/backend

COPY package*.json .
RUN npm i --omit-dev

COPY . .
RUN npm run build

ENV PORT=8081

CMD [ "npm", "run", "start:prod" ]

EXPOSE 8081