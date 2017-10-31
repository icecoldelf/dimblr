#Label the image
LABEL PROJECT="DIMBLR" \
APPS= "NodeJS, Express, React, Babel, React, Redux" \
OS_TYPE= "Linux" \
OS_DIST= "Alpine" \
OS_VERSION= "8.8.1" \
DESCRIPTION= "Base Server Image for DimblrApp" \
CREATOR= "Buck Nightwalker" \
MAINTAINER= "DIMBLR Team"

# Ensures that the base OS is the latest/most secured version of Alpine.
FROM alpine:latest

# Upgrade base system
RUN apk update
RUN apk upgrade

# Install Node and NPM.
RUN apk add nodejs nodejs-npm

# Mount persistent volume and create /app directory
VOLUME /app

# Set working directory
WORKDIR /app

# Copy all files in host build folder to container
# NOTE: ADD adds to IMAGE, while COPY adds to CONTAINER)
COPY package.json /app

# Install EXPRESS
RUN npm install express --save
# Install REACT
RUN npm install --save react react-dom
# Install BABEL
RUN npm install --save-dev babel-cli babel-preset-react
RUN npm install babel-preset-env --save-dev
# Install WEBPACK
RUN npm install --save-dev webpack
# Install REDUX
RUN npm install --save redux
RUN npm install --save react-redux
RUN npm install --save-dev redux-devtools

# Set default open ports for image. May specify protocol.
EXPOSE 80; 8080

# Start services
CMD node /app/index.js
