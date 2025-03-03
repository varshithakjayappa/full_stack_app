FROM node:23.9.0-silm
LABEL maintainer = "varshitha"
RUN useradd adminui
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
USER adminui
CMD [ "npm" , "start" ]