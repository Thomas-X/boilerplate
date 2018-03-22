FROM nginx:1.10

ADD docker/vhost-server.conf /etc/nginx/conf.d/server.conf
ADD docker/vhost-client.conf /etc/nginx/conf.d/client.conf
ADD docker/vhost-index.conf /etc/nginx/conf.d/default.conf