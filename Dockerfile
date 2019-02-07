# Create a container image for the app
FROM node:dubnium-alpine

ENV PORT 5000

# Create app directory
WORKDIR /app

# Copy files
COPY . /app/

# Install app dependencies
RUN yarn install


# Expose ports for accessing the app
EXPOSE ${PORT} 80


# Launch the Express server
CMD ["node", "server.js"]

