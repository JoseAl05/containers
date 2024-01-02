# **Docker vs Kubernetes**

- Docker es más difícil de escalar.

# **¿Qué es Kubernetes?**

- Kubernetes es un orquestador de contenedores.
- Kubernetes es declarativo.
# **¿Para que sirve Kubernetes?**

- Kubernetes se puede conectar a la API de un proveedor Cloud y realizar acciones.
# **Partes de Kubernetes**

- Control Pane (Servidores de Kubernetes)
- Nodos (Instancias)
- Kubelet (Agente de kubernetes)
- Kubeproxy (Recibe el tráfico y lo manda a los pods que correspondan)
- Scheduler
- Etcd (Base de datos basada en “key value” para guardar el estado del cluster de kubernetes)
- Cloud Controller Manager (Se conecta a la Api del proveedor de Cloud)
- KUBECONFIG (Archivo donde están declarados todos los cluster de kubernetes o contextos)
# **Contextos de Kubernetes**

- Combinacion de URL del servidor del anfitrión y las credenciales para conectarse a éste.


# **Namespaces**

- Division lógica del cluster de kubernetes.
- Permite separar la carga dentro de un cluster de kubernetes.
# **Pods**

- Set de Contenedores
- Pueden correr más de 1 Contenedor
# **Manifestos de Kubernetes**

- Archivos .yml
# **Manifesto Pod Simple**

- *apiVersion*: Version del recurso de kubernetes (Pod en este caso).
- *kind:* Tipo de recurso.
- *metadata:* Nombre del pod. (Se puede agregar etiquetas)
- *spec:* Declaración de containers que correrán dentro del Pod.
- Aplicar Pod: *kubetcl apply –f <nombre\_archivo>*


# **Manifesto Pod Avanzado**


- *env:* Variables de entorno.
- *valueFrom – fieldRef – fieldPath:* Obtener variable desde otra fuente. (Variables reservadas).
- *resources:* Asignarle recursos a los contenedores.
  - *requests:* Recursos garantizados al pod. Siempre disponibles
  - *limits:* Limites que el pod puede usar.
- Si el Pod supera el limite, el kernel de Linux va a matar el proceso.
- *readinessProbe:* Es una instrucción para kubernetes para indicarle que el pod está listo para recibir tráfico.
- *livenessProbe:* Es una instrucción para kubernetes para indicarle que el pod está vivo.
- *ports:* Exponer puertos.


# **Manifesto Deployments**

- Template para crear Pods.

- *replicas:* Cantidad de pods que se quiere en el deployment.

# **Manifesto DaemonSet**

- El pod desplegado mediante DaemonSet, estará desplegado en todos los nodos.

# **Manifesto StatefulSet y Volumenes**

- Forma de crear pods con volúmenes.
- Los volúmenes son directorios asignados a los pods. Los datos del directorio no perderan. (Similar a Docker). 

- *volumeMounts:* Montar volúmenes en un Path y asignarle un nombre.
- *volumeClaimTemplates:* Declaracion de los volúmenes montados.
  - *storageClassName:* Driver de kubernetes para un proveedor.

# **¿Qué cosas puede manejar Kubernetes?**

- Bases de Datos
- S3 Buckets
- LoadBalancers
# **Networking Kubernetes**

- Cada pod tiene su propia IP
- IP Routing
- Los contenedores de cada pod comparten la IP de éste.
- Permite la conexión entre pods mediante IP Routing.
# **Servicios en Kubernetes**

- Forma de poder conectar aplicaciones, desde un Cluster o fuera de éste.
- ClusterIP
  - IP Fija dentro del Cluster, que sirve como Load Balancer entre todos los pods asignados al servicio.

- Se crea deployment con un selector con role “hello”.
- Se crea servicio que apunte al puerto del contenedor.
- El servicio utiliza el role del deployment. Esto significa que todo el tráfico que utilice este servicio, será re direccionado a los pods con el mismo role.
- Crea una IP Fija Privada

- Node Port
  - Crea un puerto en cada nodo, que recibe el tráfico y lo envía a los pods deseados.


- Se crea deployment con un selector con role “hello”.
- Se crea servicio que apunte al puerto del contenedor.
- El servicio utiliza el role del deployment. Esto significa que todo el tráfico que utilice este servicio, será re direccionado a los pods con el mismo role.
- Se le asigna un puerto publico al servicio, para poder acceder a los nodos a través de este.

- Load Balancer (Digital Ocean)
  - Crea un load balancer en el proveedor Cloud y re direcciona el tráfico a los pods.


- Se crea deployment con un selector con role “hello”.
- Se crea servicio que apunte al puerto del contenedor.
- El servicio utiliza el role del deployment. Esto significa que todo el tráfico que utilice este servicio, será re direccionado a los pods con el mismo role.
- Al aplicar el deployment, el servicio se conectará al proveedor Cloud, poniendo los nodos con sus respectivos pods en un “Load Balancer”.
- Para acceder al nodo o pods, el servicio crea una IP Publica Fija.

# **Ingress**

- Tipo de recurso que permite crear accesos a nuestros servicios basados en el PATH
- Kubernetes creará un deploy de un controlador NGINX
- NGINX tendrá un controlador especial que leera este tipo de recurso y se autoconfigurara para mandar el trafico al destino deseado.
- El controlador NGINX Ingress creará un namespace al ser instalado.
- El controlador NGINX Ingress creará un LoadBalancer al ser instalado.

# **ConfigMap**

- Archivo que se hostea en Kubernetes.
- Se puede acceder desde los pods.


# **Secrets**

- Similar a ConfigMap
- Contenido (Data) codificado en Base64


# **Kustomize**

- Tipo de recurso que permite generar Manifestos.
- Genera un hash en los recursos creados cada vez que se modifica el kustomization a modo de versionado.



