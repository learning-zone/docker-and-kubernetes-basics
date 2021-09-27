# Docker Practice Questions

1. Introduction (Download and Install)
2. Images, Containers, and Docker Server (Daemon)
3. Default Commands
4. List, Create, and Start Containers
5. Logs, Stop, and Kill Containers
6. Remove and Inspect Containers
7. Run a Command in a Running Container with exec
8. Creating Custom Images
9. Create an Image from a Dockerfile
10. COPY and ADD commands
11. Creating a Realistic Project
12. Debugging and Running Project

<br/>

## 1. Introduction ( Download and Install )

* [Containers and Virtual Machines](https://www.docker.com/resources/what-container)
* [Docker Hub](https://hub.docker.com/)
* Docker Installation
* [VS Code docker plugin](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

```docker
docker version          # display docker version 
docker info 
docker run hello-world  # check image in local and download from docker hub 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

##  2. Images and Containers

```docker
docker container ls         # Display list of containers running 
docker ps                   # Display list of containers running
docker container ls -a      # Display Container List History 
docker image ls             # Display image List 
docker images               # Display image List 
docker history hello-world  # Show the history of an image 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

##  3. Docker Default Commands

```docker
docker container run hello-world                  # more simplified command 
docker container run busybox                      # contains basic linux tools 
docker container run busybox ls                   # display list of dictories 
docker container run busybox echo "Hello World"   # display Hello World 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

##  4. List, Create, and Start Containers

```docker
docker container ls                    # display list of containers running 
docker container ls -a                 # display history of containers was running 
docker container run hello-world
docker container create hello-world    # returns id of conatiner created 
docker container ls -a
docker container start -a 814d7eaba88d # Start a conatiner using conatiner-id 
docker conatiner ls -a 
docker system prune --all               # Clear dangling and unused images 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

##  5. Logs, Stop, and Kill Containers

```docker
docker container ls
docker container create busybox ls 
docker container start 5268e3bde091
docker container logs 5268e3bde091
ping google.com
docker container create busybox ping google.com
docker container ls -a
docker container start c4ea136fc7a1
docker container ls -a
docker container stop c4ea136fc7a1     # Does the cleanup before stopping the conatiner 
docker container kill c4ea136fc7a1     # Stop the container immediately 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

##  6. Remove and Inspect Containers

```docker
docker container ls -a
docker container rm c4ea136fc7a1        # Remove container 
docker container rm -f c4ea136fc7a1     # Force removal container 
docker container ls -a 
docker container inspect c4ea136fc7a1   # Inspect docker image 
docker system prune --all
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

##  7. Run a Command in a Running Container with exec

```docker
docker container run redis                       # Redis is an open-source, networked, in-memory, key-value data store 
new terminal > docker container ls -a
docker container exec dd4c1b706977 redis-cli     # Execute "redis-cli" in local terminal 
docker container exec -it dd4c1b706977 redis-cli # Execute "redis-cli" command inside redis terminal 
# help
# exit
docker container exec -it dd4c1b706977 sh
# cd /
# ls 
# exit
docker container run -it busybox sh       # Open sh terminal in busybox 
# ls -la                                  # show list of files and directories 
# exit
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

##  8. Creating Custom Images

```docker
docker container run -it --name scm-container alpine:latest /bin/sh   # Create a new custom conatiner "scm-container" 
# apk add --update redis                                              # Updates apk package in redis 
docker container commit scm-container scm-image                       # Creates a new image from "scm-container" 
docker image ls                                                       # display image list 
docker container run scm-image redis-server                           # Star custom container using redis server 
docker container exec -it angry_banzai redis-cli                      # Validate redis server using redis-cli 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

##  9. Create an Image from a Dockerfile

* **Dockerfile**

```docker
FROM alpine:latest
RUN apk add --update redis
CMD ["redis-server"]
```

```docker
docker build .                    # Build image from current directory using Dockerfile 
docker image ls                   # View build image 
docker image rm -f 0d62f500bf1c   # Remove build image 
docker image ls
docker build -t sofyspace/scm-redis:latest .  # Build image from current directory using Dockerfile 
docker run sofyspace/scm-redis
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

##  10. COPY and ADD Commands

* **Dockerfile**

```docker
# From alpine library
FROM alpine

# Copy all the files from source directory to image
COPY ./html_files /app/html

# Copy Sample.txt file to image
COPY Sample.txt /app/sample.txt

# Copy corn.tar file to image
ADD corn.tar /app

# Copy svg file directly from url to image
ADD https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/svg/docker.svg /app/images/logo.svg
```

```docker
docker build .                  # Build image from current directory using Dockerfile ]
docker image ls   
docker run -it 0f7408b5dc7f sh  # Rnu the build container in interactive mode 
# ls -la                        # Display all directories 
# cd app/                       # app directory 
# ls -la                        # List all files and directories 
# cd ..                         # Parent directory 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## 11. Creating a project

* **Website directory**

* **index.js**

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Node.js Server Running!');
});

app.listen(8080, () => {
   console.log('Listening on port 8080');
});


>> package.json

{
    "dependencies": {
        "express": "*"
    },
    "scripts": {
        "start": "node index.js"
    }
}
```

* **Dockerfile**

```docker
# alpine will download only basic version of node.js
FROM node:alpine

# Instead of root directory, program will use "/usr/app" directory
WORKDIR /usr/app

# Copy local directory to nodejs directory
COPY ./ ./

# Perform npm install
RUN npm install

# Run npm start in command prompt
CMD ["npm", "start"]
```

```docker
docker build -t sofyspace/scm-website:latest .
docker run sofyspace/scm-website                      # Project will run on docker conatiner
docker run -p 8085:8085 sofyspace/scm-website         # Project will run on local and will map to docker conatiner port 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## 12. Push Project in Docker Hub

```docker
docker login
docker push sofyspace/scm-website 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## 13. Docker Compose

* [docker-node-mongo](https://github.com/bradtraversy/docker-node-mongo)

* **docker-node-mongo directory**

* **Dockerfile**

```docker
FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

* **docker-compose.yml**

```docker
version: '3'
services:
  app:
    container_name: docker-node-mongo
    restart: always
    build: .
    ports:
      - '80:3000'
    external_links:
      - mongo
  mongo:
    container_name: mongo
    image: mongo
    ports:
      - '27017:27017'

```

```docker
docker-compose up    # Install nodejs and mongoDB image  
localhost            # Default port is 80
docker-compose down  # Remove Container 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
