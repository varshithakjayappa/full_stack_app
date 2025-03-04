FROM node:23.9.0-slim
LABEL maintainer="varshitha"
RUN useradd -m adminapi
WORKDIR /app
RUN chown adminapi /app
COPY . .
RUN npm install
USER adminapi
EXPOSE 3000
CMD [ "npm" , "start" ]