# Docker Workshop

1. [Introduction](#1-introduction)
1. [Images and Containers](#2-images-and-containers)
1. [Create and Start Containers](#3-create-and-start-containers)
1. [Logs, Stop and Kill Containers](#4-logs-stop-and-kill-containers)
1. [Inspect and Remove Containers](#5-inspect-and-remove-containers)
1. [Run a Command in a Running Container with exec](#6-run-a-command-in-a-running-container-with-exec)
1. [Creating Custom Image](#7-creating-custom-image)
1. [Creating an Image from a Dockerfile](#8-creating-an-image-from-a-dockerfile)
1. [COPY and ADD commands](#9-copy-and-add-commands)
1. [Dockerizing a Nodejs project and deploy in Docker-Hub](#10-dockerizing-a-nodejs-project-and-deploy-in-docker-hub)
1. [React and SQL-Server connectivity](#11-react-and-sql-server-connectivity)
1. [Docker Compose](#12-docker-compose)

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
docker container ls         // Display list of running containers  
docker ps                   // Display list of running containers  
docker container ls -a      // Display list of container history 
docker image ls             // Display list of images
docker images               // Display list of images 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## 3. Create and Start Containers

```js
docker container run hello-world        // more simplified command 
docker container run busybox            // It is tiny versions of many common UNIX utilities into a single small executable 
docker container run busybox ls         // display list of directories 
docker container ls -a                  // display history of containers was running 
docker container run hello-world
docker container create hello-world     // returns id of conatiner created 
docker container ls -a
docker container start -a <container-id> // Start a container using container-id, -a = Attach STDOUT/STDERR and forward signals 
docker conatiner ls -a 
docker system prune --all                // Remove all dangling and unused images 
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
# ls -la                                  // Show list of files and directories 
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
docker container exec -it <container-id> redis-cli                      // Validate redis server using redis-cli 
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

## 10. Dockerizing a Nodejs project and deploy in Docker-Hub

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
   console.log(`Node APP Listening at http://localhost:3000/`);
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

## 11. Run SQL Server on Docker

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

**Push SQL-Server to Docker Hub:**

**Dockerfile:**

```js
FROM mcr.microsoft.com/mssql/server:2017-CU8-ubuntu

# Create work directory
RUN mkdir -p /usr/work
WORKDIR /usr/work

# Copy all scripts into working directory
COPY . /usr/work/

# Grant permissions for the import-data script to be executable
RUN chmod +x /usr/work/import-data.sh
EXPOSE 1433
CMD /bin/bash ./entrypoint.sh
```

```js
// Build SQL Server Image
docker build -t sofyspace/sqlserver:dev .

// Push to Docker Hub
docker push sofyspace/sqlserver:dev

// Connect to Sql Server
docker exec -it sqlserver "bash"

// Start the Sql Server Container
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=<YourNewStrong@Passw0rd>" -p 1433:1433 -d sofyspace/sqlserver:dev
```

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
INSERT INTO Inventory VALUES (1, 'Banana', 150); INSERT INTO Inventory VALUES (2, 'Orange', 154); INSERT INTO Inventory VALUES (3, 'Apricot', 200); INSERT INTO Inventory VALUES (4, 'Avocado', 120); INSERT INTO Inventory VALUES (5, 'Cherry', 230); INSERT INTO Inventory VALUES (6, 'Grapes', 420); INSERT INTO Inventory VALUES (7, 'Black plum', 194); INSERT INTO Inventory VALUES (8, 'Guava', 154); INSERT INTO Inventory VALUES (9, 'Kiwi', 110); INSERT INTO Inventory VALUES (10, 'Lychee', 300);
GO
```

**Select Data:**

```js
SELECT * FROM Inventory WHERE quantity > 152;
GO
```

**Reference:**

* *[https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-powershell](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-powershell)*

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## 12. Docker Compose

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

**Reference:**

* *[https://github.com/bradtraversy/docker-node-mongo](https://github.com/bradtraversy/docker-node-mongo)*

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
