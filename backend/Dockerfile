FROM node:current-alpine

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 3001

ENTRYPOINT [ "npm", "run", "start" ]