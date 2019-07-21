FROM node:8.16.0-alpine
WORKDIR /usr/src/app/helloworldserver/dist
COPY dist/. ./
WORKDIR /usr/src/app/helloworldserver
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD ["npm","run","start:prod"]