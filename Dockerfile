MAINTAINER Luke Dotson "lukedotson@gmail.com"

FROM ubuntu:16.04

# Update
#RUN apt-get update
RUN apt-get -qq update
RUN apt-get install -y nodejs npm

# Not sure why this is needed yet, or if at all
#RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

#VOLUME ["/data"]

#ADD . /data
#RUN cd /data && npm install

EXPOSE 80

#WORKDIR /
# Install app dependencies
COPY package.json /src/package.json
RUN npm -g install npm@latest

# Bundle app source
#COPY . /srcp

#EXPOSE  8080
CMD ["node", "/src/server.js"]