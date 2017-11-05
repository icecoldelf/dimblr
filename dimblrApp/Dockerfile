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

#RUN cd /dimblrApp; npm build
#RUN cd /dimblrApp; npm start

#EXPOSE  8080
CMD ["npm", "/dimblrApp/build"]
CMD ["npm", "/dimblrApp/start"]`