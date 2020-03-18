# JSHunt
JSHunt is a curation of the best products in JavaScript world. Based on [Product Hunt](https://www.producthunt.com/).

![JSHunt WebApp](https://raw.githubusercontent.com/israelvf/JSHunt/master/images/jshunt.png)

Built following Node, ReactJS and React Native free courses on Rocketseat. 

## Running Application
### Method 1
- Install [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/)
- `git clone` this repo
- Run `docker-compose build` and `docker-compose up`
- Open your browser in http://localhost:3000

### Method 2
- Install [docker](https://docs.docker.com/install/)
- `git clone` this repo
- Go to backend folder and run the following commands:
```sh
# create backend image
docker build -t backend .

# create a network to connect services
docker network create jshunt

# run mongodb container
docker run --name mongodb --network=jshunt -d mongo

# run backend container
docker run --name backend --network=jshunt -e MONGODB_HOST=mongodb -p 3001:3001 --entrypoint npm -d backend -c run demo
```
- Go to frontend folder and run the following command:
```sh
# create frontend image
docker build -t frontend .

# run frontend container
docker run --name frontend -e BACKEND_ADDRESS=localhost:3001 -p 3000:80 -d frontend
```
- Open your browser in http://localhost:3000 

### Method 3
- Install [node](https://nodejs.org/en/download/), [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) and [mongodb](https://docs.mongodb.com/manual/installation/)
- Start mongodb
- Go to backend folder, run `npm install` and `npm run demo`
- Go to frontend folder, run `yarn install` and `npm start`

## TODO
- [x] Backend
- [x] Frontend
- [ ] Mobile App