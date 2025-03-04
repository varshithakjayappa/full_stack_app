FROM node:23.9.0-slim
LABEL maintainer="varshitha"
RUN useradd -m adminapi
WORKDIR /app
RUN chown adminapi /app
COPY . .
RUN npm install
USER adminapi
ENV MONGO_URL=""
EXPOSE 1005
CMD [ "npm" , "start" ]