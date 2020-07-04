# nginx
FROM nginx:alpine as nginx

COPY .travis/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY /build/ /var/www/public/