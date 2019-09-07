# Create a container image for the app
FROM node:dubnium-alpine

# ENV variables are available during runtime
# and build time processing
#ENV PORT 5000
ENV NODE_ENV production

# Create app directory
WORKDIR /usr/app

# Copy package.json and yarn.lock into app directory
COPY ./package.json ./
COPY ./yarn.lock ./

# Install backend NPM modules
RUN yarn install

# COPY the client package and yarn files into app
COPY ./client/package.json ./client/
COPY ./client/yarn.lock ./client/

# Install client NPM modules
RUN yarn run install:client

# COPY the rest of the files into app directory
COPY ./ ./

# build the client
RUN yarn run build:client

# Expose ports for accessing the app
EXPOSE 5000 80

# Launch the Express server
CMD ["node", "server.js"]
