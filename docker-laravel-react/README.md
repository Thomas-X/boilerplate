## dev setup

to begin development install:
```
docker
```
and
```
docker-compose
```
<br/><br/>
then build your containers:
<br/><br/>
```
cd docker/
```
<br><br/>
check if you're in the docker directory, if yes, continue, otherwise cd into it
```
docker-compose build
```
<br/><br/>
then create your containers:
<br/><br/>
```
docker-compose up
```
to start the server, cd into the server directory and run
```
bash vessel init
APP_PORT=8777 MYSQL_PORT=33777 ./vessel start
```
<br/><br/>
start editing this project and see your changes at: 
<br/><br/>
[frontend](http://client.localhost:8080)
<br/><br/>
[backend](http://server.localhost:8777)
