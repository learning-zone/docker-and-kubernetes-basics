# Kubectl Command Cheatsheet

Kubectl is the command line configuration tool for Kubernetes that communicates with a Kubernetes API server. Using kubectl allows you to create, inspect, update, and delete Kubernetes objects.

## Cluster Management

Display endpoint information about the master and services in the cluster

```js
kubectl cluster-info
```

Display the Kubernetes version running on the client and server

```js
kubectl version
```

Get the configuration of the cluster

```js
kubectl config view
```

List the API resources that are available

```js
kubectl api-resources
```

List the API versions that are available

```js
kubectl api-versions
```

List all the namespace

```js
kubectl get all --all-namespaces
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Daemonsets

**Shortcode = ds**

List one or more daemonsets

```js
kubectl get daemonset
```

Edit and update the definition of one or more daemonset

```js
kubectl edit daemonset <daemonset_name>
```

Delete a daemonset

```js
kubectl delete daemonset <daemonset_name>
```

Create a new daemonset

```js
kubectl create daemonset <daemonset_name>
```

Manage the rollout of a daemonset

```js
kubectl rollout daemonset
```

Display the detailed state of daemonsets within a namespace

```js
kubectl describe ds <daemonset_name> -n <namespace_name>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Deployments

**Shortcode = deploy**

List one or more deployments

```js
kubectl get deployment
```

Display the detailed state of one or more deployments

```js
kubectl describe deployment <deployment_name>
```

Edit and update the definition of one or more deployment on the server

```js
kubectl edit deployment <deployment_name>
```

Create one a new deployment

```js
kubectl create deployment <deployment_name>
```

Delete deployments

```js
kubectl delete deployment <deployment_name>
```

See the rollout status of a deployment

```js
kubectl rollout status deployment <deployment_name>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Events

**Shortcode = ev**

List recent events for all resources in the system

```js
kubectl get events
```

List Warnings only

```js
kubectl get events --field-selector type=Warning
```

List events but exclude Pod events

```js
kubectl get events --field-selector involvedObject.kind!=Pod
```

Pull events for a single node with a specific name

```js
kubectl get events --field-selector involvedObject.kind=Node, involvedObject.name=<node_name>
```

Filter out normal events from a list of events

```js
kubectl get events --field-selector type!=Normal
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Logs

Print the logs for a pod

```js
kubectl logs <pod_name>
```

Print the logs for the last hour for a pod

```js
kubectl logs --since=1h <pod_name>
```

Get the most recent 20 lines of logs

```js
kubectl logs --tail=20 <pod_name>
```

Get logs from a service and optionally select which container

```js
kubectl logs -f <service_name> [-c <$container>]
```

Print the logs for a pod and follow new logs

```js
kubectl logs -f <pod_name>
```

Print the logs for a container in a pod

```js
kubectl logs -c <container_name> <pod_name>
```

Output the logs for a pod into a file named ‘pod.log’

```js
kubectl logs <pod_name> pod.log
```

View the logs for a previously failed pod

```js
kubectl logs --previous <pod_name>
```

For logs we also recommend using a tool developed by Johan Haleby called [Kubetail](https://github.com/johanhaleby/kubetail). This is a bash script that will allow you to get logs from multiple pods simultaneously. Here are some sample commands using Kubetail.

Get logs for all pods named with pod_prefix

```js
kubetail <pod_prefix>
```

Include the most recent 5 minutes of logs

```js
kubetail <pod_prefix> -s 5m
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Manifest Files

Another option for modifying objects is through Manifest Files. It is done by using yaml files with all the necessary options for objects configured. We have our yaml files stored in a git repository, so we can track changes and streamline changes.

Apply a configuration to an object by filename or stdin. Overrides the existing configuration.

```js
kubectl apply -f manifest_file.yaml
```

Create objects

```js
kubectl create -f manifest_file.yaml
```

Create objects in all manifest files in a directory

```js
kubectl create -f ./dir
```

Create objects from a URL

```js
kubectl create -f ‘url’
```

Delete an object

```js
kubectl delete -f manifest_file.yaml
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Namespaces

**Shortcode = ns**

Create namespace <name>

```js
kubectl create namespace <namespace_name>
```

List one or more namespaces

```js
kubectl get namespace <namespace_name>
```

Display the detailed state of one or more namespace

```js
kubectl describe namespace <namespace_name>
```

Delete a namespace

```js
kubectl delete namespace <namespace_name>
```

Edit and update the definition of a namespace

```js
kubectl edit namespace <namespace_name>
```

Display Resource (CPU/Memory/Storage) usage for a namespace

```js
kubectl top namespace <namespace_name>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Nodes

**Shortcode = no**

Update the taints on one or more nodes

```js
kubectl taint node <node_name>
```

List one or more nodes

```js
kubectl get node
```

Delete a node or multiple nodes

```js
kubectl delete node <node_name>
```

Display Resource usage (CPU/Memory/Storage) for nodes

```js
kubectl top node
```

Resource allocation per node

```js
kubectl describe nodes | grep Allocated -A 5
```

Pods running on a node

```js
kubectl get pods -o wide | grep <node_name>
```

Annotate a node

```js
kubectl annotate node <node_name>
```

Mark a node as unschedulable

```js
kubectl cordon node <node_name>
```

Mark node as schedulable

```js
kubectl uncordon node <node_name>
```

Drain a node in preparation for maintenance

```js
kubectl drain node <node_name>
```

Add or update the labels of one or more nodes

```js
kubectl label node
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Pods

**Shortcode = po**

List one or more pods

```js
kubectl get pod
```

Delete a pod

```js
kubectl delete pod <pod_name>
```

Display the detailed state of a pods

```js
kubectl describe pod <pod_name>
```

Create a pod

```js
kubectl create pod <pod_name>
```

Execute a command against a container in a pod

```js
kubectl exec <pod_name> -c <container_name> <command>
```

Get interactive shell on a a single-container pod

```js
kubectl exec -it <pod_name> /bin/sh
```

Display Resource usage (CPU/Memory/Storage) for pods

```js
kubectl top pod
```

Add or update the annotations of a pod

```js
kubectl annotate pod <pod_name> <annotation>
```

Add or update the label of a pod

```js
kubectl label pod <pod_name>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Replication Controllers

**Shortcode = rc**

List the replication controllers

```js
kubectl get rc
```

List the replication controllers by namespace

```js
kubectl get rc --namespace=”<namespace_name>”
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## ReplicaSets

**Shortcode = rs**

List ReplicaSets

```js
kubectl get replicasets
```

Display the detailed state of one or more ReplicaSets

```js
kubectl describe replicasets <replicaset_name>
```

Scale a ReplicaSet

```js
kubectl scale --replicas=[x] 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Secrets

Create a secret

```js
kubectl create secret
```

List secrets

```js
kubectl get secrets
```

List details about secrets

```js
kubectl describe secrets
```

Delete a secret

```js
kubectl delete secret <secret_name>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Services

**Shortcode = svc**

List one or more services

```js
kubectl get services
```

Display the detailed state of a service

```js
kubectl describe services
```

Expose a replication controller, service, deployment or pod as a new Kubernetes service

```js
kubectl expose deployment [deployment_name]
```

Edit and update the definition of one or more services

```js
kubectl edit services
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Service Accounts

**Shortcode = sa**

List service accounts

```js
kubectl get serviceaccounts
```

Display the detailed state of one or more service accounts

```js
kubectl describe serviceaccounts
```

Replace a service account

```js
kubectl replace serviceaccount
```

Delete a service account

```js
kubectl delete serviceaccount <service_account_name>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## StatefulSet

**Shortcode = sts**

List StatefulSet

```js
kubectl get statefulset
```

Delete StatefulSet only (not pods)

```js
kubectl delete statefulset/[stateful_set_name] --cascade=false
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Common Options

In Kubectl you can specify optional flags with commands. Here are some of the most common and useful ones.

-o Output format. For example if you wanted to list all of the pods in ps output format with more information.

```js
kubectl get pods -o wide 
```

-n Shorthand for --namespace. For example, if you’d like to list all the Pods in a specific Namespace you would do this command:

```js
kubectl get pods --namespace=[namespace_name]
```

```js
kubectl get pods -n=[namespace_name]
```

-f Filename, directory, or URL to files to use to create a resource. For example when creating a pod using data in a file named newpod.json.

```js
kubectl create -f ./newpod.json
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Kubectl Short Names

|Short Name	     |Long Name           |
|----------------|--------------------|
|csr	         |certificatesigningrequests|
|cs	             |componentstatuses|
|cm	             |configmaps|
|ds	             |daemonsets|
|deploy	         |deployments|
|ep	             |endpoints|
|ev	             |events|
|hpa	         |horizontalpodautoscalers|
|ing	         |ingresses|
|limits	         |limitranges|
|ns	             |namespaces|
|no	             |nodes|
|pvc	         |persistentvolumeclaims|
|pv	             |persistentvolumes|
|po	             |pods|
|pdb	         |poddisruptionbudgets|
|psp	         |podsecuritypolicies|
|rs	             |replicasets|
|rc	             |replicationcontrollers|
|quota	         |resourcequotas|
|sa	             |serviceaccounts|
|svc	         |services|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
