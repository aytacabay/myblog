FROM node

WORKDIR /home/admin-side/

COPY . .

RUN apt-get update

RUN npm install

RUN npm install nodemon -g

# RUN npm install -g serve

RUN npm install express

RUN npm install mongodb

RUN npm install pug --save

# CMD ["serve","-s build -l 3000"]

CMD ["nodemon","index.js"]