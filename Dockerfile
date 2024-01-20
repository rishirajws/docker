FROM node:21.5.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

CMD ["node", "app.js"]

EXPOSE 3033
