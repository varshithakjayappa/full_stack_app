FROM node:23.9.0-silm
LABEL maintainer = "varshitha"
RUN useradd adminapi
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 1004
USER adminapi
ENV MONGO_URL=""
CMD [ "npm" , "start" ]