FROM node:23.9.0-slim
LABEL maintainer="varshitha"
RUN useradd -m -s /bin/bash userapi
WORKDIR /app
RUN chown -R userapi:userapi /app
COPY package*.json ./
USER userapi
ENV MONGO_URL=""
RUN mkdir -p /app/node_modules/.cache && chmod -R 777 /app/node_modules
RUN npm install
COPY --chown=userapi:userapi . .
EXPOSE 3000
CMD [ "npm" , "start" ]