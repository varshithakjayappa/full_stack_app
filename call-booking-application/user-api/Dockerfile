FROM node:23.9.0-slim
LABEL maintainer="varshitha"
RUN useradd -m userapi
WORKDIR /app
RUN chown userapi /app
COPY . .
RUN npm install
USER userapi
ENV MONGO_URL=""
EXPOSE 1004
CMD [ "npm" , "start" ]