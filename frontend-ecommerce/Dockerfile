FROM node:16.10.0

WORKDIR /code
RUN npm install -g @angular/cli@14.0.7
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD npm run start
