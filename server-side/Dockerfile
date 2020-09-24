FROM node

WORKDIR /home/server-side/

COPY . .

RUN apt-get update

RUN npm install

RUN npm install nodemon -g

RUN npm install mongodb

RUN npm install express

CMD ["nodemon","index.js"]