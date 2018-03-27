FROM php:7.2.3-fpm
## FROM node
## ENV NPM_CONFIG_LOGLEVEL verbose

WORKDIR /var/www/server

# Install dependencies
RUN apt-get update && \
    apt-get install curl nano && \
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install app dependencies
RUN composer install --no-interaction

