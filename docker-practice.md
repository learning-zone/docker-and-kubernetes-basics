# Docker Session

1. Introduction
1. Images and Containers
1. List, Create and Start Containers
1. Logs, Stop and Kill Containers
1. Inspect and Remove Containers
1. Run a Command in a Running Container with exec
1. Creating Custom Image
1. Creating an Image from a Dockerfile
1. COPY and ADD commands
1. Creating a Project and deploy in Docker-Hub
1. Run SQL Server on Docker
1. Docker Compose

<br/>

## 1. Introduction

* [Containers and Virtual Machines](https://www.docker.com/resources/what-container)
* [Docker Hub](https://hub.docker.com/)
* Docker Installation
* [VS Code docker plugin](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

```js
docker version          // display docker version 
docker info 
docker run hello-world  // check image in local and download from docker hub 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## 2. Images and Containers

```js
docker container ls         // Display list of containers running 
docker ps                   // Display list of containers running 
docker container ls -a      // Display Container List History 
docker image ls             // Display image List 
docker images               // Display image List 
docker history hello-world  // Show the history of an image 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## 3. List, Create and Start Containers

```js
docker container run hello-world                  // more simplified command 
docker container run busybox                      // contains basic linux tools 
docker container run busybox ls                   // display list of dictories 
docker container run busybox echo "Hello World"   // display Hello World 
docker container ls                    // display list of containers running 
docker container ls -a                 // display history of containers was running 
docker container run hello-world
docker container create hello-world    // returns id of conatiner created 
docker container ls -a
docker container start -a <container-id> // Start a container using container-id, -a = Attach STDOUT/STDERR and forward signals 
docker conatiner ls -a 
docker system prune --all               // Clear dangling and unused images 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## 4. Logs, Stop, and Kill Containers

```js
docker container ls
docker container create busybox ls 
docker container start <container-id>
docker container logs <container-id>
ping google.com
docker container create busybox ping google.com
docker container ls -a
docker container start <container-id>
docker container ls -a
docker container stop <container-id>     // Does the cleanup before stopping the conatiner 
docker container kill <container-id>     // Stop the container immediately 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## 5. Inspect and Remove Containers

```js
docker container ls -a 
docker container inspect <container-id>   // Inspect docker image 
docker container ls -a
docker container rm <container-id>        // Remove container 
docker container rm -f <container-id>     // Force removal container 
docker system prune --all
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## 6. Run a Command in a Running Container with exec

```js
docker container run redis                       // Redis is an open-source, networked, in-memory, key-value data store 
new terminal > docker container ls -a
docker container exec <container-id> redis-cli     // Execute "redis-cli" in local terminal 
docker container exec -it <container-id> redis-cli // Execute "redis-cli" command inside redis terminal 
# help
# exit
docker container exec -it <container-id> sh
# cd /
# ls 
# exit
docker container run -it busybox sh       // Open sh terminal in busybox 
# ls -la                                  // show list of files and directories 
# exit
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## 7. Creating Custom Image

```js
docker container run -it --name scm-container alpine:latest /bin/sh   // Create a new custom conatiner "scm-container" 
# apk add --update redis                                              // Updates apk package in redis 
# exit                                             
docker container commit scm-container scm-image                       // Creates a new image from "scm-container" 
docker image ls                                                       // display image list 
docker container run scm-image redis-server                           // Star custom container using redis server 
docker container exec -it angry_banzai redis-cli                      // Validate redis server using redis-cli 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## 8. Creating an Image from a Dockerfile

* **Dockerfile**

```js
FROM alpine:latest
RUN apk add --update redis
CMD ["redis-server"]
```

```js
docker build .                    // Build image from current directory using Dockerfile 
docker image ls                   // View build image 
docker image rm -f <image-id>   // Remove build image 
docker image ls
docker build -t sofyspace/scm-redis:latest .  // Build image from current directory using Dockerfile 
docker run sofyspace/scm-redis
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## 9. COPY and ADD Commands

* **Dockerfile**

```js
# From alpine library
FROM alpine

# Copy all the files from source directory to Docker image
COPY ./html_files /app/html

# Copy Text file to Docker image
COPY sample.txt /app/sample.txt

# Copy tar file to Docker image
ADD file.tar /app

# Copy svg file directly from url to Docker image
ADD https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/svg/docker.svg /app/images/logo.svg
```

```js
docker build .                  // Build image from current directory using Dockerfile ]
docker image ls   
docker run -it <image-id> sh  // Rnu the build container in interactive mode 
# ls -la                        // Display all directories 
# cd app/                       // app directory 
# ls -la                        // List all files and directories 
# cd ..                         // Parent directory 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## 10. Creating a project and deploy in Docker-Hub

```js
npm init  // create package.json file
```

* **index.js**

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Node.js Server Running!');
});

app.listen(3000, () => {
   console.log('Listening on port 3000');
});
```

* **package.json**

```js
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

```js
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

```js
docker build -t sofyspace/scm-website:latest .        // --tag , -t   ==> Name and optionally a tag in the 'name:tag' format
docker run sofyspace/scm-website                      // Project will run on docker conatiner
docker run -p 3000:3000 sofyspace/scm-website         // Project will run on local and will map to docker conatiner port 
docker login
docker push sofyspace/scm-website                     // Deploy in Docker Hub
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## 12. Run SQL Server on Docker

```js
docker pull mcr.microsoft.com/mssql/server:2017-CU8-ubuntu  // Pull MSSQL-2019 container image
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=<YourStrong@Passw0rd>" -p 1433:1433 --name sql1 -h sql1 -d mcr.microsoft.com/mssql/server:2017-CU8-ubuntu
```

| Parameter          | Description                  |
|--------------------|------------------------------|
|-e "ACCEPT_EULA=Y"  | End-User Licensing Agreement |
|-e "SA_PASSWORD=<YourStrong@Passw0rd>" | Required setting for the SQL Server image.|
|-p 1433:1433        |Map a TCP port on the host environment (first value) with a TCP port in the container (second value).|
| --name sql1        |Specify a custom name for the container rather than a randomly generated one|
| -h sql1            |Used to explicitly set the container hostname|
| mcr.microsoft.com/mssql/server:2017-CU8-ubuntu |The SQL Server 2017 Ubuntu Linux container image.|

**Connect to SQL Server:**

```js
docker exec -it sql1 "bash"
/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "<YourNewStrong@Passw0rd>"
```

**Create a new database:**

```js
CREATE DATABASE TestDB
SELECT Name from sys.Databases
GO
```

**Insert Data:**

```js
USE TestDB
CREATE TABLE Inventory (id INT, name NVARCHAR(50), quantity INT)
INSERT INTO Inventory VALUES (1, 'banana', 150); INSERT INTO Inventory VALUES (2, 'orange', 154);
GO
```

**Select Data:**

```js
SELECT * FROM Inventory WHERE quantity > 152;
GO
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## 13. Docker Compose

* [docker-node-mongo](https://github.com/bradtraversy/docker-node-mongo)

* **docker-node-mongo directory**

* **Dockerfile**

```js
FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

* **docker-compose.yml**

```js
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

```js
docker-compose up    // Install nodejs and mongoDB image  
localhost            // Default port is 80
docker-compose down  // Remove Container 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
