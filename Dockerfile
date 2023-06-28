# use alpine as the base image
FROM alpine:latest

# install node.js and npm
RUN apk update && apk add nodejs npm

# create a working directory for the app
WORKDIR /app

# copy the package.json and package-lock.json files to the container
COPY ["package*.json", "./"]

# install the dependencies
RUN npm install

# copy the rest of the app files to the container
COPY [".", "."]

# build the app
RUN npm run build

# use the official nginx image as the base image
FROM nginx:latest

# create the public html directory
RUN mkdir "/html"

# copy the compiled files from the first stage to the second stage
COPY --from=0 ["/app/dist", "/html"]

# copy the nginx config
RUN rm "/etc/nginx/conf.d/default.conf"
COPY --from=0 ["/app/nginx/nginx.conf", "/etc/nginx/nginx.conf"]
COPY --from=0 ["/app/nginx/conf.d/server.conf", "/etc/nginx/conf.d/server.conf"]
RUN mkdir "/etc/nginx/logs/"

# the port do expose
EXPOSE 3000

# start nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
