# Docker Command Cheatsheet

> ***[Install Docker Desktop on Windows](https://docs.docker.com/desktop/windows/install/)***

<br/>

## Docker Container Commands

Create a container

```js
// Syntax
docker create <CONTAINER_NAME>

// Example
docker create hello-world
```

Rename an existing container

```js
docker rename <CONTAINER_NAME> <NEW_CONTAINER_NAME>
```

Run a command in a new container

```js
docker container run <CONTAINER_ID> <COMMAND>
```

Delete a container

```js
docker container rm <CONTAINER_ID>
```

Update the configuration of one or more containers:

```js
docker container update <CONTAINER_ID>
```

Start a container

```js
docker container start <CONTAINER_ID>
```

Stop a running container

```js
docker container stop <CONTAINER_ID>
```

Stop a running container and start it up again:

```js
docker container restart <CONTAINER_ID>
```

Pause processes in a running container:

```js
docker container pause <CONTAINER_ID>
```

Unpause processes in a running container:

```js
docker container unpause <CONTAINER_ID>
```

Block a container until others stop (after which it prints their exit codes):

```js
docker container wait <CONTAINER_ID>
```

Kill a container by sending a SIGKILL to a running container:

```js
docker container kill <CONTAINER_ID>
```

Attach local standard input, output, and error streams to a running container:

```js
docker container attach <CONTAINER_ID>
```

SSH into container

```js
docker exec -it <CONTAINER_ID> /bin/sh
```

Check docker daemon disk space usage

```js
docker system df
```

Remove all dangling and unused images and containers

```js
docker system prune --all
```

## Docker Image Commands

Create an image from a Dockerfile:

```js
docker build <Dockerfile_url>
```

docker build -t – builds an image from a Dockerfile in the current directory and tags the image

Pull an image from a registry:

```js
docker pull <IMAGE_NAME>
```

Push an image to a registry:

```js
docker push <IMAGE_NAME>
```

Create an image from a tarball:

```js
docker import <URL/FILE>
```

Create an image from a container:

```js
docker container commit <CONTAINER_NAME> <new_image_name>
```

Remove an image:

```js
docker image rm <IMAGE_NAME>
```

Load an image from a tar archive or stdin:

```js
docker load <TAR_FILE/STDIN_FILE>
```

Save an image to a tar archive, streamed to STDOUT with all parent layers, tags, and versions:

```js
docker save <IMAGE_NAME> > <TAR_FILE>
```

## Docker Commands for Container and Image Information

List running containers:

```js
docker ps
```

docker ps -a – lists both running containers and ones that have stopped

List the logs from a running container:

```js
docker logs <CONTAINER_ID>
```

List low-level information on Docker objects:

```js
docker inspect [OBJECT_NAME/ID]
```

List real-time events from a container:

```js
docker events <CONTAINER_ID>
```

Show port (or specific) mapping for a container:

```js
docker port <CONTAINER_ID>
```

Show running processes in a container:

```js
docker top <CONTAINER_ID>
```

Show live resource usage statistics of containers:

```js
docker stats <CONTAINER_ID>
```

Show changes to files (or directories) on a filesystem:

```js
docker diff <CONTAINER_ID>
```

List all images that are locally stored with the docker engine:

```js
docke image ls
```

Show the history of an image:

```js
docker history [IMAGE]
```

## Networks

List networks:

```js
docker network ls
```

Remove one or more networks:

```js
docker network rm <NETWORK_ID>
```

Show information on one or more networks:

```js
docker network inspect <NETWORK_ID>
```
`
Connects a container to a network:

```js
docker network connect <NETWORK_ID> <CONTAINER_ID>
```

Disconnect a container from a network:

```js
docker network disconnect <NETWORK_ID> <CONTAINER_ID>
```

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
