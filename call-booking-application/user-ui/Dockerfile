FROM node:23.9.0-slim
LABEL maintainer="varshitha"
RUN useradd -m userui
WORKDIR /app
RUN chown -R userui:userui /app
COPY . .
RUN npm install
RUN mkdir -p /app/node_modules/.cache && chown -R userui:userui /app/node_modules/.cache
USER userui
ENV REACT_APP_API_URL="http://user-api:1004"
EXPOSE 3000
CMD [ "npm" , "start" ]