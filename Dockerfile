# FROM node:19-alpine
# WORKDIR /app
# COPY . .
# RUN npm install
# CMD ["node", "index.js"]

FROM node:19-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "index.js"]
