FROM node:18.13.0

# set working directory
WORKDIR /app
RUN echo "y" | apt-get update
RUN echo "y" | apt-get install vim

# install and cache app dependencies
COPY ./backend .
RUN npm install

# start app
# RUN npx prisma generate
RUN chmod +x migrate.sh
ENTRYPOINT ["sh", "migrate.sh"]
CMD ["npm", "run", "dev"]