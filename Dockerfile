FROM node:lts-slim

RUN mkdir -p /var/www

WORKDIR /var/www

COPY src .

RUN npm install -g install-peerdeps
RUN npm i --no-optional
