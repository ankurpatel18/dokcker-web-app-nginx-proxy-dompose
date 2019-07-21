FROM nginx:1.17.1-alpine
RUN rm -rf /etc/nginx/conf.d
COPY clientconf /etc/nginx
COPY dist/helloworld/. /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]