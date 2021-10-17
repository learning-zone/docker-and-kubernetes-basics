# Kubernetes Workshop

## Kubernetes Commands

```js
kubectl proxy                       // Launch Kubernetes Dashboard
kubectl get pod
kubectl get services
kubectl create deployment nginx-depl --image=nginx  // create deployment using nginx
kubectl get deployment                              // Get deployment list
kubectl get replicaset
kubectl edit deployment nginx-depl  // get auto-generated configuration file with default values
kubectl get pod                     // Old pod will terminate and new pod will be generated based on new values
kubectl get replicaset              // Old replicaset will have zero pod
kubectl logs <deployment_name>      // Get pod logs
kubectl create deployment mongo-depl --image=mongo
kubectl describe pod <pod_name>
kubectl logs <pod_name>
kubectl exec -it <pod_name> -- bin/bash  // 
# ls
kubectl get deployment                      // Get list of deployment
kubectl get pod                             // Get list of PODs
kubectl delete deployment <deployment_name> // Delete deployment
kubectl get deployment
kubectl get pod
kubectl get replicaset
kubectl apply -f <file_name>
```

**nginx-deployment.yaml:** Default Value

```js
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec: # Specification for replicaset
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  replicas: 2 # tells deployment to run 2 pods matching the template
  template:
    metadata:
      labels:
        app: nginx
    spec:  # Specification for containers
      containers:
      - name: nginx
        image: nginx:1.16
        ports:
        - containerPort: 80
```

```js
kubectl apply -f nginx-deployment.yaml
kubectl get pod
kubectl get deployment
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
