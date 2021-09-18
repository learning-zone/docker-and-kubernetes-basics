# Docker Interview Questions

## Q. ***What is Hypervisor?***

A hypervisor is a software that makes virtualization possible. It is also called Virtual Machine Monitor. It divides the host system and allocates the resources to each divided virtual environment. You can basically have multiple OS on a single host system. There are two types of Hypervisors:

* **Type 1:** It\'s also called Native Hypervisor or Bare metal Hypervisor. It runs directly on the underlying host system. It has direct access to your host\'s system hardware and hence does not require a base server operating system.
* **Type 2:** This kind of hypervisor makes use of the underlying host operating system. It\'s also called Hosted Hypervisor.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is virtualization?***

Virtualization is the process of creating a software-based, virtual version of something(compute storage, servers, application, etc.). These virtual versions or environments are created from a single physical hardware system. Virtualization lets you split one system into many different sections which act like separate, distinct individual systems. A software called Hypervisor makes this kind of splitting possible. The virtual environment created by the hypervisor is called Virtual Machine.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is containerization?***

Usually, in the software development process, code developed on one machine might not work perfectly fine on any other machine because of the dependencies. This problem was solved by the containerization concept. So basically, an application that is being developed and deployed is bundled and wrapped together with all its configuration files and dependencies. This bundle is called a container. Now when you wish to run the application on another system, the container is deployed which will give a bug-free environment as all the dependencies and libraries are wrapped together. Most famous containerization environments are Docker and Kubernetes.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Difference between virtualization and containerization***

Containers provide an isolated environment for running the application. The entire user space is explicitly dedicated to the application. Any changes made inside the container is never reflected on the host or even other containers running on the same host. Containers are an abstraction of the application layer. Each container is a different application.

Whereas in Virtualization, hypervisors provide an entire virtual machine to the guest(including Kernal). Virtual machines are an abstraction of the hardware layer. Each VM is a physical machine. VM is more isolated and heavy and takes a lot time to start.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is Docker?***

Docker is a containerization platform which packages your application and all its dependencies together in the form of containers so as to ensure that your application works seamlessly in any environment, be it development, test or production.
Docker containers, wrap a piece of software in a complete filesystem that contains everything needed to run: code, runtime, system tools, system libraries, etc.
It wraps basically anything that can be installed on a server. This guarantees that the software will always run the same, regardless of its environment.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is a Docker Container?***

Docker containers include the application and all of its dependencies. It shares the kernel with other containers, running as isolated processes in user space on the host operating system. Docker containers are not tied to any specific infrastructure: they run on any computer, on any infrastructure, and in any cloud. Docker containers are basically runtime instances of Docker images.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are Docker Images?***

Docker image is the source of Docker container. In other words, Docker images are used to create containers. When a user runs a Docker image, an instance of a container is created. These docker images can be deployed to any Docker environment.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is Docker Hub?***

Docker images create docker containers. There has to be a registry where these docker images live. This registry is Docker Hub. Users can pick up images from Docker Hub and use them to create customized images and containers. Currently, the Docker Hub is the world\'s largest public repository of image containers.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain Docker Architecture?***

The Docker works on client-server architecture. The Docker client establishes communication with the Docker Daemon. The Docker client and Daemon can run on the same system. A Docket client can also be connected to a remote Docker Daemon. The different types of Docker components in a Docker architecture are–

* Docker Client: This performs Docker build pull and run operations to establish communication with the Docker Host. The Docker command uses Docker API to call the queries to be run.
* Docker Host: This component contains Docker Daemon, Containers and its images. The images will be the kind of metadata for the applications which are containerized in the containers. The Docker Daemon establishes a connection with Registry.
* Registry: This component will be storing the Docker images. The public registries are Docker Hub and Docker Cloud which can be s used by anyone.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is a Dockerfile?***

Docker can build images automatically by reading the instructions from a file called Dockerfile.
A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image.
Using docker build, users can create an automated build that executes several command-line instructions in succession.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Tell us something about Docker Compose.***

Docker Compose is a YAML file which contains details about the services, networks, and volumes for setting up the Docker application. So, you can use Docker Compose to create separate containers, host them and get them to communicate with each other. Each container will expose a port for communicating with other containers.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is Docker Swarm?***

Docker Swarm is native clustering for Docker. It turns a pool of Docker hosts into a single, virtual Docker host. Docker Swarm serves the standard Docker API, any tool that already communicates with a Docker daemon can use Swarm to transparently scale to multiple hosts.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is a Docker Namespace?***

A namespace is one of the Linux features and an important concept of containers. Namespace adds a layer of isolation in containers. Docker provides various namespaces in order to stay portable and not affect the underlying host system. Few namespace types supported by Docker – PID, Mount, IPC, User, Network

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the lifecycle of a Docker Container?***

Docker containers have the following lifecycle:

1. Create a container
1. Run the container
1. Pause the container(optional)
1. Un-pause the container(optional)
1. Start the container
1. Stop the container
1. Restart the container
1. Kill the container
1. Destroy the container

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is Docker Machine?***

Docker machine is a tool that lets you install Docker Engine on virtual hosts. These hosts can now be managed using the docker-machine commands. Docker machine also lets you provision Docker Swarm Clusters.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Tell some important Docker commands?***

We run docker commands using `$ docker <command name below>`

* `dockerd`: To launch Docker daemon.
* `build <path to docker file>`: To build an image file for docker.
* `create`: To create a new container.
* `kill <container_id>`: To kill a container.
* `commit`: To create a new image from container changes.
* `start <container_id>`: to start

Other commands

* `version`: to check for Docker Client and Docker Server version?
* `info`: to get the number of containers running, paused, stopped, the number of images and a lot more.
* `login`: to login into hub.docker.com
* `pull`: to pull an base image from docker hub onto your local system
* `run -it -d <image_name>`: create a docker container from an image -d means the container needs to start in the detached mode.
* `ps`: get list all the running containers
* `exec`: lets you get inside a container and work with it
* `stop`: to stop
* `commit <conatainer id> <username/imagename>` : you can use a container, edit it and update it
* `push <username/image name>`: push it to docker hub
* `rm <container id>`: delete a stopped container
* `rmi <image-id>`: delete an image from the local system
* `system prune`: to remove all the stopped containers, all the networks that are not used, all dangling images and all build caches.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Suppose you have 3 containers running and out of these, you wish to access one of them. How do you access a running container?***

The following command lets us access a running container: `$ docker exec -it bash` The exec command lets you get inside a container and work with it.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Will you lose your data, when a docker container exits?***

No, you won\'t lose any data when Docker container exits. Any data that your application writes to the container gets preserved on the disk until you explicitly delete the container. The file system for the container persists even after the container halts.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Where all do you think Docker is being used?***

Docker is being used in the following areas:

* **Simplifying configuration**: Docker lets you put your environment and configuration into code and deploy it.
* **Code Pipeline Management**: There are different systems used for development and production. As the code travels from development to testing to production, it goes through a difference in the environment. Docker helps in maintaining the code pipeline consistency.
* **Developer Productivity**: Using Docker for development gives us two things – We\'re closer to production and development environment is built faster.
* **Application Isolation**: As containers are applications wrapped together with all dependencies, your apps are isolated. They can work by themselves on any hardware that supports Docker.
* **Debugging Capabilities**: Docker supports various debugging tools that are not specific to containers but work well with containers.
* **Multi-tenancy**: Docker lets you have multi-tenant applications avoiding redundancy in your codes and deployments.
* **Rapid Deployment**: Docker eliminates the need to boost an entire OS from scratch, reducing the deployment time.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How is Docker different from other containerization methods?***

Docker containers are very easy to deploy in any cloud platform. It can get more applications running on the same hardware when compared to other technologies, it makes it easy for developers to quickly create, ready-to-run containerized applications and it makes managing and deploying applications much easier. You can even share containers with your applications.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Can I use JSON instead of YAML for my compose file in Docker?***

You can use JSON instead of YAML for your compose file, to use JSON file with compose, specify the JSON filename to use, for eg: `$ docker-compose -f docker-compose.json up`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How have you used Docker in your previous position?***

Explain how you have used Docker to help rapid deployment. Explain how you have scripted Docker and used it with other tools like Puppet, Chef or Jenkins. If you have no past practical experience in Docker and instead have experience with other tools in a similar space, be honest and explain the same. In this case, it makes sense if you can compare other tools to Docker in terms of functionality.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How far do Docker containers scale? Are there any requirements for the same?***

Large web deployments like Google and Twitter and platform providers such as Heroku and dotCloud, all run on container technology. Containers can be scaled to hundreds of thousands or even millions of them running in parallel. Talking about requirements, containers require the memory and the OS at all the times and a way to use this memory efficiently when scaled.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What platforms does docker run on?***

This is a very straightforward question but can get tricky. Do some company research before going for the interview and find out how the company is using Docker. Make sure you mention the platform company is using in this answer. Docker runs on various Linux administration:

* Ubuntu 12.04, 13.04 et al
* Fedora 19/20+
* RHEL 6.5+
* CentOS 6+
* Gentoo
* ArchLinux
* openSUSE 12.3+
* CRUX 3.0+ It can also be used in production with Cloud platforms with the following services:
* Amazon EC2
* Amazon ECS
* Google Compute Engine
* Microsoft Azure
* Rackspace

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Is there a way to identify the status of a Docker container?***

There are six possible states a container can be at any given point –

1. Created
1. Running
1. Paused
1. Restarting
1. Exited
1. Dead.

Use the following command to check for docker state at any given point: `$ docker ps` The above command lists down only running containers by default. To look for all containers, use the following command: `$ docker ps -a`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Can you remove a paused container from Docker?***

The answer is no. You cannot remove a paused container. The container has to be in the stopped state before it can be removed.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Can a container restart by itself?***

No, it\'s not possible for a container to restart by itself. By default the flag -restart is set to false.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Is it better to directly remove the container using the rm command or stop the container followed by remove container?***

Its always better to stop the container and then remove it using the remove command. `$ docker stop <coontainer_id> $ docker rm -f <container_id>`
Stopping the container and then removing it will allow sending SIG_HUP signal to recipients. This will ensure that all the containers have enough time to clean up their tasks. This method is considered a good practice, avoiding unwanted errors.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Will cloud overtake the use of Containerization?***

Docker containers are gaining popularity but at the same time, Cloud services are giving a good fight. In my personal opinion, Docker will never be replaced by Cloud. Using cloud services with containerization will definitely hype the game. Organizations need to take their requirements and dependencies into consideration into the picture and decide what\'s best for them. Most of the companies have integrated Docker with the cloud. This way they can make the best out of both the technologies.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How many containers can run per host?***

There can be as many containers as you wish per host. Docker does not put any restrictions on it. But you need to consider every container needs storage space, CPU and memory which the hardware needs to support. You also need to consider the application size. Containers are considered to be lightweight but very dependant on the host OS.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Is it a good practice to run stateful applications on Docker? or What type of applications - Stateless or Stateful are more suitable for Docker Container?***

The concept behind stateful applications is that they store their data onto the local file system. You need to decide to move the application to another machine, retrieving data becomes painful. I honestly would not prefer running stateful applications on Docker.

Suppose you have an application that has many dependant services. Will docker compose wait for the current container to be ready to move to the running of the next service?
The answer is yes. Docker compose always runs in the dependency order. These dependencies are specifications like depends_on, links, volumes_from, etc.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How will you monitor Docker in production?***

Docker provides functionalities like docker stats and docker events to monitor docker in production. Docker stats provides CPU and memory usage of the container. Docker events provide information about the activities taking place in the docker daemon.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Is it a good practice to run Docker compose in production?***

Yes, using docker compose in production is the best practical application of docker compose. When you define applications with compose, you can use this compose definition in various production stages like CI, staging, testing, etc.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What changes are expected in your docker compose file while moving it to production?***

These are the following changes you need make to your compose file before migrating your application to the production environment:

* Remove volume bindings, so the code stays inside the container and cannot be changed from outside the container.
* Binding to different ports on the host.
* Specify a restart policy
* Add extra services like log aggregator

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Have you used Kubernetes? If you have, which one would you prefer amongst Docker and Kubernetes?***

Be very honest in such questions. If you have used Kubernetes, talk about your experience with Kubernetes and Docker Swarm. Point out the key areas where you thought docker swarm was more efficient and vice versa. Have a look at this blog for understanding differences between Docker and Kubernetes.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Are you aware of load balancing across containers and hosts? How does it work?***

While using docker service with multiple containers across different hosts, you come across the need to load balance the incoming traffic. Load balancing and HAProxy is basically used to balance the incoming traffic across different available(healthy) containers. If one container crashes, another container should automatically start running and the traffic should be re-routed to this new running container. Load balancing and HAProxy works around this concept.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is a Docker Registry?***

A Docker Registry is a place where all the Docker Images will be stored and Docker Cloud and Docker Hub are the public registries where these images can be hosted upon. The Docker hub is the default storage for the Docker Images. An own registry can also be set up as per the requirement. Docker Data Center (DDC) can also be used which includes DTR (Docker Trusted Registry). Docker store will provide the feature of buying and selling the Docker images.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How to build envrionment-agnostic systems with Docker?
#### Q. When would you use "docker kill" or "docker rm -f"?
#### Q. How to link containers?
#### Q. What is the difference between the COPY and ADD commands in a Dockerfile?
#### Q. What is the difference between CMD and ENTRYPOINT in a Dockerfile?
#### Q. How do I transfer a Docker image from one machine to another one without using a repository, no matter private or public?
#### Q. Do I lose my data when the Docker container exits?
#### Q. What is Build Cache in Docker?
#### Q. What is the difference between "docker run" and "docker create"?
#### Q. What’s the difference between a repository and a registry?
#### Q. What is the default CPU limit set for a container?
#### Q. Can you create containers without their own PID namespace
#### Q. Explain basic Docker usage workflow?
#### Q. What is the difference between Docker Image and Layer?
#### Q. Could you explain what is Emulation?
#### Q. Should I use Vagrant or Docker for creating an isolated environment?
#### Q. What is the difference between “expose” and “publish” in Docker?
#### Q. Docker Compose vs. Dockerfile - which is better?
#### Q. What exactly do you mean by “Dockerized node”? Can this node be on-premises or in the cloud?
#### Q. How can we control the startup order of services in Docker compose?
#### Q. How will you monitor Docker in production?
#### Q. What happens if you add more than one CMD instruction to a Dockerfile?
#### Q. When you limit the memory for a container, does it reserve (guarantee) the memory?
#### Q. What is an orphant volume and how to remove it?
#### Q. How virtualization works at low level?
#### Q. What is Paravirtualization?
#### Q. How is Docker different from a virtual machine?
#### Q. Is it possible to generate a Dockerfile from an image?
#### Q. Can you explain dockerfile ONBUILD instruction?
#### Q. Why did Docker jump from version 1.13 to 17.03?
#### Q. How does Docker run containers in non-Linux systems?
#### Q. How containers works at low level?
#### Q. Name some limitations of containers vs VM
#### Q. How to use Docker with multiple environments?
#### Q. Why Docker compose does not wait for a container to be ready before moving on to start next service in dependency order?
#### Q. How to push personal container to Docker Hub
#### Q. Create a container by Dockerfile
#### Q. Docker networking
#### Q. Data collection for support
#### Q. Explain a use case for Docker
#### Q. What is the difference between a Docker image and a container?
#### Q. Do I lose my data when the Docker container exits?
#### Q. How to stop and restart the Docker container?
#### Q. What is Docker container? How to create Docker container?
#### Q. Can I use json instead of yaml for my compose file in Docker?
#### Q. How is Docker different from other container technologies?
#### Q. How exactly are containers (Docker in our case) different from hypervisor virtualization (vSphere)? What are the benefits?

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
