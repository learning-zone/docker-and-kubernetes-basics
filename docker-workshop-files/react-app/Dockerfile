# Use Node 14.16.0 version
FROM node:14.16.0

# Work directory of Node
WORKDIR /usr/src/app

# Copy package.json & package-lock.json from local to Node image
COPY package*.json ./

# Perform dependencies installation
RUN npm install

# Copy all files
COPY . .

# Use 3000 port to run
EXPOSE 3000

# Run the app in command prompt
CMD ["npm", "start"]