FROM node:23.9.0-slim
LABEL maintainer="varshitha"
RUN useradd -m -s /bin/bash userui
WORKDIR /app
RUN chown -R userui:userui /app
COPY package*.json ./
USER userui
RUN mkdir -p /app/node_modules/.cache && chmod -R 777 /app/node_modules
RUN npm install
COPY --chown=userui:userui . .
EXPOSE 3000
CMD [ "npm" , "start" ]

