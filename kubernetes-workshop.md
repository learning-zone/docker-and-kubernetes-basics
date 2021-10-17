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

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
