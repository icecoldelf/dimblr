FROM alpine

MAINTAINER Luke Dotson "lukedotson@gmail.com"

# Update
RUN apk add --update nodejs nodejs-npm

EXPOSE 8080

WORKDIR /
VOLUME ["/happy"]
# Install app dependencies

# Bundle app source
COPY . /src
RUN cd /src; npm install

#EXPOSE  8080
CMD ["node", "/src/server.js"]