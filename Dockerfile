FROM node:18-alpine

COPY package.json /app/
COPY package-lock.json /app/
COPY src/ /app/src/
WORKDIR /app

RUN npm ci

CMD ["npm", "start"]

EXPOSE 3000