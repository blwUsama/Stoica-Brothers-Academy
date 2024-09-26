FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

WORKDIR  /app/src

CMD ["npm", "start", "&", "node", "SendEmail.js"]