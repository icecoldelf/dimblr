FROM ubuntu:14.04

MAINTAINER Luke Dotson "lukedotson@gmail.com"

# Update
#RUN apt-get update
RUN apt-get install --yes curl
RUN curl --silent --location https://deb.nodesource.com/setup_4.x | sudo bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential

# Not sure why this is needed yet, or if at all
#RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

#VOLUME ["/data"]

#ADD . /data
#RUN cd /data && npm install

EXPOSE 8080

WORKDIR /
# Install app dependencies
COPY package.json /src/package.json

# Bundle app source
COPY . /src
RUN cd /src; npm install

#EXPOSE  8080
CMD ["node", "/src/server.js"]