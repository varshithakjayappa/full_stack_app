FROM node:23.9.0-slim
LABEL maintainer="varshitha"
RUN useradd -m -s /bin/bash adminui
WORKDIR /app
RUN chown -R adminui:adminui /app
COPY package*.json ./
USER adminui
RUN mkdir -p /app/node_modules/.cache && chmod -R 777 /app/node_modules
RUN npm install
COPY --chown=adminui:adminui . .
EXPOSE 3000
CMD [ "npm" , "start" ]