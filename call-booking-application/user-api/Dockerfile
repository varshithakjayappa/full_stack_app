FROM node:23.9.0-slim
LABEL maintainer="varshitha"
RUN useradd -m userapi
WORKDIR /app
COPY --chown=userapi:userapi . .  
RUN chmod -R 777 /app  
USER userapi
ENV MONGO_URL=""
RUN npm install
EXPOSE 3000
CMD [ "npm" , "start" ]