FROM node:23.9.0-slim
LABEL maintainer="varshitha"
RUN useradd adminui
WORKDIR /app
RUN chown useradd /app
COPY . .
RUN npm install
EXPOSE 3000
USER adminui
CMD [ "npm" , "start" ]