# Create a container image for the app
FROM node:dubnium-alpine

# ENV variables are available during runtime
# and build time processing
ENV PORT 5000
ENV NODE_ENV production


# Create app directory
WORKDIR /app

# Copy source files into app directory
COPY . /app


# Install app dependencies
RUN yarn install


# Expose ports for accessing the app
EXPOSE ${PORT} 80


# Launch the Express server
CMD ["node", "server.js"]

