# Kubernetes Workshop

1. [Introduction](#1-introduction)
1. [Kubernetes Dashboard Setup](#2-kubernetes-dashboard-setup)
1. [Kubernetes Pod](#3-kubernetes-pod)
1. [Kubernetes Node](#4-kubernetes-node)
1. [Kubernetes Service](#5-kubernetes-service)
1. [Kubernetes Deployment](#6-kubernetes-deployment)
1. [Kubernetes ReplicaSet](#7-kubernetes-replicaset)
1. [Kubernetes Namespace](#8-kubernetes-namespace)
1. [Kubernetes Volume](#9-kubernetes-volume)
1. [Kubernetes Secrets](#10-kubernetes-secrets)
1. [Deploy a React application using Docker and Kubernetes](#11-deploy-a-react-application-using-docker-and-kubernetes)

## 1. Introduction

* Kubernetes Architecture
* Kubernetes Installation

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## 2. Kubernetes Dashboard Setup

* [Kubernetes UI Dashboard Docker Image](https://hub.docker.com/r/kubernetesui/dashboard)
* [Dashboard Settings](https://github.com/kubernetes/dashboard)
* [Creating Sample User](https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md)

```js
kubectl proxy                               // Launch Kubernetes Dashboard
```

* [Kubernetes UI Dashboard Login](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### 3. Kubernetes Pod
#### 4. Kubernetes Node
#### 5. Kubernetes Service
#### 6. Kubernetes Deployment
#### 7. Kubernetes ReplicaSet
#### 8. Kubernetes Namespace
#### 9. Kubernetes Volume
#### 10. Kubernetes Secrets
#### 11. Deploy a React application using Docker and Kubernetes

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Kubectl Basic Commands

```js
kubectl get nodes | pod | services | replicaset | deployment

kubectl version                             // Kubectl version
kubectl version --client                    // Kubectl client version
kubectl get pod                             // Get list of PODs
kubectl get services                        // Display list of services
kubectl create deployment nginx-depl --image=nginx  // create deployment using nginx
kubectl get deployment                              // Get deployment list
kubectl get replicaset
kubectl edit deployment nginx-depl          // get auto-generated configuration file with default values
kubectl get pod                             // Old pod will terminate and new pod will be generated based on new values
kubectl get replicaset                      // Old replicaset will have zero pod
kubectl logs <deployment_name>              // Get pod logs
kubectl create deployment mongo-depl --image=mongo
kubectl describe pod <pod_name>             // Get info about pod
kubectl logs <pod_name>
kubectl exec -it <pod_name> -- bin/bash     // Get interactive terminal
# ls
kubectl get deployment                      // Get list of deployment
kubectl get pod                             // Get list of PODs
kubectl delete deployment <deployment_name> // Delete deployment
kubectl get deployment
kubectl get pod
kubectl get replicaset
kubectl apply -f <file_name>                // Deployment using .yaml config file
```

**nginx-deployment.yaml:**

```js
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.16
        ports:
        - containerPort: 8080
```

```js
kubectl apply -f nginx-deployment.yaml
kubectl get pod
kubectl get deployment
kubectl delete -f <file_name>
```

**nginx-service.yaml:**

```js
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
```

```js
kubectl apply -f nginx-service.yaml                                             // Apply nginx service
kubectl get pod
kubectl get service                             
kubectl describe service nginx-service                                          // Get service description
kubectl get pod -o wide                                                         // Get detail information of POD
kubectl get deployment nginx-deployment -o yaml > nginx-deployment-result.yaml  // Deployment yaml result
kubectl delete -f nginx-deployment.yaml
kubectl delete - f nginx-service.yaml
```

## Application Deployment

```js
kubectl get all     // Get all the cluster details
```

**mongo.yaml:**

```js
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mongodb-deployment
  labels:
    app: mongodb
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mongodb
  template:
    metadata:
      labels:
        app: mongodb
    spec:
      containers:
      - name: mongodb
        image: mongo
        ports:
        - containerPort: 27017
        env:
        - name: MONGO_INITDB_ROOT_USERNAME
          valueFrom:
            secretKeyRef:
              name: mongodb-secret
              key: mongo-root-username
        - name: MONGO_INITDB_ROOT_PASSWORD
          valueFrom: 
            secretKeyRef:
              name: mongodb-secret
              key: mongo-root-password
---
apiVersion: v1
kind: Service
metadata:
  name: mongodb-service
spec:
  selector:
    app: mongodb
  ports:
    - protocol: TCP
      port: 27017
      targetPort: 27017
```

**mongo-secret.yaml:**

```js
apiVersion: v1
kind: Secret
metadata:
    name: mongodb-secret
type: Opaque
data:
    mongo-root-username: dXNlcm5hbWU=
    mongo-root-password: cGFzc3dvcmQ=
```

```js
kubectl apply -f mongo-secret.yaml        // Apply MongoDB secret
kubectl get secret                        // Get secret
kubectl apply -f mongo.yaml               // Apply MongoDB config file
kubectl get all
kubectl get pod --watch                   // Watch incase of POD is getting created
kubectl describe pod <pod_name>           // check if any error
kubectl get service
kubectl describe service mongodb-service 
kubectl get pod -o wide                   // verify IP address used by POD in service
kubectl get all | findstr mongodb
```

**mongo-express.yaml:**

```js
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mongo-express
  labels:
    app: mongo-express
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mongo-express
  template:
    metadata:
      labels:
        app: mongo-express
    spec:
      containers:
      - name: mongo-express
        image: mongo-express
        ports:
        - containerPort: 8081
        env:
        - name: ME_CONFIG_MONGODB_ADMINUSERNAME
          valueFrom:
            secretKeyRef:
              name: mongodb-secret
              key: mongo-root-username
        - name: ME_CONFIG_MONGODB_ADMINPASSWORD
          valueFrom: 
            secretKeyRef:
              name: mongodb-secret
              key: mongo-root-password
        - name: ME_CONFIG_MONGODB_SERVER
          valueFrom: 
            configMapKeyRef:
              name: mongodb-configmap
              key: database_url
---
apiVersion: v1
kind: Service
metadata:
  name: mongo-express-service
spec:
  selector:
    app: mongo-express
  type: LoadBalancer  
  ports:
    - protocol: TCP
      port: 8081
      targetPort: 8081
      nodePort: 30000
```

**mongo-configmap.yaml:**

```js
apiVersion: v1
kind: ConfigMap
metadata:
  name: mongodb-configmap
data:
  database_url: mongodb-service
```

```js
kubectl apply -f mongo-configmap.yaml       // Apply mongo configmap
kubectl apply -f mongo-express.yaml         // Apply mongo-express 
kubectl get pod                             
kubectl logs mongo-express-78fcf796b8-xhp2f // Get Mongo-Express logs
minikube service mongo-express-service      // Access MongoDB from external URL
kubectl get namespace                       // Get Kubernetes Namespace
kubectl create namespace my-namespace       // Create a new namespace
kubectl delete namespace my-namespace       // Delete namespace
kubectl cluster-info                        // Display cluster info
kubectl get ns                              // Display list of namespaces
kubectl get all -n kubernetes-dashboard     // Get POD, Service, Deployment and Replicaset details of namespace
```

**dashboard-ingress.yaml**

```js
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: dashboard-ingress
  namespace: kubernetes-dashboard
spec:
  rules:
  - host: dashboard.com
    http:
      paths:
      - pathType: Prefix
        path: "/"
        backend:
          service:
            name: kubernetes-dashboard
            port: 
              number: 80
```

```js
kubectl apply -f dashboard-ingress.yaml                 // Create Ingress controller on Kubernetes Dashboard
kubectl get ingress -n kubernetes-dashboard             // Display Ingress controller details
kubectl get ingress -n kubernetes-dashboard --watch     // To watch IP Address 
kubectl describe ingress dashboard-ingress -n kubernetes-dashboard // 
```

**postgres.yaml**

```js
apiVersion: v1
kind: Pod
metadata:
  name: postgres
  labels:
    name: postgres
spec:
  containers:
  - name: postgres
    image: postgres:latest
    resources:
      limits:
        memory: "128Mi"
        cpu: "500m"
    ports:
    - containerPort: 5432
    env:
    - name: POSTGRES_PASSWORD
      value: "pwd"
```

```js
kubectl apply -f postgres.yaml
kubectl get pod
```

**postgres.yaml**

```js
apiVersion: v1
kind: Pod
metadata:
  name: postgres-2
  labels:
    name: postgres-2
spec:
  containers:
  - name: postgres
    image: postgres:latest
    resources:
      limits:
        memory: "128Mi"
        cpu: "500m"
    ports:
    - containerPort: 5432
    env:
    - name: POSTGRES_PASSWORD
      value: "pwd"
```

```js
kubectl apply -f postgres.yaml
kubectl get pod
```

**nginx-sidecar-container.yaml**

```js
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    name: nginx
spec:
  containers:
  - name: nginx-container
    image: nginx
    resources:
      limits:
        memory: "128Mi"
        cpu: "500m"
    ports:
    - containerPort: 80
  - name: sidecar
    image: curlimages/curl
    resources:
      limits:
        memory: "128Mi"
        cpu: "500m"
    command: ["/bin/sh"]
    args: ["-c", "echo Hello from the sidecar container; sleep 300"]
```

```js
kubectl apply -f nginx-sidecar-container.yaml
kubectl get pod
kubectl exec -it nginx -c sidecar -- /bin/sh
$ netstat -ln                                     // Display list of IP Address
$ curl localhost:80
$ exit
kubectl logs nginx -c nginx-container             // View nginx logs
minikube start                                    // Install minikube
minikube ssh                                      // SSH to minikibe
kubectl get configmap                             // Display Config Map details
```

## [Install Prometheus Operator](https://grafana.com/docs/grafana-cloud/quickstart/prometheus_operator/)

```js
kubectl apply -f https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/master/bundle.yaml
kubectl get deploy                                // Verify Prometheus Operator
mkdir operator_k8s
cd operator_k8s

kubectl get secret                                // Get Secrets
kubectl get statefulset
```

## Install Promethus Operator using Helm

**add repo:**

```js
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add stable https://charts.helm.sh/stable
helm repo update
```

**install chart:**

```js
helm install prometheus prometheus-community/kube-prometheus-stack
```

```js
kubectl get pod
kubectl get svc
kubectl port-forward service/prometheus-kube-prometheus-prometheus 9090
kubectl get servicemonitor
kubectl get servicemonitor prometheus-kube-prometheus-grafana -oyaml       // View yaml file
kubectl get crd                                       // Display Custom Resource Definitions
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
