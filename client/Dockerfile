FROM node:alpine  as builder

ARG deployenv
ARG appserverurl
ARG appserverport
# Move our files into directory name "app"
WORKDIR /app
COPY package.json package-lock.json  /app/
RUN cd /app && npm install
COPY .  /app
RUN cd /app && chmod +x nginx-config.sh && ./nginx-config.sh
# Build with $deployenv variable from outside
RUN cd /app && npm run build:${deployenv}


FROM nginx:1.17.1-alpine
RUN rm -rf /etc/nginx/conf.d
COPY --from=builder /app/clientconf /etc/nginx
COPY --from=builder /app/dist/helloworld/. /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
