# Docker Command Cheatsheet

> ***[Install Docker Desktop on Windows](https://docs.docker.com/desktop/windows/install/)***

<br/>

## Docker Login

**Login to a registry:**

```bash
docker login [OPTIONS] [SERVER]

[OPTIONS]:
-u/--username username
-p/--password password

# Example:

1. docker login localhost:8080 // Login to a registry on your localhost
2. docker login
```

**Logout from a registry:**

```bash
docker logout [SERVER]

# Example:
docker logout localhost:8080 // Logout from a registry on your localhost
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Docker Container Commands

**Create a container:**

```bash
docker container create [OPTIONS] IMAGE [COMMAND] [ARG...]

# Example:
docker container create -t -i sofyspace/hello-world --name hello-world
```

**Rename an existing container:**

```bash
docker container rename CONTAINER NEW_NAME

# Example:
docker container rename mssql sqlserver
```

**Run a command in a new container:**

```bash
docker container run [OPTIONS] IMAGE [COMMAND] [ARG...]

# Example:
docker container run -it --name sqlserver -d sofypace/sqlserver
```

**Delete a container:**

```bash
docker container rm [OPTIONS] CONTAINER [CONTAINER...]

# Example:
docker container rm hello-world
```

**Update the configuration of one or more containers:**

```bash
docker container update [OPTIONS] CONTAINER [CONTAINER...]

# Example:
docker container update --memory "1g" --cpuset-cpu "1" golang // update the golang to use 1g of memory and only use cpu core 1
```

**Start a container:**

```bash
docker container start [OPTIONS] CONTAINER [CONTAINER...]

# Example:
docker container start redis
```

**Stop a running container:**

```bash
docker container stop [OPTIONS] CONTAINER [CONTAINER...]

# Example:
docker container stop redis
docker stop $(docker ps -a -q) // To stop all the containers
```

**Stop a running container and start it up again:**

```bash
docker container restart [OPTIONS] CONTAINER [CONTAINER...]

# Example:
docker container restart redis
```

**Pause processes in a running container:**

```bash
docker container pause CONTAINER [CONTAINER...]

# Example:
docker container pause redis
```

**Unpause processes in a running container:**

```bash
docker container unpause CONTAINER [CONTAINER...]

# Example:
docker container unpause redis
```

**Block a container until others stop (after which it prints their exit codes):**

```bash
docker container wait CONTAINER [CONTAINER...]

# Example:
docker container wait redis
```

**Kill a container by sending a SIGKILL to a running container:**

```bash
docker container kill [OPTIONS] CONTAINER [CONTAINER...]

# Example:
docker container kill redis
```

**Attach local standard input, output, and error streams to a running container:**

```bash
docker container attach [OPTIONS] CONTAINER [CONTAINER...]
```

**SSH into container:**

```bash
docker exec -it [OPTIONS] CONTAINER [CONTAINER...] /bin/sh

# Example
docker container exec -it redis /bin/sh
```

**Check docker daemon disk space usage:**

```bash
docker system df
```

**Remove all dangling and unused images and containers:**

```bash
docker system prune --all
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Docker Image Commands

**Create an image from a Dockerfile:**

```bash
docker build <Dockerfile_url>
```

docker build -t – builds an image from a Dockerfile in the current directory and tags the image

**Pull an image from a registry:**

```bash
docker image pull [OPTIONS] NAME[:TAG|@DIGEST]

# Example:
docker image pull redis:latest
```

**Push an image to a registry:**

```bash
docker image push [OPTIONS] NAME[:TAG]

# Example
docker image push sofyspace/redis:6.2
```

**Create an image from a tarball:**

```bash
docker import <URL/FILE>
```

**Create an image from a container:**

```bash
docker container commit <CONTAINER_NAME> <new_image_name>
```

**Remove an image:**

```bash
docker image rm <IMAGE_NAME>

# Example
docker image rm -f redis
```

**Load an image from a tar archive or stdin:**

```bash
docker load <TAR_FILE/STDIN_FILE>
```

**Save an image to a tar archive, streamed to STDOUT with all parent layers, tags, and versions:**

```bash
docker save <IMAGE_NAME> > <TAR_FILE>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Docker Commands for Container and Image Information

**List running containers:**

```bash
docker ps
docker ps -a
```

docker ps -a – lists both running containers and ones that have stopped

**List the logs from a running container:**

```bash
docker container logs <CONTAINER_ID>

# Example
docker container logs busybox  
```

**List low-level information on Docker objects:**

```bash
docker container inspect [OBJECT_NAME/ID]

# Example
docker container inspect busybox 
```

**List real-time events from a container:**

```bash
docker events <CONTAINER_ID>
```

**Show port (or specific) mapping for a container:**

```bash
docker port <CONTAINER_ID>
```

**Show running processes in a container:**

```bash
docker top <CONTAINER_ID>
```

**Show live resource usage statistics of containers:**

```bash
docker stats <CONTAINER_ID>
```

**Show changes to files (or directories) on a filesystem:**

```bash
docker diff <CONTAINER_ID>
```

**List all images that are locally stored with the docker engine:**

```bash
docke image ls
```

**Show the history of an image:**

```bash
docker history [IMAGE]
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Networks

**List networks:**

```bash
docker network ls
```

**Remove one or more networks:**

```bash
docker network rm NETWORK [NETWORK...]

# Example:
docker network rm my-network
```

**Inspect network:**

```bash
docker network inspect networkname

# Example:
docker network inspect bridge
```

**Connects a container to a network:**

```bash
docker network connect [OPTIONS] NETWORK CONTAINER

# Example:
docker network connect multi-host-network container1
```

**Disconnect a container from a network:**

```bash
docker network disconnect [OPTIONS] NETWORK CONTAINER

# Example:
docker network disconnect multi-host-network container1
```

**Create network:**

It is possible to create a network in Docker before launching containers

```bash
docker network create [OPTIONS] NETWORK

# Example:
docker network create –-driver bridge some_network
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Dockerfile Instruction Arguments

|Command        |Description|
|---------------|-----------------------------------|
|FROM           | Sets the base image for subsequent|
|MAINTAINER     | Sets the author field of the generated images|
|RUN            | Execute commands in a new layer on top of the current image and commit the results|
|CMD            | Allowed only once (if many then last one takes effect) |
|LABEL          | Adds metadata to an image|
|EXPOSE         | Informs container runtime that the container listens on the specified network ports at runtime|
|ENV            | Sets an environment variable|
|ADD            | Copy new files, directories, or remote file URLs from into the filesystem of the container|
|COPY           | Copy new files or directories into the filesystem of the container|
|ENTRYPOINT     | Allows you to configure a container that will run as an executable|
|VOLUME         | Creates a mount point and marks it as holding externally mounted volumes from native host or other containers|
|USER           | Sets the username or UID to use when running the image|
|WORKDIR        | Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, and ADD commands|
|ARG            | Defines a variable that users can pass at build-time to the builder using --build-arg|
|ONBUILD        | Adds an instruction to be executed later, when the image is used as the base for another build|
|STOPSIGNAL     | Sets the system call signal that will be sent to the container to exit|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
