FROM alpine

MAINTAINER Luke Dotson "lukedotson@gmail.com"

# Update
RUN apk add --update nodejs nodejs-npm sudo 
RUN sudo apk add --update mongodb

EXPOSE 8080

WORKDIR /
VOLUME ["/happy"]
# Install app dependencies

# Set up mongodb
#RUN mkdir -p /data/db

# Bundle app source
COPY . /dimblrApp
RUN cd /dimblrApp; npm install
RUN cd /dimblrApp; npm run compile

# Start Application
CMD ["node", "/dimblrApp/src/server.js"]