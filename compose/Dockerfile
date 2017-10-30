#Label the image
LABEL PROJECT="DIMBLR" \
APPS= "NodeJS" \
OS_TYPE= "Linux" \
OS_DIST= "Alpine" \
OS_VERSION= "8.8.1" \
DESCRIPTION= "Base Server Image for NodeJS" \
CREATOR= "Buck Nightwalker" \
MAINTAINER= "DIMBLR Team"

# Ensures that the base OS is the latest/most secured version of Alpine.
FROM alpine:latest

# Upgrade base system
RUN apk update
RUN apk upgrade

# Install Node and NPM.
RUN apk add nodejs nodejs-npm

# Set working directory
WORKDIR /

# Mount persistent volume and create /app directory
VOLUME /app

# Copy files from host to image
ADD . /src

# Run package.json
RUN cd /src; npm install

# Set default open ports for image. May specify protocol.
EXPOSE 80; 8080

# Start services
CMD node /src/server.js
