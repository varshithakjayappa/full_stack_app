FROM node:23.9.0-slim
LABEL maintainer="varshitha"
RUN useradd -m userui
WORKDIR /app
RUN chown userui /app
COPY . .
RUN npm install
USER userui
EXPOSE 3000
CMD [ "npm" , "start" ]