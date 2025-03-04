FROM node:23.9.0-slim
LABEL maintainer="varshitha"
RUN useradd -m userui
WORKDIR /app
COPY --chown=userui:userui . .  
RUN chmod -R 777 /app  
USER userui
RUN npm install
EXPOSE 3000
CMD [ "npm" , "start" ]

