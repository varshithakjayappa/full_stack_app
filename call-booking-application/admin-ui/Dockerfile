FROM node:23.9.0-slim
LABEL maintainer="varshitha"
RUN useradd -m adminui
WORKDIR /app
RUN chown -R adminui:adminui /app
COPY . .
RUN npm install
RUN mkdir -p /app/node_modules/.cache && chown -R adminui:adminui /app/node_modules/.cache
USER adminui
ENV REACT_APP_API_URL="http://admin-api:1005"
EXPOSE 30001
CMD [ "npm" , "start" ]