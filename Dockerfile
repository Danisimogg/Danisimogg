# Name the node stage "builder"
FROM node:14 AS builder

# Set working directory
WORKDIR /app

# Copy our node module specification
COPY package.json package.json
COPY yarn.lock yarn.lock

# install node modules and build assets
RUN yarn install

# Copy all files from current directory to working dir in image
# Except the one defined in '.dockerignore'
COPY . .

# Create production build of React App
RUN REACT_APP_API_SERVER=$REACT_APP_API_SERVER yarn isReady
FROM scratch AS export-stage
COPY --from=builder /app/dist .
