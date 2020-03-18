# JSHunt
JSHunt - Following Node, ReactJS and React Native free courses on Rocketseat. 

## Running Application
### Method 1
- Install docker and docker-compose
- `git clone` this repo
- Run `docker-compose build` and `docker-compose up`
- Open your browser in http://localhost:3000

### Method 2
- Install docker
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
docker run --name backend --network=jshunt -e MONGODB_HOST=mongodb -p 3001:3001 -d backend
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
- Install node, yarn and mongodb
- Start mongodb
- Go to backend folder, run `npm install` and `npm run demo`
- Go to frontend folder, run `yarn install` and `npm start`

## TODO
- [x] Backend
- [x] Frontend
- [ ] Mobile App