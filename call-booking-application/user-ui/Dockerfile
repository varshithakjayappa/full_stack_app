FROM node:23.9.0-silm
LABEL maintainer = "varshitha"
RUN useradd userui
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
USER userui
CMD [ "npm" , "start" ]

