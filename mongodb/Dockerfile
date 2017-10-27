FROM alpine

MAINTAINER Luke Dotson "lukedotson@gmail.com"

# Update
RUN apk update
RUN apk add mongodb mongodb-tools

EXPOSE 27017
EXPOSE 28017

VOLUME ["data/db"]
WORKDIR /data

CMD mongod