FROM nginx:1.10
ADD docker/vhost-client.conf /etc/nginx/conf.d/client.conf