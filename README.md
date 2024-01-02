# **Docker vs Kubernetes**

- Docker is more challenging to scale.

# **What is Kubernetes?**

- Kubernetes is a container orchestrator.
- Kubernetes is declarative.

# **What is Kubernetes used for?**

- Kubernetes can connect to a Cloud provider's API and perform actions.

# **Components of Kubernetes**

- Control Plane (Kubernetes Servers)
- Nodes (Instances)
- Kubelet (Kubernetes Agent)
- Kubeproxy (Receives traffic and directs it to the corresponding pods)
- Scheduler
- Etcd (Key-value database to store the state of the Kubernetes cluster)
- Cloud Controller Manager (Connects to the Cloud provider's API)
- KUBECONFIG (File declaring all Kubernetes clusters or contexts)

# **Kubernetes Contexts**

- Combination of the host server's URL and credentials for connecting to it.

# **Namespaces**

- Logical division of the Kubernetes cluster.
- Allows separation of workloads within a Kubernetes cluster.

# **Pods**

- Set of containers.
- Can run more than one container.

# **Kubernetes Manifests**

- .yml files.

# **Simple Pod Manifest**

- *apiVersion*: Kubernetes resource version (Pod in this case).
- *kind:* Type of resource.
- *metadata:* Pod name. (Labels can be added)
- *spec:* Declaration of containers that will run inside the Pod.
- Applying Pod: *kubectl apply -f <filename>*

# **Advanced Pod Manifest**

- *env:* Environment variables.
- *valueFrom – fieldRef – fieldPath:* Retrieve variable from another source. (Reserved variables).
- *resources:* Allocate resources to containers.
  - *requests:* Guaranteed resources for the pod. Always available.
  - *limits:* Limits that the pod can use.
- If the Pod exceeds the limit, the Linux kernel will kill the process.
- *readinessProbe:* Instruction for Kubernetes to indicate that the pod is ready to receive traffic.
- *livenessProbe:* Instruction for Kubernetes to indicate that the pod is alive.
- *ports:* Expose ports.

# **Deployment Manifests**

- Template for creating Pods.
- *replicas:* Number of pods desired in the deployment.

# **DaemonSet Manifest**

- Pods deployed using DaemonSet will be deployed on all nodes.

# **StatefulSet and Volumes Manifest**

- Way to create pods with volumes.
- Volumes are directories assigned to pods. Directory data is persistent (similar to Docker).
- *volumeMounts:* Mount volumes to a path and assign them a name.
- *volumeClaimTemplates:* Declaration of mounted volumes.
  - *storageClassName:* Kubernetes driver for a provider.

# **What can Kubernetes manage?**

- Databases
- S3 Buckets
- Load Balancers

# **Networking in Kubernetes**

- Each pod has its own IP.
- IP Routing.
- Containers in each pod share its IP.
- Allows connection between pods through IP Routing.

# **Services in Kubernetes**

- Way to connect applications, either within or outside a cluster.
- ClusterIP
  - Fixed IP within the cluster, serving as a load balancer among all pods assigned to the service.
- Node Port
  - Creates a port on each node, receiving traffic and sending it to the desired pods.
- Load Balancer (Digital Ocean)
  - Creates a load balancer in the Cloud provider and redirects traffic to pods.

# **Ingress**

- Resource type allowing access to services based on the PATH.
- Kubernetes creates an NGINX controller deployment.
- NGINX has a special controller that reads this resource type and self-configures to route traffic to the desired destination.
- The NGINX Ingress controller creates a namespace when installed.
- The NGINX Ingress controller creates a LoadBalancer when installed.

# **ConfigMap**

- File hosted in Kubernetes.
- Accessible from pods.

# **Secrets**

- Similar to ConfigMap.
- Content (Data) encoded in Base64.

# **Kustomize**

- Resource type allowing Manifest generation.
- Generates a hash on created resources each time the kustomization is modified, serving as versioning.
