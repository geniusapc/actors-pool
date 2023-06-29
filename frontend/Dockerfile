FROM node:18-alpine
WORKDIR /usr/app
COPY . .
RUN npm install --omit=dev
RUN npm run build
RUN npm i -g serve
CMD [ "serve", "build", "-p", "3000" ]
EXPOSE 3000