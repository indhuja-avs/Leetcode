FROM node:16
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
WORKDIR /app
CMD npm build
CMD npm start
EXPOSE 3000
