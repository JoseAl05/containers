# Docker Test
A simple application to test basic docker functions. Here I will write all the commands I used in this project and try to explain it as I understand it. Pleas forgive if there are many errors in it.
## Tools
- [Cmder](https://cmder.app/)
- [NodeJS](https://nodejs.org/en)
- [Express](http://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)

# Commands used.
These are the commands used in this project to test the basics of docker
## Images
### *docker images*
Lists all downloaded images. The output is a table with the following headers.
1. **REPOSITORY**:Name of the downloaded image.
2. **TAG**: Image version.
3. **IMAGE ID**: Unique image identifier.
4. **CREATED**: When the downloaded image was created.
5. **SIZE**: Image size.

### *docker pull <image>:<version>*
Download an image.
### *docker image rm <imagen>*
Delete an image.
## Containers
### *docker create <image>*
Creates a container based on a given image
### *docker start <id-container>* or *docker start<container-name>*
Start a container
### *docker ps*
Check the status of started containers
1. **CONTAINER ID**: A short version of the container ID.
2. **IMAGE**: Shows on wich base image the container has been created.
3. **COMMAND**: Command used by the container to start.
4. **CREATED**:When the container has been created.
5. **STATUS**: Container status.
6. **PORT**: Port the container is using.
7. **NAMES**: Container name.

### *docker ps -a*
Displays all the containers that have been created.
### *docker stop <id-contenedor>*
Stop the container execution.
### *docker rm <id-contenedor>* or *docker rm <nombre-contenedor>*
Delete a container.
### *docker create –p<host port>:<container port> <image>*
Creates a container with mapped ports.
### *docker logs --follow <container ID>* or *docker logs --follow <container name>*
Displays the logs of the container execution.
### *docker run <image>*
Resume all the previous commands
1. First search for the image, if not found, download the image.
2. Second, it creates a container using the given image.
3. Third and last, start the container.
> You can add the -d param to docker run to avoid the log output.