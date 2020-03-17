from node:current-alpine as build

COPY . /app

WORKDIR /app

RUN yarn install

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]