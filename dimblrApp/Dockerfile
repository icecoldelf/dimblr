FROM alpine

MAINTAINER Luke Dotson "lukedotson@gmail.com"

# Update
RUN apk add --update nodejs nodejs-npm

EXPOSE 8080

WORKDIR /
VOLUME ["/happy"]
# Install app dependencies

# Bundle app source
COPY . /dimblrApp
RUN cd /dimblrApp; npm install
#RUN cd /dimblrApp/node_modules/

#RUN npm build;
#RUN npm start;

#EXPOSE  8080
#CMD ["npm", "build"]
#CMD ["npm", "start"]