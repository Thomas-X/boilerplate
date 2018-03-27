FROM php:7.2.3-fpm
FROM node
ENV NPM_CONFIG_LOGLEVEL verbose

WORKDIR /var/www/server
RUN php composer.phar install