FROM node:23.9.0-slim
LABEL maintainer="varshitha"
RUN useradd userui
WORKDIR /app
RUN chown userui /app
COPY . .
RUN npm install
EXPOSE 3000
USER userui
CMD [ "npm" , "start" ]

