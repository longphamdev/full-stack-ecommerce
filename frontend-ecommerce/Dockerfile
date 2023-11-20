FROM node:16.10.0

WORKDIR /code

COPY package.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD npm run start