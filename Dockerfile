FROM node:15.14.0-alpine3.10

WORKDIR /home/npm/project

USER root

COPY . /home/npm/project

RUN npm install && \
    npm run build


FROM nginx:1.20.0-alpine

COPY --from=0 /home/npm/project/build /usr/share/nginx/html
