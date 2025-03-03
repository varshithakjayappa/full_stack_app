FROM node:22.14.0-slim
LABEL maintainer = "varshitha"
RUN useradd adminapi
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 1004
USER adminapi
ENV MONGO_URL=""
CMD [ "npm" , "start" ]