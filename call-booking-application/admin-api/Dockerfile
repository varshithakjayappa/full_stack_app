FROM node:23.9.0-slim
LABEL maintainer="varshitha"
RUN useradd -m -s /bin/bash userui
WORKDIR /app
RUN chown -R userui:userui /app
COPY package*.json ./
USER userui
ENV MONGO_URL=""
RUN mkdir -p /app/node_modules/.cache && chmod -R 777 /app/node_modules
RUN npm install
COPY --chown=userui:userui . .
EXPOSE 1004
CMD [ "npm" , "start" ]