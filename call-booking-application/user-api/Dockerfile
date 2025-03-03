FROM node:23.9.0-silm
LABEL maintainer = "varshitha"
RUN useradd userapi
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 1004
USER userapi
ENV MONGO_URL=""
ENV ADMIN_EMAIL=""
CMD [ "npm" , "start" ]