# Kubernetes Workshop

## Kubernetes Dashboard Setup

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
kubectl cluster-info                        // 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
