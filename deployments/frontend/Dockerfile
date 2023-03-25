FROM node:18.13.0

#set working directory
WORKDIR /app
RUN echo "y" | apt-get update
RUN echo "y" | apt-get install vim

#install and cache app dependencies
COPY ./frontend .
RUN npm install

# This command changes the ownership of the "/app" directory and its contents to the "node" user.
RUN chown -R node:node /app

# RUN chmod 777 /app/node_modules

# start app
CMD ["npm", "run", "dev"]