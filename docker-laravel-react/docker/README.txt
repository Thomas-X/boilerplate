## docker-compose specific commands:

for running the containers:
docker-compose up

for rebuilding the containers (if anything inside the docker folder changed):
docker-compose build

to run/restart/stop/status_check docker:
systemctl start docker
systemctl restart docker
systemctl stop docker
systemctl status docker


## List Docker CLI commands
docker docker container --help
## Display Docker version and info
docker --version docker version docker info
## Excecute Docker image
docker run hello-world
## List Docker images
docker image ls
## List Docker containers (running, all, all in quiet mode)
docker container ls docker container ls --all
docker container ls -aq

docker build -t friendlyhello .  									# Create image using this directory's Dockerfile
docker run -p 4000:80 friendlyhello  								# Run "friendlyname" mapping port 4000 to 80
docker run -d -p 4000:80 friendlyhello         						# Same thing, but in detached mode
docker container ls                                					# List all running containers
docker container ls -a             									# List all containers, even those not running
docker container stop <hash>           								# Gracefully stop the specified container
docker container kill <hash>         								# Force shutdown of the specified container
docker container rm <hash>        									# Remove specified container from this machine
docker container rm $(docker container ls -a -q)         			# Remove all containers
docker image ls -a                             						# List all images on this machine
docker image rm <image id>            								# Remove specified image from this machine
docker image rm $(docker image ls -a -q)   							# Remove all images from this machine
docker login             											# Log in this CLI session using your Docker credentials
docker tag <image> username/repository:tag  						# Tag <image> for upload to registry
docker push username/repository:tag            						# Upload tagged image to registry
docker run username/repository:tag                   				# Run image from a registry
