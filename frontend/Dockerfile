FROM node:18-alpine
WORKDIR /usr/app

COPY package*.json .
RUN npm i --omit-dev 
COPY . .
RUN npm run build
RUN npm i -g serve
CMD [ "serve", "build", "-p", "3000" ]
EXPOSE 3000