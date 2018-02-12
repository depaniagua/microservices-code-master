FROM node:6.9.2
EXPOSE 3010 
COPY package.json .
COPY microservice2.js .
RUN npm install
CMD node microservice2.js