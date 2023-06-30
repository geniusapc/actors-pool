FROM node:18-alpine
WORKDIR /usr/backend

COPY package*.json .
RUN npm i --omit-dev

COPY . .
RUN npm run build

CMD [ "npm", "start:prod" ]
EXPOSE 8080