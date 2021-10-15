# Kubernetes Interview Questions

## Q. ***What is Kubernetes?***

Kubernetes is an open-source container orchestration tool or system that is used to automate tasks such as the management, monitoring, scaling, and deployment of containerized applications. It is used to easily manage several containers (since it can handle grouping of containers), which provides for logical units that can be discovered and managed.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How Container orchestration is beneficial?***

Container orchestration is a process of managing the life cycles of containers more specifically in large & dynamic environments. All the services in the individual container are in synchronization to fulfill the needs of the server. Container orchestration is used to regulate and automate tasks such as:

* Provisioning and deployment of containers
* Upscaling or removing containers to divide application load evenly all across host infrastructure
* Redundancy and availability of containers
* Moving of containers from one host to another in case there is a shortage of resources in a host (or when the host dies)
* Allocation resources across containers
* Health monitoring of containers and hosts
* Externally exposing services running in a container to the outside world
* Load balancing of service discovery across containers
* Configuring an application relative to the containers running it

<p align="center">
  <img src="assets/orchestration.png" alt="Container Orchestration" width="400px" />
</p>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***How are Kubernetes and Docker related?***

Docker is an open-source platform used to handle software development. Its main benefit is that it packages the settings and dependencies that the software/application needs to run into a container, which allows for portability and several other advantages. Kubernetes allows for the manual linking and orchestration of several containers, running on multiple hosts that have been created using Docker.

<p align="center">
  <img src="assets/dicker-kubernetes.png" alt="Container Orchestration" width="600px" />
</p>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What are the main differences between the Docker Swarm and Kubernetes?***

Docker Swarm is Docker\'s native, open-source container orchestration platform that is used to cluster and schedule Docker containers. Swarm differs from Kubernetes in the following ways:

* Docker Swarm is more convenient to set up but doesn\'t have a robust cluster, while Kubernetes is more complicated to set up but the benefit of having the assurance of a robust cluster
* Docker Swarm can\'t do auto-scaling (as can Kubernetes); however, Docker scaling is five times faster than Kubernetes 
* Docker Swarm doesn’t have a GUI; Kubernetes has a GUI in the form of a dashboard
* Docker Swarm does automatic load balancing of traffic between containers in a cluster, while Kubernetes requires manual intervention for load balancing such traffic  
* Docker requires third-party tools like ELK stack for logging and monitoring, while Kubernetes has integrated tools for the same 
Docker Swarm can share storage volumes with any container easily, while Kubernetes can only share storage volumes with containers in the same pod
* Docker can deploy rolling updates but can’t deploy automatic rollbacks; Kubernetes can deploy rolling updates as well as automatic rollbacks

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What is a node in Kubernetes?***

A node is the smallest fundamental unit of computing hardware. It represents a single machine in a cluster, which could be a physical machine in a data center or a virtual machine from a cloud provider. Each machine can substitute any other machine in a Kubernetes cluster. The master in Kubernetes controls the nodes that have containers.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What is a pod in Kubernetes?***

Pods are high-level structures that wrap one or more containers. This is because containers are not run directly in Kubernetes. Containers in the same pod share a local network and the same resources, allowing them to easily communicate with other containers in the same pod as if they were on the same machine while at the same time maintaining a degree of isolation.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What are clusters in Kubernetes?***

Kubernetes cluster is a set of nodes used for running containerized applications, so when you are running Kubernetes, you are running a cluster. A cluster contains a control plane & one or maybe more than one compute machines/nodes.

* The control plane is used to maintain the desired state of the cluster, such as which applications are running or which container images they use.
* Whereas, the nodes run the applications and the workloads.

Clusters are the heart of Kubernetes that gives the ability to schedule and run the containers across a group of machines - physical, virtual, on-premise, or in the cloud. Kubernetes containers aren’t tied to any particular machines, they are abstracted across the cluster.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What are Daemon sets?***

A Daemon set is a set of pods that runs only once on a host. They are used for host layer attributes like a network or for monitoring a network, which you may not need to run on a host more than once.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What is Heapster in Kubernetes?***

A Heapster is a performance monitoring and metrics collection system for data collected by the Kublet. This aggregator is natively supported and runs like any other pod within a Kubernetes cluster, which allows it to discover and query usage data from all nodes within the cluster.

<p align="center">
  <img src="assets/heapster.png" alt="Heapster" width="600px" />
</p>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What is a Namespace in Kubernetes?***

Namespaces are used for dividing cluster resources between multiple users. They are meant for environments where there are many users spread across projects or teams and provide a scope of resources.

<p align="center">
  <img src="assets/namespace.png" alt="Namespace" width="600px" />
</p>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Why use namespaces?***

While using the default namespace alone, it becomes hard over time to get an overview of all the applications you can manage in your cluster. Namespaces make it easier to organize the applications into groups that make sense, like a namespace of all the monitoring applications and a namespace for all the security applications, etc.

Namespaces can also be useful for managing Blue/Green environments where each namespace can include a different version of an app and also share resources that are in other namespaces (namespaces like logging, monitoring, etc.).

Another use case for namespaces is one cluster with multiple teams. When multiple teams use the same cluster, they might end up stepping on each other\'s toes. For example, if they end up creating an app with the same name it means one of the teams overrides the app of the other team because there can\'t be two apps in Kubernetes with the same name (in the same namespace).

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What is the Kubernetes controller manager?***

In Kubernetes, different methods are operating on the master node, and they are accumulated together as the Kubernetes Controller Manager. It is a daemon which installs regulators, including the given below:

* Replication Controller: Maintains pods for each replication object
* Node Controller: Manages the status, mainly, making, refreshing and erasing nodes
* Endpoint controller: Maintain the endpoint objects (pods and administrations)
* Administration record and token regulator: Concerned with the default records and API access tokens for new namespaces

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What are the types of controller managers?***

The primary controller managers that can run on the master node are the endpoints controller, service accounts controller, namespace controller, node controller, token controller, and replication controller.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What is ETCD in Kubernetes?***

Kubernetes uses etcd as a distributed key-value store for all of its data, including metadata and configuration data, and allows nodes in Kubernetes clusters to read and write data. Although etcd was purposely built for CoreOS, it also works on a variety of operating systems (e.g., Linux, BSB, and OS X) because it is open-source. Etcd represents the state of a cluster at a specific moment in time and is a canonical hub for state management and cluster coordination of a Kubernetes cluster.

<p align="center">
  <img src="assets/etcd.png" alt="Namespace" width="600px" />
</p>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What are the different services within Kubernetes?***

Different types of Kubernetes services include:

* Cluster IP service
* Node Port service
* External Name Creation service and
* Load Balancer service

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What is ClusterIP?***

The ClusterIP is the default Kubernetes service that provides a service inside a cluster (with no external access) that other apps inside your cluster can access.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What is NodePort?***

The NodePort service is the most fundamental way to get external traffic directly to your service. It opens a specific port on all Nodes and forwards any traffic sent to this port to the service.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What is a headless service?***

A headless service is used to interface with service discovery mechanisms without being tied to a ClusterIP, therefore allowing you to directly reach pods without having to access them through a proxy. It is useful when neither load balancing nor a single Service IP is required.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What is Kubelet?***

The kubelet is a service agent that controls and maintains a set of pods by watching for pod specs through the Kubernetes API server. It preserves the pod lifecycle by ensuring that a given set of containers are all running as they should. The kubelet runs on each node and enables the communication between the master and slave nodes.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What is the Load Balancer in Kubernetes?***

<p align="center">
  <img src="assets/load-balancer.png" alt="Docker Architecture" width="400px" />
</p>

A load balancer gives a standard method to convey network traffic among various backend administrations, subsequently boosting adaptability. Contingent upon the workplace, there can be two kinds of load balancer, Internal or External. The Internal Load Balancer can naturally adjust the load and distribute the necessary configuration to the pods. Then again, the External Load Balancer directs the outside load traffic to the backend pods. In Kubernetes, the two load adjusting techniques work through the kube-proxy highlight.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What is Kubectl?***

Kubectl is a CLI (command-line interface) that is used to run commands against Kubernetes clusters. As such, it controls the Kubernetes cluster manager through different create and manage commands on the Kubernetes component

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***What is Kube-proxy?***

Kube-proxy is an implementation of a load balancer and network proxy used to support service abstraction with other networking operations. Kube-proxy is responsible for directing traffic to the right container based on IP and the port number of incoming requests.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.  ***Can we put multiple containers inside a pod?***

Yes. A pod that contains one container refers to a single container pod and it is the most common kubernetes use case. A pod that contains Multiple co-related containers refers to a multi-container pod.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Name some container patterns you come across or use?***

1. Init Container Pattern
2. Sidecar Container Pattern
3. Adapter Container Pattern
4. Ambassador Container Pattern

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is Init Container Pattern?***

Init Containers are the containers that should run and complete before the startup of the main container in the pod. It provides a separate lifecycle for the initialization so that it enables separation of concerns in the applications.

All the init Containers will be executed sequentially and if there is an error in the Init container the pod will be restarted which means all the Init containers are executed again. So, it\'s better to design your Init container as simple, quick, and Idompodent.

**Example:**

```js
apiVersion: v1
kind: Pod
metadata:
  name: init-container-demo
spec:
  containers:
  - name: nginx
    image: nginx
    ports:
    - containerPort: 80
    volumeMounts:
    - name: workdir
      mountPath: /usr/share/nginx/html
  # These containers are run during pod initialization
  initContainers:
  - name: busybox
    image: busybox
    command: ["/bin/sh"]
    args: ["-c", "echo '<html><h1>Hi I am from Init container</h1><html>' >> /work-dir/index.html"]
    volumeMounts:
    - name: workdir
      mountPath: "/work-dir"
  dnsPolicy: Default
  volumes:
  - name: workdir
    emptyDir: {}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***When do you use Init Container Pattern?***

* You can use this pattern where your application or main containers need some prerequisites such as installing some software, database setup, permissions on the file system before starting.
* You can use this pattern where you want to delay the start of the main containers.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do you configure resource limits for the Init Container Pattern?***

Configuring resource limits is very important when it comes to Init containers. The main point we need to understand here is Init containers run first before the start of the main container so when you configure resource limits for the pod you have to take that into consideration.

* The highest init container resource limits (since Init containers run sequentially)
* The sum of all the resource limits of the main containers (Since all the application containers run in parallel)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is Sidecar Container Design?***

Sidecar containers are the containers that should run along with the main container in the pod. This sidecar pattern extends and enhances the functionality of current containers without changing it.

Imagine that you have the pod with a single container working very well and you want to add some functionality to the current container without touching or changing, how can you add the additional functionality or extending the current functionality? This sidecar container pattern really helps exactly in that situation.

All the Containers will be executed parallelly and the whole functionality works only if both types of containers are running successfully. Most of the time these sidecar containers are simple and small that consume fewer resources than the main container.

**Example:**

```js
apiVersion: v1
kind: Pod
metadata:
  name: sidecar-container-demo
spec:
  containers:
  - image: busybox
    command: ["/bin/sh"]
    args: ["-c", "while true; do echo echo $(date -u) 'Hi I am from Sidecar container' >> /var/log/index.html; sleep 5;done"]
    name: sidecar-container
    resources: {}
    volumeMounts:
    - name: var-logs
      mountPath: /var/log
  - image: nginx
    name: main-container
    resources: {}
    ports:
      - containerPort: 80
    volumeMounts:
    - name: var-logs
      mountPath: /usr/share/nginx/html
  dnsPolicy: Default
  volumes:
  - name: var-logs
    emptyDir: {}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***When do you use Sidecar Container Pattern?***

* Whenever you want to extend the functionality of the existing single container pod without touching the existing one.
* Whenever you want to enhance the functionality of the existing single container pod without touching the existing one.
* You can use this pattern to synchronize the main container code with the git server pull.
* You can use this pattern for sending log events to the external server.
* You can use this pattern for network-related tasks.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do you configure resource limits for the Sidecar Container Pattern?***

Configuring resource limits is very important when it comes to Sidecar containers. The main point we need to understand here is All the containers run in parallel so when you configure resource limits for the pod you have to take that into consideration.

* The sum of all the resource limits of the main containers as well as sidecar containers (Since all the containers run in parallel)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is Adapter Container Pattern?***

There are so many applications that are heterogeneous in nature which means they don\'t contain the same interface or not consistent with other systems. This pattern extends and enhances the functionality of current containers without changing it as the sidecar container pattern.

Imagine that you have the pod with a single container working very well but, it doesn\'t have the same interface with other systems to integrate or work with it. How can you make this container to have a unified interface with a standardized format so that other systems can to your container? This adapter container pattern really helps exactly in that situation.

All the Containers will be executed parallelly and the whole functionality works only if both types of containers are running successfully. Most of the time these adapter containers are simple and small that consume fewer resources than the main container.

**Example:**

```js
apiVersion: v1
kind: Pod
metadata:
  name: adapter-container-demo
spec:
  containers:
  - image: busybox
    command: ["/bin/sh"]
    args: ["-c", "while true; do echo $(date -u)'#This is log' >> /var/log/file.log; sleep 5;done"]
    name: main-container
    resources: {}
    volumeMounts:
    - name: var-logs
      mountPath: /var/log
  - image: bbachin1/adapter-node-server
    name: adapter-container
    imagePullPolicy: Always
    resources: {}
    ports:
      - containerPort: 3080
    volumeMounts:
    - name: var-logs
      mountPath: /var/log
  dnsPolicy: Default
  volumes:
  - name: var-logs
    emptyDir: {}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***When do you use Adapter Container Pattern?***

* Whenever you want to extend the functionality of the existing single container pod without touching the existing one.
* Whenever you want to enhance the functionality of the existing single container pod without touching the existing one.
* Whenever there is a need to convert or standardize the format for the rest of the systems.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do you configure resource limits for the Adapter Container Pattern?***

Configuring resource limits is very important when it comes to Adapter containers. The main point we need to understand here is All the containers run in parallel so when you configure resource limits for the pod you have to take that into consideration.

* The sum of all the resource limits of the main containers as well as adapter containers (Since all the containers run in parallel)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is Ambassador Container Pattern?***

The Ambassador container is a special type of sidecar container which simplifies accessing services outside the Pod. When you are running applications on kubernetes it\'s a high chance that you should access the data from the external services. The Ambassador container hides the complexity and provides the uniform interface to access these external services.

Imagine that you have the pod with one container running successfully but, you need to access external services. But, these external services are dynamic in nature or difficult to access. Sometimes there is a different format that external service returns. There are some other reasons as well and you don\'t want to handle this complexity in the main container. So, we use the Ambassador containers to handle these kinds of scenarios.

All the Containers will be executed parallelly and the whole functionality works only if both types of containers are running successfully. Most of the time these ambassador containers are simple and small that consume fewer resources than the main container.

**Example:**

```js
apiVersion: v1
kind: Pod
metadata:
  name: ambassador-container-demo
spec:
  containers:
  - image: bbachin1/main-container
    name: main-container
    imagePullPolicy: Always
    resources: {}
    ports:
      - containerPort: 9000
  - image: bbachin1/nginx-server-proxy
    name: ambassador-container
    imagePullPolicy: Always
    resources: {}
    ports:
      - containerPort: 3000
  dnsPolicy: Default
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***When do you use Ambassador Container Pattern?***

* Whenever you want to hide the complexity from the main container such as service discovery.
* Whenever your containerized services want to talk to external services you can use this pattern to handle the request and response for these services.
* Whenever there is a need to convert or standardize the format of external services responses.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do you configure resource limits for the Ambassador Container Pattern?***

Configuring resource limits is very important when it comes to Ambassador containers. The main point we need to understand here is All the containers run in parallel so when you configure resource limits for the pod you have to take that into consideration.

* The sum of all the resource limits of the main containers as well as ambassador containers (Since all the containers run in parallel)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Point out the tools which are utilized for container monitoring?***

Tools which are utilized for container monitoring are:

* Grafana
* cAdvisor
* Heapster
* InfluxDB
* Prometheus

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Disadvantages of Kubernetes***

* Kubernetes dashboard isn\'t as useful as it ought to be
* Security isn\'t viable.
* It is intricate and can diminish profitability
* Kubernetes is more costlier than its other options.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Why use Kubernetes?***

Kubernetes is utilized on the grounds that:

* It causes you to evade vendor lock issues as it can utilize any vendor explicit APIs or administrations aside from where Kubernetes gives a reflection, e.g., load balancer and capacity.
* Kubernetes can run on-premises exposed metal, OpenStack, Azure, public clouds Google, AWS, and so on.
* It will empower applications which should be delivered and refreshed with no vacation. 
* Kubernetes permits you to guarantee those containerized applications operate where and when you need and assist you with discovering assets and apparatuses which you need to work.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the function of clusters in Kubernetes?***

Kubernetes permits you to authorize the necessary state management by taking care of cluster services of a particular setup. At that point, these cluster administrations operate that configuration in the foundation. The accompanying steps are associated with the method: The deployment document includes all the setups to be taken care of into the cluster administrations. The deployment document is taken care of into the API. Presently, the cluster services plan the pods in the climate. Cluster benefits likewise guarantee that the correct number of pods are operating. Along these lines, the Kubernetes cluster is basically composed of the API, the worker nodes, and the Kubelet cycle of the nodes.

<p align="center">
  <img src="assets/clusters.png" alt="Kubernetes Clusters" width="600px" />
</p>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Characteristics of Kubernetes***

The characteristics of Kubernetes are:

* Self-Healing Capabilities
* Automated Scheduling
* Application-centric management
* You could make predictable infrastructure
* Automated rollouts & rollback
* Offers a higher density of resource utilization
* Horizontal Scaling & Load Balancing
* Provides enterprise-ready features
* Auto-scalable infrastructure
* Provides environment consistency for testing, development, and production.
* Infrastructure is lightly coupled to each segment and can act as a separate unit.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Define Ingress network***

<p align="center">
  <img src="assets/ingress-network.png" alt="Ingress network" width="300px" />
</p>

Ingress network is an assortment of rules which goes about as a section highlighting the Kubernetes cluster. This permits inbound associations that can be arranged to give benefits remotely through load balance traffic, reachable URLs, or by providing name-based virtual facilitating. In this way, Ingress is an API object which oversees outer admittance to the services in a cluster, generally by HTTP, and is the most remarkable method of uncovering administration.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***List the uses of GKE***

GKE (Google Kubernetes Engine) uses are given below: 

* It very well may be utilized to make docker container clusters
* Resize application regulators
* Update and redesign the clusters of container
* Investigate clusters of the container.
* GKE can be utilized to make a replication regulator, occupations, load balancer, administrations, container pods

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain the main components of Kubernetes architecture?***

The two primary components include the master node and the worker node. Each of its components has individual components in them. The two segments have numerous in-fabricated administrations inside them. For instance, the master part has the kube-scheduler, kube-controller-manager, etcd, and kube-apiserver. The worker node has administrations like kubelet, container runtime, and kube-proxy functioning on every node.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do we control the resource usage of POD?***

With the use of limit and request resource usage of a POD can be controlled.

Request: The number of resources being requested for a container. If a container exceeds its request for resources, it can be throttled back down to its request.

Limit: An upper cap on the resources a single container can use. If it tries to exceed this predefined limit it can be terminated if K8\'s decides that another container needs these resources. If you are sensitive towards pod restarts, it makes sense to have the sum of all container resource limits equal to or less than the total resource capacity for your cluster.

**Example:**

```js
apiVersion: v1
kind: Pod
metadata:
 name: demo
spec:
 containers:
 - name: example1
 image:example/example1
 resources:
   requests:
     memory: "_Mi"
     cpu: "_m"
   limits:
     memory: "_Mi"
     cpu: "_m"
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the various K8\'s services running on nodes and describe the role of each service?***

Mainly K8 cluster consists of two types of nodes, executor and master.

**Executor node:** (This runs on master node)

* Kube-proxy: This service is responsible for the communication of pods within the cluster and to the outside network, which runs on every node. This service is responsible to maintain network protocols when your pod establishes a network communication.
* kubelet: Each node has a running kubelet service that updates the running node accordingly with the configuration(YAML or JSON) file.
NOTE: kubelet service is only for containers created by Kubernetes.

**Master services:**

* Kube-apiserver: Master API service which acts as an entry point to K8 cluster.
* Kube-scheduler: Schedule PODs according to available resources on executor nodes.
* Kube-controller-manager:  is a control loop that watches the shared state of the cluster through the apiserver and makes changes attempting to move the current state towards the desired stable state

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is PDB (Pod Disruption Budget)?***

A Kubernetes administrator can create a deployment of a kind: PodDisruptionBudget for high availability of the application, it makes sure that the minimum number is running pods are respected as mentioned by the attribute minAvailable spec file. This is useful while performing a drain where the drain will halt until the PDB is respected to ensure the High Availability(HA) of the application. The following spec file also shows minAvailable as 2 which implies the minimum number of an available pod (even after the election).

**Example:** YAML Config using minAvailable

```js
apiVersion: policy/v1beta1
kind: PodDisruptionBudget
metadata:
 name: zk-pdb
spec:
 minAvailable: 2
 selector:
   matchLabels:
     app: zookeeper
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the various things that can be done to increase Kubernetes security?***

By default, POD can communicate with any other POD, we can set up network policies to limit this communication between the PODs.

* RBAC (Role-based access control) to narrow down the permissions.
* Use namespaces to establish security boundaries.
* Set the admission control policies to avoid running the privileged containers.
* Turn on audit logging.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to monitor the Kubernetes cluster?***

Prometheus is used for Kubernetes monitoring. The Prometheus ecosystem consists of multiple components.

* Mainly Prometheus server which scrapes and stores time-series data.
* Client libraries for instrumenting application code.
* Push gateway for supporting short-lived jobs.
* Special-purpose exporters for services like StatsD, HAProxy, Graphite, etc.
* An alert manager to handle alerts on various support tools.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to get the central logs from POD?***

This architecture depends upon the application and many other factors. Following are the common logging patterns

* Node level logging agent.
* Streaming sidecar container.
* Sidecar container with the logging agent.
* Export logs directly from the application.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to turn the service defined below in the spec into an external one?***

Adding type: LoadBalancer and nodePort as follows:

```js
spec:
 selector:
   app: some-app
 type: LoadBalancer
 ports:
   - protocol: UDP
     port: 8080
     targetPort: 8080
     nodePort: 32412
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to configure TLS with Ingress?***

Add tls and secretName entries.

```js
spec:
 tls:
 - hosts:
   - some_app.com
   secretName: someapp-secret-tls
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is an Operator?***

Operators are software extensions to K8s which make use of custom resources to manage applications and their components. Operators follow Kubernetes principles, notably the control loop.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Why do we need Operators?***

The process of managing applications in Kubernetes isn't as straightforward as managing stateless applications, where reaching the desired status and upgrades are both handled the same way for every replica. In stateful applications, upgrading each replica might require different handling due to the stateful nature of the app, each replica might be in a different status. As a result, we often need a human operator to manage stateful applications. Kubernetes Operator is supposed to assist with this.

This will also help with automating a standard process on multiple Kubernetes clusters

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What difference do you find between Docker Swarm and Kubernetes?***

|Parameters    | Kubernetes                 | Docker Swarm
|--------------|----------------------------|---------------------|
| GUI          | Kubernetes Dashboard is the GUI   | Has no GUI
|Installation & cluster configuration| Setups are quite complicated but the cluster is robust.| Setup is easy but the cluster is not robust.|
|Auto-scaling  |Can do auto-scaling. | Cannot do auto-scaling.|
|Scalability   |Scales fast.         |Scales 5 times faster than Kubernetes.
|Load Balancing|Manual support needed for load balancing traffic between containers & pods.|Does auto load balancing of traffic between containers in clusters.|
|Data volumes |Can only share storage volumes with containers in the same pod.|Can share storage volumes with other containers.|
|Rolling updates and rollbacks|Does rolling updates and automatic rollbacks.|Can do rolling updates but no automatic rollbacks.|
|Logging and monitoring |Has in-built tools to perform logging and monitoring.|Requires 3rd party tools like ELK stack to do logging and monitoring.|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What difference do you find between deploying applications on the host and containers?***

<p align="center">
  <img src="assets/deploy.png" alt="Docker Architecture" width="600px" />
</p>

**When you deploy the application on hosts:**

* There will be an operating system and that operating system will have a kernel which again will have diverse libraries (installed on the operating system) that are required for the application.
* In this kind of framework, you can have several applications and you will see all the applications sharing the libraries present in the operating system.

**When you deploy an application on the container:**

* In this architecture, you will have a kernel which will be the only common thing between all the applications.
* Here you will see every application has their necessary libraries and binaries isolated from the rest of the system, which cannot be approached by any other application.
* Like if one app needs access to Python, that particular app will get it, if the particular application needs access to Java, then only that particular app will have access to Java.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is Minikube?***

Minikube is a tool used for easy running Kubernetes locally, it runs a single-code Kubernetes cluster within a virtual machine.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How Kubernetes simplifies the containerized Deployment***

A cluster of containers of applications running across multiple hosts requires communications. To make the communication happen, we require something that can scale, balance, and monitor the containers. As Kubernetes is an anti-agnostic tool that can run on any public to a private provider, it is the best choice that can simplify the containerized deployment.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the role of Kube-apiserver and Kube-scheduler?***

**Kube-Episerver:**

* It follows the scale-out architecture & is the front-end of the master node control panel. 
* Exposes all the APIs of the Kubernetes Master node components and establishes communication between the Kubernetes Node and the Kubernetes master components.

**Kube-scheduler:**

* It does distribution and management of workload on the worker nodes. 
* It opts the most suitable node to run the unscheduled pod (based on resource requirements) & keeps a track on the resource utilization.
* It makes sure that no workload is scheduled on already full nodes.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do master nodes in Kubernetes work?***

* Kubernetes master controls the nodes, and nodes have the containers in it.
* The individual containers are contained inside the pods and each pod can contain various numbers of containers based on the requirements & configuration.
* So when pods have to be deployed, they have to be deployed either using the interface or CLI (command line interface).
* These pods are scheduled on the nodes and on the basis of resource requirements, the pods are allocated to these nodes.
* Kube-apiserver (which is master node services) ensures that there is a communication between the Kubernetes node and master components.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the different types of services in Kubernetes?***

There are four types of services in Kubernetes:

* **Cluster IP** - Kubernetes Service is an abstraction defining a logical set of Pods running somewhere in your cluster, all providing the same functionality. When created, each Service is given a unique IP address which is also called clusterIP.
* **Node Port** - A NodePort is an open port that is on every node of your cluster. Kubernetes routes incoming traffic transparently on the NodePort to your service, even if the application is running on a different node.
* **Load Balancer** - It exposes the service externally using the load balancer of the cloud provider. Services to which the load balancer will route are automatically created.
* **External name** - It exposes the Service by using an arbitrary name (specified by ExternalName in the spec) by returning a CNAME record with its value.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What do you understand about Cloud controller managers?***

Cloud Controller Manager has to ensure consistent storage, abstract the cloud-specific code from the Kubernetes specific code, network routing, and manage the communication with the cloud services. 

All these can be split into different containers (it depends on which cloud platform you are using) and this further allows the Kubernetes and cloud vendors code to get developed without creating any inter-dependency. So, the cloud vendor develops its code and connects with the cloud-controller-manager while running the Kubernetes.

There are 4 types of cloud controller managers:

* **Node controller** - Ensures that the node is deleted as soon it is stopped.
* **Volume controller** - Manages the storage and interacts with the cloud provider to orchestrate volume.
* **Route Controller** - Manages traffic routes in the underlying cloud infrastructures.
* **Service Controller** - It ensures the management of cloud provider load balancers.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the difference between a replica set and a replication controller?***

Both replica set and replication controller ensure that the given number of pod replicas are running at a given time. But the only point of difference between them is, replica leverages set-based selectors, while the replication controller uses equity-based controllers.

**Selector-based Selectors:**

It filters the keys according to a set of values. The selector based selector locks for pods whose label is mentioned in the set.

**Equity-Based Selectors:**

It filters by both label keys and values. The equity-based selector looks for the pods that have the exact phrase as mentioned in the label.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are federated clusters?***

The Multiple Kubernetes clusters can be controlled/managed as a single cluster with the help of federated clusters. You can generate multiple Kubernetes clusters within a data center/cloud and use federation clusters to control/manage all of them in one place.

The federated clusters can achieve this by doing the following two things. 

* **Cross cluster discovery** - Provides the ability to have DNS and Load Balancer with backends from all participating clusters.
* **Sync Resources across clusters** - Syncs resources across the clusters for deploying the same deployment set across multiple clusters.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the best security measures that you can take while using Kubernetes?***

Here are a few ways to ensure security while using Kubernetes:

* By restricting access to ETCD
* By applying security updates to the environment regularly
* By implementing network segmentation
* By logging everything on the producing environment
* By having continuous security vulnerability scanning
* By having a strict policy or protocol for resources
* By enabling auditing
* By defining resource quota
* By limiting direct access to Kubernetes nodes
* By using images from the authorized repository only

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. ReplicaSet
#### Q. Rolling update
#### Q. What is the difference between Docker Compose and Kubernetes?
#### Q. How to use local docker images with Minikube?
#### Q. What is the difference between ClusterIP, NodePort and LoadBalancer service types in Kubernetes?
#### Q. Ingress vs Load Balancer
#### Q. What is the difference between a pod and a deployment?
#### Q. Command to delete all pods in all kubernetes namespaces
#### Q. How do I force Kubernetes to re-pull an image?
#### Q. How can I keep a container running on Kubernetes?
#### Q. How can I trigger a Kubernetes Scheduled Job manually?
#### Q. What is required to deploy a simple application, like a web server in Kubernetes? How would you go about deploying/updating your app?
#### Q. When defining an application, how would you choose between using the various Kubernetes workloads? For example, when would you use a Deployment versus a StatefulSet versus a DaemonSet?
#### Q. What are container orchestrators and why are they required?
#### Q. Tell me about a Kubernetes cluster you deployed. How did you test for load? What monitoring did you implement? What metrics did you track?
#### Q. What experience do you have with containers? What tooling have you used to manage containers? What advantages and disadvantages did you see in the tooling?
#### Q. Tell me about a time you had difficulty deploying new software you did not write. How did you resolve the difficulty? Where did you go for additional information?
#### Q. If you had to redo a project you just completed, would you be upset?
#### Q. How do you like to learn new concepts? If you failed, would you be upset?
#### Q. What types of workloads run well on Kubernetes, and what types do not?
#### Q. What is the Operator pattern and when should you use it?
#### Q. How can RBAC be used to grant permission to Kubernetes resources? Are there any limitations?
#### Q. How would you expose an application running in a Kubernetes cluster to the outside world?
#### Q. What tools can be used to monitor your cluster and your applications?
#### Q. Kubernetes APIs have been described as both imperative and declarative. What does this mean, and why are declarative APIs so useful in DevOps?

<br/>

# Helm Charts

#### Q. What is Helm Charts?
#### Q. Helm installation
#### Q. Create Helm project
#### Q. Deploy Helm chart
#### Q. Troubleshooting

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
