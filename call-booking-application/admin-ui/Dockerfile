FROM node:23.9.0-slim
LABEL maintainer="varshitha"
RUN useradd -m adminui
WORKDIR /app
RUN chown adminui /app
COPY . .
RUN npm install
USER adminui
EXPOSE 3000
CMD [ "npm" , "start" ]