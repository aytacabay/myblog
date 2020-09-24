FROM node

WORKDIR /home/client-side/

COPY . .

RUN apt-get update

RUN npm install

CMD ["npm","run","start"]