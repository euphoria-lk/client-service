
FROM node:12


RUN mkdir -p /usr/src/client-service


WORKDIR /usr/src/client-service


COPY . /usr/src/client-service


RUN npm install


EXPOSE 5000


CMD npm start